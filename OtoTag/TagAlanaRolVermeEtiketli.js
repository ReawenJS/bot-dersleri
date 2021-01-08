              client.on("userUpdate", async (oldUser, newUser) => { //reawen
                let sunucu = `sunuuc id`;//reawen
                let kanal = `kanal id`;//reawen
                let taglı = `taglı rol id`;//reawen
              //reawen
                let tag = `taglı sembol`;//reawen
                let untag = `tagsız sembol`;//reawen
              //reawen
                let channel = client.guilds.cache.get(sunucu).channels.cache.get(kanal);//reawen
              //reawen
                if (oldUser.discriminator !== newUser.discriminator) {//reawen
                  if (//reawen
                    newUser.discriminator.includes(tag) &&//reawen
                    !client.guilds.cache//reawen
                      .get(sunucu)//reawen
                      .members.cache.get(newUser.id)//reawen
                      .roles.cache.has(taglı)//reawen
                  ) {//reawen
                    await client.guilds.cache//reawen
                      .get(sunucu)//reawen
                      .members.cache.get(newUser.id)//reawen
                      .roles.add(taglı);//reawen
              //reawen
                    await client.guilds.cache//reawen
                      .get(sunucu)//reawen
                      .members.cache.get(newUser.id)//reawen
                      .setNickname(//reawen
                        client.guilds.cache//reawen
                          .get(sunucu)//reawen
                          .members.cache.get(newUser.id)//reawen
                          .displayName.replace(untag, tag)//reawen
                      );//reawen
              //reawen
               //reawen
                    channel.send(`${newUser} adlı kullanıcı "${tag}" sembolünü kullanıcı adına ekleyerek ailemize katıldı.`);//reawen
                  }//reawen
                  if (//reawen
                    !newUser.discriminator.includes(tag) &&//reawen
                    client.guilds.cache//reawen
                      .get(sunucu)//reawen
                      .members.cache.get(newUser.id)//reawen
                      .roles.cache.has(taglı)//reawen
                  ) {//reawen
                    await client.guilds.cache//reawen
                      .get(sunucu)//reawen
                      .members.cache.get(newUser.id)//reawen
                      .roles.remove(taglı);//reawen
              //reawen
                    await client.guilds.cache//reawen
                      .get(sunucu)//reawen
                      .members.cache.get(newUser.id)//reawen
                      .setNickname(//reawen
                        client.guilds.cache//reawen
                          .get(sunucu)//reawen
                          .members.cache.get(newUser.id)//reawen
                          .displayName.replace(tag, untag)//reawen
                      );//reawen
                    channel.send(`${newUser} adlı kullanıcı "${tag}" sembolünü kullanıcı adından kaldırarak ailemizden ayrıldı.`);//reawen
                  }//reawen
                }//reawen
              });//reawen
//reawen

Etiketine tagınızı yazana rol verir. 

NOT: Untag'a tagınızı yazarak değişmemesini sağlayabilirsiniz.
