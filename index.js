const price = require('./src/price');
require('dotenv').config()

const Bottoken = process.env.Bot_token

price("BCHUSDT").then((data) => {
    console.log(data);
})