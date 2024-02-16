// function = Define code once, and use it many times.
//            To perform some code, call the function name.

function StartProgram(){
    let username = "Manoj Budhathoki";
    let age = 21;

    HappyBirthDay(username, age);


}

function HappyBirthDay(username, age){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you dear", username);
    console.log("Happy birthday You are", age + " years old");

}

StartProgram();