let anchor=document.getElementsByClassName('anchor');
let music=new Audio("Images/oval.mp3");
document.addEventListener('click',(event)=>{
    let box=event.target;
    if(box===anchor[0]){
        setTimeout(()=>{
            music.play();
        },0);  
    }
    if(box===anchor[1]){
        setTimeout(()=>{
            music.play();
        },0);  
    }
    if(box===anchor[2]){
        setTimeout(()=>{
            music.play();
        },0);  
    }
})