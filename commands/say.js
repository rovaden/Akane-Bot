const { Util } = require("discord.js");

module.exports = {
    name: "say",
    description: "say things and delete cmd message",

    async execute(message){
        const sayMessage =  await args.join(" ");
        message.delete().catch(O_o=>{}); 
        message.channel.send(sayMessage);
        
    }
}