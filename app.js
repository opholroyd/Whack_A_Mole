const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole')
const btn = document.getElementById("startBtn");
let lastHole;
let timeUp = false;
let score = 0;
let whack = new Audio('./sounds/whack.wav');
let slap = new Audio('./sounds/slap.wav');
let clink = new Audio('./sounds/impact.wav');
let hitsound = new Audio('./sounds/hit.wav');

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
    btn.disabled = true;
    music = new Audio('./sounds/ambience.wav');
    music.play();
    music.volume = 0.1
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    let cheering = new Audio('./sounds/cheering.wav');
    setTimeout(() => timeUp = true, 15000);
    setTimeout(() => cheering.play(), 15000)
    setTimeout(() => btn.disabled = false, 15000)
}

function hit(e) {
    console.log
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
    let sounds = [whack, slap, hitsound, clink];
    let randSound = sounds[Math.floor(Math.random()*sounds.length )];
    randSound.load()
    randSound.play()
}

moles.forEach(mole => mole.addEventListener('click', hit));