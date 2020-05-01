const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#FF0000')
.setTitle('» Levole Komut Grupları')
.setTimestamp()
.addField('» -Çal- Belirtilen müziği oynatmayı sağlar.', prefix + 'çal ')
.addField('» -Radyo- Radyoyu açmanızı sağlar.', prefix + 'radyo')
.addField('» -Ses- Müziğin sesini ayarlarsınız.', prefix + 'ses 1/100')
.addField('» -Geç- Sıradaki müziğe geçiş yapar.', prefix + 'geç')
.addField('» -Çalan- Çalan şarkı hakkında bilgi verir.', prefix + 'çalan')
.addField('» -Duraklat- Müziği durkaklatır.', prefix + 'duraklat')
.addField('» -Devam- Müziği devam ettirir.', prefix + 'devam')
.addField('» -Sıra- Kuyruğu görürsünüz.', prefix + 'sıra')
.setFooter('© 2011  Levole', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','komutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};