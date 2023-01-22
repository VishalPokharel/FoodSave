const http = require('http')
const url = require('url')
const { parse } = require('querystring')
const ViberBot = require('viber-bot').Bot
const BotEvents = require('viber-bot').Events
const TextMessage = require('viber-bot').Message.Text

const bot = new ViberBot({
    authToken: '5075b750a067e0b8-6486b32c04f52773-df9929b54e8e063e',
    name: "My Bot",
    avatar: "http://viber.com/avatar.jpg"
})

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    const senderId = message.sender.id;
    const senderMessage = message.text;
  
    // Analyze the message here
    // For example, you can use a natural language processing library to extract keywords from the message
    // Or you can use a rule-based system to match the message to a predefined set of keywords
    
    // Example: using a rule-based system
    if (senderMessage === 'hi') {
      const reply = new TextMessage({
        text: 'Hello, how can I help you?',
        sender: { name: 'My Bot' }
      });
      bot.sendMessage(reply, senderId);
    } else if (senderMessage === 'bye') {
      const reply = new TextMessage({
        text: 'Goodbye, have a nice day!',
        sender: { name: 'My Bot' }
      });
      bot.sendMessage(reply, senderId);
    }
  });