let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let gif = document.querySelector("#gif");
function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

function showTime() {
  let days = new Date();
  let hours = days.getHours();
  if (hours > 0 && hours < 12) {
    speak("Hello Zuhaeb , Good Morning");
  } else if (hours >= 12 && hours <= 17) {
    speak("Hello Zuhaeb , Good AfterNoon");
  }
  if (hours >= 17 && hours < 24) {
    speak("Hello Zuhaeb , Good Evening");
  }
}
window.addEventListener("load", () => {
  // showTime();
});

let speechRecoginition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recoginition = new speechRecoginition();
recoginition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recoginition.start();
  btn.style.display = "none";
  gif.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  gif.style.display = "none";
  if (message.includes("hello Niti") || message.includes("hello")) {
    speak("Hello Sir, How may I help You?");
  } else if (
    message.includes("how r u") ||
    message.includes("kaisi ho") ||
    message.includes("how are you")
  ) {
    speak("Hi , I am good, thanks, what about you?");
  } else if (
    message.includes("who are you") ||
    message.includes("aap ko kisne banaya hai") ||
    message.includes("aapko kisne banaya hai") ||
    message.includes("aapko kisne banaya") ||
    message.includes("aap ko kisne banaya")
  ) {
    speak("I am Nieti, I am Created by ज़ोहैब.");
  } else if (message.includes("open youtube")) {
    speak("Opening Youtube");
    window.open("https://www.youtube.com");
  } else if (message.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com");
  } else if (message.includes("open facebook")) {
    speak("Opening Facebook");
    window.open("https://www.facebook.com");
  }
  else if (message.includes("open calculator")) {
    speak("Opening Calculator");
    window.open("calculator://");
  }
  else if (message.includes("open whatsapp")) {
    speak("Opening whatsapp");
    window.open("whatsapp://");
  }
  else if (message.includes("what is time")) {
   let time = new Date().toLocaleDateString(undefined,{hour:"numeric", minute:"numeric"});
   speak(time);
  } else if (message.includes("what is date")) {
    let day = new Date().toLocaleDateString(undefined,{day:"numeric", month:"short"});
    speak(day);
   } 
  else if (
    message.includes("open insta") ||
    message.includes("open instagram")
  ) {
    speak("Opening Instagram");
    window.open("https://www.instagram.com");
  } else {
    let finaltext =
      "this is what i found regarding" +
        message.replace("Nieti", "") || message.replace("Niti", "");
    speak(finaltext);
    window.open(
      `https://www.google.com/search?q=${
        message.replace("Niti", "") || message.replace("Neiti", "")
      }`,
      "_blank"
    );
  }
}
