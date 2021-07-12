const { Util } = require("discord.js");

module.exports = {
    name: "say",
    description: "say things and delete cmd message",

    async execute(message, args, commandName, db, mgclient){
        if(!args.length){
            return message.reply("dont waste my time");
        } else{
        const sayMessage = args.join(" ");
        await message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username}`))
            .catch(console.error);
        message.channel.send(sayMessage);
        }
        
    }
}