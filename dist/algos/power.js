"use strict";
/* function power handle negative cases, calculate efficiently*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.power = void 0;
function power(x, y) {
    let res = 1;
    let exponent = y;
    let base = x;
    /* handle negative power */
    if (y < 0) {
        exponent = -exponent;
        base = 1 / base;
    }
    /* handle cases efficiently */
    /* divide exponent by two while squaring base */
    while (exponent > 0) {
        if ((exponent & 1) == 1) {
            res = res * base;
        }
        base = base * base;
        exponent = exponent >> 1;
    }
    return res;
}
exports.power = power;
//# sourceMappingURL=power.js.map