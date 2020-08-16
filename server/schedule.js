const { Util } = require("discord.js");

module.exports = {
    name: "schedule",
    description: "handles the scheduling of movie times",

    async executesrv(db, mgclient, message, args, execute) {
        const movieTime = [args[0], args[1]];
        const col = db.collection("movie-info");
            // let timeDoc = {
            //     "name": "movie-time",
            //     "hour": movieTime[0],
            //     "minute": movieTime[1]
            // }
            const timeDoc = await col.findOne({name : {$eq: "movie-time"}});
            await col.updateOne(
                { "name": "movie-time"},
                {
                  $set: {   "hour": movieTime[0],
                            "minute": movieTime[1] },
                  $currentDate: { lastModified: true }
                }
              );
            const myDoc = await col.findOne({name : {$eq: "movie-time"}});  
            console.log(myDoc);
            message.react('✅');
        
    }
}