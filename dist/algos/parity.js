"use strict";
/* this algorithm returns the parity of any binary number*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.parity = void 0;
function parity(n) {
    let parity = 0;
    /* count the 1 in the binary number */
    while (n > 0) {
        parity = parity ^ (n & 1);
        n = n >> 1;
    }
    /* return 1 if numberof is odd else 0 */
    return parity;
}
exports.parity = parity;
//# sourceMappingURL=parity.js.map