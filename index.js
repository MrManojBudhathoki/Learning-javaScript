let temp;

document.getElementById("submitButton").onclick = function(){

    temp = document.getElementById("textBox").value;
    temp = Number(temp);


    if(document.getElementById("cButton").checked){
        temp = tocelsius(temp);
        temp = Math.round(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°c"
    }

    else if(document.getElementById("fButton").checked){
        temp = toFarenhehit(temp);
        temp = Math.round(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°c"
    }

    else{
        document.getElementById("tempLabel").innerHTML = "Select the unit first."
    }
}

function tocelsius(temp){
    return (temp - 32) * (5/9);
}

function toFarenhehit(temp){
    return temp * 9 / 5 + 32;
}