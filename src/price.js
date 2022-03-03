const Binance = require('binance-client').default

const client = new Binance()
async function price(symbol) {
    let data = await client.book({ symbol: symbol })
    // console.log(`Sell : ${data.asks[0].price}`)
    // console.log(`buy : ${data.bids[0].price}`)

    return {
        sell: data.asks[0].price,
        buy: data.bids[0].price
    }
}

module.exports = price