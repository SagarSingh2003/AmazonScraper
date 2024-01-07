// const sentence = ' <img src="sdfsdfs" adfsfsfdfsdfsdfsdfdfsdfsdfdfdfsdfdfsdfsdfdsfsdfsdfsfsdfdfsdfdfsdf /></div> <img src="sdfsdfs" dfsdf /></div> <img src="sdfsdfs" adfsfsfdfsdfsdfsdfdfsdfsdfdfdfsdfdfsdfsdfdsfsdfsdfsfsdfdfsdfdfsdf /></div> '

// const regEx = /<img src="sdfsdfs".*?\/>/g

// const match = regEx.exec(sentence);
// console.log(match[0]);




// const request = require('superagent');

// const res = axios.get(`https://d3ag4hukkh62yn.cloudfront.net/s?k=asus+rog` , {"mode" :"no-cors"})


// res.then((data) => {
//     console.log(data);
// })


// // const cheerio

fetch('https://www.amazon.com/s?k=asus+rog', {
    headers : {
        'User-Agent' : 'Thunder Client (https://www.thunderclient.com)'
    }
})

.then((res) => {
console.log(res.status)
res.text()
.then((data) => {
    console.log(data);
})}
)

// // Import the 'request-promise' library
// const rp = require('request-promise');

// // Define options for the request, including the API endpoint URL, query parameters, and expected response type
// const options = {
//   uri: 'https://www.amazon.com/s?k=asus+rog',
//   mode : 'no-cors'
// };

// // Make an HTTP GET request to the API endpoint with the specified options
// const data = rp(options);
// console.log(data);