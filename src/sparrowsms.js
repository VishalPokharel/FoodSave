const token = 'v2_HL2H2LJkZp2o55xbko7cOPU8a34.D2OU';
const from = 'TheAlert';
const to = '9866009221,9884033669';

const sendsms=(text)=>{
    fetch('http://api.sparrowsms.com/v2/sms/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        token: token,
        from: from,
        to: to,
        text: text
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
}
