newFunction();   
function newFunction() {
    const discordjs = require("discord.js");
    const client = new discordjs.Client();
    const prefix = '!';
    client.on("ready", () => {
        console.log("✅De bot is nu online.");
        client.user.setActivity("!restart"); // Hier moet wat de bot moet spelen komen.
    });
    
    //Hulp command
if (command === "hulp") {

    const log = new Discord.RichEmbed()
    .addField("Er is hulp onderweg!", `<@${message.author.id}>`)
    .setColor('RED')
     channel.send({embed: log});

message.channel.send(embed)
    .catch(console.error)
}
(edited)
    
    client.on('message', message => {
        if (message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
        if (command === 'restart') { 
            const embed = new discordjs.RichEmbed()
                .setTitle("Vraag om Herstart")
                .setDescription("`${message.user}`) Je hebt succesvol om een bot restart gevraagd")
                .setColor('RED');
                message.channel.send(embed)
        .catch(console.log)
        }
    });
    
    client.login("NDU1NDEwNTgwMDgyMTMwOTg0.Df7lsA.ixnVt-q1Fhx_KU2cF9KNcdR8xEQ").catch(console.error);
}

