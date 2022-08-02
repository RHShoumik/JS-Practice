let arr = [1];
for( let i=2 ; i<=1000 ; i++){
    arr.push(i);
}
let sum = arr.reduce((previous, current)=>{ return previous+current},0);
console.log(sum);
// arr.forEach(element =>{
//     console.log(element);
// });