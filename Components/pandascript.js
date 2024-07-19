let score = 0;
let cross = true;

let audiogameover = new Audio('Images/gameovermusic.mp3');
let audiogame = new Audio('Images/game.mp3');

/*setTimeout(() => {
    audiogame.play();
}, 1000);*/

document.onkeydown = function (e) {
    setTimeout(() => {
        audiogame.play();
    }, 1000);
    console.log("key code is:", e.keyCode);
    if (e.keyCode === 38 || e.keyCode === 32) {
        jumpPanda();
    }
    if (e.keyCode === 39 || e.keyCode === 32) {
        movePandaRight();
    }
    if (e.keyCode === 37) {
        movePandaLeft();
    }
};

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('click', handleTouchClick, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { 
        if (xDiff > 0) {
            movePandaLeft();
        } else {
            movePandaRight();
        }
    } else {
        if (yDiff > 0) {
            jumpPanda();
        }
    }
    xDown = null;
    yDown = null;
}

function handleTouchClick(evt) {
    jumpPanda();
}

function jumpPanda() {
    let panda = document.querySelector('.panda');
    panda.classList.add('animatePanda');
    setTimeout(() => {
        panda.classList.remove('animatePanda');
    }, 700);
}

function movePandaRight() {
    let panda = document.querySelector('.panda');
    let pandax = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
    panda.style.left = pandax + 112 + "px";
}

function movePandaLeft() {
    let panda = document.querySelector('.panda');
    let pandax = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
    panda.style.left = pandax - 112 + "px";
}

setInterval(() => {
    let panda = document.querySelector('.panda');
    let rock = document.querySelector('.rock');
    let gameover = document.querySelector('.gameover');

    let px = parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
    let py = parseInt(window.getComputedStyle(panda, null).getPropertyValue('top'));

    let rx = parseInt(window.getComputedStyle(rock, null).getPropertyValue('left'));
    let ry = parseInt(window.getComputedStyle(rock, null).getPropertyValue('top'));

    let offsetX = Math.abs(px - rx);
    let offsetY = Math.abs(py - ry);
    console.log(offsetX, offsetY);

    if (offsetX < 65 && offsetY < 221) {
        gameover.style.visibility = 'visible';
        rock.classList.remove('animaterock');
        audiogameover.play();
        setTimeout(() => {
            audiogameover.pause();
            audiogame.pause();
        }, 1000);
    } else if (offsetX < 250 && cross) {
        score += 108;
        updatescore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 100);

function updatescore() {
    let scorecount = document.getElementById('scorecount');
    scorecount.innerHTML = "YOUR SCORE: " + score;
}

document.getElementById('resetButton').addEventListener('click', resetGame);

function resetGame() {
    score = 0;
    updatescore();
    cross = true;
    
    let panda = document.querySelector('.panda');
    panda.style.left = '100px';

    let rock = document.querySelector('.rock');
    rock.classList.add('animaterock');

    let gameover = document.querySelector('.gameover');
    gameover.style.visibility = 'hidden';

    audiogame.pause();
    audiogame.currentTime = 0;
    audiogameover.pause();
    audiogameover.currentTime = 0;
    audiogame.play();
}