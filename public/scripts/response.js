async function getBotResponse(input) {
    let option = $("#choicedropdown option:selected").text();
    if (option == "Basic Hard-Coded"){
        return hardCodedResponse(input);
    }
    else if (option == "OpenAI API"){
        let result = await openaiResponse(input);
        return result;
    }
    else if (option == "Natural NLP Engine"){
        let result = await naturalResponse(input);
        return result;
    }
}



function hardCodedResponse(input){
    if(input == "BLANK"){
        return "It seems you have sent me nothing to work with!"
    }
    processInput = input.toLowerCase();
    //hard coded responses
    var responseDict = {
        "hello" : "Hello! What can I help you with today?",
        "goodbye" : "Goodbye! I hope I have been helpful!",
        "will" : "We are able to write last wills and testaments. It's very important to write these documents so then your family is able to carry out your wishes. If you call us on (0800123123) then we can guide you through the process.",
        "neglect" : "We are sorry to hear that you have to enquire about this. We are specialists in representing elder abuse, neglect and fraud cases - and have a high success rate as prosecutors in this area. To begin opening a case with us, call us on (0800123123)",
        "fraud" : "We are sorry to hear that you have to enquire about this. We are specialists in representing elder abuse, neglect and fraud cases - and have a high success rate as prosecutors in this area. To begin opening a case with us, call us on (0800123123)",
        "abuse" : "We are sorry to hear that you have to enquire about this. We are specialists in representing elder abuse, neglect and fraud cases - and have a high success rate as prosecutors in this area. To begin opening a case with us, call us on (0800123123)",
        "retirement" : "We are able to provide many resources for retirement planning! We congratulate you on your decision, and suggest you give us a call on (0800123123) so we can discuss next steps.",
        "end of life" : "We are one of the highest rated companies in the UK for end-of-life planning, call us on (0800123123) where we can lay out the next steps you need to take.",
    };
    if(processInput != "blank"){
        const words = processInput.split(" ");
        var result = "";
        words.forEach(word => {
          if (responseDict.hasOwnProperty(word)) {
            result = responseDict[word];
          }
          else{
            result = "Sorry, I can't help you with that, Contacting one of our human agents now...\n Alternatively, call us on (0800123123).";
          }
        });
        return result;
    }
}