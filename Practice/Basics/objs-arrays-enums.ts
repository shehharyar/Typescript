// const person: {
//     name: string,
//     age: number
// } ={ 
// // const person ={
//     name: "Sheharyar",
//     age: 22
// }

// enum Role{ ADMIN = 0, READ_ONLY= 900, AUTHOR= 111}

enum Role{ ADMIN, READ_ONLY, AUTHOR}

// const person:{
//     name: string,
//     age: number,
//     hobbies:string[],
//     role:[number, string]
// } = {
//     name: "Sheharyar",
//     age: 32,
//     hobbies:["Sports", "Cooking"],
//     role: [2, "author"]
// }
// person.role.push('user')
const person= {
    name: "Sheharyar",
    age: 32,
    hobbies:["Sports", "Cooking"],
    role: Role.ADMIN
}


// let favouriteHobbies: string[];
// favouriteHobbies= ["Sports"]

console.log(person.name);
    for(const hobby of person.hobbies){
        console.log(hobby.toUpperCase())
    }
if(person.role === Role.ADMIN){
    console.log("is Admin")
}