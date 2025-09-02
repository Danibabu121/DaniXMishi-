module.exports.config = {
  name: "sex2",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "AMIR",
  description: "Chaeyoung Pictures.",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/C7zASDi.jpeg",
"https://i.imgur.com/i6OZnRW.jpeg",
"https://i.imgur.com/nYk9WkC.jpeg",
"https://i.imgur.com/KCtebbp.jpeg",
"https://i.imgur.com/LXbDnoN.jpeg",
"https://i.imgur.com/drNuh03.jpeg",
"https://i.imgur.com/O8blpjf.jpeg",
"https://i.imgur.com/bqH5PN5.jpeg",
"https://i.imgur.com/licTnqn.jpeg",
"https://i.imgur.com/E0uya4N.jpeg",
"https://i.imgur.com/N2SZh8b.jpeg",
"https://i.imgur.com/6YYzLqY.jpeg",
"https://i.imgur.com/qzjBoP7.jpeg",
"https://i.imgur.com/l1XGJhS.jpeg",
"https://i.imgur.com/UYyJbSs.jpeg",
"https://i.imgur.com/TckMRNf.jpeg",
"https://i.imgur.com/TP2SIqg.jpeg",
"https://i.imgur.com/FZIypiW.jpeg",
"https://i.imgur.com/74hKR3S.jpeg",
"https://i.imgur.com/0t4dUQj.jpeg",
"https://i.imgur.com/i80tG7t.jpeg",
"https://i.imgur.com/DgKLqkh.jpeg",
"https://i.imgur.com/VTLSjSv.jpeg",
"https://i.imgur.com/JkXiVYB.jpeg",
"https://i.imgur.com/38CduNx.jpeg",
"https://i.imgur.com/Nmt2YOI.jpeg",
"https://i.imgur.com/9nUvoby.jpeg",
"https://i.imgur.com/kWCnU9B.jpeg",
"https://i.imgur.com/RRzDOsi.jpeg",
"https://i.imgur.com/2tfD4ZV.jpeg","https://i.imgur.com/tgrZqKs.jpeg","https://i.imgur.com/Ud8rSyF.jpeg","https://i.imgur.com/P2d5Muq.jpeg","https://i.imgur.com/bT3RFMq.jpeg","https://i.imgur.com/3KWNZKe.jpeg",
  ];
	 var callback = () => api.sendMessage({body:`Here is a picture of the Chaeyoung \nNumber of photos available: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };module.exports.config = {
  name: "sex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AMIR",
  description: "Chaeyoung Pictures.",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/C7zASDi.jpeg",
"https://i.imgur.com/i6OZnRW.jpeg",
"https://i.imgur.com/nYk9WkC.jpeg",
"https://i.imgur.com/KCtebbp.jpeg",
"https://i.imgur.com/LXbDnoN.jpeg",
"https://i.imgur.com/drNuh03.jpeg",
"https://i.imgur.com/O8blpjf.jpeg",
"https://i.imgur.com/bqH5PN5.jpeg",
"https://i.imgur.com/licTnqn.jpeg",
"https://i.imgur.com/E0uya4N.jpeg",
"https://i.imgur.com/N2SZh8b.jpeg",
"https://i.imgur.com/6YYzLqY.jpeg",
"https://i.imgur.com/qzjBoP7.jpeg",
"https://i.imgur.com/l1XGJhS.jpeg",
"https://i.imgur.com/UYyJbSs.jpeg",
"https://i.imgur.com/TckMRNf.jpeg",
"https://i.imgur.com/TP2SIqg.jpeg",
"https://i.imgur.com/FZIypiW.jpeg",
"https://i.imgur.com/74hKR3S.jpeg",
"https://i.imgur.com/0t4dUQj.jpeg",
"https://i.imgur.com/i80tG7t.jpeg",
"https://i.imgur.com/DgKLqkh.jpeg",
"https://i.imgur.com/VTLSjSv.jpeg",
"https://i.imgur.com/JkXiVYB.jpeg",
"https://i.imgur.com/38CduNx.jpeg",
"https://i.imgur.com/Nmt2YOI.jpeg",
"https://i.imgur.com/9nUvoby.jpeg",
"https://i.imgur.com/kWCnU9B.jpeg",
"https://i.imgur.com/RRzDOsi.jpeg",
"https://i.imgur.com/2tfD4ZV.jpeg","https://i.imgur.com/tgrZqKs.jpeg","https://i.imgur.com/Ud8rSyF.jpeg","https://i.imgur.com/P2d5Muq.jpeg","https://i.imgur.com/bT3RFMq.jpeg","https://i.imgur.com/3KWNZKe.jpeg",
  ];
	 var callback = () => api.sendMessage({body:`Here is a picture of the Chaeyoung \nNumber of photos available: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
