const Discord = require("discord.js");
const client = new Discord.Client();
const token = "ODI5OTQyMTI0NTU2MzIwNzkw.YG_d1g.0s63zvUmCvmNXlmuMCW0UFUC1_k";

client.login(token);

client.on("message", message => {
  if (message.content.toLowerCase() === "hello")
    message.channel.send("Ask or say anything.");
  else if (message.content() === "all error codes")
    message.channel.send("6589-1 - Unable to run command due to the lack of specific Permissions."
    );
});
