const plugins = require("./plugins.config.js").config;
const secrets = require("./secrets.app.js");
const { slice } = require("./barium/slices.js");
Object.assign(module, require("inset.app.js"));

let hello = slice("example");

hello()
