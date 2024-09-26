let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) =>{
    let speakInput = new SpeechSynthesisUtterance(input);
    //speakInput.rate = 1;
    //speakInput.pitch = 1;
    //speakInput.volume = 1;
    speakInput.lang = 'en-IN'
    window.speechSynthesis.speak(speakInput);
    
}
window.onload = () =>{
    /* speakFunc("Hello just for code hameed kd") */
    //greetingFunc();
}

const greetingFunc = () =>{
    let date = new Date();
    let hour = date.getHours();
    if(hour >= 0 && hour <12)
    {
        speakFunc("Good Mornng Sir, How can i help you !");
    }else if(hour >= 12 && hour <16){
        speakFunc("Good Afternoon Sir, How can i help you !");
    }else{
        speakFunc("Good evening Sir, How can i help you !");
    }
}
const startVoiceInput = () =>{
    if('webkitSpeechRecognition' in window)
    {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) =>{
           let spokenText = e.results[0][0].transcript;
           handleCommands(spokenText.toLowerCase());
           box.classList.remove("btn-box");
           btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`;
        }
        recognition.start();
    }else{
        alert("Your Browser dose not support voice input !")
    }
}

btn.onclick = () =>{
    box.classList.add("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
}

const handleCommands = (command) =>{
    console.log(command);
    if(command.includes("hello") || command.includes("hey") || command.includes("hi"))
    {
        speakFunc("Hello sir How can i help you !")
    }
    else if(command.includes("who are you") || command.includes("developed") || command.includes("who are you"))
        {
            speakFunc("I Am Virtual Assistance, Developed By Hameed KD !")
        }
    else if(command.includes("open github") || command.includes("github") || command.includes("open github"))
            {
                speakFunc("opening... github !");
                window.open("https://github.com/HameedKD");
            }
    else if(command.includes("open dmart website") || command.includes("website"))
            {
                speakFunc("opening... dmart website !");
                window.open("https://dmart-eight.vercel.app/");
            }
    else if(command.includes("open google") || command.includes("google"))
            {
                speakFunc("opening... Google");
                window.open("https://www.google.com");
            }
    else if(command.includes("open youtube") || command.includes("open youtube"))
            {
                speakFunc("opening... youtube");
                window.open("https://www.youtube.com");
            }
    else if(command.includes("open instagram") || command.includes("instagram"))
            {
                speakFunc("opening... instagram");
                window.open("https://www.instagram.com/#_=_");
            }
    else if(command.includes("tell me time") || command.includes("time"))
            {
                let time = new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'})
                speakFunc(time);
            }
    else if(command.includes("tell me date") || command.includes("date"))
            {
                let date = new Date().toLocaleString(undefined,{day:'numeric',month:'long'})
                speakFunc(date);
            }  
    else if(command.includes("open chat gpt") || command.includes("gpt"))
            {
                speakFunc("opening... Chat gpt");
                window.open("https://openai.com/chatgpt/");
            }              
    else if(command.includes("open facebook") || command.includes("facebook"))
            {
                speakFunc("opening... facebook");
                window.open("https://www.facebook.com/home.php");
            }else{
                speakFunc(`This is, What i found on internet regarding ${command}`);
                window.open(`https://www.google.com/search?q=${command}`)
            } 
       
}