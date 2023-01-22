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

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        console.log(body)
        req.on('end', () => {
            const event = JSON.parse(body).event
            const message = JSON.parse(body).message
            if (event === 'message') {
                if (message.text) {
                    console.log(`Received message: ${message.text}`)
                } else if (message.picture) {
                    console.log(`Received picture: ${message.picture}`)
                }
            }
            bot.middleware()(req, res)
            console.log("msg"+BotEvents.MESSAGE_RECEIVED)
            bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
                console.log("new message")
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
            res.end('ok')
        })
    }
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})

bot.setWebhook("https://02ea-202-70-82-10.in.ngrok.io")
  .then(response => {
    console.log("Webhook set successfully", response);
  })
console.log(BotEvents.MESSAGE_RECEIVED)
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

