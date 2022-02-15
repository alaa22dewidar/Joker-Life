const discord = require("discord.js")
const {MessageEmbed} = require("discord.js")
module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {

        let e = new MessageEmbed()
.setTitle(`**<a:838760885706162226:850388290086371328> \`\`\`Ping Stats\`\`\`**`)
.addField(`> **Client Speed**` , [`**\`\`\`fix\n  〢 ${Date.now() - message.createdTimestamp}ms \`\`\`**`])
.addField(`> **Discord API:**` , [`**\`\`\`fix\n  〢 ${Math.round(client.ws.ping)}ms  \`\`\`**`])
.setColor("RANDOM")
message.channel.send(e)



    }
}