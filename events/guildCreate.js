const { MessageEmbed, Collection } = require("discord.js");
const { footer, color, owner, prefix } = require('../db/config.json');

module.exports = (guild) => {
  let client = guild.client;

  const embed = new MessageEmbed()
    .setDescription(`<a:i_blobjoin:829014356590854155> **| Nouveau serveur ! **`+ "`"+ guild.name +"`" + ` **est le ${client.guilds.cache.size}ème serveur où l'on m'a ajouté !**`)
    .setColor(color)
    
  client.channels.cache.get('829040582323208263').send(embed);
}