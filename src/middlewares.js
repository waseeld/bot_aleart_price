const { Bot } = require("grammy")

async function IsThatMember(ctx, next) {
    let idUser = ctx.from.id
    if(true){
        next()
    }

    let msg = `You are not Member in this bot...
    Please talk with @dwaseel (Owner of this bot) before sending here...`
    ctx.reply(msg, {reply_to_message_id: ctx.message.message_id})
}

module.exports = { IsThatMember }