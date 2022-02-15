const discord = require('discord.js')
module.exports = {
    name: 'guildMemberAdd',
        async execute(member) {

            let channel = member.guild.channels.cache.get("938764804120788992")
          
          
            channel.send(`${member.user}`).then(msg=>msg.delete({timeout : 5000})) 
  

        }
    }
