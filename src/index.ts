import {parity, genTable, bigParity} from "./algos/parity";
import {power} from "./algos/power";


const res = bigParity(1024n);
console.log("parity of 1024: ",res);

const res2 = bigParity(1025n);
console.log("parity of 1025: ",res2);


const p1 = power(2,-2);
console.log(p1);
