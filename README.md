This project contains a daily message Discord bot has a wide variety of uses. In this case, the bot serves as a daily standup bot useful for startup teams.

Created by Jenny Sun building on top of the basic provided Discord Bot.

Important:
Your .env file should look like
DISCORD_TOKEN='TOKEN_INFO'
TARGET_CHANNEL_ID='CHANNEL_ID_INFO'

Run the app by using:
node daily_message_bot.js

To keep the bot running indefinitely, you can use a process manager like PM2

1. Install PM2 globally by running npm install pm2 -g.
2. Start your bot using PM2 by running pm2 start daily_message_bot.js. This will start the bot in the background as a PM2 process.
3. Check the status of your PM2 process by running pm2 list. You should see your bot process listed with a status of "online".
4. To stop your bot, run pm2 stop daily_message_bot.js. To start it again, run pm2 start daily_message_bot.js.
5. To configure PM2 to automatically start your bot when your server starts up, run pm2 startup and follow the instructions.

> ✨ The base code is also hosted **[on Glitch 🎏](https://glitch.com/~getting-started-discord)** and **[on Replit 🌀](https://replit.com/github/discord/discord-example-app)**

## Project structure

Below is a basic overview of the project structure:

```
├── examples    -> short, feature-specific sample apps
│   ├── button.js
│   ├── command.js
│   ├── modal.js
│   ├── selectMenu.js
├── .env.sample -> sample .env file
├── app.js      -> main entrypoint for app
├── commands.js -> slash command payloads + helpers
├── game.js     -> logic specific to RPS
├── utils.js    -> utility functions and enums
├── package.json
├── README.md
└── .gitignore
```

## Running app locally

Before you start, you'll need to install [NodeJS](https://nodejs.org/en/download/) and [create a Discord app](https://discord.com/developers/applications) with the proper permissions:

- `applications.commands`
- `bot` (with Send Messages enabled)

Configuring the app is covered in detail in the [getting started guide](https://discord.com/developers/docs/getting-started).

### Setup project

First clone the project:

```
git clone https://github.com/discord/discord-example-app.git
```

Then navigate to its directory and install dependencies:

```
cd discord-example-app
npm install
```

### Get app credentials

Fetch the credentials from your app's settings and add them to a `.env` file (see `.env.sample` for an example). You'll need your app ID (`APP_ID`), server ID (`GUILD_ID`), bot token (`DISCORD_TOKEN`), and public key (`PUBLIC_KEY`).

Your .env file should look like
DISCORD_TOKEN='TOKEN_INFO'
TARGET_CHANNEL_ID='CHANNEL_ID_INFO'

> 🔑 Environment variables can be added to the `.env` file in Glitch or when developing locally, and in the Secrets tab in Replit (the lock icon on the left).

### Run the app

After your credentials are added, go ahead and run the app:

```
node daily_message_bot.js
```

> ⚙️ A package [like `nodemon`](https://github.com/remy/nodemon), which watches for local changes and restarts your app, may be helpful while locally developing.

### Set up interactivity

The project needs a public endpoint where Discord can send requests. To develop and test locally, you can use something like [`ngrok`](https://ngrok.com/) to tunnel HTTP traffic.

Install ngrok if you haven't already, then start listening on port `3000`:

```
ngrok http 3000
```

You should see your connection open:

```
Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://1234-someurl.ngrok.io -> localhost:3000
Forwarding                    https://1234-someurl.ngrok.io -> localhost:3000

Connections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Copy the forwarding address that starts with `https`, in this case `https://1234-someurl.ngrok.io`, then go to your [app's settings](https://discord.com/developers/applications).

On the **General Information** tab, there will be an **Interactions Endpoint URL**. Paste your ngrok address there, and append `/interactions` to it (`https://1234-someurl.ngrok.io/interactions` in the example).

Click **Save Changes**, and your app should be ready to run 🚀

## Other resources

- Read **[the documentation](https://discord.com/developers/docs/intro)** for in-depth information about API features.
- Browse the `examples/` folder in this project for smaller, feature-specific code examples
- Join the **[Discord Developers server](https://discord.gg/discord-developers)** to ask questions about the API, attend events hosted by the Discord API team, and interact with other devs.
- Check out **[community resources](https://discord.com/developers/docs/topics/community-resources#community-resources)** for language-specific tools maintained by community members.
