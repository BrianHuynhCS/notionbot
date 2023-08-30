const discordService = require('./services/discordService');
const messageController = require('./controllers/messageController');
const notionController = require('./controllers/notionController');

const express = require('express');

const app = express();
const port = 3000;

discordService.initializeBot();
messageController.handleMessage();

messageController.eventEmitter.on('chatGPTMessage', (chatGPTMessage) => {
  console.log('Received chatGPTMessage in app.js:', chatGPTMessage);
  const parseMessage = JSON.parse(chatGPTMessage)
  const task = parseMessage.message; // Extract the 'message' property as the task
  const tag = parseMessage.tag;

  (async () => {
    try {
      await notionController.addPage(task, tag);
      const successMessage = `Added task "${task}" with tag "${tag}" to Notion.`;
      console.log(successMessage);
    } catch (error) {
      const errorMessage = "An error occurred while adding the task to Notion.";
      console.log(errorMessage);
    }
  })();

});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
