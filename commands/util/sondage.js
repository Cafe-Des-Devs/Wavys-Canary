const Discord = require('discord.js')
const { color } = require('../../db/config.json')



module.exports.run = async(bot, message, args) => {
message.delete()
        if(!args.join(" ")) return message.reply("**Rentrez votre question !**")

        let firstPollEmbed = new Discord.MessageEmbed() 
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true}))
            .setDescription("```\n⌛ Préparation du sondage\n```")
        let secondPollEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true}))
            .setColor(color)
            .setDescription(`**📥 Sondage :** \n \`\`\`\n${args.join(" ")}\n\`\`\``)
        message.channel.send(firstPollEmbed).then((message) => {
            setTimeout(function(){
                message.edit(secondPollEmbed).then(sentMessage => {
                    sentMessage.react('811293201394171934')
                    sentMessage.react('811293227138678795')
                    sentMessage.react('811293276270493757')
                }).catch(error => {
                    message.channel.send(`:x: **| Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
                })
            }, 2000)
        }).catch(error => {
            message.channel.send(`:x: **| Une erreur s'est produite lors de l'exécution de votre commande:**\n\`${error}\``)
        })
    }

    module.exports.help = {
        name: 'sondage',
        aliases: [],
        categorie: 'utilitaire',
        }