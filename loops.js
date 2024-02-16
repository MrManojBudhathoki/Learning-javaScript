  //1, While loop = repeat same code 
  //              while some condition is true 
  //              potentially infinite.
  //let userName = " ";

  while(userName == ""){
    userName = window.prompt("Enter your name");
  }
  concole.log("Hello", userName);

//2, DO While loop = do something, 
//                then check the condition,
//                repeat if the condition is true.
  
let userName;

do{
  userName = window.prompt("Enter your name");
}while(userName == "" || userName == null);
console.log("Hello", userName);

//3, for loop = repeat some code a 
//            certain amount of times
for(let i = 10; i > 0; i -= 1){
  console.log(i);

}
console.log("Happy New Year!");

//4, break = breaks out of a loop entirely 
// continue = skip an iteration of a loop

for(let i = 0; i <= 20; i += 1){    
  if(i == 13){
      break;    
  }
  console.log(i)
}
for(let i = 0; i <= 20; i += 1){
  if(i == 13){
      continue;
  }
  console.log(i);
}

//5, nested loop = a loop inside of another loop

let symbol = window.prompt("Enter the symbol you want: ");
let rows = window.prompt("Enter the number of rows: ");
let columns = window.prompt("Enter the number of columns: ");

for(let i = 1; i <= rows; i += 1){
    for(let j = 1; j <= columns; j += 1){
        document.getElementById("rectangle").innerHTML += symbol;
    }
    document.getElementById("rectangle").innerHTML = "<br>";
}