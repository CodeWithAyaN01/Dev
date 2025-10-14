//  .reduce method

const array = [1,6,3,9];

let output = array.reduce((res,curr) => {
    return res+curr;
});
console.log(output);