let userInput: unknown;
let userName: string;

userInput= 5;
userInput= "Max";

if(typeof userInput === "string"){
    userName= userInput
    console.log(userName);
}

function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
}

generateError("An Error Occured!", 500);