"use strict";
/* greatest common divisor basic algorithm */
/*
def gcd(x,y):
    return x if y == 0 else gcd(y, x%y)
*/
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
//# sourceMappingURL=gcd.js.map