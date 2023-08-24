const {client, initializeBot } = require('../services/discordService');

async function handleDiscordInteractions() {
    initializeBot();

    client.on('messageCreate', (message) => {
        try {
            if (message.author.bot) {
                return;
            }
            console.log(`Received message: ${message.content}`);
            message.reply("I received your message.");
            

        } catch (error) {
            console.error("An error occurred:", error);
        }
    });

}

module.exports = {
    handleDiscordInteractions
}
