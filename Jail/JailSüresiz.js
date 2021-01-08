const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");
const ayar = require("./config.js")


module.exports.run = async (client, message, args) => {
let embed = new Discord.MessageEmbed().setColor("010000").setFooter("Reawen tarafından geliştirildi.").setTimestamp()
if (!message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.cache.some(r => ["", "", "", "", "", "", ""].includes(r.id))) return message.channel.send(embed.setDescription("Yeterli yetkin yok."));
let hedefKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let sebep = args.splice(1).join(" ") || "Sebep belirtilmedi.";
if(!hedefKişi) return message.channel.send(embed.setDescription("Üye belirtmelisin."));


hedefKişi.roles.set([""]);
db.set(`Cezali.${hedefKişi.id}`, "Cezali");
db.push(`Sicil.${hedefKişi.id}`, {Sicil: "Jail", Yetkili: message.author, Sebep: sebep, Tarih: Date.now()});
message.channel.send(embed.setDescription(`${hedefKişi} adlı üye ${message.author} tarafından \`${reason}\` sebebi ile cezalıya atıldı!`));
message.guild.channels.cache.get("").send(embed.setDescription(`${hedefKişi} adlı üye ${message.author} tarafından \`${reason}\` sebebi ile cezalıya atıldı!`));

};

exports.config = {
  name: "jail",
  guildOnly: true,
  aliases: ["cezali", "cezalı"],
};

> Basit bir jail kodudur. Herhangi bir hatada bana başvurabilirsiniz.
Discord: Reawen#0001
Instagram: helios_afkk
