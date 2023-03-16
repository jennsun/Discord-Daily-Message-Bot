import discordjs from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const intents = new discordjs.Intents(discordjs.Intents.ALL)
const client = new discordjs.Client({ intents })

// Replace 'your-bot-token' with the actual bot token you received when you created the bot.
const TOKEN = process.env.TOKEN

// Set the target channel ID where the bot will send the message.
const TARGET_CHANNEL_ID = process.env.TARGET_CHANNEL_ID

// Replace 'HH:MM' with the desired time in 24-hour format (e.g., '15:30' for 3:30 PM).
const TIME_TO_SEND_MESSAGE = '16:30'
// 9:30 AM PST is '16:30'

function shouldSendMessage() {
  // bot sends message when it reaches the desired time
  const now = new Date()
  const currentTime = `${now
    .getUTCHours()
    .toString()
    .padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')}`
  return currentTime === TIME_TO_SEND_MESSAGE
}

async function sendDailyMessage() {
  const targetChannel = await client.channels
    .fetch(TARGET_CHANNEL_ID)
    .catch((err) => console.error('Error fetching channel', err))

  if (shouldSendMessage()) {
    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    // current date printed in month/day/year format
    let currentDate = `${month}/${day}/${year}`
    // Replace MESSAGE with the desired message text.
    const MESSAGE =
      'Good morning @everyone! ☀️ \n' +
      currentDate +
      ' standup! Please put your standup items in this thread: \n Yesterday \n - \n Today \n - \n Blockers \n -'
    await targetChannel.send(MESSAGE)
    setTimeout(() => sendDailyMessage(), 60 * 1000) // Wait for a minute to avoid duplicate messages.
  } else {
    setTimeout(() => sendDailyMessage(), 5 * 1000) // Check every 5 seconds.
  }
}

client.once('ready', () => {
  console.log(`${client.user.tag} is connected to Discord!`)
  sendDailyMessage()
})

client.login(TOKEN)
