/* this algorithm returns the parity of any binary number*/


function parity(n:number){
    let parity = 0;


    /* count the 1 in the binary number */
    while( n >0){
        parity = parity^(n&1);
        n = n>>1;
    }

    /* return 1 if numberof is odd else 0 */

    return parity;
}

export {parity};
