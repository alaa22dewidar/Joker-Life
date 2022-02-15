const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
const {prefix} = require('../../config.json')
module.exports = {
  name: "words",
  run: async (client, message, args, db) => {

    let e = new MessageEmbed()
    .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
    .setTitle(`**${message.guild.name} | Anti Swear words list**`)
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setColor("PURPLE")
    let words = db.get(`words_${message.guild.id}`);
        if (words && words.length) {
            let array = [];
            words.forEach((x) => {
                array.push(`Word: ${x.word} | added By: ${x.author}`);
            });
        e.setDescription(`**${array.join('\n')}**`)
        e.setFooter(`Deve By: 'Pablo.#1110` , `https://cdn.discordapp.com/avatars/921172655674118204/a_03cda6f80e4fb54df109e517db9561c6.gif?size=1024`)

    } else {
        return message.channel.send(":x: | **There are No words.**")
      }
      
      return message.channel.send({ embed: e });

    


  }
}