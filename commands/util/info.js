const { PREFIX, footer, color } = require("../../db/config.json");

const { MessageEmbed } = require("discord.js");



module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
        .setColor(color)
        .setTitle(`Information - ${client.user.username}`)
        .addField("<:avatar:779445529573851147> Nom", `${client.user}`)
        .addField("<:lien:779453613298286592> Description", `Bot emojis et informations`)
        .addField('<a:Loading_3:802225876716093561>  Statistiques:',`<:serveur:779447923880230982> Je gère **${client.channels.cache.size} channels**.\n<:emojie:779459605361065994> Je possède plus de **${client.emojis.cache.size} emojis**.\n<:membres:779448289673609256>Il y a **${message.client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs** qui m'utilisent.`)
        .setThumbnail(client.user.avatarURL())
       .setFooter(footer)
        message.channel.send(embed);
      }


  module.exports.help = {
    name: "bot",
    description : "Renvoie les informations du bot",
    args : false,
    cooldown : 10,
    aliases: [],
    categorie: 'utilitaire',
    }; 