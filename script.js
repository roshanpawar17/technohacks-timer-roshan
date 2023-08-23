let startbtn=document.querySelector('#start');
let stopbtn=document.querySelector('#stop');
let resetbtn=document.querySelector('#reset');

let millisecv=document.querySelector('#mili-sec');
let secv=document.querySelector('#sec');
let minv=document.querySelector('#min');
let hrsv=document.querySelector('#hrs');

let ms = 0
let sec = 0
let min = 0
let hrs = 0
let timer;

let ums, usec, umin, uhrs; 

stopbtn.disabled=true
resetbtn.disabled=true

stopbtn.style.backgroundColor= "#3498db85"
resetbtn.style.backgroundColor= "#3498db85"

stopbtn.style.cursor="not-allowed"
resetbtn.style.cursor="not-allowed"

function startTimmer(){

    startbtn.disabled=true
    stopbtn.disabled=false
    resetbtn.disabled=true

    startbtn.style.backgroundColor= "#3498db85"
    stopbtn.style.backgroundColor= "#3498db"
    resetbtn.style.backgroundColor= "#3498db85"


    startbtn.style.cursor="not-allowed"
    stopbtn.style.cursor= "pointer"
    resetbtn.style.cursor="not-allowed"

    
    if(ms == 99){
        sec = sec + 1
        updateTimer()
        ms = 0
    }else if(sec == 60){
        min = min + 1
        updateTimer()
        sec = 0
    }else if(min == 60){
        hrs = hrs + 1
        updateTimer()
        min=0
    }
    else{
        ms=ms+1
        updateTimer()
    }

}

function stopTimer(){

    startbtn.style.backgroundColor= "#3498db"
    stopbtn.style.backgroundColor= "#3498db85"
    resetbtn.style.backgroundColor= "#3498db"

    startbtn.style.cursor="pointer"
    stopbtn.style.cursor="not-allowed"
    resetbtn.style.cursor="pointer"

    clearInterval(timer)

    startbtn.disabled=false
    stopbtn.disabled=true
    resetbtn.disabled=false

}

function resetTimer(){

    resetbtn.style.backgroundColor= "#3498db85"

    resetbtn.style.cursor="not-allowed"


    ms=sec=min=hrs=0
    clearInterval(timer)
    millisecv.innerText = '00'
    secv.innerText = '00'
    minv.innerText = '00'
    hrsv.innerText = '00'
}

function updateTimer(){
    ums=ms<10?'0'+ms:ms
    usec=sec<10?'0'+sec:sec
    umin=min<10?'0'+min:min
    uhrs=hrs<10?'0'+hrs:hrs


    millisecv.innerText = ums
    secv.innerText = usec
    minv.innerText = umin
    hrsv.innerText = uhrs
}


startbtn.addEventListener('click', ()=>{
    timer = setInterval(()=>{
        startTimmer();
    },10)    
})

stopbtn.addEventListener('click', ()=>{
    stopTimer()
})

resetbtn.addEventListener('click', ()=>{
    resetTimer()
})

