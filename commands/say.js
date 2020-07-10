const { Util } = require("discord.js");

module.exports = {
    name: "say",
    description: "say things and delete cmd message",

    async execute(message){
        try{
        console.log("cmd was received");
        console.log(args.toString());}
        catch (error) {
            console.error(error);
        }
        // if(!args.length){
        //     return message.reply("dont waste my time");
        // } else{
        // const sayMessage = args.join(" ");
        // message.delete().catch(O_o=>{}); 
        // message.channel.send(sayMessage);
        // }
        
    }
}