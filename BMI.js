function bmiCalculator(weight,height){
    let BMI = (weight)/(height*height);
    return Math.round(BMI);
}

let age = prompt("Enter your age");
let height =prompt("Enter your height");
let weight = prompt("Enter your weight");

let bmi=bmiCalculator(weight,height);
prompt("Your BMI is "+ bmi);
