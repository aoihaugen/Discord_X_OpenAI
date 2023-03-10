//Constants for requiering API's
const {Client, GatewayIntentBits} = require('discord.js')
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
//Discord config
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
 
})
//Openai config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//Main program listening to messages on discord server.
client.on('ready', () => {
    console.log('The bot is ready!')
})

client.on('messageCreate' , async message => {
    if (message.content.startsWith('AI:')) {
        //call to openAiRequest function with any message starting with "AI:", removes first 3 char. When function returns the reply is sent to discord bot, the bot replys to the person prompting.
        message.reply(await openAiRequest(message.content.substring(3)))
    }else if(message.content.startsWith('AIPICTURE:')) {
        //call to openAiPictureRequest function with any message starting with "AIPICTURE:", removes first 10 char. When function returns the reply is sent to discord bot, the bot replys to the person prompting.
        message.reply(await openAiPictureRequest(message.content.substring(10)))
    }
})

//Logs in the bot
client.login(process.env.TOKEN)

//Function to send the question to OpenAI. Returns the answer from the openAI server
async function openAiRequest(question){
    const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: question,
  max_tokens: 2000,
});
return completion.data.choices[0].text;
}
 
//Function to send a request for a image link for AI generated picture.
async function openAiPictureRequest(question) {
    console.log(question)
     const response = await openai.createImage({
        prompt: question,
        n: 1,
        size: "1024x1024"
})
      return response.data.data[0].url;
}