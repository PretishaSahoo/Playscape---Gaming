score=0;
cross=true;

audiogameover=new Audio('Images/gameovermusic.mp3');
audiogame=new Audio('Images/game.mp3');

/*setTimeout(() =>{
    audiogame.play();
},1000);*/

document.onkeydown=function(e){
    setTimeout(() =>{
        audiogame.play();
    },1000);
    console.log("key code is :", e.keyCode)
    if((e.keyCode===38) || (e.keyCode===32)){
        panda=document.querySelector('.panda');
        panda.classList.add('animatePanda');
        setTimeout(() =>{
            panda.classList.remove('animatePanda')
        },700);
    }
    if((e.keyCode===39) || (e.keyCode===32)){
        panda=document.querySelector('.panda');
        pandax=parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
        panda.style.left= pandax + 112 +"px";

    }
    if((e.keyCode===37)){
        panda=document.querySelector('.panda');
        pandax=parseInt(window.getComputedStyle(panda, null).getPropertyValue('left'));
        panda.style.left= pandax - 112 +"px";
    }
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
    console.log(offsetX,offsetY);

    if (offsetX <65 && offsetY < 221) {
        gameover.style.visibility = 'visible';
        rock.classList.remove('animaterock');
        audiogameover.play();
        setTimeout(()=>{
            audiogameover.pause();
            audiogame.pause();
        },1000);
    }
    else if(offsetX<250 && cross){
        score+=108;
        updatescore(score);
        cross=false;

        setTimeout(() =>{
            cross=true;
        },1000);
    }
}, 100);

function updatescore(){
    scorecount.innerHTML="YOUR SCORE:"+score;
}
