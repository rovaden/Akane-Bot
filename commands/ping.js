const { Util } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Get ping for bot",

    async execute(message, args, commandName, db, mgclient){
        const m = await message.channel.send("Ping?");
        const col = db.collection("ping");
        const ping = m.createdTimestamp - message.createdTimestamp;
        m.edit(`Pong! Latency is ` + ping + `ms.`);

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