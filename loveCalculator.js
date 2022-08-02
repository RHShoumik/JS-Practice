let person1 = prompt("Enter your Name");
let person2 = prompt("Enter your partner Name");
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if(loveScore >= 70 ){
    alert("Your love score is " + loveScore + "% and " + person2 + "Loves " + person1 + "very much.");
}
else if(loveScore >= 50 ){
    alert("Your love score is " + loveScore + "% and ther might be a chance between " + person1 + "and " + person2+".");
}
else{
    alert("Your love score is " + loveScore + "% and You should fine someone else");
}