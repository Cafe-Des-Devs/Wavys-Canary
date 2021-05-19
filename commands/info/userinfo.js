
const Discord = require('discord.js');
const moment = require('moment');
const { footer, color } = require('../../db/config.json');
moment.locale('fr')

module.exports.run = async(client, message, args) => {

    const member = message.mentions.members.first() || message.member;
    var status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: "Ne pas Déranger",
        offline: "Hors Ligne/Invisible"
    };
    message.channel.send({
        embed: {
            color: color,
            title: `Informations de l'utilisateur **${member.user.tag}**`,
            thumbnail: {
                url: member.user.displayAvatarURL()
            },
            fields: [
                {
                    name: " Pseudo discord: :",
                    value: member.user.username
                },
                {
                    name: "ID :",
                    value: member.id,
                },
                                {
                    name: "Hashtag:",
                    value: member.user.discriminator
                },
                {
                    name: "Création du compte le:",
                    value: moment.utc(member.user.createdAt).format("LL")
                },
                {
                    name: "Joue à:",
                    value: member.user.presence.activities[0] ? member.user.presence.activities[0].name : "Aucun jeu"
                },
                {
                    name: "Status: :",
                    value: status[member.user.presence.status],
                },
                {
                    name: "Date d'arrivée:",
                    value: moment.utc(member.joinedAt).format("LL")
                },
            ],
            footer: {
                text: footer
            }
        }
    })

}

module.exports.help = {
  name: "userinfo",
  cooldown : 10,
  aliases: ["ui"],
  categorie: "info",
}

