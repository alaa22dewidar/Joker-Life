const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
const {prefix} = require('../../config.json')
module.exports = {
  name: "store",
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
        .setDescription(`**${message.author} - \` ❌ | See how to use\`**`)
        .addField(`**Usage**` , `**> \`${prefix}add <#channel : id> <photo link>  <created by> <description>\`**`)
        .addField(`**Example**` , `**> \`${prefix}add <#channel : 12345789> <https:>  <Pablo> <test>\`**` )
        .addField(`**Aliases**` , `**> \`None\`**`) 
        .setThumbnail(message.guild.iconURL({dynamic:true}))
        .setColor("PURPLE")
        return message.channel.send(err)    
    }
    
    message.delete()

 let ags = message.content.split(' ')
 let channel = message.guild.channels.cache.get(ags[1]) || message.mentions.channels.first();
 let channel2 = client.channels.cache.get("942112877869957190")
 let des = message.content.split(' ').slice(4).join('/+ ')
 


 if(!ags[2]) {
    let a = new MessageEmbed()
     .setDescription(`**${message.author} - \`I can't find your Photo\`**`)
     .setColor("PURPLE")
     return message.channel.send(a)
   } 

  

    if(!ags[3]) {
        let aee = new MessageEmbed()
        .setDescription(`**${message.author} - \`Plz write created by\`**`)
        .setColor("PURPLE")
        return message.channel.send(aee)
       }

 if(!des[4]) {
     let de = new MessageEmbed()
      .setDescription(`**${message.author} - \`I can't find your des\`**`)
      .setColor("PURPLE")
     return message.channel.send(de)
 }



 

let end = new MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle(`**${message.guild.name}**`)
.addField(`**<:767634481200234507:836987420213379172> Description:**`, [`** \`\`\`fix\n ${des} \`\`\`**`])
.addField(`**<a:842527360984940604:942195483655405699> Created By:**` , `**> \`${ags[3]}\` **`,true)
.addField(`**<:858406068380106762:942195515309850724> Shared By:**` , `**> \`${message.author.tag}\`**`,true)
.setColor("PURPLE")
.setThumbnail("https://cdn.discordapp.com/attachments/941830984297492553/941849196720431104/490285166288437249.png")
.setImage(ags[2])
.setFooter(`Deve By: 'Pablo.#1110` , `https://cdn.discordapp.com/avatars/921172655674118204/a_03cda6f80e4fb54df109e517db9561c6.gif?size=1024`)
.setTimestamp()
channel.send(end) 

let au = new MessageEmbed()
.setTitle(`**New Code**`)
.setDescription(`**${message.author} - \`Done send your commodity\`**`)
.addField(`**If you want see**` , `<#${channel.id}>`)
.setColor("PURPLE")
message.channel.send(au)
    


  }
}