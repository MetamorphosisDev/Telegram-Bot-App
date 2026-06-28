require("dotenv").config({ quiet: true });

const { TelegramBot } = require("node-telegram-bot-api");

// Import Utitls
const prefixArgs = require("./utils/prefix/prefixArgs_Settings");
const prefix = require("./utils/prefix/prefix_Settings")

// Import View Basic
const menuRender = require("./message/main/menu.view")
const repairRender = require("./message/main/repairView")

// Import Commands
const { getWeather } = require("./commands/weather.controller");
const pingBot = require("./commands/pingTest.controller")

const telegramClient = new TelegramBot(process.env.TOKEN_BOT, {
    polling: true
});

telegramClient.onText(prefixArgs("cuaca"), (callback, match) => {
    getWeather(telegramClient, callback, match);
});

telegramClient.onText(/^\/start$/, (callback) => {
    telegramClient.sendMessage(
        callback.chat.id,
        menuRender(),
        {
            parse_mode: "Markdown"
        }
    );
});
telegramClient.onText(prefix("menu"), (callback) => {
    telegramClient.sendMessage(
        callback.chat.id,
        menuRender(),
        { parse_mode: "Markdown" }
    );
});

telegramClient.onText(prefix("ping"), callback => {
    pingBot(telegramClient, callback)
})

telegramClient.onText(prefix("help"), (callback => {
    telegramClient.sendMessage(
        callback.chat.id, repairRender(),
        { parse_mode: "Markdown" }
    )
}))

// Error testing
telegramClient.on("polling_error", (error) => {
    console.error("Polling Error");
    console.error(error.code);
    console.error(error.message);
    console.error(error);
});