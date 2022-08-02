let guestList = ["Rh", "Shoumik", "Ragib",  "Hassan", "RHShoumik"];
let guestName =prmopt("What is your name? ");
if(guestList.includes(guestName)){
    alert("Congratulations");
}
else{
    alert("Try next time");
}