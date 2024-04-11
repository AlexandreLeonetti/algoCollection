"use strict";
/*
 * you need yo calculatye tyhe sun of the numbers
 * in an array however,
 * the array contains nested arrays whose numbers you
 * must also count.
 * those nested asrrays may also have further arrays recursively
 * nesteed in them and so on you do not know hjow dfeep
 * the nesting continues
 * if the list is empty return zero
 *
 * the array may also contain data that is not of the
 * type number (strings, BigInts, objects,etc)
 * which you should ignore.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestSum = void 0;
function nestSum(A) {
    let sum = 0;
    for (let i = 0; i < (A.length); i++) {
        if (Array.isArray(A[i])) {
            sum += nestSum(A[i]);
        }
        else if (typeof A[i] === "number") {
            sum += A[i];
        }
    }
    return sum;
}
exports.nestSum = nestSum;
const res = nestSum([1, 2, [3, [4], 5, "6"], 6]); //should return 21
console.log(res);
//# sourceMappingURL=nestedArrays.js.map