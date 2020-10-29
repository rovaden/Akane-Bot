const { Util } = require("discord.js");

module.exports = {
    name: "mute",
    description: "mutes people, not bots",

    async execute(message, args, commandName){
        let user = message.mentions.members.first();
        console.log(user._roles);
        let roles = user._roles;
        if(!user || user.bot == true || user.hasPermission(`ADMINISTRATOR`)){
            message.channel.send(`I can't mute ${user} because you made an oopsie.`);
            return null;
        }
        user.edit(user.roles.set([`720384515440377886`]));
        message.channel.send(`${user} has been muted`);
        let package = [roles, user.id]
        return package;
    }
}