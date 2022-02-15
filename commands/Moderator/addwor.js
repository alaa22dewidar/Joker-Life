const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
const {prefix} = require('../../config.json')
module.exports = {
  name: "addword",
  run: async (client, message, args, db) => {

    if (!message.channel.permissionsFor(message.author).has("ADMINISTRATOR")) return message.channel.send(":x: | **You dont have permissions to use this Command!**");
    let pog = db.get(`words_${message.guild.id}`)
    let word = args[0]
    if(!word) {
        let err = new MessageEmbed()
        .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
        .setTitle(`**Error**`)
        .setDescription(`**${message.author} - \` ❌ | I can't find your words\`**`)
        .addField(`**Usage**` , `**> \`${prefix}addword <word>\`**`, true)
        .addField(`**Example**` , `**> \`${prefix}addword <Fuck>\`**` , true)
        .addField(`**Aliases**` , `**> \`None\`**` , true)
        .setThumbnail(message.guild.iconURL({dynamic:true}))
        .setColor("PURPLE")
        return message.channel.send(err)
    }

    if (pog && pog.find((find) => find.word == word)) {
       let err2 = new MessageEmbed()
       .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
       .setTitle(`**Error**`)
       .setDescription(`**${message.author} - \`❌ | The word is already on the database\`**`)
       .setThumbnail(message.guild.iconURL({dynamic:true}))
       .setColor("PURPLE")
       return message.channel.send(err2)
    }
    let yes = {
        word: word,
        author: message.author.tag
          } 

          db.push(`words_${message.guild.id}`, yes)
          let end = new MessageEmbed()
          .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
          .setTitle(`**Success**`)
          .setDescription(`**${message.author} - \`✅ | The word has been added!\`**`)
          .setThumbnail(message.guild.iconURL({dynamic:true}))
          .setColor("PURPLE")
          .setFooter(`Dev By : 'Pablo.#1110 ` , `https://cdn.discordapp.com/avatars/921172655674118204/a_03cda6f80e4fb54df109e517db9561c6.gif?size=4096`)
          .setTimestamp()
          message.channel.send(end)


}
}