//Gives us the ability to check more than 1 condition concurrently
//&& AND (BOTH conditions must be true)
//|| OR (Either condition can be true)

let temp = 20;
let sunny = true;

/*if(temp < 0 || temp > 30){
    console.log("The weather outside is bad!");
}
else{
    console.log("The weather outside is good!");
}*/
if(temp > 0 && temp < 30 && sunny){//We can add multiple conditions at the same time.
    console.log("The weather is wonderful outside ");
}
else{
    console.log("The weather is not good, it is not a good time to go outside!")
}
// ! NOT logical operator
// typically used to reverse a condition's boolean value
// originally (true) -> After using Not operator(false) false -> true