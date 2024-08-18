import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill

import {
  __toESM,
  require_dist,
  require_dist2
} from "./chunk-IRKP4GRN.js";

// ../../.yarn/__virtual__/vite-plugin-node-polyfills-virtual-ce92590d8b/0/cache/vite-plugin-node-polyfills-npm-0.22.0-b49f4f8ad0-f8ddc452eb.zip/node_modules/vite-plugin-node-polyfills/shims/global/dist/index.js
var import_dist = __toESM(require_dist());
var import_dist2 = __toESM(require_dist2());
var global = globalThis || void 0 || self;
export {
  global as default,
  global
};
//# sourceMappingURL=vite-plugin-node-polyfills_shims_global.js.map
