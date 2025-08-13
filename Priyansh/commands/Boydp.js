module.exports.config = {
  name: "boydp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mr Chand",
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
"https://i.imgur.com/tV0zLqz.jpeg",
"https://i.imgur.com/5q2FdEm.jpeg",
"https://i.imgur.com/IF7LFAg.jpeg",
"https://i.imgur.com/pbifOst.jpeg",
"https://i.imgur.com/FrcTt83.jpeg",
"https://i.imgur.com/1Qdb5yQ.jpeg",
"https://i.imgur.com/oIJEtEe.jpeg",
"https://i.imgur.com/xDOr0Q1.jpeg",
"https://i.imgur.com/P5ocadV.jpeg",
"https://i.imgur.com/6aYyYBK.jpeg",
"https://i.imgur.com/xjJBSG6.jpeg",
"https://i.imgur.com/OGtxEtQ.jpeg",
"https://i.imgur.com/rLSTFSr.jpeg",
"https://i.imgur.com/vpadJrF.jpeg",
"https://i.imgur.com/jOlbEiH.jpeg",
"https://i.imgur.com/QJH8yX2.jpeg",
"https://i.imgur.com/onbQxWN.jpeg",
"https://i.imgur.com/IJ06YXP.jpeg",
"https://i.imgur.com/JO51dV7.jpeg",
"https://i.imgur.com/WaM2WvN.jpeg",
"https://i.imgur.com/twPUGFW.jpeg",
"https://i.imgur.com/B9EZLI7.jpeg",
"https://i.imgur.com/8Me6mQI.jpeg",
"https://i.imgur.com/01NBo9r.jpeg",
"https://i.imgur.com/QB4ArDa.jpeg",
"https://i.imgur.com/qHRK0Ic.jpeg",
"https://i.imgur.com/K2qSbvJ.jpeg",
"https://i.imgur.com/3tyzZW8.jpeg",
"https://i.imgur.com/VasdCUq.jpeg",
"https://i.imgur.com/Aa9Z7zc.jpeg",
  ];
	 var callback = () => api.sendMessage({body:`editor 𝗗𝗮𝗻𝗶 𝗫 𝗠𝗶𝘀𝗵𝗶\nجـــب کاٹنـــے کـــی اوقـــات نہیـــں ہـــو نـــا🔥🥱😎

تـــو بھونکنـــا بھـــی نہیـــں چاہیـــے 💯💥😈

꧁⚔️☬: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
