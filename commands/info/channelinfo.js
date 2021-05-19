const Discord = require('discord.js');
const moment = require('moment');
const { footer, color } = require('../../db/config.json');
moment.locale('fr')

module.exports.run = async(bot, message, args) => {
    message.delete()

    var channel_info = new Discord.MessageEmbed()
        .setTitle("<:IconStatusWebOnline:807327553693024257> Informations sur ce channel:")
        .setDescription(`<:IconInsights:807328734344380527> **Nom du salon:**` +"<#" + message.channel.id + ">" + `\n<:IconFileTxt:807317815018913834> **Identifiant:** ${message.channel.id}\n<:ItemPotion:807317361811390465> **Type de salon:** ${message.channel.type}\n<:IconServerDiscovery:807317393520721930> **Date de création:** ${moment.utc(message.channel.createdAt).format("LL")}`)
        .setFooter(footer)
        .setColor(color)
    message.channel.send(channel_info)
}

module.exports.help = {
    name: "channel",
    aliases: [],
    categorie: "info",
}