import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  require_jsx_runtime
} from "./chunk-ZOZM766I.js";
import "./chunk-DPHQ433O.js";
import "./chunk-FEJZCXNB.js";
export default require_jsx_runtime();
//# sourceMappingURL=react_jsx-runtime.js.map
