const { Util } = require("discord.js");

module.exports = {
    name: "ping",
    description: "testing mongo db",

    async executesrv(db, mgclient, message, args, execute){
        // Use the collection "people"
        const col = db.collection("ping");
        var ping = execute;

        // Construct a document                                                                                                                                                              
        let pingDoc = {
            "ping": ping,
            "time": message.createdTimestamp
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(pingDoc);
        // Find one document
        const myDoc = await col.findOne( { "ping": { $eq : ping}});
        // Print to the console
        console.log(myDoc);
    }
}