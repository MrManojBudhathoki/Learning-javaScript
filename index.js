
let cartquantity = 0;

document.getElementById("showQuantity").onclick = function(){
    console.log(`Cart quantity: ${cartquantity}`);
}
document.getElementById("add").onclick = function(){
    cartquantity = cartquantity + 1;
    console.log(`Cart quantity: ${cartquantity}`);
}
document.getElementById("add2").onclick = function(){
    cartquantity = cartquantity + 2;
    console.log(`Cart quantity: ${cartquantity}`);
}
document.getElementById("add3").onclick = function(){
    cartquantity = cartquantity + 3;
    console.log(`Cart quantity: ${cartquantity}`);
}
document.getElementById("reset").onclick = function(){
    cartquantity = 0;
    console.log("Your cart is empty.");
    console.log(`Cart quantity: ${cartquantity}`);
}