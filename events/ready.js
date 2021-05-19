const {Discord} = require('discord.js');

module.exports = (client) => {
    let { name } = require('../package-lock.json')
    function setActivity(){
        let Gameinfo = ["+help", `la communauté`, `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} membres`,'son café'];
    
        let random = Math.floor(Math.random() * Gameinfo.length);
          
            client.user.setActivity(Gameinfo[random], {
              type: "WATCHING",
            });
        
      }setInterval(setActivity, 1000 * 60 * 0.25)
    console.log(`[ Handler ] : ${client.user.username} est prêt a l'utilisation !`)
}
