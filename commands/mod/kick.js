
const Discord = require("discord.js");
const { footer, color } = require("../../db/config.json");

module.exports.run = async (bot, message, args) =>{
  message.delete()

  if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;
  const kickperm = new Discord.MessageEmbed()
  .addField(`<a:modo_2:802213536914735184> **Permission:**`,`Vous n'avez pas la permission de kick !`)
  .setColor(color)
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(kickperm).catch(console.error);

      const kickerreur = new Discord.MessageEmbed()
      .addField(`<:WumpusHypeBalance:814204748605554757> **Erreur:**`,`Je n'ai pas la permission de ban !`)
      .setColor(color)
      if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(kickerreur).catch(console.error);

      const kickhelp = new Discord.MessageEmbed()
      .addField(`<:Wumpus_Star:802290318505672744> **Help commande:**`,`kick[@pseudo ou identifiant] (raison)\n Exmple : ban @ZeTro#7819 test`)
      .setColor(color)
      if (!args[0]) return message.channel.send(kickhelp).catch(console.error);
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      const kickhelp2 = new Discord.MessageEmbed()
      .addField(`<:Wumpus_Star:802290318505672744> **Aides:**`,`Vous devez déifnir un utilisateur !`)
      .setColor(color)
      if (!user) return message.channel.send(kickhelp2).catch(console.error);
      let verication_user = message.guild.members.cache.find(m => m.id === user.user.id);
      const kickerr = new Discord.MessageEmbed()
      .addField(`<:membres:779448289673609256> **Erreur:**`,`L'utilisateur définit est introuvable !`)
      .setColor(color)
      if (!verication_user) return message.channel.send(kickerr).catch(console.error);
      var raison = args.slice(1).join(" ");
      if (!raison) {
          var raison = "Aucune raison";
      }
      const banself = new Discord.MessageEmbed()
      .addField(`<:acces_denied:779458383618506782> **Erreur:**`,`Vous ne pouvez pas vous bannir !`)
      .setColor(color)
      if (verication_user.user.id === message.author.id) return message.channel.send(banself).catch(console.error);

      const banerr2 = new Discord.MessageEmbed()
      .addField(`<:acces_denied:779458383618506782> **Erreur:**`,`L'utilisateur ne peut pas être banni !`)
      .setColor(color)
      if (!verication_user.kickable) return message.channel.send(banerr2).catch(console.error);
      verication_user.kick().catch(console.error);

      const kickuser =  new Discord.MessageEmbed()
      .setColor(color)
      .setTimestamp()
      .addField('<:acces_denied:779458383618506782> Vous avez été exuplsé:',`<:serveur:779447923880230982> **Serveur:**\n${message.guild.name}\n\n<a:modo_2:802213536914735184> **Modérateur:**\n ${message.author}\n\n<:avatar:779445529573851147> **Membre:**\n<@${user.user.id}>\n\n<:doc:779447568509698058> **Raison:**\n ${raison}`)
      .setFooter(footer)
      verication_user.send(kickuser)
      const kickchan =  new Discord.MessageEmbed()
      .setColor(color)
      .setTimestamp()
      .addField('<:proctection:779449459943014420> Un membre a été expulsé:',`<a:modo_2:802213536914735184> **Modérateur:**\n ${message.author}\n\n<:avatar:779445529573851147> **Membre:**\n<@${user.user.id}>\n\n<:doc:779447568509698058> **Raison:**\n ${raison}`)
      .setFooter(footer)
      message.channel.send(kickchan)
};

module.exports.help = {
  name: "kick",
  aliases: [],
  categorie: "moderation",
}
