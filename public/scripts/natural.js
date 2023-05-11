async function naturalResponse(input) {
    var responseDict = {
        "greeting" : "Hello! What can I help you with today?",
        "farewell" : "Goodbye! I hope I have been helpful!",
        "lastwill" : "We are able to write last wills and testaments. It's very important to write these documents so then your family is able to carry out your wishes. If you call us on (0800123123) then we can guide you through the process.",
        "elderabuse" : "We are sorry to hear that you have to enquire about this. We are specialists in representing elder abuse, neglect and fraud cases - and have a high success rate as prosecutors in this area. To begin opening a case with us, call us on (0800123123)",
        "retirement" : "We are able to provide many resources for retirement planning! We congratulate you on your decision, and suggest you give us a call on (0800123123) so we can discuss next steps.",
        "endoflife" : "We are one of the highest rated companies in the UK for end-of-life planning, call us on (0800123123) where we can lay out the next steps you need to take.",
        "generalhelp" : "We'd be happy to help! Please provide more details here, or give us a call on (0800123123) where we can advise on your next steps!"
    }
    try {
      const response = await axios.get('/api/run-natural/' + input);
      result = responseDict[response.data]
      return result;
    } catch (error) {
      console.error(error);
      return null; // or some other value to indicate an error
    }
  }