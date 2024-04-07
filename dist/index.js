"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parity_1 = require("./algos/parity");
const power_1 = require("./algos/power");
const dutch_1 = require("./algos/dutch");
const intStr_1 = require("./algos/intStr");
const res = (0, parity_1.bigParity)(1024n);
console.log("parity of 1024: ", res);
const res2 = (0, parity_1.bigParity)(1025n);
console.log("parity of 1025: ", res2);
const p1 = (0, power_1.power)(2, -2);
console.log(p1);
console.log(dutch_1.dutchRes);
const n = (0, intStr_1.strToInt)("-1234");
console.log(n);
const s = (0, intStr_1.intToStr)(-12345);
console.log(s);
//# sourceMappingURL=index.js.map