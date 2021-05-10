const Discord  = require("discord.js");

module.exports = {
    name: "playlist",
    description: "",

    async execute(message, args, commandName){
        const playlistEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Newt Spotify Playlist')
	    .setURL('https://open.spotify.com/playlist/2S2EOkAqyQKxUop6LBRkd1?si=eaad1a3273674e0e')
	    .setImage('https://i.imgur.com/R6OHMKc.png')
	    .setTimestamp()
	    .setFooter('add whatever you want, no one cares.');

        message.channel.send(playlistEmbed);
    }
}