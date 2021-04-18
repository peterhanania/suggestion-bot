const Command = require('../../structures/Command');
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'decline',
        aliases: ["sdecline", "declinesuggestion"],
        description: `Decline a suggestion.`,
        category: 'Suggestions',
        cooldown: 3,
        userPermission: ['MANAGE_MESSAGES']
      });
    }

    async run(message, args) {

        let channel;
        if(config.suggestion_channel_id){
          channel = await message.guild.channels.cache.get(config.suggestion_channel_id)
        } else channel = await message.guild.channels.cache.find(c => c.name == "suggestions" && c.type == "text");
  
        if(!channel){
        return message.channel.send(`${message.client.emoji.fail} | I could not find the suggestion channel in the current guild.`)
        };
        
        let messageS = args[0];
        if(!messageS){
          return message.channel.send(`${message.client.emoji.fail} | Please provide me with a message ID`)
        };
  
        
     try {
  
      var suggestionmessage = await channel.messages.fetch(messageS)
      
      } catch {
  
        return message.channel.send(`${message.client.emoji.fail} | I could not find the following message`)
                 
      };
  
      let reason = args.splice(1).join(" ")
      if(!reason) reason = `No Reason Provided`
  
      const description = suggestionmessage.embeds[0].description;
      const footer = suggestionmessage.embeds[0].footer.text;
      
      if(!suggestionmessage.embeds[0]){
          return message.channel.send(`Invalid Suggestion`)
      };
  
      if(suggestionmessage.embeds[0].title !== `New Suggestion`) {
     
          if(suggestionmessage.embeds[0].title === `Suggestion Approved`){
  
                   return message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`${message.client.emoji.fail} | The following suggestion was already approved`).setFooter('https://github.com/peterhanania/suggestion-bot').setTimestamp().setColor('RED'));
  
          } else {
  
                   return message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`${message.client.emoji.fail} | The following suggestion was already Declined`).setFooter('https://github.com/peterhanania/suggestion-bot').setTimestamp().setColor('RED'));
  
          };
          
          
        };
  
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Suggestion Declined')
        .setDescription(`${description}\n\n__**Declined by:**__ ${message.author.tag}\n__**Reason:**__ ${reason}`)
        .setFooter(footer)
        .setColor(message.client.color.red)
  
        suggestionmessage.edit(newEmbed);
        suggestionmessage.reactions.removeAll();
        message.delete();
        
        return message.channel.send(`Successfully declined the suggestion in ${channel}!\n\n${suggestionmessage.url}`)
        .then((s)=>{
            s.delete({timeout: 4000})
        })
  
  
        }
  };
  
  
