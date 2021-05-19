const {Discord, MessageEmbed, Collection } = require('discord.js');
var now = new Date();
const os = require('os');
const ms = require('ms');
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);
const {footer, color, owner, prefix} = require('./../db/config.json')

module.exports = async (message) => {
    const client = message.client;
    if(!message.content.startsWith(client.prefix) || message.author.bot)return;
    
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    // let argument = args.join(" ");
    console.log(args);
    const command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));
    if (!command) return;
  
    // Si il manque un argument
    if(command.help.args && !args.length){
      const embed1 = new MessageEmbed()
      .setColor('#FF5555')
      .setTitle('<a:Neutre:792402460672393226> Erreur commande')
      .setDescription(`\`\`\`diff\n- Il manque un argument\n+ Voici comment fonctionne cette commande : \n${client.prefix}${command.help.name} ${command.help.usage}\`\`\``)
      .setFooter(footer)
      message.channel.send(embed1)
    };
  
    // Si l'utilisateur a la permission ADMIN via le module.exports.help
    if(command.help.permissions && !message.member.hasPermission('ADMINISTRATOR')){
      const embed = new MessageEmbed()
      .setColor(color)
      .setTitle('<a:contre:792402460505276476> Erreur Permission')
      .setDescription(`\`\`\`diff\n- Vous n'avez pas la permission\n+ Permission requise: ADMINISTRATEUR\`\`\``)
     .setFooter(footer)
     message.channel.send(embed)
      message.delete()
    }

       // Si l'utilisateur est un owner
    if(command.help.ownerOnly && !owner.includes(message.author.id)) {
      const onlyOwnerErrorEmbed = new MessageEmbed()
        .setColor(color)
        .setTitle(':x: Erreur Permission')
        .setDescription('Seulement les créateurs de TekLog ont le droit d\'exécuter cette commande')
      return message.channel.send(onlyOwnerErrorEmbed)
    }

    if (!client.cooldowns.has(command.help.name)) {
        client.cooldowns.set(command.help.name, new Collection());
    }
    const timeNow = Date.now();
    const tStamps = client.cooldowns.get(command.help.name);
    const cdAmount = (command.help.cooldown || 5) * 1000;
  
    if (tStamps.has(message.author.id)) {
      const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;
  
      if (timeNow < cdExpirationTime) {
        timeLeft = (cdExpirationTime - timeNow) / 1000;
        return message.reply(`merci d'attendre ${timeLeft.toFixed(0)} seconde(s) avant de ré-utiliser la commande \`${command.help.name}\`.`);
      }
    }
  
    tStamps.set(message.author.id, timeNow);
    setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  const devs = ["dev","devs", "developpeur","développeur","développeurs","developper","developpers"]
  if (devs.some(word => message.content.toLowerCase().includes(word))){ 
  message.react(':ItemPotion:807317361811390465')
  }
    command.run(client, message, args);
}