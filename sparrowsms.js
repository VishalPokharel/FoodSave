// fetch('https://api.sparrowsms.com/v2/sessions', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     api_key: 'YOUR_API_KEY',
//     to: '+1234567890',
//     text: 'Hello, this is a test message'
//   })
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });

var axios = require('axios');
var apiKey = 'YOUR_API_KEY';
var phoneNumber = '+1234567890';
var message = 'Hello, this is a test message';

axios.post('https://api.sparrowsms.com/v2/sessions', {
  api_key: apiKey,
  to: phoneNumber,
  text: message
})
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});

