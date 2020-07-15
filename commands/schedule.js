const { Util } = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "schedule",
    description: "schedule movie time",

    async execute(message, args){
        let m = JSON.parse(fs.readFileSync("./commands/data/values.json").toString());
        var movieargs = [args[0], args[1], args[2]];
        m.movietime = movieargs;
        console.log(m);
        fs.writeFileSync("./commands/data/values.json" , JSON.stringify(m));
    }
}