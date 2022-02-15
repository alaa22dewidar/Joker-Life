const discord = require("discord.js")
const {MessageEmbed} = require("discord.js")
module.exports = {
    name: "help",
    run: async (client, message, args) => {

let help = new MessageEmbed()
.setTitle(`**welcome to help | ${client.user.username}**`)
.setAuthor(message.author.username , message.author.displayAvatarURL({dynamic:true}))
.addField(`**Moderator Command**` , `**>  \`addword\` |  \`delword\`  | \`set-warn-msg\` **`)
.addField(`**General Commands**` , `**> \`ping\` |   \`help\` | \`words\`**` )
.addField(`**Staff Commands**` , `**> \`add\` | \`خط\` | \`store\` | \`op\` **`)
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setColor("PURPLE")
.setFooter(`Dev BY : 'Pablo.#1110 ` , `https://cdn.discordapp.com/avatars/921172655674118204/a_03cda6f80e4fb54df109e517db9561c6.gif?size=4096`)
.setTimestamp()
message.channel.send(help)

    }
}