const { features } = require("@saltcorn/data/db/state");

const verstring = features?.version_plugin_serve_path
  ? "@" + require("./package.json").version
  : "";

module.exports = {
  sc_plugin_api_version: 1,
  plugin_name: "blocksuite",
  headers: [
    {
      script: `/plugins/public/blocksuite${verstring}/js/blocksuite-core.js`,
    },
    {
      script: `/plugins/public/blocksuite${verstring}/js/blocksuite-blocks.js`,
    },
    {
      css: `/plugins/public/blocksuite${verstring}/css/blocksuite-core.css`,
    },
    {
      css: `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/themes/dark.css`,
    },
    {
      css: `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/themes/light.css`,
    },
  ],
  viewtemplates: [require("./blocksuite-view.js")],
};
