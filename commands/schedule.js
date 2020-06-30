const { Util } = require("discord.js");
const constant = require("../variables.js")

module.exports = {
    name: "schedule",
    description: "schedule movie time",

    async execute(message){
        if(args[0] != null){
            constant.hrtime = args[0];
            constant.mntime = args[1];
            message.channel.send(args[0] + ' ' + args[1]);
            message.react(':white_check_mark:');
        } else{
            message.channel.send('u fuckwad, put in an arguement');
        }
    }
}