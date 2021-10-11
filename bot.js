//bot consts  
  require('dotenv').config()
  const fs = require('fs')
  const Discord = require("discord.js");
  const Client = require('./client/client.js');
  const { Console } = require('console');
  const client = new Discord.Client();
  client.commands = new Discord.Collection();
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//server consts
  const uri = process.env.MONGODB_URI;
  const MongoClient = require('mongodb').MongoClient;
  const mgclient = new MongoClient(uri, { poolSize:10, useUnifiedTopology: true });
  const dbName = 'akane-bot';
  console.log(process.env.MONGODB_URI);
  var db;

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(command.name);
}

 mgclient.connect( function(err, client) {
  console.log("Connected correctly to server");
  db = client.db(dbName);
  setup(); 
});

async function setup(){
  const settings = await db.collection("settings").findOne({BOT_PREFIX : { $exists : true}});
  console.log("prefix: " + settings.BOT_PREFIX)
  process.env.BOT_PREFIX = settings.BOT_PREFIX.toString();
}

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
  console.log(process.env.BOT_PREFIX)
    if(message.author.bot) return;
    if(message.content.indexOf(process.env.BOT_PREFIX) !== 0) return;
    const args = message.content.slice(process.env.BOT_PREFIX.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    console.log("arguements: " + args.toString());

  try {
    command.execute(message, args, commandName, db, mgclient);
	    } catch (error) {
		  console.error(error);
      message.reply("there was a problem with processing your request, please check to see that you called the command you're looking for correctly!");
      }
});

client.login(process.env.BOT_TOKEN);