const body = document.querySelector("body");
const boxes = document.querySelectorAll(".boxes"); // Remove the spread operator
const button = document.querySelector(".switch");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const day = document.querySelector("#day");
const night = document.querySelector("#night");

let check=0;
function nightcalled(){
    sun.style.display = "none";
    button.style.backgroundColor = "rgb(94, 13, 94)";
    button.style.borderColor = "white";
    moon.style.display = "block";
    body.style.backgroundColor = "black";

    // Use forEach to iterate through boxes
    boxes.forEach(function(box) {
        box.style.backgroundColor = "white";
        box.style.color = "rgb(94, 13, 94)";
    });

    day.style.textShadow="0px 0px";
    day.style.color="#212529";
    night.style.textShadow="-5px 5px rgb(94, 13, 94)";
    night.style.color="white";
}

function daycalled(){
    moon.style.display = "none";
    button.style.backgroundColor = "rgba(240, 243, 33, 0.89)";
    button.style.borderColor = "black";
    sun.style.display = "block";
    body.style.backgroundColor = "rgb(177, 214, 162)";

    // Use forEach to iterate through boxes
    boxes.forEach(function(box) {
        box.style.backgroundColor = "black";
        box.style.color = "white";
    });

    day.style.textShadow="5px 5px yellow";
    day.style.color="white";
    night.style.textShadow="0px 0px";
    night.style.color="#212529";
}



button.addEventListener("click", function() {
    if(check==(check-(check%2))){
        nightcalled();
        ++check;
    }
    else if(check!=(check-(check%2))){
        daycalled();
        ++check;
    }
});
