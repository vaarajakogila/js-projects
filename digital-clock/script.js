
function start(){
    document.getElementById("button").style.display='none';
    //document.getElementById("heading").textContent="DIGITAL CLOCK";
    document.getElementById("clock").style.display="";
    updateTime();
    setInterval(updateTime,1000)
}

function updateTime(){
    const time=new Date();
    let hours=time.getHours().toString().padStart(2,0);
    const meridian=hours>=12 ? "PM" :"AM";
    hours=hours%12 || 12;
    hours=hours.toString().padStart(2,0);
    let mins=time.getMinutes().toString().padStart(2,0);
    let sec=time.getSeconds().toString().padStart(2,0);
    let timestring=`${hours}:${mins}:${sec} ${meridian}`;
    document.getElementById("clock").textContent=timestring;
}
