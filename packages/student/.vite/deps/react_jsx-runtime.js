import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill

import {
  require_jsx_runtime
} from "./chunk-7PI6QFIN.js";
import "./chunk-QZW2PNRO.js";
import "./chunk-IRKP4GRN.js";
export default require_jsx_runtime();
//# sourceMappingURL=react_jsx-runtime.js.map
