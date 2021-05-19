const { PREFIX, footer, color } = require("../../db/config.json");


const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {
    message.delete()
    const embed = new MessageEmbed()    
    .setColor(color)
    .setTitle('Café Des Devs')
    .setDescription("`Pour les dévelopeurs par les développeurs`")
    .addField('<:wunpuscadeau:805496505208799272> __Qui somme nous ?__',`Café des devs est un serveur fait et pour l'entraide entre développeurs que ce soit débutant, amateur ou même professionnel ! Nous ne faisons aucune critiques, mais nous sommes là pour aider et soutenir les petits comme grands développeur pour leurs projets.`)
    .addField('<:WumpusHello:805497940227260467> __Quel est notre histoire ?__',"Nous avions pour notre première fois ouvert en `15/03/2016`, nous avions atteint les `140 000` membres mais vue que notre sécurité était assez basse nous avions été **raid** 2 fois et le dernier à était fatal et nous avions donc tout t’arrête.")
    .addField('<:WumpusCrown:802290308535943190> __Pourquoi avoir repris le concept ?__',`Je pourrais vous faire tout un paragraphe inutile pour vous expliquer pourquoi, mais je vais me contenter de vous dires que le faites d'aider des personnes et de les soutenir me plaît beaucoup.`)
    .addField('<:emoji_79:805907705113870356> __Quel sont nos statistiques ?__',`Aujourd'hui nous comptons plus de `+"`"+`${message.guild.members.cache.filter(m => !m.user.bot).size}`+"`"+` membres sur le serveur.`)
   .setImage('https://cdn.discordapp.com/attachments/802200276685684736/813409249971404860/PSS_2.png')
    message.channel.send(embed).then(msg => {
        msg.react('🗑')
        const filter = (reaction, user) => {
          return ['🗑'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
          msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '🗑') {
                msg.delete()
            } 
          }).catch(collected => {console.log('infos délai expired')
          })     
        });
  };

  module.exports.help = {
    name : "cd",
    description : "Renvoie les commandes du bot",
    args : false,
    cooldown : 10,
    aliases: [],
    categorie: 'utilitaire',
    };