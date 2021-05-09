const { Util } = require("discord.js");

module.exports = {
    name: "perish",
    description: "",

    async execute(message, args, commandName){
        var invitelink = await message.channel.createInvite([maxUses = 1, unique=true]);
        var package = [message.author.name, message.author.id]
        const embed = {
            color: '#96D5D9',
            title: 'You dumbass, here you go:',
            // fields: [
            //     {
            //         name: 'Invite Link', 
            //         URL: invitelink  
            //     }
            // ],
            timestamp: new Date()
        };
        message.author.send(invitelink);
    }
}