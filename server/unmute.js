const { Util } = require("discord.js");

module.exports = {
    name: "unmute",
    description: "pulls from db and reassigns roles",

    async executesrv(db, mgclient, message, args, execute){
        const col = db.collection("mute-role-log");
        let user = execute;
        const myDoc = await col.findOne( { userID: { $eq : user.id}});
        console.log(myDoc);
        for(i=0; i< myDoc.roles.length; i++){
            user.edit(user.roles.add(myDoc.roles[i]));
        }
        user.edit(user.roles.remove([`758141145225756672`]));
        col.deleteOne( { _id: { $eq : myDoc._id}});
        message.channel.send(`${user} hes been unmuted`);
    }
}