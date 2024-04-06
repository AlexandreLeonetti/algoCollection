"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parity_1 = require("./algos/parity");
const res = (0, parity_1.bigParity)(1024n);
console.log("parity of 1024: ", res);
const res2 = (0, parity_1.bigParity)(1025n);
console.log("parity of 1025: ", res2);
//# sourceMappingURL=index.js.map