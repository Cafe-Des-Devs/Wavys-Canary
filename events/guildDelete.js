const { MessageEmbed, Collection } = require("discord.js");
const { footer, color, owner, prefix } = require('../db/config.json');

module.exports = (guild) => {
  let client = guild.client;

  const embed = new MessageEmbed()
    .setDescription(`<a:i_blobleave:829014458373242890> **| Serveur quitté ! Le serveur** `+ "`"+ guild.name +"`" + ` **m'a expulsé...**`)
    .setColor(color)
    
  client.channels.cache.get('829040582323208263').send(embed);
}