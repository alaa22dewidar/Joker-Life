const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
const {prefix} = require('../../config.json')
module.exports = {
  name: "op",
  run: async (client, message, args) => {
  
    let m = new MessageEmbed()
    .setDescription(`**${message.author} - \`You don't have Permission\`**`)
    .setColor("RED")
    if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send(m)

    let word = args[0]

    if(!word) {
        let err = new MessageEmbed()
        .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
        .setTitle(`**Error**`)
        .setDescription(`**${message.author} - \` ❌ | See how to use\`**` ,)
        .addField(`**Usage**` , `**> \`${prefix}op <photo link>\`**` , true)
        .addField(`**Example**` , `**> \`${prefix}op <https://>\`**`, true )
        .addField(`**Aliases**` , `**> \`None\`**` , true) 
        .setThumbnail(message.guild.iconURL({dynamic:true}))
        .setColor("PURPLE")
        return message.channel.send(err)    
    }
   
    message.delete()
   
    
    let ags = message.content.split(' ')

if(!ags[1]) {

    return message.channel.send(`** :x: | I can't find link**`)
}

    let e = new MessageEmbed()
    .setColor("PURPLE")
    .setImage(ags[1])
message.channel.send(e)
}
}