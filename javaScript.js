let btn = document.querySelector('#btn');
let content = document.querySelector('#content');

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak)
}

function showTime(){
    let days = new Date();
    let hours = days.getHours();
    if(hours>0 && hours<12){
        speak('Hello Zuhaeb , Good Morning')
    }
    else if(hours>=12 && hours<=17){
        speak('Hello Zuhaeb , Good AfterNoon')
    }
    if(hours>=17 && hours<24){
        speak('Hello Zuhaeb , Good Evening')
    }
}

window.addEventListener('load',()=>{
    showTime();
})