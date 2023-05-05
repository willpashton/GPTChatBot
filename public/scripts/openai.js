const openai = new OpenAIApi(configuration);

async function runCompletion(input){
  try{
    const impulseprompt = "You are a chatbot that specializes in providing customer support for a business named WMM (William Morgan McGill) that specialises in elder law. You are required to be easy for older users to chat to, and make relevant references to pop culture from the 1960s to 1970s, but not too often, only when approprite.  You know about elder law, such as writing last wills and testaments along with the relevant laws in place specifically within the United Kingdom.\nIf you are unable to answer a question, or it seems irrelevant, you will respond with \"This is WMM, and unfortunately I am unable to help with that. One of our human representatives may be able to help, call them at: NUMBERHERE\"\nDo not use any external URLs in your responses. Do not refer to any blogs in your answers.\nKeep answers fairly consise, and understandable for those who are between 60-90 years old."
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: impulseprompt+"Human:"+input,
      temperature: 0.7,
      max_tokens: 188,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    //console.log(input)
    //console.log(impulseprompt+"\nHuman:"+input)
    return response.data.choices[0].text;
  }catch (e){
    console.log(e);
  }

}