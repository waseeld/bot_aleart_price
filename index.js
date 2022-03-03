const price = require('./src/price');

price("BCHUSDT").then((data) => {
    console.log(data);
})