let ClassMarks = [11,22,33,44,55,66];
let sum =0;
let count =0;
for (let i of ClassMarks)
{
    sum = sum+i;
    count= count+1;
}
let avgMarks = sum/count;
console.log(avgMarks);
