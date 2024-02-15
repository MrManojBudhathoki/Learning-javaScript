//switch = statement that examines a value
//         for a match against many case clauses
//         More efficient that many "else if" statements

/*
This is done without using switch(Just to know the differences between if and switch.)
let grade = "A";

if(grade == "A"){
    console.log("You did great!");
}
else if(grade == "B"){
    console.log("You did good!")
}
else if(grade == "C"){
    console.log("You did okay!");
}
else if(grade == "D"){
    console.log("You passed barely!");
}
else if(grade == "F"){
    console.log("You failed this time!");
}
else{
    console.log("The letter that you have entered is not a grade!");
}*/

/*let grade = "A";//This is done using switch and this program do the same thing as the above only difference is this is using the switch property and above one is using if else statements.


switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!")
        break;
    case "D":
        console.log("You passed barely!");
        break;
    case "F":
        console.log("You failed");
        break;
    default:
        console.log("There is no such letter in grading system.")            

}*/
//Let's say we are doing the same programming like above but this time we will check by using numbers instead of letters.
let grade = 80;

switch(true){
    case grade > 100:
        console.log("There is no such grade available!");
        break;
    case grade >= 90:
        console.log("You did great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed .... barely!");
        break;
    case grade >= 50:
        console.log("You just passed!")
        break;
    case grade < 50:
        console.log("You failed!");
        break;
    default:
        console.log("There is no such grade available!");                       
}