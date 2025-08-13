module.exports.config = {
  name: "couple",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "lioness",
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
"https://i.imgur.com/vAFYHhn.jpeg",
"https://i.imgur.com/eMXfW8D.jpeg",
"https://i.imgur.com/jbvjPj7.jpeg",
"https://i.imgur.com/tWXYJcT.jpeg",
"https://i.imgur.com/8yhdq7B.jpeg",
"https://i.imgur.com/mmYv477.jpeg",
"https://i.imgur.com/5f1Pnvd.jpeg",
"https://i.imgur.com/vnUC6j1.jpeg",
"https://i.imgur.com/MkEY9Zp.jpeg",
"https://i.imgur.com/FIiy6Dx.jpeg",
"https://i.imgur.com/PmlqxOu.jpeg",
"https://i.imgur.com/h2CqoXP.jpeg",
"https://i.imgur.com/2slny4H.jpeg",
"https://i.imgur.com/nMYa1AD.jpeg",
"https://i.imgur.com/RNMajEx.jpeg",
"https://i.imgur.com/Q5iGbxE.jpeg",
"https://i.imgur.com/jxuMZbR.jpeg",
"https://i.imgur.com/hAswV0l.jpeg",
"https://i.imgur.com/YYuXk6W.jpeg",
"https://i.imgur.com/I5wmuoj.jpeg",
"https://i.imgur.com/WB8LQPR.jpeg",
"https://i.imgur.com/BKgdfZh.jpeg",
"https://i.imgur.com/b3ePj3w.jpeg",
"https://i.imgur.com/WnTLCVb.jpeg",
"https://i.imgur.com/qPuQkeu.jpeg",
"https://i.imgur.com/B2uQCng.jpeg",
"https://i.imgur.com/soGu6gr.jpeg",
"https://i.imgur.com/r7VOLvP.jpeg",
"https://i.imgur.com/PKM0xAF.jpeg",
"https://i.imgur.com/ZFiNIqc.jpeg",
  ];
	 var callback = () => api.sendMessage({body:`🌹تمہیـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـں چـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـاہـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـا ہیـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـں تمہیـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـں💮✍️📚🌹

🌹ہــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـی چــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـاہیــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـں گـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـے💮✍️📚🌹

🌹تـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـم ســـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـے خــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـاصَ میــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـری 💮✍️📚🌹

🌹 زندگـــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـی میـــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـں کــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـوئـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـی💮✍️📚🌹

🌹 نہیـــﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـں💮✍️📚🌹 \n 𝗗𝗮𝗻𝗶 𝗫 𝗠𝗶𝘀𝗵𝗶 ♡: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
