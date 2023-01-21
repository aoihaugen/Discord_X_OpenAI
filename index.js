const {Client, GatewayIntentBits} = require('discord.js')
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
 
})

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function openAiRequest(question){
    const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: question,
  max_tokens: 2000,
});

return completion.data.choices[0].text;
}

client.on('ready', () => {
    console.log('The bot is ready!')
})

client.on('messageCreate' , async message => {
    if (message.content.startsWith('AI:')) {
        
        message.reply(await openAiRequest(message.content.substring(3)))

    }
})


client.login(process.env.TOKEN)