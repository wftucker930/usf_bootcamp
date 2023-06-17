function countdown(num) {
    let countdownRepeater = setInterval(function () {
        num--;
        console.log(num);
        if (num <= 0) {
            clearInterval(countdownRepeater);
            console.log("DONE!");
        }
    }, 1000);
}

function randomGame() {
    let counter = 1;
    let num = Math.random();
    let randomRepeater = setInterval(function () {
        if (num > 0.75) {
            clearInterval(randomRepeater);
            console.log(counter);
        }
        else {
            counter++;
            num = Math.random();
        }
    }, 1000);
}

