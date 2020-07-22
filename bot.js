//bot consts  
  require('dotenv').config()
  const fs = require('fs')
  const Discord = require("discord.js");
  const Client = require('./client/client.js');
  const client = new Discord.Client();
  client.commands = new Discord.Collection();
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//server consts
  const uri = "mongodb+srv://rovaden:Caculas4@akane.o7hy4.mongodb.net/coronaviruscrew-akane?retryWrites=true&w=majority";
  const MongoClient = require('mongodb').MongoClient;
  const mgclient = new MongoClient(uri, { useNewUrlParser: true });
  const dbName = 'coronaviruscrew-akane';
  const commandFilessrv = fs.readdirSync('./server').filter(file => file.endsWith('.js'));
  // var commandsrv = require(`./server/${commandFilessrv}`);
  

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

for (const file of commandFilessrv){
  const commandsrv = require(`./server/${commandFilessrv}`);
  const commandserv = new Map();
  commandserv.set(commandsrv.name, commandsrv);
}

//server method
mgclient.connect(err => {
  const collection = mgclient.db("test").collection("devices");
  console.log("Connected successfully to server");
    const db = mgclient.db(dbName);
  });

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
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
    if(message.author.bot) return;
    if(message.content.indexOf(process.env.BOT_PREFIX) !== 0) return;
    const args = message.content.slice(process.env.BOT_PREFIX.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    const commandsrv = commandserv.get(commandName);
    console.log(args.toString());

    try {
    command.execute(message, args, commandName);
    commandsrv.executesrv(message, args, commandName);
	} catch (error) {
		console.error(error);
		message.reply('There is no command called that!');
	}
});

client.login(process.env.BOT_TOKEN);