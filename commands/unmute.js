const { Util } = require("discord.js");

module.exports = {
    name: "unmute",
    description: "unmutes people",

    async execute(message, args, commandName, db, mgclient){
        let user = message.mentions.members.first();
        const col = db.collection("mute-role-log");
        if(!user || user.bot == true || user.hasPermission(`ADMINISTRATOR`) ){
            message.channel.send(`I can't unmute ${user} because you made an oopsie.`);
            return null;
        }
        const myDoc = await col.findOne( { userID: { $eq : user.id}});
        console.log(myDoc);
        user.edit(user.roles.set(myDoc.roles));
        // user.edit(user.roles.remove([`758141145225756672`]));
        col.deleteOne( { _id: { $eq : myDoc._id}});
        message.channel.send(`${user} has been unmuted`);
    }
}