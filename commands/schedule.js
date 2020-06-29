const { Util } = require("discord.js");
const constant = require("../constant.json")

module.exports = {
    name: "schedule",
    description: "schedule movie time",

    async execute(message){
        if(args != null){
            constant.hrtime = args[0];
            constant.mntime = args[1];
            message.react(':white_check_mark:')
        }
    }
}