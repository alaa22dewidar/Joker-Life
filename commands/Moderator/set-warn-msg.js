const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
const {prefix} = require('../../config.json')
module.exports = {
  name: "set-warn-msg",
  run: async (client, message, args, db) => {

    if (!message.channel.permissionsFor(message.author).has("ADMINISTRATOR")) return message.channel.send(":x: | **You dont have permissions to use this Command!**");
    let msg = args.join(" ")
    if (!msg) {
        let err = new MessageEmbed()
        .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
        .setTitle(`**Error**`)
        .setDescription(`**${message.author} - \` ❌ | I can't find your msg\`**`)
        .addField(`**Usage**` , `**\`${prefix}set-warn-msg <msg>\`**`, true)
        .addField(`**Example**` , `**> \`${prefix}set-warn-msg <Don't said that>\`**` , true)
        .addField(`**Aliases**` , `**> \`None\`**` , true)
        .setThumbnail(message.guild.iconURL({dynamic:true}))
        .setColor("PURPLE")
        return message.channel.send(err)
    }
db.set(`message_${message.guild.id}`, msg)

let ms = new MessageEmbed()
.setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
.setDescription(`**${message.author} - \`Done set your Message\`**`)
.setFooter(`Dev By : 'Pablo.#1110 ` , `https://cdn.discordapp.com/avatars/921172655674118204/a_03cda6f80e4fb54df109e517db9561c6.gif?size=4096`)
.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
.setColor("PURPLE")
.addField(`**Message**` , `**> \`${msg}\`**`)
.addField("**preview**", msg.split("{user-mention}").join("<@"+message.author.id+">").split("{server-name}").join(message.guild.name).split("{user-tag}").join(message.author.tag).split("{user-username}").join(message.author.username))
.setTimestamp()
return message.channel.send(ms)
  }
  }