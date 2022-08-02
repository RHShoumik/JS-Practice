let guestList = ["Rh", "Shoumik", "Ragib",  "Hassan", "RHShoumik"];
let randomNumber = Math.floor(Math.random() * 5);
for(let i=0 ; i<=100 ;i++)
    {
        randomNumber = Math.floor(Math.random() * 5);
        console.log(guestList[randomNumber]);
    }