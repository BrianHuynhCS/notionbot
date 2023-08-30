const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const { client } = require('../services/discordService');
const { categorizeMessage } = require('../services/chatGPTService');

async function handleMessage() {

    client.on('messageCreate', (message) => {
        try {
            if (message.author.bot) {
                return;
            }
            console.log(`Received message: ${message.content}`);
            message.reply("I received your message.");
            
            categorizeMessage(message.content)
                .then(chatGPTMessage => {
                    eventEmitter.emit('chatGPTMessage', chatGPTMessage);
                })
                .catch(error => {
                    console.error("An error occurred:", error);
            });


        } catch (error) {
            console.error("An error occurred:", error);
        }
    });

}

module.exports = {
    handleMessage,
    eventEmitter
}
