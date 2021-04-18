<h1 align="center">
Discord Suggestion bot
  <br>
</h1>


<p align="center">
  <a href="#about">About</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
</p>

## About

An open source discord suggestion bot to manage server Suggestions. The following bot doesnt require a database.

If you liked this repository, feel free to leave a star ⭐!

## Features

`suggest :` Suggests a suggestion <br>
`decline :` Declines a suggestion.<br>
`approve :` Approves a suggestion.<br>



## Installation

```
git clone https://github.com/peterhanania/suggestion-bot.git
```
then run:
```
npm install
```


## Setting Up

Set up all your information in the *config.json* File as such
```
{
  "prefix": "BOT_PREFIX_YOU_WANT",
  "main_token": "YOUR_BOT_TOKEN",
  "developers": ["DEVELOPERS_IDS"],
  "bot_name":"YOUR_BOT_NAME",
  "suggestion_channel_id":"SUGGESTION_CHANNEL_ID"
}
```
 > You can change the emojis in `emojis.js` and colors in `colors.js`
 
Once done, you can launch the bot with `node index.js`. 

Any questions? DM me on <a href="https://discord.com/users/710465231779790849">Discord</a>.
