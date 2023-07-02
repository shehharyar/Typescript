"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 10;
        if (n) {
            this.name = n;
        }
    }
    greet(Phrase) {
        if (this.name) {
            console.log(Phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user1;
user1 = new Person();
// user1={
//     name: "MAX",
//     age: 32,
//     greet(Phrase: string){
//         console.log(Phrase + " " + this.name);
//     }
// }
user1.greet("Hi there - I am ");
console.log(user1);
//# sourceMappingURL=app.js.map