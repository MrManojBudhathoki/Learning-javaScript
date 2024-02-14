// if statement = a basic form of decision making 
//                if a condition is true, then do something 
//                if not, then don't do it!

//let age = window.prompt("Enter your age: ");
/*
if(age > 60){
    console.log("You are an senior citizen!")
}
else if(age >= 18){
    console.log("You are an adult!");
  
}
else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else if(age > 60){
    console.log("You are an senior citizen!")
}
else{
    console.log("You are an child!");
} */

/*let student = true;

if(true){
    console.log("You can enter inside the class.")
}
else{
    console.log("You are not an student so you are not allowed to enter inside the class.")
}*/

document.getElementById("SubmitButton").onclick = function(){
    const mycheckbox = document.getElementById("mycheckbox");
    const visaButton = document.getElementById("visaButton");
    const masterCardButton = document.getElementById("masterCardButton");
    const paypalButton = document.getElementById("paypalButton");

    if(mycheckbox.checked){
        document.getElementById("discountMessage").innerHTML = "You are entitled to a discount.";

    }
    else{
        document.getElementById("discountMessage").innerHTML = "You are not a student and are not entitled to a discount.";

    }

    if(visaButton.checked){
        document.getElementById("cardMessage").innerHTML = "You selected visa for the payment method.";
    }
    else if(masterCardButton.checked){
        document.getElementById("")
        document.getElementById("cardMessage").innerHTML = "You selected mastercard for the payment method.";

    }
    else if(paypalButton.checked){
        document.getElementById("cardMessage").innerHTML = "You selected paypal for the payment method.";
    }
    else{
        document.getElementById("cardMessage").innerHTML = "Please select payment option.";
    }
}