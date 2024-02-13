let countLabel;
document.getElementById("decreaseButton").onclick = function(){
    countLabel -= 1;
    document.getElementById("countLabel").innerHTML = countLabel;
     
}
document.getElementById("increaseButton").onclick = function(){
    countLabel += 1;
    document.getElementById("countLabel").innerHTML = countLabel;
}
document.getElementById("resetButton").onclick = function(){
    countLabel = 0;
    document.getElementById("countLabel").innerHTML = countLabel;
}