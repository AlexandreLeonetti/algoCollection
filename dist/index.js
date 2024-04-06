"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parity_1 = require("./algos/parity");
const power_1 = require("./algos/power");
const res = (0, parity_1.bigParity)(1024n);
console.log("parity of 1024: ", res);
const res2 = (0, parity_1.bigParity)(1025n);
console.log("parity of 1025: ", res2);
const p1 = (0, power_1.power)(2, -2);
console.log(p1);
//# sourceMappingURL=index.js.map