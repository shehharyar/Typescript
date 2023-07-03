"use strict";
var _a;
// type ElevatedEmployee = Admin & Employee;
const e1 = {
    name: "Sheharyar",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a == 'string' || typeof b == 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
let numOutput = add(1, 2);
let stringOutput = add("Sheharyar", 1);
const result = add(2, "1");
result.split("");
// console.log(numOutput, stringOutput);
const fetchedUserData = {
    id: "u1",
    name: "Sheharyar",
    job: { title: "CEO", description: "My Own Company" }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput || "DEFAULT";
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log("Name: " + emp.name);
//     if('privileges' in emp){
//         console.log("privileges: " + emp.privileges);
//     }
//     if('startDate' in emp){
//         console.log("Start Dtae: " + emp.startDate);
//     }
// }
// // printEmployeeInformation(e1);
// // printEmployeeInformation({name: "Maximillian", startDate: new Date()});
// class Car{
//     drive(){
//         console.log("Driving.....");
//     }
// }
// class Truck{
//     drive(){
//         console.log("Driving a Truck...");
//     }
//     loadCargo(amount: number){
//         console.log("Loading cargo .. " + amount);
//     }
// }
// type Vehicle = Car | Truck;
// let v1= new Car();
// let v2 = new Truck();
// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if('loadCargo' in vehicle){
//         vehicle.loadCargo(1200);
//     }
// }
// //s
// useVehicle(v1);
// useVehicle(v2);
// // Descriminated Union
// interface Bird{
//     type:'bird';
//     flyingSpeed: number;
// }
// interface Horse{
//     type: 'horse';
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal : Animal){
//     let speed;
//     switch(animal.type){
//         case 'bird':
//             speed= animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;     
//     }
//     console.log("moving at speed: " + speed);
// }
// moveAnimal({type: 'bird', flyingSpeed: 18});
// moveAnimal({type: 'horse', runningSpeed: 19});
// ///
// // const paragraph= document.querySelector('p')!;
// // paragraph.innerHTML ="Hi! - My name is Max";
// // type_Casting
// // const userInput Element = document.getElementById('user-input') as HTMLInputElement;
// // const userInputElement =<HTMLInputElement> document.getElementById('user-input');
// const userInputElement =document.getElementById('user-input');
// if(userInputElement){
//     (userInputElement as HTMLInputElement).value = "Sheharyar";
// }
// interface ErrorContainer{ // { email : 'Not a valid email', username: "Must start with capital letter " }
//     [prop: string] : string;
// }
// const errorBag : ErrorContainer ={
//     email: "Not a Valid email",
//     username: "Must start with capital letter"
// }
