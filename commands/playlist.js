const Discord  = require("discord.js");

module.exports = {
    name: "playlist",
    description: "",

    async execute(message, args, commandName){
        const playlistEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Newt Spotify Playlist')
        .setDescription("add songs you really like. this is meant to be representative of the server's music tastes.")
	    .setURL('https://open.spotify.com/playlist/2S2EOkAqyQKxUop6LBRkd1?si=eaad1a3273674e0e')
	    .setImage('https://i.imgur.com/R6OHMKc.png')
	    .setTimestamp()
	    .setFooter('help im in constant pain');

        message.channel.send(playlistEmbed);
    }
}