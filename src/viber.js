// const http = require('http')
// const url = require('url')
// const { parse } = require('querystring')
// const ViberBot = require('viber-bot').Bot
// const BotEvents = require('viber-bot').Events
// const TextMessage = require('viber-bot').Message.Text


// const bot = new ViberBot({
//     authToken: '5075b750a067e0b8-6486b32c04f52773-df9929b54e8e063e',
//     name: "My Bot",
//     avatar: "http://viber.com/avatar.jpg"
// })

// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         let body = ''
//         req.on('data', chunk => {
//             body += chunk.toString()
//         })
//         console.log(body)
//         req.on('end', () => {
//             const event = JSON.parse(body).event
//             const message = JSON.parse(body).message

//             bot.middleware()(req, res)
//             res.end('ok')
//         })
//     }
// })

// server.listen(3000, () => {
//     console.log("Server is running on port 4000")
// })

// bot.setWebhook("https://02ea-202-70-82-10.in.ngrok.io")
//   .then(response => {
//     console.log("Webhook set successfully", response);
//   })

