> Şimdi burada basit bir şey yapcaz aslında. Mesajı yazan üyenin tagı varsa ona taglı rolü verdircez.

> Yine alalım mesaj eventimizi.

client.on("message", r => {
if (r.author.user.username.includes("tagınızı yazın")) {
r.roles.add("taglı rolü")
}
})

> Bu kadar basit aslında ama, bir de tersini yapalım. Taglı rolü varsa fakat üyenin tagı yoksa rolü alsın.

client.on("message", r => {
if (r.roles.cache.has("taglı rol")) {
if (!r.author.user.username.includes("tagınızı yazın")) {
r.roles.remove("taglı rolü")
  }
 }
})

> Şimdi bu ikisini aynı eventte birleştirelim.

client.on("message", r => {
if (r.author.user.username.includes("tagınızı yazın")) {
r.roles.add("taglı rolü")
} else if (!r.author.user.username.includes("tagınızı yazın")) {
r.roles.remove("taglı rolü")
}
})

> Bunu kullanmak bir yerde mantıklı olabilir ama siz yine de diğer sistemleri kullanın.
