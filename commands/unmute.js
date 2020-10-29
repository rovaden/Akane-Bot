const { Util } = require("discord.js");

module.exports = {
    name: "unmute",
    description: "unmutes people",

    async execute(message, args, commandName){
        let user = message.mentions.members.first();
        if(!user || user.bot == true || user.hasPermission(`ADMINISTRATOR`) ){
            message.channel.send(`I can't unmute ${user} because you made an oopsie.`);
            return null;
        }
        return user;
    }
}