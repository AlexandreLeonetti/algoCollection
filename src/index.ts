import {parity, genTable, bigParity} from "./algos/parity";
import {power} from "./algos/power";
import {dutchRes} from "./algos/dutch";
import {strToInt, intToStr} from "./algos/intStr";
import {current as link} from "./algos/mergeLinkList";
let link1 = link;
import {nestSum} from "./recursion/nestedArrays";


const res = nestSum([1,2,[3,[4],5,"6"],6]);//should return 21
console.log(res);



/* write an algorithm that solves the tower of hanoi problem */

/* 1 disk : move 1 disk from origin to destination */

/* 2 disk : move 1 disk from origin to helper.
            move 1 disk from origin to destination.
            move 1 disk from helper to destination.
            */

/* 3 disks: move 2 disk from origin to helper.
            move 1 disk from origin to destination.
            move 2 disk from helper to destination.
            */


let tower1 : number[]= [4,3,2,1,0];
let tower2 : number[] = [];
let tower3 : number[] = [];
 console.log(tower1,tower2,tower3);

function TOA (tower1:number[],tower2:number[], tower3:number[], n:number){
    if (n <= 0) return;
    TOA(tower1, tower3, tower2, n-1);
    /* move 1 disk from origin to destination */
        let x = tower1.pop();
        if(x!= undefined){
            tower3.push(x);
        }
    TOA(tower2, tower1, tower3, n-1);




}
TOA(tower1, tower2, tower3, tower1.length)
console.log(tower1,tower2,tower3)
