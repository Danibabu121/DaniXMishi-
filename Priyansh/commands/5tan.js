module.exports.config = {
  name: "5tan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Queen",
  description: "Islamamic",
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
"https://i.imgur.com/40O9Mlp.jpg ",
"https://i.imgur.com/yuwdROE.jpg",
"https://i.imgur.com/CqcFhR1.jpg",
"https://i.imgur.com/Bk474E8.jpg",
"https://i.imgur.com/ctJoyRM.jpg",
"https://i.imgur.com/m4acT02.jpg",
"https://i.imgur.com/70kxRmz.jpg",
"https://i.imgur.com/9Et1rbX.jpg",
"https://i.imgur.com/dT1ZiqH.jpg",
"https://i.imgur.com/P70Lz8s.jpg",
"https://i.imgur.com/uwPwKn3.jpg",
"https://i.imgur.com/X36CWWG.jpg",
"https://i.imgur.com/S94CERl.jpg",
"https://i.imgur.com/cbuAY7C.jpg",
"https://i.imgur.com/KPS829d.jpg",
"https://i.imgur.com/hGhy3Xs.jpg",
"https://i.imgur.com/ztJn28u.jpg",
"https://i.imgur.com/raAP1dX.jpg",
"https://i.imgur.com/v7tb2u3.jpg",
"https://i.imgur.com/MFYh8qv.jpg",
"https://i.imgur.com/sxEq59F.jpg",
"https://i.imgur.com/0pp8XVh.jpg",
"https://i.imgur.com/TnyBESo.jpg",
"https://i.imgur.com/2N6mLj1.jpg",
"https://i.imgur.com/MxdtS39.jpg",
"https://i.imgur.com/tRSSVMR.jpg",
"https://i.imgur.com/BReIcIs.jpg",
"https://i.imgur.com/z4LZGyW.jpg",
"https://i.imgur.com/z0huhBb.jpg",
"https://i.imgur.com/VeyOnvf.jpg", "https://i.imgur.com/RX2Nc60.jpg", "https://i.imgur.com/3URXD5v.jpg", "https://i.imgur.com/29zLmnr.jpg", "https://i.imgur.com/CDOuiEf.jpg", "https://i.imgur.com/XGi0wOc.jpg", "https://i.imgur.com/Gb0LpIr.jpg", "https://i.imgur.com/WfaX7Z3.jpg", "https://i.imgur.com/ggami5z.jpg"
  ];
	 var callback = () => api.sendMessage({body:`°•𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐏𝐡𝐨𝐭𝐨𝐬\n\n𝐂𝐨𝐝𝐝𝐞𝐝 𝐁𝐲\n\n★𝐋𝐢𝐎𝐧𝐞𝐒𝐬 ♡★\nＮｕｍｂｅｒ ｏｆ Ｐｈｏｔｏｓ: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
