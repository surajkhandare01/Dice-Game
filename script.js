var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;



function refresh() {
    var randomImage = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Rahil Wins 🚩";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "🚩 Suraj Wins 🚩";
    } else {
        document.querySelector("h1").innerHTML = " 😂 Draw! 😂";
    }
}





