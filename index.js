const Binance = require('binance-client').default

const client = new Binance()
async function main() {
    let data = await client.book({ symbol: 'BCHUSDT' })
    console.log(`Sell : ${data.asks[0].price}`)
    console.log(`buy : ${data.bids[0].price}`)
}

main()

// ❯ node index.js 
// Sell : 315.00000000
// buy : 314.90000000