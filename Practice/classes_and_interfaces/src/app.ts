// type AddFn = (a: number, b: number) => number;
interface AddFn{
    (a: number, b: number): number;
}

let add: AddFn;

add= (n1: number,n2: number) => {
    return n1 + n2;
}


interface Named{
  readonly name?: string;
  OutputName?: string; // ? for optional properties or functions
}

interface Greetable extends Named{
    greet(Phrase: string): void;
}


class Person implements Greetable{
    name?: string;
    age= 10;
    
   constructor(n? : string){
    if(n){
        this.name= n;
    }

   }

   greet(Phrase : string){
    if(this.name){
        console.log(Phrase + " " + this.name);
    }
    else{
        console.log("Hi!");
    }
   }
}


let user1:Greetable;
user1= new Person();
// user1={
//     name: "MAX",
//     age: 32,
//     greet(Phrase: string){
//         console.log(Phrase + " " + this.name);
//     }

// }
user1.greet("Hi there - I am ");
console.log(user1);
