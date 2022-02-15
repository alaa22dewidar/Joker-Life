const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
const {prefix} = require('../../config.json')
module.exports = {
  name: "delword",
  run: async (client, message, args, db) => {

    if (!message.channel.permissionsFor(message.author).has("ADMINISTRATOR")) return message.channel.send(":x: | **You dont have permissions to use this Command!**");
    let pog = db.get(`words_${message.guild.id}`)
    let word = args[0]
    if(!word) {
        let err = new MessageEmbed()
        .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
        .setTitle(`**Error**`)
        .setDescription(`**${message.author} - \` ❌ | I can't find your words\`**`)
        .addField(`**Usage**` , `**> \`${prefix}delword <word>\`**`, true)
        .addField(`**Example**` , `**> \`${prefix}delword <Fuck>\`**` , true)
        .addField(`**Aliases**` , `**> \`None\`**` , true)
        .setThumbnail(message.guild.iconURL({dynamic:true}))
        .setColor("PURPLE")
        return message.channel.send(err)
    }

    if (pog) {
        let data = pog.find((x) => x.word.toLowerCase() === word.toLowerCase());
       let no = new MessageEmbed()
       .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
       .setTitle(`**Error**`)
       .setDescription(`**${message.author} - \` ❌ | I can't find your words\`**`)   
       .setColor("PURPLE") 
       .setThumbnail(message.guild.iconURL({dynamic:true}))
       if(!data) return message.channel.send(no)
       let yes = pog.indexOf(data);
       delete pog[yes];

       var filter = pog.filter((x) => {
           return x != null && x != '';
       });
       db.set(`words_${message.guild.id}`, filter);

       let de = new MessageEmbed()
       .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
       .setTitle(`*Success**`)
       .setDescription(`**${message.author} - \`✅ | The word has been deleted\`**`)
       .setThumbnail(message.guild.iconURL({dynamic:true}))
       .setColor("PURPLE")
       .setFooter(`Dev By : 'Pablo.#1110 ` , `https://cdn.discordapp.com/avatars/921172655674118204/a_03cda6f80e4fb54df109e517db9561c6.gif?size=4096`)
       .setTimestamp()
       return message.channel.send(de)
       
    } else {

        let d = new MessageEmbed()
        .setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
        .setTitle(`*Success**`)
        .setDescription(`**${message.author} - \`❌ | The word was npt found\`**`)
        .setThumbnail(message.guild.iconURL({dynamic:true}))
        .setColor("PURPLE")
        .setFooter(`Dev By : 'Pablo.#1110 ` , `https://cdn.discordapp.com/avatars/921172655674118204/a_03cda6f80e4fb54df109e517db9561c6.gif?size=4096`)
        .setTimestamp()
        return message.channel.send(d)

    }

    
      
}
}