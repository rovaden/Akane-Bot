const { Util } = require("discord.js");
const motivation = require("../motivation.json");

module.exports = {
    name: "motv",
    description: "send motivation stuff",

    async execute(message, args, commandName, db, mgclient){
        message.reply(motivation.quotes[Math.floor((Math.random() * motivation.quotes.length))]);
    }
}