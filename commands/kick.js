const { Util } = require("discord.js");

module.exports = {
    name: "kick",
    description: "remove thee",

    async execute(message, args, commandName, db, mgclient){
        const col = db.collection("kick-log");
        const time = new Date(Date.now());
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You cannot kick members')
  
        let user = message.mentions.members.first()
        if (!user) return message.reply('Please specify a member for me to kick them')
        let reason = args.slice(1).join(" ");
        if (!reason) reason = 'No Reason Given';
        if (!user.kickable) return message.reply('This member is not kickable')

        let kickDoc = {
            userID: user.id,
            time: [time.getTime(),time.getHours() + ":" + time.getMinutes(), time.getDate() +"/"+ time.getMonth()+ "/" + time.getFullYear()],
            reason: reason
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(kickDoc);
        // Find one document
        myDoc = await col.findOne( { "userID": { $eq : user.id}, "time": { $elemMatch : {$eq: time.getTime()}}});
        // Print to the console
        console.log(myDoc);

        user.kick(reason).catch(err => console.log(err));
    }
}