function addition(n1: number, n2: number, showResult: boolean, phrase: string) {
 let result= n1 + n2;
    if (showResult) {
    console.log(phrase +result);
  }
}

const number1 = 2;
const number2 = 3;
const printResult = true;
const result = "Result is: ";

addition(number1, number2, printResult, result);
