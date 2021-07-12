const { Util } = require("discord.js");

module.exports = {
    name: "mute",
    description: "mutes people, not bots",

    async execute(message, args, commandName, db, mgclient){
        const col = db.collection("mute-role-log");
        const time = new Date(Date.now());
        const user = message.mentions.members.first();
        var myDoc = await col.findOne( { "userID": { $eq : user.id}});
        if (!message.guild.members.cache.get(message.author.id).hasPermission('ADMINISTRATOR')){
            message.reply("no fuck you. u dont got the perms");
            return;
        };
        if(!user || user.bot == true || user.hasPermission(`ADMINISTRATOR`)){
            message.channel.send(`I can't mute ${user} because you made an oopsie.`);
            return;
        }
        if(myDoc != null){
            message.channel.send(`I can't mute ${user} because they already are`);
            return;
        }

        console.log(myDoc);

        let roles = user._roles;
        try {
            user.edit(user.roles.set([`758141145225756672`]));
        } catch (error) {
           console.log(error); 
        }
        message.channel.send(`${user} has been muted`);

        //logging in db starts
        // Construct a document                                                                                                                                                              
        let roleDoc = {
            userID: user.id,
            time: [time.getTime(),time.getHours() + ":" + time.getMinutes(), time.getDate() +"/"+ time.getMonth()+ "/" + time.getFullYear()],
            roles: roles
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(roleDoc);
        // Find one document
        myDoc = await col.findOne( { "userID": { $eq : user.id}});
        // Print to the console
        console.log(myDoc);
    }
}