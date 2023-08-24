// for (let index = 0; index <= 50; index++){
//     console.log("rahul", index)
// }

// const greet =(count) => {
//     for(let i=0; i<count;i++) console.log('hello world');
// }
// greet(3);

// perform task addition or subtraction

const calculate =(a, b, operation) =>{
    return operation(a,b);
};
const addition =calculate(3, 4, function(num1, num2){
    return num1 + num2;
});
console.log(addition);
// subtraction
const subtraction = (a, b) => a - b;
const subResult = calculate(8, 3, subtraction);
console.log(subResult);

//multiplication

function multiply(a, b) {
    return a * b;

}
const mulResult = calculate(3, 2, multiply);
console.log(mulResult);

// const calculate = (a, b, operation) => {...} declares a function calculate that takes in three parameters: a, b, and operation.
// return operation(a,b); returns the result of calling the operation function with arguments a and b.

// const addition = calculate(3, 4, function(num1, num2) {return num1 + num2;}); calls the calculate function with arguments 3, 4, and an anonymous function that adds its two arguments.
// console.log(addition); logs the result of the addition, which is 7.

// const subtraction = (a, b) => a - b; declares a function subtraction that takes in two parameters a and b and returns their difference.
// const subResult = calculate(8, 3, subtraction); calls the calculate function with arguments 8, 3, and the subtraction function, and stores the result in the subResult variable.
// console.log(subResult); logs the result of the subtraction, which is 5.

// function multiply(a, b) {return a * b;} declares a function multiply that takes in two parameters a and b and returns their product.
// const mulResult = calculate(3, 2, multiply); calls the calculate function with arguments 3, 2, and the multiply function, and stores the result in the mulResult variable.
// console.log(mulResult); logs the result of the multiplication, which is 6.