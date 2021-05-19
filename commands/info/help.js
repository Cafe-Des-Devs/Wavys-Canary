const { prefix, footer, color, owner } = require("../../db/config.json");
const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {
    let data = [];
    let { commands } = message.client;

    if (!args.length) {
        let obj = {
            util: {
                name: "Commandes Utilitaires:",
                cmds: []
            },
            info: {
                name: "Commandes Information:",
                cmds: []
            },
            fun: {
                name: "Commandes Fun:",
                cmds: []
            },
            mod: {
                name: "Commandes de Modération:",
                cmds: []
            },
            createur: {
                name: "Commandes Créateur:",
                cmds: []
            }
        };
    
        for (let cmd of commands) {
            cmd = cmd[1];
            if (cmd.help && cmd.help.categorie) {
                switch (cmd.help.categorie) {
                    case "utilitaire":
                        obj.util.cmds.push(cmd);
                        break;
                    case "info":
                        obj.info.cmds.push(cmd);
                        break;
                    case "fun":
                        obj.fun.cmds.push(cmd);
                        break;
                    case "moderation":
                        obj.mod.cmds.push(cmd);
                        break;
                    case "createur":
                        obj.createur.cmds.push(cmd);
                        break;
                    default:
                        break;
                        
                }
            }
    
        };
        let embed = new MessageEmbed()
            .setAuthor(`Help - ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            .setDescription(`Nombre de commandes : \`${commands.size}\`\nLe préfix sur le serveur est : \`${prefix}\``)
            .setColor(color)
    
        Object.keys(obj).forEach((k, i) => {
            let name = obj[k].name;
            let cmds = obj[k].cmds;
            let names = "";
            for (const cmd of cmds) {
                names = names + '`' + cmd.help.name + '`, ';
            }
            if (names.length !== 0) embed.addField(name, names, false);
        });
    
        return message.channel.send(embed);
    }

    let name = args[0].toLowerCase();
    let command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command || (command.conf.enabled === false && !owner.includes(message.author.id))) {
        return message.reply('Ce n\'est pas une commande valide !');
    }

    data.push(`**Nom:** ${command.help.name}`);

    if (command.help.aliases) data.push(`**Alias:** ${command.help.aliases.join(', ')}`);
    if (command.help.description) data.push(`**Description:** ${command.help.description}`);
    // if (command.help.usage) data.push(`**Utilisation:** ${prefix}${command.help.name} ${command.help.usage}`);

    data.push(`**Cooldown:** ${command.help.cooldown || 3} secondes`);

    message.channel.send(data, { split: true });
}

module.exports.help = {
    name : "help",
    aliases: ["h"],
    description : "Renvoie les commandes du bot",
    categorie: "info",
    args : false,
    cooldown : 10,
    }; 