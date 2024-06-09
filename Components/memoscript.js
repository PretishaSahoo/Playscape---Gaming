let turn="Blue";
let firstBox=null;
let secondBox=null;
let flips=0;
let matchingPairs=0;
let bluescore=0;
let redscore=0;

function changeTurn(){
    return (turn==="Blue")?"Red":"Blue";
}

music=new Audio('Images/music.mp3');

document.addEventListener('click',(event)=>{
    music.play();
    let box=event.target;
    if(!box.classList.contains('img1')&& !box.classList.contains('img23') ){
        music.play();
        return;
    }
    if(box===firstBox){
        music.play();
        return;
    }
    flips++;
    if(flips===1){
        music.play();
        firstBox=box;
        box.src='Images/angry.png';}
    
    else if(flips===2){
        music.play();
        secondBox=box;
        box.src='Images/angry.png';
        if((firstBox.classList.contains('img1') && secondBox.classList.contains('img23')) ||
        (firstBox.classList.contains('img23') && secondBox.classList.contains('img1'))){
            setTimeout(()=>{
                firstBox.style.display="none";
                secondBox.style.display="none";
                firstBox=null;
                secondBox=null;
                flips=0;
                matchingPairs++;
                if(matchingPairs==15){
                    if(bluescore>redscore){
                        document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                    }
                    else if(bluescore<redscore){
                        document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                    }
                    else{
                        document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                    }
                    
                    document.getElementsByClassName('won')[0].style.display="block";
                    document.getElementsByClassName('turn')[0].style.display="none";
                    document.getElementsByClassName('blue')[0].style.display="none";
                    document.getElementsByClassName('red')[0].style.display="none";
                    music.pause();
                }
            },1000);
            if(turn==="Blue"){
                bluescore+=2;
                document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
            }
            else{
                redscore+=2;
                document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
            }
            turn=changeTurn();
            document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;

        }
        else{
            setTimeout(()=>{
                music.play();
                firstBox.src = 'Images/card.jpg';
                secondBox.src = 'Images/card.jpg';
                firstBox = null;
                secondBox = null;
                flips = 0;
            },1000);
            turn=changeTurn();
            document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
        }
        }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img2')&& !box.classList.contains('img5') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            firstBox=box;
            music.play();
            box.src='Images/cake.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/cake.png';
            if((firstBox.classList.contains('img2') && secondBox.classList.contains('img5')) ||
            (firstBox.classList.contains('img5') && secondBox.classList.contains('img2'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img13')&& !box.classList.contains('img26') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/bulb.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/bulb.png';
            if((firstBox.classList.contains('img13') && secondBox.classList.contains('img26')) ||
            (firstBox.classList.contains('img26') && secondBox.classList.contains('img13'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img8')&& !box.classList.contains('img30') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/cry.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/cry.png';
            if((firstBox.classList.contains('img8') && secondBox.classList.contains('img30')) ||
            (firstBox.classList.contains('img30') && secondBox.classList.contains('img8'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }


            document.addEventListener('click',(event)=>{
                music.play();
                let box=event.target;
                if(!box.classList.contains('img4')&& !box.classList.contains('img12') ){
                    music.play();
                    return;
                }
                if(box===firstBox){
                    music.play();
                    return;
                }
                flips++;
                if(flips===1){
                    music.play();
                    firstBox=box;
                    box.src='Images/cupcake.png';}
                
                else if(flips===2){
                    music.play();
                    secondBox=box;
                    box.src='Images/cupcake.png';
                    if((firstBox.classList.contains('img4') && secondBox.classList.contains('img12')) ||
                    (firstBox.classList.contains('img12') && secondBox.classList.contains('img4'))){
                        setTimeout(()=>{
                            firstBox.style.display="none";
                            secondBox.style.display="none";
                            firstBox=null;
                            secondBox=null;
                            flips=0;
                            matchingPairs++;
                            if(matchingPairs==15){
                                if(bluescore>redscore){
                                    document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                                }
                                else if(bluescore<redscore){
                                    document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                                }
                                else{
                                    document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                                }
                                document.getElementsByClassName('won')[0].style.display="block";
                                document.getElementsByClassName('turn')[0].style.display="none";
                                document.getElementsByClassName('blue')[0].style.display="none";
                                document.getElementsByClassName('red')[0].style.display="none";
                                music.pause();
                            
                            }
                        },1000);
                        
                        if(turn==="Blue"){
                            bluescore+=2;
                            document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                        }
                        else{
                            redscore+=2;
                            document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                        }
                        turn=changeTurn();
                        document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            
                    }
                    else{
                        setTimeout(()=>{
                            music.play();
                            firstBox.src = 'Images/card.jpg';
                            secondBox.src = 'Images/card.jpg';
                            firstBox = null;
                            secondBox = null;
                            flips = 0;
                        },1000);
                        turn=changeTurn();
                        document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
                    }
                    }
            })
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img3')&& !box.classList.contains('img24') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/emotional.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/emotional.png';
            if((firstBox.classList.contains('img3') && secondBox.classList.contains('img24')) ||
            (firstBox.classList.contains('img24') && secondBox.classList.contains('img3'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img15')&& !box.classList.contains('img17') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/hearty.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/hearty.png';
            if((firstBox.classList.contains('img15') && secondBox.classList.contains('img17')) ||
            (firstBox.classList.contains('img17') && secondBox.classList.contains('img15'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })

    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img6')&& !box.classList.contains('img29') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/laugh.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/laugh.png';
            if((firstBox.classList.contains('img6') && secondBox.classList.contains('img29')) ||
            (firstBox.classList.contains('img29') && secondBox.classList.contains('img6'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
                
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img27')&& !box.classList.contains('img28') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/potty.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/potty.png';
            if((firstBox.classList.contains('img27') && secondBox.classList.contains('img28')) ||
            (firstBox.classList.contains('img28') && secondBox.classList.contains('img27'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })



    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img25')&& !box.classList.contains('img7') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/rose.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/rose.png';
            if((firstBox.classList.contains('img25') && secondBox.classList.contains('img7')) ||
            (firstBox.classList.contains('img7') && secondBox.classList.contains('img25'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img9')&& !box.classList.contains('img22') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/shy.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/shy.png';
            if((firstBox.classList.contains('img9') && secondBox.classList.contains('img22')) ||
            (firstBox.classList.contains('img22') && secondBox.classList.contains('img9'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })

    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img14')&& !box.classList.contains('img16') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/smile.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/smile.png';
            if((firstBox.classList.contains('img14') && secondBox.classList.contains('img16')) ||
            (firstBox.classList.contains('img16') && secondBox.classList.contains('img14'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img10')&& !box.classList.contains('img19') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/think.jpg';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/think.jpg';
            if((firstBox.classList.contains('img10') && secondBox.classList.contains('img19')) ||
            (firstBox.classList.contains('img19') && secondBox.classList.contains('img10'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img20')&& !box.classList.contains('img21') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/yawn.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/yawn.png';
            if((firstBox.classList.contains('img20') && secondBox.classList.contains('img21')) ||
            (firstBox.classList.contains('img21') && secondBox.classList.contains('img20'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })


    document.addEventListener('click',(event)=>{
        music.play();
        let box=event.target;
        if(!box.classList.contains('img11')&& !box.classList.contains('img18') ){
            music.play();
            return;
        }
        if(box===firstBox){
            music.play();
            return;
        }
        flips++;
        if(flips===1){
            music.play();
            firstBox=box;
            box.src='Images/choclate.png';}
        
        else if(flips===2){
            music.play();
            secondBox=box;
            box.src='Images/choclate.png';
            if((firstBox.classList.contains('img11') && secondBox.classList.contains('img18')) ||
            (firstBox.classList.contains('img18') && secondBox.classList.contains('img11'))){
                setTimeout(()=>{
                    firstBox.style.display="none";
                    secondBox.style.display="none";
                    firstBox=null;
                    secondBox=null;
                    flips=0;
                    matchingPairs++;
                    if(matchingPairs==15){
                        if(bluescore>redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Blue Won !!! ";
                        }
                        else if(bluescore<redscore){
                            document.getElementsByClassName('won')[0].innerHTML="Red Won !!! ";
                        }
                        else{
                            document.getElementsByClassName('won')[0].innerHTML="Draw !!! ";
                        }
                        document.getElementsByClassName('won')[0].style.display="block";
                        document.getElementsByClassName('turn')[0].style.display="none";
                        document.getElementsByClassName('blue')[0].style.display="none";
                        document.getElementsByClassName('red')[0].style.display="none";
                        music.pause();
                    }
                },1000);
                
                if(turn==="Blue"){
                    bluescore+=2;
                    document.getElementsByClassName('blue')[0].innerHTML="Blue Score : "+bluescore;
                }
                else{
                    redscore+=2;
                    document.getElementsByClassName('red')[0].innerHTML="Red Score : "+redscore;
                }
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
    
            }
            else{
                setTimeout(()=>{
                    music.play();
                    firstBox.src = 'Images/card.jpg';
                    secondBox.src = 'Images/card.jpg';
                    firstBox = null;
                    secondBox = null;
                    flips = 0;
                },1000);
                turn=changeTurn();
                document.getElementsByClassName('turn')[0].innerHTML="Turn for : "+turn;
            }
            }
    })