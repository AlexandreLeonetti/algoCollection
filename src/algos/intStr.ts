/* convert integers to strings, and strings to integers */

function strToInt(s:string):number{
    let sign = 1; 
    let n =0;
    if(s[0]==="-"){
       sign = -1;
       s=s.slice(1); 
    }

    for(let c of s){
        n = n*10 + parseInt(c);
    }

    return sign*n;
}


function intToStr(n:number){
    let s = "";
    let zero = "0".charCodeAt(0);
    console.log(zero);
    let sign = "";

    if(n<0){
        sign = "-";
        n = -n;
    }
    while(n>0){
        let c = n%10;
        
        s = s+String.fromCharCode(zero+ c);
        n = Math.floor(n/10);
    } 
    let a= s.split("")
    a= a.reverse();
    
    return sign+a.join(""); 
}
export {strToInt, intToStr};
