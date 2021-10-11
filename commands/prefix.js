const { Util } = require("discord.js");

module.exports = {
    name: "prefix",
    description: "change the bot prefix",

    async execute(message, args, commandName, db, mgclient){
        // process.env.BOT_PREFIX = args
        if (args[0] == null) {
            message.reply("the prefix is currently: " + process.env.BOT_PREFIX);
        } else {
            let user = message.member;
            const col = db.collection("settings");
            if(!user || user.bot == true || !user.hasPermission(`ADMINISTRATOR`) ){
                message.channel.send(`I can't unmute ${user} because you made an oopsie.`);
                return null;
            }
            col.updateOne( {BOT_PREFIX : {$exists : true}},
            {
              $set: {
                BOT_PREFIX: args[0]
              }
            });
            const settings = await db.collection("settings").findOne({BOT_PREFIX : { $exists : true}});
            console.log("prefix: " + settings.BOT_PREFIX)
            process.env.BOT_PREFIX = settings.BOT_PREFIX.toString();
            message.reply(args + " has been set to the bot prefix!")
        }
    }
}