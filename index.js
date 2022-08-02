// let name='RHShoumik';
// console.log(name);

// const interestRate =0.3;
// console.log(interestRate);

// let person = {
//     name : 'RHShoumik',
//     age : 23
// };
// console.log(person);
// console.log(person.name);

// person['name'] = 'Shoumik';
// console.log(person.name);

// let aArray = ['Name' , 100];
// console.log(aArray);
// console.log(aArray.length);


// const person ={
//     name : 'Mosh',
//     age : 30
// }

// for (let key in person){
//     console.log(key , person[key]);
// }

// const colors = ['red', 'green', 'blue'];

// for (let color of colors){
//     console.log(colors.color);
// }

// function max(num1, num2){
//     let maxNum;
//     if(num1>num2)
//         maxNum = num1;
//     else
//         maxNum = num2;
    
//     return maxNum;
// }

// let x = max(4,3);
// console.log(x);
  

// function isLandscape(width ,height){
//     return (width> height) ;
// }

// console.log(isLandscape(300,400));



// //FIZZBUZZ
// //Divisible by 3 => Fizz
// //Divisible by 5 => Buzz
// //Divisible by both 3 and 5 => FizzBuzz
// //Not divisible by 3 and 5 =>
// //Not a number => not a number

// const output = fizzBuzz(true);
// console.log(output);
// console.log(0%3);

// function fizzBuzz(input){
//     console.log(typeof (input));
//     if(typeof (input) !== 'number'){
//         return NaN;
//     }
//     else if((input % 3=== 0) && (input % 5 === 0)){
//         return "FizzBuzz";
//     }
//     else if((input%3) == 0){
//         return "Fizz";
//     }
//     else if((input % 5) == 0){
//         return "Buzz";
//     }
//     else{
//         return input;

//     }

// }



// //Speed Limit =70
// // more 5 -> 1 point
// //12 point -> suspend


// checkSpeed(130);

// function checkSpeed(speed){

//     let point = Math.floor((speed-70)/5);

//     if(point>=12)
//         console.log("Licence Suspend");
//     else if(point <= 0)
//         console.log("Ok");
//     else
//     console.log("Point : " + point);
    
// }



// //Take a limit from a user 
// //then print each number even or odd 

// showNumber(6);

// function showNumber(limit){
//     for(let i= 0 ; i<= limit ;i++){
//     //    if((i%2) === 0)
//     //        console.log(i, "EVEN");
//     //    else
//     //         console.log(i , "ODD");
        
//     const massage = (i%2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i , massage);
//     }
// }




// const array = [0,1,2,false,null,null,'',false,6,true];
// console.log("Total : " ,countTruthy(array));

// function countTruthy(array){
//     let count =  0;

//     // const falsy =[undefined , null , 0, false , '' , NaN];
//     // console.log(falsy);
//     for(let index of array)
//     {
//         if(index){
//             console.log(index);
//             count++;
//         }

//     }
//     return count;

// }





// const movie = {
//     title : 'a',
//     releaseYear : 2020,
//     rating : 4.5,
//     director : 'b',
//     comment : 'Good'
// };

// showProperties(movie);
// function showProperties(obj){
//     for(let key in obj)
//     {
//         if(typeof obj[key] === 'string'){
//             console.log(key , obj[key]);
//         }
//     }
// }



// console.log("Total : " ,sum(12));

// function sum(limit){

//     let sum = 0;

//     for(let i = 1 ; i<=limit ; i++){
//         if(i%3 === 0 || i%5 === 0){
//             console.log(i);
//             sum = sum +i;
//         }
//         }
//     return sum;
// }


// const marks = [8,8,50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks){

//     let totalMarks = 0;
//     for(let item of marks){
//         totalMarks = totalMarks + item;
//     }

//     let avarage = totalMarks / marks.length;

//     if(avarage < 60)
//         return 'F';
//     else if(avarage < 70)
//         return 'D';
//     else if(avarage <= 80)
//         return 'C';
//     else if(avarage < 90)
//         return 'B';
//     else
//         return 'A';
// }


// showStars(10);

// function showStars(rows){
//     for(let i= 1; i<= rows; i++){
//        let pattern = '';
//        for(let j=0; j< i ; j++){
//            pattern += '*';
//        } 
//        console.log(pattern);
//     }
// }