<div align="center">

# Telegram Bot App

A clean, minimalist, and scalable foundation for building Telegram bots using Node.js.

![Node.js](https://img.shields.io/badge/Node.js-v25.6.1-339933?logo=node.js&logoColor=white)
![node-telegram-bot-api](https://img.shields.io/badge/node--telegram--bot--api-v1.1.2-26A5E4?logo=telegram&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-v17.4.2-ECD53F?logo=dotenv&logoColor=black)
![nodemon](https://img.shields.io/badge/nodemon-v3.1.14-76D04B?logo=nodemon&logoColor=white)

</div>

---

## Features

- **Ready to Code:** Clean boilerplate to start developing immediately.
- **Polling-Based:** Seamlessly receives messages and handles updates.
- **Environment Secure:** Safely manages tokens via `.env`.
- **Developer Friendly:** Live-reloading enabled via Nodemon.

## Tech Stack

- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment.
- **[node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)** - Core framework for Telegram API interactions.
- **[dotenv](https://github.com/motdotla/dotenv)** - Secure environment variable management.
- **[nodemon](https://nodemon.io/)** - Auto-restart tool for rapid development.

## Getting Started

### 1. Prerequisites
Ensure you have Node.js installed. You will also need a bot token from [@BotFather](https://t.me/BotFather) on Telegram.

### 2. Installation
Clone this repository and install the dependencies:

```bash
git clone <repository-url>
cd telegram-bot-app
npm install
```

### 3. Configuration
Create a `.env` file in the root directory and add your bot token. **Never commit this file.**

```env
TOKEN_BOT=123456789:ABCDEFxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Running the Bot

**Development Mode (Auto-reloads on save):**
```bash
npm run bot
```

**Production Mode:**
```bash
node main.js
```

## Usage Example

Here is the minimal setup included in `main.js`:

```javascript
require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

// Initialize bot with polling
const bot = new TelegramBot(process.env.TOKEN_BOT, { polling: true });

// Listen for incoming messages
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Hello! I am ready to assist you.");
});
```

## Project Structure

```text
telegram-bot-app/
├── node_modules/
├── .env                # Ignored by git
├── .gitignore
├── main.js             # Entry point
├── package.json
└── package-lock.json
```

## Roadmap

Future enhancements planned for this foundation:

- [ ] Implement command handlers (e.g., `/start`, `/help`).
- [ ] Add inline keyboards and callback query processing.
- [ ] Integrate a database (MongoDB/PostgreSQL) for user management.
- [ ] Set up a modular architecture (separating routes, controllers, and services).
- [ ] Add a Winston/Morgan logging system.

## Security Note

- Keep your `TOKEN_BOT` private.
- Ensure `.env` is listed in your `.gitignore` file before pushing to GitHub.

---
*This project is built for educational and learning purposes.*