
const Discord = require('discord.js');
const { footer, color, id_bot } = require('../../db/config.json');

exports.run = (client, message, args) => {
    var invite = new Discord.MessageEmbed()
        .setDescription(`Ajouter ${client.user.username} sur votre serveur discord !`)
        .addField("__Lien d'invitation avec les permissions d'administrateurs :__", `[Cliquez ici](https://discord.com/oauth2/authorize?client_id=${id_bot}&scope=bot&permissions=8)`)
        .addField("__Lien d'invitation avec les permissions que vous pouvez personnaliser :__", `[Cliquez ici](https://discord.com/oauth2/authorize?client_id=${id_bot}&scope=bot&permissions=2146958847)`)
        .setFooter(footer)
        .setColor(color)
    message.channel.send(invite)
}

module.exports.help = {
    name: "invite",
    description : "Permet d'inviter le bot",
    categorie: "info",
    usage: "+invite",
    aliases: []
}