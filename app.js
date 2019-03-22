const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const button = document.querySelector('#startBtn');
let gameTimer;
let timeLimit;
let score = 0;

const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")

let m1 = document.getElementById("m1");
    m2 = document.getElementById("m2");
    m3 = document.getElementById("m3");
    m4 = document.getElementById("m4");
    m5 = document.getElementById("m5");
    m6 = document.getElementById("m6");


const gameLoop = () => {
    gameTimer = setInterval(() => moleHole(), 1000);
    timeLimit = setTimeout(() => moleHole(), 20000);
}

const moleHole = () => {
    let hole = Math.floor(Math.random()*6)+1;
            if (hole == 1) {
                m1.classList.add('showMole');
                setTimeout(() => m1.classList.remove('showMole'), 1000)
            } else if (hole == 2) {
                m2.classList.add('showMole');
                setTimeout(() => m1.classList.remove('showMole'), 1000)
            } else if (hole == 3) {
                m3.classList.add('showMole');
                setTimeout(() => m1.classList.remove('showMole'), 1000)
            } else if (hole == 4) {
                m4.classList.add('showMole');
                setTimeout(() => m1.classList.remove('showMole'), 1000)
            } else if (hole == 5) {
                m5.classList.add('showMole');
                setTimeout(() => m1.classList.remove('showMole'), 1000)
            } else if (hole == 6) {
                m6.classList.add('showMole');
                setTimeout(() => m1.classList.remove('showMole'), 1000)
            }
}

m1.addEventListener("click", () => {
    document.getElementById("score").innerHTML = score += 1
});

m2.addEventListener("click", () => {
    document.getElementById("score").innerHTML = score+= 1
});

m3.addEventListener("click", () => {
    document.getElementById("score").innerHTML = score += 1
});

m4.addEventListener("click", () => {
    document.getElementById("score").innerHTML = score+= 1
});

m5.addEventListener("click", () => {
    document.getElementById("score").innerHTML = score += 1
});

m6.addEventListener("click", () => {
    document.getElementById("score").innerHTML = score += 1
});
// m1.addEventListener("click", () => {
//     m1.classList.remove('showMole')
// });
// const  () => {
//     setTimeout(m1.classList.remove('showMole'), 2000)
// }



// startBtn.addEventListener('click', gameLoop());
