module.exports.config = {
  name: "inf",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Arun Kumar", // Don't change credits
  description: "Admin and Bot info.",
  commandCategory: "info",
  cooldowns: 1,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": "",
    "moment-timezone": ""
  }
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const request = require("request");
  const fs = require("fs-extra");
  const moment = require("moment-timezone");

  const time = process.uptime();
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  const juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");

  const images = [
    "https://i.postimg.cc/4yVw6tm7/Picsart-23-03-26-11-08-19-025.jpg",
    "https://i.imgur.com/rg0fjQE.jpg",
    "https://i.imgur.com/QcNXYfT.jpg",
    "https://i.imgur.com/WhVSHLB.png"
  ];

  const selectedImage = images[Math.floor(Math.random() * images.length)];
  const imgPath = __dirname + "/cache/juswa.jpg";

  try {
    const callback = () => {
      api.sendMessage({
        body: `🌹𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 🇮🇳

☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎ 𝙰𝚛𝚞𝚗 𝙺𝚞𝚖𝚊𝚛 ☜︎︎︎✰

🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪

𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨 https://www.facebook.com/arun.x76 💞🕊️
𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 👉 @arunkumar_031

====𝗛𝗼𝘄 𝘁𝗼 𝗖𝗿𝗲𝗮𝘁𝗲 𝗔 𝗯𝗼𝘁 ====
𝗩𝗶𝘀𝗶𝘁 𝗮𝗻𝗱 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 ➤ https://www.youtube.com/@mirrykal

✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸 ➤ ${global.config.PREFIX}

🥳 𝗧𝗼𝗱𝗮𝘆'𝘀 𝗗𝗮𝘁𝗲 & 𝗧𝗶𝗺𝗲 🥳 ➤ ${juswa}

⚡ 𝗕𝗼𝘁 𝗨𝗽𝘁𝗶𝗺𝗲 ⚡ ➤ ${hours}:${minutes}:${seconds}

✅ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 ${global.config.BOTNAME} ❤🖤`,
        attachment: fs.createReadStream(imgPath)
      }, event.threadID, () => fs.unlinkSync(imgPath));
    };

    request(encodeURI(selectedImage)).pipe(fs.createWriteStream(imgPath)).on("close", callback);

  } catch (err) {
    console.log("❌ Error in inf command:", err);
    return api.sendMessage("⚠️ An error occurred while fetching bot info.", event.threadID);
  }
};
