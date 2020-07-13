const { Util } = require("discord.js");
const fs = require('fs');
const values = require('../data storage/values.json');

module.exports = {
    name: "schedule",
    description: "schedule movie time",

    async execute(message, args){
        const m = JSON.parse(fs.readFileSync(values).toString());
        var movieargs = [args[0], args[1], args[2]];
        console.log(movieargs.toString());
        m.movietime = movieargs;
        console.log(m.movietime)
        fs.writeFile(values, JSON.stringify(m));
    }
}