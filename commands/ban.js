const { Util } = require("discord.js");

module.exports = {
    name: "ban",
    description: "never come back >:(",

    async execute(message, args, commandName, db, mgclient){
        const col = db.collection("ban-log");
        const time = new Date(Date.now());
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You cannot ban members')
  
        let user = message.mentions.members.first()
        if (!user) return message.reply('Please specify a member to ban them')
        let reason = args.slice(1).join(" ");
        if (!reason) reason = 'No Reason Given';
        if (!user.bannable) return message.reply('This member is not banable')

        let banDoc = {
            userID: user.id,
            time: [time.getTime(),time.getHours() + ":" + time.getMinutes(), time.getDate() +"/"+ time.getMonth()+ "/" + time.getFullYear()],
            reason: reason
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(banDoc);
        // Find one document
        myDoc = await col.findOne( { "userID": { $eq : user.id}, "time": { $elemMatch : {$eq: time.getTime()}}});
        // Print to the console
        console.log(myDoc);

        user.ban(reason).catch(err => console.log(err));
    }
}