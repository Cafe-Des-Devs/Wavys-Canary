const { parse } = require("twemoji-parser");
const { Discord, MessageEmbed } = require("discord.js");
const { color } = require('../../db/config.json');



module.exports.run = async(bot, message, args) => {

        if (!message.member.hasPermission("MANAGE_EMOJIS")) {
            return message.channel.send(`**Vous n'avez pas l'autorisation d'utiliser cette commande** <:ltDND:791708181306540083>`)
        }

        const emoji = args[0];
        if (!emoji) return message.channel.send(`Veuillez me donner un emoji !`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
              customemoji.animated ? "gif" : "png"
            }`;
            const name = args.slice(1).join(" ");
            message.guild.emojis.create(
                `${Link}`,
                `${name || `${customemoji.name}`}`
            ).catch(error => {
                console.log(error)
            })
            const Added = new MessageEmbed()
                .setTitle(`<a:diamond:802225371680473088> L'emoji a été ajouté!`)
                .setColor(color)
                .setDescription(`__**Inforamtions:**__\n\n<:role:779460265367699456> **Nom:** \`${name || `${customemoji.name}`}\`\n<:sherif:779453979973124127> **Identifiant:** \`${customemoji.id}\`\n<:color:779441919947702322> **Aperçu:** [Clique ici](${Link})`)
                .setImage(`${Link}`)
            return message.channel.send(Added).catch(e => {
                console.log(e)
            })
        } else {
            let CheckEmoji = parse(emoji, {
                assetType: "png"
            });
            if (!CheckEmoji[0])
                return message.channel.send(`Veuillez me donner un emoji valide !`);
            message.channel.send(
                `Vous pouvez utiliser des emoji normaux sans ajouter de serveur !`
            );
        }
    }
    module.exports.help = {
        name: 'addemoji',
        aliases: ["ae"],
        categorie: 'utilitaire',
        } 
