function CountVowels(str)
{
    let count = 0;
    for (let i of str)
    {
        if (i === "a" || i === "e"|| i === "i"|| i === "o"|| i === "u"){
            count++;
        }
    }
    return count;
}

const ArrowVowels = (str) => {
    let count = 0;
    for (let i of str)
    {
        if (i === "a" || i === "e"|| i === "i"|| i === "o"|| i === "u"){
            count++;
        }
    }
    return count;
}