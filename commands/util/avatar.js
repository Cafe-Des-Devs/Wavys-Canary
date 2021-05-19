const Discord = require("discord.js");
const { color, footer } = require("../../db/config.json");

module.exports.run = async (bot, message, args) => {

 let mentionedUser = message.mentions.members.first() || message.member;
 
 const membre = message.mentions.members.first() || message.member;
 

 let avatarembed = new Discord.MessageEmbed()

 .setImage(mentionedUser.user.displayAvatarURL({ format: 'webp' , dynamic: true, size: 2048 }))
 .setColor(color)
 .setTitle(`<:avatar:779445529573851147> Avatar de ${membre.user.tag}`)
 .setFooter(footer)
 .setDescription(`[Lien de l'avatar](${mentionedUser.user.displayAvatarURL()})`);

 message.channel.send(avatarembed).catch(console.error)
}

module.exports.help = {
 name: "avatar",
 cooldown : 10,
 aliases: [],
 categorie: 'utilitaire',
}
