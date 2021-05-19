const { MessageEmbed } = require("discord.js");
const os = require('os')
const fs = require('fs');
const ms = require('ms')
const { footer, color } = require('../../db/config.json');
module.exports.run = (client, message, args) => {
      const embed = new MessageEmbed()
    
      .setColor(color)
      .setTitle(`Informations et statistique du serveur ${message.guild.name}`,true)
      .addField("Propriétaire : ", `${message.guild.owner.user}`,true)
      .addField("Région : ", "`"+`${message.guild.region}`+"`",true)
      .addField(`Membres`,"`"+`${message.guild.memberCount}`+"`"+ " membres",true)
      .addField(`Humains :`,"`"+`${message.guild.members.cache.filter(m => !m.user.bot).size}`+"`"+ " humains",true)
      .addField(`Bots`,"`"+`${message.guild.members.cache.filter(m => m.user.bot).size}`+"`"+ " bots",true)
      .addField("Emojis : ", "`"+`${message.guild.emojis.cache.size}`+"`"+ " emojis",true)
      .addField("Rôles : ", "`"+ `${message.guild.roles.cache.size}`+"`"+ " roles",true)
      .addField(`AFK Délai :`, "`"+`${message.guild.afkTimeout}`+"`",true)
      .addField(`AFK Salon :`, "`"+`${message.guild.afkChannel}`+"`",true)
      .addField(`Salon texte:`,"`"+`${message.guild.channels.cache.filter(ch => ch.type=="text").size}`+"`"+ " salons",true)
      .addField(`Salon vocaux:`,"`"+`${message.guild.channels.cache.filter(ch => ch.type=="voice").size}`+"`"+ " salons",true)
      .addField(`Catégories:`,"`"+`${message.guild.channels.cache.filter(ch => ch.type=="category").size}`+"`"+ " catégories",true)
      .addField(`Protections :`,"`"+`${message.guild.verificationLevel}`+"`",true)
     .addField("Création du serveur : ", "`"+`${message.guild.createdAt.getDate()}/${1 + message.guild.createdAt.getMonth()}/${message.guild.createdAt.getFullYear()}`+"`",true)
        .setThumbnail(message.guild.iconURL({dynamic: true}))
        .setFooter(footer)
        .setTimestamp()
        message.channel.send(embed)

}

module.exports.help = {
    name: "serverinfo",
    description : "Créer un embed pour user info",
    args : false,
    cooldown : 10,
    usage : "<mention d'un utilisateur>",
    aliases: ["si"],
    categorie: "info",
    };