"use strict";

// const square = function(x){
// return x * x;
// }

// const squareArrow = (x) => {
// return x * x;
// };

// const squareArrow = x => x * x;

// console.log(squareArrow(8));


var getFirstNameRegular = function getFirstNameRegular(fname) {
    return fname.split(" ")[0];
};

var getFirstNameShortHand = function getFirstNameShortHand(fname) {
    return fname.split(" ")[0];
};

console.log(getFirstNameRegular("Manjit Shakya"));
console.log(getFirstNameShortHand("Mike Shakya"));
