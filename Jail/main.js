> Öncelikle jail attığımızda, jailli olanların çıkıp girdiklerinde bir daha jail'e atılmaları için basit bir sistem yapacağız.

> Herhangi bir database modülü ile bunu yapabilirsiniz ( quick.db, wio.db )

> Öncelikle jail kodumuz'a eklememiz gereken bir şey var:

db.set(`jailli.${hedefKişi.id}`, "Jail");
> Burada veritabanına hedef kişi'nin jailli olduğunu kaydettik. Şimdi gelelim taramasına.

> Main dosyamızda client.on ile guildMemberAdd eventimizi tanıtıyoruz.

1: İlk önce mainimizde taslağımızı koyalım. Burada sunucuya bir üye katıldığında ne yapılacağını tanımlıyoruz.
client.on("guildMemberAdd", reawenMember => {
})

2: Üyenin jailli olup olmadığını sorgulatalım.
client.on("guildMemberAdd", reawenMember => {
if (!db.fetch(`jailli.${reawenMember.id}`)) return console.log(`${reawenMember.id} ID'li kullanıcı jailli değil.`);
if (db.fetch(`jailli.${reawenMember.id}`)) {
}
})

3: Sorgulatmamızın sonucunda eğer üye jailli ise bota ne yaptıracağımızı yazalım.
client.on("guildMemberAdd", reawenMember => {
if (!db.fetch(`jailli.${reawenMember.id}`)) return console.log(`${reawenMember.id} ID'li kullanıcı jailli değil.`);
if (db.fetch(`jailli.${reawenMember.id}`)) {
reawenMember.roles.set(["jail rolü idsi"])
}
})

Bu günlük bu kadar yeteceğini düşünüyorum. Bir sonraki püf noktamızda "Ayarlamalı Loglandırma Sistemi" yapmayı planlıyorum.

instagram: helios_afkk
discord: Reawen#0001
