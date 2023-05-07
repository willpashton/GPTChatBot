const popup = document.querySelector('.chatwindow');
const btn = document.querySelector('#chaticon');
const sendbtn = document.querySelector('.send');
const chatarea = document.querySelector('.chatarea');
const inputarea = document.querySelector('.entrybox');

var usermsg = "";


// Functions

function firstBotMessage(){
    let firstMessage = "Hello! How can we help?";
    document.getElementById("firstbotmessage").innerHTML = '<p class="bottext"><span class="botmsg">' + firstMessage + '</span></p>';
};

function sendUserMessage(){
    let userInput = inputarea.value;
    if (inputarea.value == ""){
        userInput = "BLANK";
    };
    usermsg = userInput;
    if (userInput != "BLANK"){
        let tempVar = `<div class="usermsgbox">
        <span class="usermessage">${userInput}</span>
        </div>`;
    
        chatarea.insertAdjacentHTML("beforeend",tempVar);
        inputarea.value = '';
    }
    else{
        inputarea.value = '';
    }
};

async function getHardResponse(usermsg){
    let botResponse = await getBotResponse(usermsg);
    let botHTML = '<div class="message"><span class="botmsg">' + botResponse + '</span></p>'
    chatarea.insertAdjacentHTML("beforeend",botHTML);

}



// Hide and Show Chat

btn.addEventListener('click', ()=>{
    popup.classList.toggle('showchat');
})

// Send message

sendbtn.addEventListener('click',async ()=>{
    sendUserMessage();
    await getHardResponse(usermsg);
})

inputarea.addEventListener('keypress',async function(e) {
    if (e.key === "Enter"){
        sendUserMessage();
        await getHardResponse(usermsg);
    }
})


firstBotMessage();