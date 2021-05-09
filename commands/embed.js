const { Util } = require("discord.js");

module.exports = {
    name: "embed",
    description: "",

    async execute(message, args, commandName){
        var invitelink = await message.guild.channels.cache.get('743330977195229265').createInvite([maxUses = 1, unique=true]);
        var package = [message.author.name, message.author.id];
        const embed = {
            color: '#96D5D9',
            title: 'You dumbass, here you go:',
            fields: [
                {
                    name: 'Invite Link', 
                    URL: invitelink  
                }
            ],
            timestamp: new Date()
        };
        var dm = message.guild.members.cache.get(message.author.id);
        // .createDM();
        console.log(dm.id);
        // .send(embed);
    }
}