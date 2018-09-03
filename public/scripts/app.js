'use strict';

var nameVar = 'Manjit';
var nameVar = 'Sandesh';
console.log('nameVar', nameVar);

// ES6 Redefining a variable is not valid reassigning is valid using let
var nameLet = 'Kushal';
nameLet = 'Sanjeev';
console.log('nameLet', nameLet);

// ES6 Redefining a variable is not valid reassigning is not valid using const
// const nameConst = 'Frank';
// nameConst = 'Frank';
// console.log('nameConst', nameConst);

// function getPetname(){
//     var petname = 'Hal';
//     return petname;
// }
// getPetname();
// console.log(petname);

// function getPetname(){
//     let petname = 'Hal';
//     return petname;
// }
// getPetname();
// console.log(petname);

// function getPetname(){
//     const petname = 'Hal';
//     return petname;
// }
// getPetname();
// console.log(petname);

function getPetname() {
    var petname = 'Hal';
    return petname;
}
var nameConst = getPetname();
console.log(nameConst);

//Block Scoping
// Let and Const are block level scope

// var fullname = 'Manjit Shakya';

// if (fullname){
//     var firstName = fullname.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);

// var fullname = 'Manjit Shakya';

// if (fullname){
//     const firstName = fullname.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);

// var fullname = 'Manjit Shakya';

// if (fullname){
//     let firstName = fullname.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);

var fullname = 'Manjit Shakya';
var firstName = void 0;

if (fullname) {
    firstName = fullname.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
