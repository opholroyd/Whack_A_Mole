const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole')
let lastHole;
let timeUp = false;
let score = 0;
let whack = new Audio('./sounds/whack.wav');
let slap = new Audio('./sounds/slap.wav');

function randSound() {
    let soundPlay = (Math.floor(Math.random) * 10);
    console.log(soundPlay)
}

function randTime(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

const randHole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    console.log(hole)
    if(hole === lastHole) {
        console.log("Reroll.");
        return randHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randTime(500, 2000);
    const hole = randHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
    }, time);
}

function startGame() {
    music = new Audio('./sounds/record-player.wav');
    music.play();
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    fireworks = new Audio('./sounds/fireworks.wav');
    cheer = new Audio('./sounds/cheering.wav');
    setTimeout(() => timeUp = true, 20000)
    setTimeout(() => cheer.play() &&
    fireworks.play() , 20000)
}

function hit(e) {
    console.log
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
    randSound()
}

moles.forEach(mole => mole.addEventListener('click', hit));