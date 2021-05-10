const { Util } = require("discord.js");

module.exports = {
    name: "coinflip",
    description: "",

    async execute(message, args, commandName){
        var result = (Math.round(Math.random())==0? "Heads":"Tails");
        message.reply("The coin landed on: " + result);
        return null;
    }
}