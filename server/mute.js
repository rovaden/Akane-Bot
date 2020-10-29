const { Util } = require("discord.js");

module.exports = {
    name: "mute",
    description: "logs the roles removed",

    async executesrv(db, mgclient, message, args, execute){
        const col = db.collection("mute-role-log");
        var package = execute;

        // Construct a document                                                                                                                                                              
        let roleDoc = {
            userID: package[1],
            roles: package[0]
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(roleDoc);
        // Find one document
        const myDoc = await col.findOne( { "userID": { $eq : package[1]}});
        // Print to the console
        console.log(myDoc);
    }
}