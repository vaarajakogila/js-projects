const display=document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;


function start(){
   if(!isRunning){
    startTime=Date.now()-elapsedTime;
    timer=setInterval(update,10);
    isRunning=true;
   }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }
}

function restart(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    display.textContent="00:00:00:00";
}
function update(){
   
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;
    let hours=Math.floor(elapsedTime/(1000 *60*60));
    let mins=Math.floor(elapsedTime/(1000 *60) % 60);
    let secs=Math.floor(elapsedTime/1000 %60);
    let millisec=Math.floor(elapsedTime % 1000/10);
    hours=hours.toString().padStart(2,0);
    mins=mins.toString().padStart(2,0);
    secs=secs.toString().padStart(2,0);
    millisec=millisec.toString().padStart(2,0);

    display.textContent=`${hours}:${mins}:${secs}:${millisec}`
}