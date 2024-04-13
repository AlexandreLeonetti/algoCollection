/* write a program that merges several sorted arrays */

let a0 = [-2, -1, 0,1,2,3,4,5,6,7];
let a1 = [5,10,15,20,25];
let a2 = [0,2,4,8,16,32,64,128];


function merge(list: any[]){
    let final:number[] = [];
    let iters:any[]    = [];
    let heap : any[]   = []; // heap is an array of couples

    //create array of iterators.
    list.forEach((e)=>{
            iters.push(e[Symbol.iterator]());
    })

    //initialize heap
    iters.forEach((e,i)=>{
            heap.push([e.next().value, i]);
            heap.sort((a,b)=>{
                return a[0]-b[0];
            })            
    })

    console.log(heap);
    while ( heap.length >0){
        let min = heap.shift();
        let minIndex = min[1];
        final.push(min[0]);
        
        let nextElt = iters[minIndex].next().value;
        if(nextElt !== undefined){
            heap.push([nextElt, minIndex]);
            heap.sort((a,b)=>{
                return a[0]-b[0];
            })
            
        }
        console.log(heap);

    }




    return final;
}



let res = merge([a0,a1,a2]);
console.log(res);

