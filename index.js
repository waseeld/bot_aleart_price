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

bot.command('newAlert', (ctx) => {
    let arg1 = ctx.message.text.split(" ")[1]
    let msg = undefined
    if(isNaN(arg1)){
        msg = `Make sure you send somthing like that :
        /newAlert 300
        `
    }else{
        msg = `Done, we make Alert for you on ${arg1}`
    }

    ctx.reply(msg, {reply_to_message_id: ctx.message.message_id})
})

bot.start()