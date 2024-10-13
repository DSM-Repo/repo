import {
  findAndReplace
} from "./chunk-MYMUWBMG.js";
import "./chunk-MZZF4ZBS.js";
import "./chunk-WOOG5QLI.js";

// ../../.yarn/cache/mdast-util-newline-to-break-npm-2.0.0-1499468942-756a5660b0.zip/node_modules/mdast-util-newline-to-break/lib/index.js
function newlineToBreak(tree) {
  findAndReplace(tree, [/\r?\n|\r/g, replace]);
}
function replace() {
  return { type: "break" };
}

// ../../.yarn/cache/remark-breaks-npm-4.0.0-962f376971-d7b319a799.zip/node_modules/remark-breaks/lib/index.js
function remarkBreaks() {
  return function(tree) {
    newlineToBreak(tree);
  };
}
export {
  remarkBreaks as default
};
//# sourceMappingURL=remark-breaks.js.map
