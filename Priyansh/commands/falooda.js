module.exports.config = {
  name: "falooda",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "liones",
  description: "Summer Sweet",
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
"https://i.imgur.com/czaHnnY.jpg",
"https://i.imgur.com/BX77er9.jpg",
"https://i.imgur.com/qpUGNWB.jpg",
"https://i.imgur.com/Ed4XVdZ.jpg",
  ];
	 var callback = () => api.sendMessage({body:`Made by\n\n 𝐋𝐢𝐎𝐧𝐞𝐒𝐬 ♡ `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
