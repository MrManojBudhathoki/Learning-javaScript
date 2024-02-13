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




