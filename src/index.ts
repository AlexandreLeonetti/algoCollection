import {parity, genTable, bigParity} from "./algos/parity";
import {power} from "./algos/power";
import {dutchRes} from "./algos/dutch";
import {strToInt, intToStr} from "./algos/intStr";
import {current as link} from "./algos/mergeLinkList";
let link1 = link;
import {nestSum} from "./recursion/nestedArrays";


const res = nestSum([1,2,[3,[4],5,"6"],6]);//should return 21
console.log(res);


