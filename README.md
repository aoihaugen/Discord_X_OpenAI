# Discord x OpenAI

## Description

I wanted to see if there was a simple way of integrating OpenAI's language model GPT3 as a bot in discord.
I learnt that implementing API can be both simple and fun.


## Installation
Prerequesits are:
You need to setup a Discord bot and invite the bot to your server.
You need Both a Discord and OpenAI api key.


1. Clone the repository
2. Make sure you have node.js installed on your computer.
3. Crate a file named .env in the project folder that contains the following two lines (replace the placeholder text with your key): 
```
DISCORD_TOKEN="YOUR DISCORD API KEY HERE" 
OPENAI_API_KEY="YOUR OPENAI API KEY HERE" 
```
4. Write `npm install` in terminal.
5. Run the bot by typing into the terminal in the folder of the project `node index.js`

## Usage

After you have added the bot to your Discord server and followed the instructions above do the following:
In any chat on the server where the bot has access type: `AI:` followed by the whatever you want to ask the OpenAI GPT3 model.
