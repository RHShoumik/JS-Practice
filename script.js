// /////////////////////////////////////////////
// /////////Grade calculation/////////////////// 
// /////////////////////////////////////////////


// let a = prompt("Please enter your number");
// a=parseInt(a);

// if(a>=80 && a<=100)
// {
//     console.log("You got A+");
// }
// else if(a>=75 && a<= 79)
// {
//     console.log("You got A-")
// }
// else if(a>=65 && a<= 74)
// {
//     console.log("You got B")
// }
// else if(a>=50 && a<= 64)
// {
//     console.log("You got C")
// }
// else if(a>=33 && a<= 49)
// {
//     console.log("You got D")
// }
// else if(a>=0 && a<= 32){
//     console.log("You got F")
// }
// else{
//     console.log("Invalid input")
// }


// /////////////////////////////////////////////
// /////////SIMPLE CALCULATOR/////////////////// 
// /////////////////////////////////////////////

// console.log(`
// Please choose an Option : 
// 1.Add
// 2.Substract
// 3.Multyply
// 4.Divishion`);

// let a = parseInt(prompt("Select a option"));
// let num1= parseInt(prompt("Enter your First number: "));
// let num2 = parseInt(prompt("Enter your Second Number: "));
// let result;
// if(isNaN(num1) || isNaN(num2) || isNaN(a)){

//     console.log("Please enter the inputs correctly");
// }
// else{
//     switch(a){
//         case 1:
//             result = num1 + num2 ;
//             break;
//         case 2:
//             result = num1 - num2 ;
//             break;
//         case 3:
//             result = num1 * num2 ;
//             break;
//         case 4:
//             result = num1 / num2 ;
//             break;
//         default:
//             result = "Invalid Input";
//     }
//     console.log("Your result is " + result);
// }
// let a=1;
// for(;;){
//     console.log(a);
//     a++;
// }

// let name = " 19991022001000074 199910220010000741999102200100007419991022001000074";
// let l= name.length;
// for (var i=0 ; i<l;i++ ){
//     console.log(`Index : ${i}`);
//     console.log(name[i]);
// }

// print a series squere number

// let a = prompt("Enter a number");
// let x = 1;
// let store ="";
// let result=0;
// for(let i=1 ; i<= a ; i++){
//     let x1 = (x*x);
//     x++;
//     result = result+ x1;
//     store= store + x1;
//     if(i==a)
//         continue;
//     store+= " + ";
// }
// console.log(`${store} = ${result}`);

// let a =10;
// console.log(a);

/// ES6 Practice

// let a= 10;
// var b= 9;
// const c= 8;
// console.log(`Global Scope : `, a,b,c );

// function test(){
//     var a = 12;
//     let b = 11;
//     const c =13;
//     console.log(`Function Scope : `, a, b, c);
// }

// test();
// console.log(`Global Scope : `, a, b,c);
// if(true){
//     var a =33;
//     let b=44;
//     const c= 55;
//     console.log(`If Scope : `, a,b,c)
// }

// console.log("Hello Git");
// console.log("Hello Git");

// for(var b=0 ; b<10 ; b++)
// {
//     console.log(`Loop : `, b);
// }
// console.log(`Global Scope : `, a,b,c );

//--------------Arrow Function--------------

// let getSquare = (num) => {
//     return num*num;
// }

// console.log(getSquare(10));
 
// //--------------- calback function----------------

//  let number = [1,2,3,4,5,6,7,8,9];

// let printAll = (item) => {
//     console.log(item);
// }

// number.forEach(printAll);

// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(printAll);


// let squareNum = number.map(getSquare);
// console.log(squareNum);

// let squareAll = (item) => item * item;

// let squareNum = number.map(item => item*item);
// console.log(squareNum);

// number.forEach(item => console.log(item * item));


//-------------class------------

// class Vehicle{
//     constructor(){
//         this.color = "red";
//     }
// }

// let obj1 = new Vehicle();
// let obj2 = new Vehicle();

// console.log(obj1);
// console.log(obj2);

//--------------------------------------------

// class Vehicle{
//     constructor(pram){
//         this.color = pram;
//     }
// }

// let obj1 = new Vehicle("RED");
// let obj2 = new Vehicle("ORANGE");

// console.log(obj1);
// console.log(obj2);

//--------------------------------------------

// class Vehicle{
//     constructor(pram1 , pram2){
//         this.color = pram1;
//         this.sitCapacity = pram2
//     }
// }

// let obj1 = new Vehicle("RED" , 20);
// let obj2 = new Vehicle("ORANGE" , 4);

// console.log(obj1.color);
// console.log(obj2.sitCapacity);

//--------------------------------------------

// class Vehicle{
//     constructor(pram1 , pram2){
//         this.color = pram1;
//         this.sitCapacity = pram2
//     }
//     saySomething(){
//         console.log("I am from class");
//     }
// }

// let obj1 = new Vehicle("RED" , 20);
// let obj2 = new Vehicle("ORANGE" , 4);

// console.log(obj1.color);
// console.log(obj2.sitCapacity);
// obj1.saySomething();

//--------------------------------------------
// class Vehicle{
//     constructor(pram1 , pram2){
//         this.color = pram1;
//         this.sitCapacity = pram2
//     }
//     saySomething(){
//         console.log(this.color);
//     }
// }

// let obj1 = new Vehicle("RED" , 20);
// let obj2 = new Vehicle("ORANGE" , 4);


// obj1.saySomething();


//--------------------------------------------

// class Vehicle{
//     constructor(pram1 , pram2){
//         this.color = pram1;
//         this.sitCapacity = pram2
//     }
//     saySomething(){
//         console.log(this.color);
//     }
// }


// // inheritance

// class car extends Vehicle{
//     constructor(cPram , color , sit){
//         super(color,sit);
//         this.wheel= cPram;

//     }
// }

// let obj1 = new car(4 , "Yellow" , 10)
// console.log(obj1);


//-------------------spread Oparetor-------------------------

// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = [4, 5, 6, 7, 8];
// let arr = [...numbers, ...numbers2]
// console.log(arr);

// //-------------------Rest Oparator-------------------------
// let test = (...num) =>{
//     console.log(num);
// }
// test([99,1,2,3]);
// test(45,45,45,67)



//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------