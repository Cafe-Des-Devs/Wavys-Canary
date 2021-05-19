const { PREFIX, footer, color } = require("../../db/config.json");


const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {
  message.delete()

        const embed = new MessageEmbed()
    
    .setColor(color)
    .addField('<:pingbot:802224260848156730> Pong !',`Le ping moyen est de ${new Date().getTime() - message.createdTimestamp} ms`)
    message.channel.send(embed)
  

  };

  module.exports.help = {
    name : "ping",
    description : "Renvoie les commandes du bot",
    args : false,
    cooldown : 10,
    aliases: [],
    categorie: 'utilitaire',
    };
