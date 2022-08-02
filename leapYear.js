function isLeap(year){
    console.log(year);
    if(year % 4 === 0){
        if(year % 100 ===0){
            if(year % 400 === 0){
                return "Leap year";
            }
            else{
                return "Not Leap year";
            }
        }
        else{
            return "Leap year";
        }
        
    }
    else{
        return "Not Leap year";
    }
}

let result = isLeap(400);
console.log(result);