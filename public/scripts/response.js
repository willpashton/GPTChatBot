async function getBotResponse(input) {
    let option = $("#choicedropdown option:selected").text()
    if (option == "Basic Hard-Coded"){
        return hardCodedResponse(input)
    }
    else if (option == "OpenAI API"){
        let result = await openaiResponse(input)
        return result;
    }
}



function hardCodedResponse(input){
    if(input == "BLANK"){
        return "It seems you have sent me nothing to work with!"
    }
    processInput = input.toLowerCase();
    //hard coded responses

    if(processInput == "hello"){
        return "Hello! What can I help you with today?";
    }
    else if (processInput == "goodbye"){
        return "Goodbye! I hope I have been helpful!"
    }
    else{
        return "Sorry, I can't help you with that, Contacting one of our human agents now..."
    }
}