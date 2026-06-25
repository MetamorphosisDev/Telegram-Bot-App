# Telegram Bot App

A simple Telegram bot built with Node.js and `node-telegram-bot-api`. This project serves as a learning foundation for developing Telegram bots, handling messages, managing environment variables, and building scalable bot features.

## Features

* Receive messages from Telegram users
* Send automatic replies
* Polling-based update handling
* Environment variable support with dotenv
* Easy project structure for future development

## Technologies Used

### Node.js

JavaScript runtime used to run the application.

### node-telegram-bot-api (v1.1.2)

Library for interacting with the Telegram Bot API.

Main capabilities:

* Receive messages
* Send messages
* Handle commands
* Manage inline keyboards
* Process callback queries
* Build Telegram bot applications

### dotenv (v17.4.2)

Loads environment variables from a `.env` file into `process.env`.

Used to securely store sensitive information such as:

* Bot tokens
* API keys
* Database credentials

### nodemon (v3.1.1)

Development tool that automatically restarts the application whenever source files change.

Benefits:

* Faster development workflow
* No need to manually restart the bot after every code change

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd telegram-bot-app
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
TOKEN_BOT=YOUR_TELEGRAM_BOT_TOKEN
```

Example:

```env
TOKEN_BOT=123456789:ABCDEFxxxxxxxxxxxxxxxxxxxxxxxx
```

## Run the Application

Start the bot:

```bash
npm run bot
```

Or directly with Node.js:

```bash
node main.js
```

## Project Structure

```text
telegram-bot-app/
│
├── .env
├── .gitignore
├── main.js
├── package.json
├── package-lock.json
└── node_modules/
```

## Example Code

```javascript
require("dotenv").config()
const { TelegramBot } = require("node-telegram-bot-api")

const bot = new TelegramBot(process.env.TOKEN_BOT, {
    polling: true
})

bot.on("message", (message) => {
    bot.sendMessage(message.chat.id, "Hello!")
})
```

## Security Notes

Never commit the following files:

```text
.env
```

Ensure `.gitignore` contains:

```gitignore
node_modules/
.env
```

Bot tokens should always be stored in environment variables and never hardcoded in source files.

## Future Improvements

* Command handlers
* Inline keyboards
* Callback queries
* User management
* Database integration
* Logging system
* Modular architecture
* Deployment support

## License

This project is intended for educational and learning purposes.
