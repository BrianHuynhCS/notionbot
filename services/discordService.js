require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

async function initializeBot() {
    const token = process.env.DISCORD_TOKEN;
    try {
        console.log("Bot logging in..");
        await client.login(token);
        console.log(`Logged in as ${client.user.tag}!`);

        client.on('ready', () => {
            console.log('Bot is ready!');
        });

    } catch (error) {
        console.log("Error loggin in");
    }
}

module.exports = {
    client,
    initializeBot,
}