let gameNumber = 25;

let userNumber = prompt("Enter game number: ");

while (gameNumber != userNumber)
{
    userNumber = prompt("Wrong answer, try Again:");
}
console.log("You did it correct");
