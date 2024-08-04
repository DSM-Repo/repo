import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  require_react_dom
} from "./chunk-SJCTONU6.js";
import "./chunk-YB44LMLZ.js";
import {
  __commonJS,
  __toESM,
  require_dist,
  require_dist2,
  require_dist3
} from "./chunk-7DBM7V7E.js";

// ../../.yarn/__virtual__/react-dom-virtual-cf1d6710c9/0/cache/react-dom-npm-18.3.1-a805663f38-a752496c19.zip/node_modules/react-dom/client.js
var require_client = __commonJS({
  "../../.yarn/__virtual__/react-dom-virtual-cf1d6710c9/0/cache/react-dom-npm-18.3.1-a805663f38-a752496c19.zip/node_modules/react-dom/client.js"(exports) {
    var import_dist = __toESM(require_dist());
    var import_dist2 = __toESM(require_dist2());
    var import_dist3 = __toESM(require_dist3());
    var m = require_react_dom();
    if (process.env.NODE_ENV === "production") {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});
export default require_client();
//# sourceMappingURL=react-dom_client.js.map
