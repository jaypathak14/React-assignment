console.log("E Q1");
function charC (ch,arr) 
{
    var count = 0;
    for (var i=0;i<arr.length;i++) 
    {
        if (arr.charAt(i) == ch) 
        {
            count += 1;
        }
    }
    return count;
}

console.log(charC ("a", "edabit"));
console.log(charC  ("c", "Chamber of secrets"));
console.log(charC  ("b", "big fat bubble"));