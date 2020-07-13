const { Util } = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "schedule",
    description: "schedule movie time",

    async execute(message, args){
        var m = JSON.parse(fs.readFileSync('values.json').toString());
        var movieargs = [args[0], args[1], args[2]];
        console.log(movieargs.toString());
        m.movietime = movieargs;
        fs.writeFile('values.json', JSON.stringify(m));
    }
}