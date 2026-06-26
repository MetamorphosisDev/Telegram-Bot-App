require("dotenv").config({ quiet: true });

const { TelegramBot } = require("node-telegram-bot-api");
const prefix = require("./utils/prefix_Settings");

// Import Commands
const { getWeather } = require("./commands/weather.controller");

const telegramClient = new TelegramBot(process.env.TOKEN_BOT, {
    polling: true
});


telegramClient.onText(prefix("cuaca"), (callback, match) => {
    getWeather(telegramClient, callback, match);
});