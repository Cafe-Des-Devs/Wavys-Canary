
const Discord = require("discord.js");
const { footer, color} = require("../../db/config.json");

module.exports.run = async (bot, message, args) =>{
    message.delete()

    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;

    const banperm = new Discord.MessageEmbed()
    .addField(`<a:modo_2:802213536914735184> **Permission:**`,`Vous n'avez pas la permission de ban !`)
    .setColor(color)
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(banperm).catch(console.error);

        const banerreur = new Discord.MessageEmbed()
        .addField(`<:WumpusHypeBalance:814204748605554757> **Erreur:**`,`Je n'ai pas la permission de ban !`)
        .setColor(color)
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(banerreur).catch(console.error);

        const banhelp = new Discord.MessageEmbed()
        .addField(`<:Wumpus_Star:802290318505672744> **Help commande:**`,`ban[@pseudo ou identifiant] (raison)\n Exemple : ban @ZeTro#7819 test`)
        .setColor(color)
        if (!args[0]) return message.channel.send(banhelp).catch(console.error);


        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const banhelp2 = new Discord.MessageEmbed()
        .addField(`<:Wumpus_Star:802290318505672744> **Aides:**`,`Vous devez déifnir un utilisateur !`)
        .setColor(color)
        if (!user) return message.channel.send(banhelp2).catch(console.error);
        let verication_user = message.guild.members.cache.find(m => m.id === user.user.id);
        const banerr = new Discord.MessageEmbed()
        .addField(`<:membres:779448289673609256> **Erreur:**`,`L'utilisateur définit est introuvable !`)
        .setColor(color)
        if (!verication_user) return message.channel.send(banerr).catch(console.error);
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

        verication_user.ban(raison).then()
            const banchan =  new Discord.MessageEmbed()
            .setColor(color)
            .setTimestamp()
            .addField('<:proctection:779449459943014420> Un membre a été banni:',`<a:modo_2:802213536914735184> **Modérateur:**\n ${message.author}\n\n<:avatar:779445529573851147> **Membre:**\n<@${user.user.id}>\n\n<:doc:779447568509698058> **Raison:**\n ${raison}`)
            .setFooter(footer)
            message.channel.send(banchan)


            .then()
            const banuser =  new Discord.MessageEmbed()
            .setColor(color)
            .setTimestamp()
            .addField('<:acces_denied:779458383618506782> Vous avez été banni:',`<:serveur:779447923880230982> **Serveur:**\n${message.guild.name}\n\n<a:modo_2:802213536914735184> **Modérateur:**\n ${message.author}\n\n<:avatar:779445529573851147> **Membre:**\n<@${user.user.id}>\n\n<:doc:779447568509698058> **Raison:**\n ${raison}`)
            .setFooter(footer)
            user.send(banuser)
};

module.exports.help = {
    name: "ban",
    aliases: [],
    categorie: "moderation",
}
