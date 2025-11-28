const Table = require("@saltcorn/data/models/table");
const Workflow = require("@saltcorn/data/models/workflow");
const Form = require("@saltcorn/data/models/form");
const { div, script, button } = require("@saltcorn/markup/tags");

// Configuration workflow: user selects the field to store the JSON
const configuration_workflow = () =>
  new Workflow({
    steps: [
      {
        name: "Configuration",
        form: async (context) => {
          const table = await Table.findOne(context.table_id);
          const options = table
            .getFields()
            .filter((f) =>
              ["JSON", "String", "Text"].includes(f.type?.name || f.type)
            )
            .map((f) => f.name);

          console.log({ options });

          return new Form({
            fields: [
              {
                name: "json_field",
                label: "BlockSuite JSON field",
                type: "String",
                attributes: { options },
                required: true,
              },
            ],
          });
        },
      },
    ],
  });

const get_state_fields = () => [];

// Helper for rendering a small client-side error box
const clientWarn = (id, msg) =>
  `\n<div id="${id}-warn" class="alert alert-warning" role="alert">${msg}</div>`;

// Run: render the editor container and client script
const run = async (
  table_id,
  viewname,
  configuration,
  state,
  extraArgs = {}
) => {
  const json_field = configuration.json_field;
  const table = await Table.findOne(table_id);
  const fields = table.getFields();
  const candidates = fields.filter((f) =>
    ["JSON", "String", "Text"].includes(f.type?.name || f.type)
  );

  const fieldName = configuration.json_field;

  let row;
  try {
    row = state && state.id ? await table.getRow(state.id) : null;
  } catch (e) {
    row = null;
  }
  const rawVal = row && fieldName && row[fieldName] ? row[fieldName] : null;
  const initialJSON = rawVal ? rawVal : null;

  const rnd = Math.floor(Math.random() * 16777215).toString(16);
  const editorContainerId = `blocksuite-editor-${rnd}`;
  const saveBtnId = `blocksuite-save-${rnd}`;
  const statusId = `blocksuite-status-${rnd}`;

  const out = [];
  out.push(
    `<div id="${editorContainerId}" style="min-height: 400px; border:1px solid #ddd; padding:8px;"></div>`
  );
  out.push(`<div id="${statusId}" class="mt-2"></div>`);
  out.push(
    button(
      { id: saveBtnId, class: "btn btn-primary mt-2", type: "button" },
      "Save"
    )
  );

  const clientScript = `
(function(){
  console.log({window});
  const container = document.getElementById('${editorContainerId}');
  const statusEl = document.getElementById('${statusId}');
  const saveBtn = document.getElementById('${saveBtnId}');

  function setStatus(txt){ if(statusEl) statusEl.innerText = txt; }

  // Wait for blocksuite available (simple retry)
  function waitForBlocksuite(triesLeft=50){
    if(window.blocksuite){
      initEditor();
    } else if(triesLeft>0){
      setTimeout(()=>waitForBlocksuite(triesLeft-1), 100);
    } else {
      container.innerHTML = '<div class="alert alert-danger">BlockSuite runtime not found on window.blocksuite</div>';
    }
  }

  let editorInstance = null;

  function initEditor(){
    setStatus('Initializing editor...');
    try{
      // Heuristics: try common export points
      const global = window.blocksuite.global || window.blocksuite;
      const store = window.blocksuite.store || (window.blocksuite.affine && window.blocksuite.affine.store);
      // Find an editor constructor or factory. These names are guesses but we try several.
      const EditorCtor = global && (global.BlockSuiteEditor || global.BlockEditor || global.Editor || global.default || global.BlocksEditor);
      console.log({window})

      // If we found a constructor that seems callable, use it. Otherwise try a generic mount API.
      if(EditorCtor && typeof EditorCtor === 'function'){
        // try with 'value' prop or 'doc' depending on API
        const opts = { value: ${JSON.stringify(initialJSON)} };
        try{
          editorInstance = new EditorCtor(opts);
          // If editorInstance has a mount method
          if(typeof editorInstance.mount === 'function'){
            editorInstance.mount(container);
          } else if(editorInstance instanceof HTMLElement){
            // editor returns an element
            container.appendChild(editorInstance);
          } else if(typeof editorInstance.render === 'function'){
            // some runtimes expose a render method
            editorInstance.render(container);
          } else if(editorInstance.dom){
            container.appendChild(editorInstance.dom);
          } else {
            // Try to append the object if it looks like a DOM node
            if(editorInstance && editorInstance.nodeType) container.appendChild(editorInstance);
            else container.innerHTML = '<div class="alert alert-warning">Editor created but could not mount automatically</div>';
          }
        }catch(e){
          console.warn('EditorCtor mount failed, trying alternative create APIs', e);
          // fallback: if there is a 'global.createEditor' helper
          if(typeof global.createEditor === 'function'){
            editorInstance = global.createEditor(container, ${JSON.stringify(
              initialJSON
            )});
          }
        }
      } else if(window.blocksuite && window.blocksuite.affine && typeof window.blocksuite.affine.createEditor === 'function'){
        editorInstance = window.blocksuite.affine.createEditor(container, ${JSON.stringify(
          initialJSON
        )});
      }

      // If still no editor instance, try providing the raw store into a simple text area
      if(!editorInstance){
        // fallback: show the JSON in a textarea editable by user
        const ta = document.createElement('textarea');
        ta.style.width='100%'; ta.style.height='350px';
        ta.value = ${JSON.stringify(initialJSON)} || '';
        container.appendChild(ta);
        editorInstance = {
          getValue: () => ta.value,
          setValue: (v) => { ta.value = v; }
        };
        setStatus('BlockSuite not detected or mount failed — using fallback textarea.');
      } else {
        setStatus('Editor ready');
      }

    } catch(err){
      console.error('Error initializing BlockSuite editor', err);
      container.innerHTML = '<div class="alert alert-danger">Error initializing BlockSuite editor: '+(err.message||err)+'</div>';
      return;
    }
  }

  waitForBlocksuite();

  // Helper to extract document value from editorInstance
  function getEditorDoc(){
    if(!editorInstance) return null;
    // try common getters
    if(typeof editorInstance.getValue === 'function') return editorInstance.getValue();
    if(typeof editorInstance.getJSON === 'function') return editorInstance.getJSON();
    if(typeof editorInstance.serialize === 'function') return editorInstance.serialize();
    if(editorInstance.value) return editorInstance.value;
    // If editor instance is an HTMLElement fallback (maybe contentEditable) - read innerText
    if(editorInstance instanceof HTMLElement) return editorInstance.innerText;
    return null;
  }

  // Click save
  saveBtn.addEventListener('click', async function(){
    setStatus('Saving...');
    try{
      const doc = getEditorDoc();
      const payload = { id: ${
        state && state.id ? state.id : "null"
      }, json_field: '${fieldName}', value: doc };

      const res = await fetch('/view/${viewname}/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'same-origin'
      });
      if(!res.ok) throw new Error('save request failed: '+res.status);
      const txt = await res.text();
      setStatus('Saved');
    } catch(e){
      console.error('Save failed', e);
      setStatus('Save failed: '+(e.message||e));
    }
  });

})();
`;

  out.push(script(clientScript));
  return out.join("\n");
};

const queries = ({}) => ({
  async save(state, req) {
    try {
      const body = req.body || {};
      const id = body.id || state.id || (req.query && req.query.id);

      if (!id) throw new Error("Missing row id");

      const table = Table.findOne(req.params.table_id || state.table_id);
      if (!table) throw new Error("Table not found");

      const update = {};
      await table.updateRow(update, id);

      return "OK";
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
});

module.exports = {
  name: "BlockSuiteDocument",
  display_state_form: false,
  configuration_workflow,
  get_state_fields,
  run,
  queries,
};
