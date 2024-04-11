"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeLinkList_1 = require("./algos/mergeLinkList");
let link1 = mergeLinkList_1.current;
const nestedArrays_1 = require("./recursion/nestedArrays");
const res = (0, nestedArrays_1.nestSum)([1, 2, [3, [4], 5, "6"], 6]); //should return 21
console.log(res);
function gcd(x, y) {
    if (y == 0) {
        return x;
    }
    else {
        return gcd(y, x % y);
    }
}
let g = gcd(14, 7);
console.log("gcd", g);
//# sourceMappingURL=index.js.map