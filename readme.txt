1.
// This is the practice of type conversion.
let age = window.prompt("How old are you?: ");
age = Number(age)
age += 1;
console.log(`Congratulation you are ${age} years old.`);

2.
// constant varible are those which can't be changed once it is declared.
const PI = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter the radius of circle: ");
circumference = 3 * PI * radius;
console.log(`The circumference of the circle is ${circumference}`);//

3.
//Basics of Math function in javascript.
let x = 3.14;
let y = 4
let z = 2
let maximum;
let minimum;
let pi;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
pi = Math.PI;
//console.log(`The minimum number among x, y and z is ${minimum}`);
console.log(pi)//

4.
// Finding the hypotenuse of right angled triangle.
let a;
let b;
let c;

a = window.prompt("Enter the side A: ");
a = Number(a);

b = window.prompt("Enter the side B: ");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log(`The side C of a Right Angled Triangle is ${c}`);//

5. 
// Finding the hypotenuse of right angled triangle.
<!DOCTYPE html>
<html>
    <head>
        <title>Bro code javascript</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

        <label for="sideA">Side A</label>
        <input id="sideA" type="text"><br><br>

        <label for="sideB">Side B</label>
        <input id="sideB" type="text"><br><br>

        <label id="sideC"></label><br><br>

        <button id="SubmitButton">Submit</button>

        <script src="index.js"></script>
    </body>
</html>

JSS OF ABOVE HTML:
// Finding the hypotenuse of right angled triangle.
let a;
let b;
let c;


document.getElementById("SubmitButton").onclick = function(){
    a = document.getElementById("sideA").value;
    a = Number(a);

    b = document.getElementById("sideB").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("sideC").innerHTML = `side C: ${c}`;

}//

6.
//useful string properties and methods

//let userName = " Manoj Budhathoki "
//let phoneNumber = 298-283-983-39; 

//console.log(userName.length)
//console.log(userName.indexOf("j"))
//console.log(userName.lastIndexOf("a"))
//console.log(userName.charAt(4))
//console.log(userName.trim())
//console.log(userName.toLowerCase())
//console.log(userName.toUpperCase())
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);//

7.
// slice() extracts a section of a string and 
//         returns it as a new string, without
//         modifying the original string.

let fullName = "Manoj Budhathoki";
let firstName;
let lastName;

//firstName = fullName.slice(0, 5);
//lastName = fullName.slice(6);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(`My full name is ${firstName} ${lastName}.`);//

8.
//method chaining = calling one method after another
//                  in one continuous line of code.

let userName = "Manoj Budhathoki";

//let letter = userName.charAt(0);
//letter = letter.toUpperCase();
//console.log(letter); This is done without method chaining.

let letter = userName.charAt(0).toUpperCase();
console.log(letter);//This is done with method chaining.//

9.
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
}*//

10.
//.Use of .checked property.
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
}//


11.







