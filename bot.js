const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Streaming Code By : OBX King Dom`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Code By :! vM , itzZa1D.#8866 `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`test`,"http://twitch.tv/ImD3s_x")
client.user.setStatus("online")
});



 client.login("process.env.TOKEN100");
