const TimeInp=document.getElementById("time")
const startBtn=document.getElementById("start")
const stopBtn=document.getElementById("stop")
const msgInp=document.getElementById("msg")
const Timer=document.getElementById("timer")


const startfun=()=>{  
    const minInp=TimeInp.value;
    TimeInp.value='';
if(minInp>0){
    let  tim=minInp*60;
    const timerfun=setInterval(()=>{ 
        console.log(tim);
        tim--;
          Timer.textContent=`${Math.floor(tim/60)}:${tim%60}`
        if(tim==0){
            clearInterval(timerfun);
            Timer.textContent=`00:00`
            msgInp.textContent=`Time is up!........`;
           }
      
       },1000)
      
        stopBtn.addEventListener('click',()=>{
            clearInterval(timerfun);
            Timer.textContent=`${Math.floor(tim/60)}:${tim%60}`
            msgInp.textContent=`you Stopped Timer at ${Timer.textContent}`;

        })
}else{
    alert(`Time Cannot be Negative......`);
    return;
}
        
        
}
startBtn.addEventListener('click',startfun)



