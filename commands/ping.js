const { Util } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Get ping for bot",

    async execute(message, args, commandName){
        const m = await message.channel.send("Ping?");
        const ping = m.createdTimestamp - message.createdTimestamp;
        m.edit(`Pong! Latency is ` + ping + `ms.`);
        return ping;
    }
}