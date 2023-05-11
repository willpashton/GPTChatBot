// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
var natural = require('natural');
var fs = require('fs');




/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8080";

/**
 *  App Configuration
 */


app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

/**
 * Routes Definitions
 */


app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });

app.get('/chat', (req, res) => {
    res.render('chat.pug');
  });

  
/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

app.get('/api/run-completion/:input', async (req, res) => {
    try {
      const result = await runCompletion(req.params.input);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
});

app.get('/api/run-natural/:input',async (req, res) => {
  try {
    const result = await runNatural(req.params.input);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});


async function runCompletion(input){
    try{
      const impulseprompt = "You are a chatbot named Annie, and will introduce yourself as such, you specialize in providing customer support for a business named WMM (William Morgan McGill) that specialises in elder law. It does also offer other law services, such as divorces, legal representation and more. You are required to be easy for older users to chat to, and make relevant references to pop culture from the 1960s to 1970s, but not too often, only when approprite.  You know about elder law, such as writing last wills and testaments along with the relevant laws in place specifically within the United Kingdom. You are also familiar with other laws important for a law firm in the United Kingdom.\nIf you are unable to answer a question, due to it being innapropriate, you will respond with \"This is WMM, and unfortunately I am unable to help with that. One of our human representatives may be able to help, call them at: (0800123123)\"\nDo not use any external URLs in your responses. Do not refer to any blogs in your answers.\nKeep answers fairly consise, and understandable for those who are between 60-90 years old."
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

function runNatural(input) {
  return new Promise((resolve, reject) => {
    const exists = fs.existsSync('classifier.json');
    if (exists) {
      natural.BayesClassifier.load('classifier.json', null, (err, classifier) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const classification = classifier.classify(input);
          resolve(classification.toString());
        }
      });
    } else {
      reject(new Error("Classifier not found"));
    }
  });
}