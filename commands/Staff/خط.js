const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "خط",
  run: async (client, message, args, db) => {
 
    message.delete()

    let m = new MessageEmbed()
    .setDescription(`**${message.author} - \`You don't have Permission\`**`)
    .setColor("RED")
    if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send(m)
    
    message.channel.send(`https://cdn.discordapp.com/attachments/941830984297492553/941849196720431104/490285166288437249.png`)


}
}