const price = require('./src/price');
const avrgPrice = require('./src/avrg');
require('dotenv').config()

const BotToken = process.env.Bot_token

const { Bot } = require("grammy")
const bot = new Bot(BotToken)

bot.command('price', (ctx) => {
    price("BCHUSDT").then((d) => {
        let avPrice = avrgPrice(d.buy, d.sell)
        let msg = `
        1 BCH = :: ${avPrice} USD
        `
        ctx.reply(msg, {reply_to_message_id: ctx.message.message_id})

        // console.log(msg);
    })
})

bot.start()