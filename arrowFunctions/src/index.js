import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];


//the next to const variable has a arrow function inside

// const newNumbers = numbers.map((x) => {
//     return x * x;
// });

//the next to const variable has a simplify arrow function inside,
// that can be use when you don't have more than one argument 
// more than one line of code inside, so you don't have even to
// return a value 'cause this sintax do it automatically

// const newNumbers = numbers.map(x => x * x);

//console.log(newNumbers);

//Map -Create a new array by doing something with each item in an array.

//const newNumbers = numbers.map(x => x * 2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber)

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(num => num > 10)

////FindIndex - find the index of the first item that matches.
//const newNumber = numbers.findIndex(num => num > 10)
