const { features } = require("@saltcorn/data/db/state");

const verstring = features?.version_plugin_serve_path
  ? "@" + require("./package.json").version
  : "";

module.exports = {
  sc_plugin_api_version: 1,
  plugin_name: "blocksuite",
  headers: [
    {
      script: `/plugins/public/blocksuite${verstring}/dist/blocksuite/blocksuite-core.js`,
    },
    {
      script: `/plugins/public/blocksuite${verstring}/dist/blocksuite/blocksuite-blocks.js`,
    },
    {
      script: `/plugins/public/blocksuite${verstring}/dist/blocksuite/blocksuite-editor.js`,
    },
    {
      css: `/plugins/public/blocksuite${verstring}/dist/blocksuite/blocksuite-core.css`,
    },
    {
      css: `/plugins/public/blocksuite${verstring}/dist/blocksuite/blocksuite-blocks.css`,
    },
  ],
  viewtemplates: [require("./blocksuite-view.js")],
};
