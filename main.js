require("dotenv").config()
const { TelegramBot } = require("node-telegram-bot-api")

const option_System = { polling: true }

const telegramClient = new TelegramBot(process.env.TOKEN_BOT, option_System)

telegramClient.on("message", (callback) => {
    const id = callback.from.id
    telegramClient.sendMessage(id, callback.text)
})

