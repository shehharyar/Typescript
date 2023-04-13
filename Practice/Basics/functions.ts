function sum (n1 : number, n2: number): number{
    return n1+ n2;
}

function AddAndHadnle(n1: number, n2:number, cb: (num : number )=> void){
    const result =n1 + n2;
    cb(result);
}


function showResult(num: number): void{
    console.log("Result : "+ num)
}
showResult(sum(12, 32))

let combineValues:(a: number, b:number)=> number;
combineValues=sum;

console.log(combineValues)

AddAndHadnle(12, 9,(result)=>{
    console.log(result);
})

