const discord = require('discord.js')
const client = new discord.Client()
const fs = require("fs")
const config = JSON.parse(fs.readFileSync("./config.json", "utf8")); 
const {prefix, token} = require('./config.json')
const db = require("quick.db")
const {  Collection } = require("discord.js");


client.commands = new Collection();
client.aliases = new Collection();
client.eventss = new Collection();   

["command" , "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready" , ()=> {

    client.user.setActivity(`${prefix}help` , {type : 'PLAYING'})
    console.log("BOT ON")

})



client.on("message", async message => {
   

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) 
        command.run(client, message, args, db);
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  let words = db.get(`words_${message.guild.id}`)
  let yus = db.get(`message_${message.guild.id}`)
  if (yus === null) {
    yus = ":x: | **{user-mention}, Don't said this here!**"
  }
  if (message.content.startsWith(prefix + "addword")) return;
    if (message.content.startsWith(prefix + "delword")) return;
      if (message.content.startsWith(prefix + "set-warn-msg")) return;
        if (message.content.startsWith(prefix + "words")) return;
  let pog = yus.split("{user-mention}").join("<@"+message.author.id+">").split("{server-name}").join(message.guild.name).split("{user-tag}").join(message.author.tag).split("{user-username}").join(message.author.username)
  if (words === null) return;
  function check(msg) { //is supposed to check if message includes da swear word
    return words.some(word => message.content.toLowerCase().split(" ").join("").includes(word.word.toLowerCase()))
  }
  if (check(message.content) === true) {
    message.delete()
    message.channel.send(pog)
  }
})




client.login(config.token)