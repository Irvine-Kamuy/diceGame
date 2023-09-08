var nameOfPlayer = prompt("Hiya, how can I call you?");
document.querySelector(".dice .p1").textContent = nameOfPlayer;

function rollDice() {
    var p1 = Math.floor(Math.random() * 6) + 1;
    var p2 = Math.floor(Math.random() * 6) + 1;
    
    document.querySelector(".dice .img1").setAttribute("src", "./images/dice" + p1 + ".png");
    document.querySelector(".dice .img2").setAttribute("src", "./images/dice" + p2 + ".png");

    if (p1 > p2) {
        document.querySelector("h1").textContent = "You win!";
    }
    else if (p1 < p2) {
        document.querySelector("h1").textContent = "Not today!";
    }
    else {
        document.querySelector("h1").textContent = "Try again~";
    }
}
