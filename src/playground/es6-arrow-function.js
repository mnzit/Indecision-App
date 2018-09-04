// const square = function(x){
    // return x * x;
// }

// const squareArrow = (x) => {
    // return x * x;
// };

// const squareArrow = x => x * x;

// console.log(squareArrow(8));


const getFirstNameRegular = (fname) => {
    return fname.split(" ")[0];
}

const getFirstNameShortHand = fname => fname.split(" ")[0];

console.log(getFirstNameRegular("Manjit Shakya")); 
console.log(getFirstNameShortHand("Mike Shakya")); 