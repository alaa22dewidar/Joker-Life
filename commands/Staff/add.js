const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
const {prefix} = require('../../config.json')
module.exports = {
  name: "add",
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
    .addField(`**Usage**` , `**> \`${prefix}add <#channel : id> <photo link> <project link> <created by> <description>\`**`)
    .addField(`**Example**` , `**> \`${prefix}add <#channel : 12345789> <https:> <https//replit.come/> <Pablo> <test>\`**` )
    .addField(`**Aliases**` , `**> \`None\`**`) 
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setColor("PURPLE")
    return message.channel.send(err)    
}

 message.delete()
 
 let ags = message.content.split(' ')
 let channel = message.guild.channels.cache.get(ags[1]) || message.mentions.channels.first();
 let channel2 = client.channels.cache.get("942112877869957190")
 let des = message.content.split(' ').slice(5).join('/+ ')
 


 if(!ags[2]) {
    let a = new MessageEmbed()
     .setDescription(`**${message.author} - \`I can't find your Photo\`**`)
     .setColor("PURPLE")
     return message.channel.send(a)
   } 

   if(!ags[3]) {
    let ae = new MessageEmbed()
     .setDescription(`**${message.author} - \`I can't find your Project link\`**`)
     .setColor("PURPLE")
     return message.channel.send(ae)
    }


    if(!ags[4]) {
        let aee = new MessageEmbed()
        .setDescription(`**${message.author} - \`Plz write created by\`**`)
        .setColor("PURPLE")
        return message.channel.send(aee)
       }

 if(!des[5]) {
     let de = new MessageEmbed()
      .setDescription(`**${message.author} - \`I can't find your des\`**`)
      .setColor("PURPLE")
     return message.channel.send(de)
 }



 

let end = new MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle(`**${message.guild.name}**`)
.addField(`**<:767634481200234507:836987420213379172> Description:**`, [`** \`\`\`fix\n ${des} \`\`\`**`])
.addField(`**<:chat:940356796286136350> important Notes:**` , `**> \`\`\`طبعا كل الي عليك انك تضغط الرابط ورح يوديك على البروجكت جاهز\`\`\`**`)
.addField(`**<a:842527360984940604:942195483655405699> Created By:**` , `**> \`${ags[4]}\` **`,true)
.addField(`**<:858406068380106762:942195515309850724> Shared By:**` , `**> \`${message.author.tag}\`**`,true)
.addField(`**<a:842526471075397632:942193146182402139>  Project Link:**` , `**> [Click Here](${ags[3]})**`,true)
.setColor("PURPLE")
.setThumbnail(ags[2])
.setFooter(`Deve By: 'Pablo.#1110` , `https://cdn.discordapp.com/avatars/921172655674118204/a_03cda6f80e4fb54df109e517db9561c6.gif?size=1024`)
.setTimestamp()
channel.send(end) 

let au = new MessageEmbed()
.setTitle(`**New Code**`)
.setDescription(`**${message.author} - \`Done send your code\`**`)
.addField(`**If you want see**` , `<#${channel.id}>`)
.setColor("PURPLE")
message.channel.send(au)



}
}