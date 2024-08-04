import __buffer_polyfill from 'vite-plugin-node-polyfills/shims/buffer'
globalThis.Buffer = globalThis.Buffer || __buffer_polyfill
import __global_polyfill from 'vite-plugin-node-polyfills/shims/global'
globalThis.global = globalThis.global || __global_polyfill
import __process_polyfill from 'vite-plugin-node-polyfills/shims/process'
globalThis.process = globalThis.process || __process_polyfill

import {
  Blob,
  BlobOptions,
  Buffer,
  Buffer$1,
  File,
  FileOptions,
  INSPECT_MAX_BYTES,
  SlowBuffer,
  TranscodeEncoding,
  atob,
  btoa,
  constants,
  init_dist,
  isAscii,
  isUtf8,
  kMaxLength,
  kStringMaxLength,
  resolveObjectURL,
  transcode
} from "./chunk-YZP3XHUF.js";
import "./chunk-FEJZCXNB.js";
init_dist();
export {
  Blob,
  BlobOptions,
  Buffer$1 as Buffer,
  File,
  FileOptions,
  INSPECT_MAX_BYTES,
  SlowBuffer,
  TranscodeEncoding,
  atob,
  btoa,
  constants,
  Buffer as default,
  isAscii,
  isUtf8,
  kMaxLength,
  kStringMaxLength,
  resolveObjectURL,
  transcode
};
//# sourceMappingURL=vite-plugin-node-polyfills_shims_buffer.js.map
