/* dutch flag algo */
  const test = [2, 1, 2, 0, 2, 1, 1, 1, 2, 0, 0, 2, 2, 1, 0];

console.log(test);
function dutch (A:number[],p:number){
    /* inferior to pivot, permutations */
    for(let i =0;i<(A.length-1);i++){
        for(let j = i+1; j<=(A.length-1);j++){
            if(A[j]<p){
                [A[i],A[j]]=[A[j],A[i]];
            break;
            }
        }
    }

    /* superior to pivot */
    for(let i=(A.length-1);i>0;i--){
        for(let j=0;j<(i);j++){
            if(A[j]>p){
                [A[i],A[j]]=[A[j],A[i]];
            break;
            }
        }
    }
    return A;
}

const dutchRes = dutch(test,1);
export{dutchRes};
