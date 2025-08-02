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

module.exports.run = async function ({ api, event }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const moment = require("moment-timezone");

  const time = process.uptime();
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  const juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");

  const images = [
    "https://i.ibb.co/Tq29JTm0/received-1043383061158606.jpg",
    "https://i.ibb.co/tTy4wZWd/received-1283063783277874.jpg",
    "https://i.ibb.co/99pSZhbT/received-1295330775646213.jpg",
    "https://i.ibb.co/QjrHzDNX/received-1376290610103351.jpg"
  ];
  const selectedImage = images[Math.floor(Math.random() * images.length)];
  const imgPath = __dirname + "/cache/infobot.jpg";

  try {
    // Ensure /cache folder exists
    if (!fs.existsSync(__dirname + "/cache")) {
      fs.mkdirSync(__dirname + "/cache");
    }

    // Download image
    const res = await axios.get(selectedImage, { responseType: "arraybuffer" });
    fs.writeFileSync(imgPath, Buffer.from(res.data, "utf-8"));

    // Send message with image
    api.sendMessage({
      body: `
╭───────────◆◇◆────────────╮
   🎀 『 𝗜𝗡𝗙𝗢 - 𝗗𝗔𝗡𝗜𝗦𝗛 ✘ 𝗠𝗜𝗦𝗛𝗜 』🎀
╰────────────◆◇◆───────────╯

📌 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘:         𝙳𝚊𝚗𝚒𝚜𝚑 𝚇 𝙼𝚒𝚜𝚑𝚒 💖
📌 𝗢𝗪𝗡𝗘𝗥:              🦋 𝙼𝚒𝚜𝚑𝚒🦋
📌 𝗙𝗕 𝗟𝗜𝗡𝗞:     https://www.facebook.com/profile.php?id=100092458674673    

───────────────────────────────

🌟 𝗙𝗘𝗔𝗧𝗨𝗥𝗘𝗦 🌟

💬 Stylish AI Replies & Talkbot  
🎶 YouTube Music & Audio Tools  
🎭 Pair, Roast, Moto, LoveChat  
🖼  Logo Maker & DP Generator  
🎉 Romantic, Funny, Stylish UI  
⚙️ Admin Tools | Auto Ban System

───────────────────────────────

✨𝐁𝐎𝐓 𝐔𝐒𝐄  𝐊𝐀𝐑𝐍𝐘 𝐊𝐀 𝐓𝐀𝐑𝐈𝐊𝐀✨  
👉 Type: Oye bot  
🔗 Owner  
https://www.facebook.com/profile.php?id=100092458674673  

───────────────────────────────

📆 𝗧𝗢𝗗𝗔𝗬'𝗦 𝗗𝗔𝗧𝗘 & 𝗧𝗜𝗠𝗘 ➤ ${juswa}  
⏱️ 𝗕𝗢𝗧 𝗨𝗣𝗧𝗜𝗠𝗘 ➤ ${hours}h ${minutes}m ${seconds}s  

╭─────────────★彡────────────╮  
        💖 𝑫𝒂𝒏𝒊𝒔𝒉 ✘ 𝑴𝒊𝒔𝒉𝒊 𝑩𝒐𝒕 𝒊𝒔 𝑷𝒐𝒘𝒆𝒓 💖  
╰─────────────★彡────────────╯  
      `,
      attachment: fs.createReadStream(imgPath)
    }, event.threadID, () => fs.unlinkSync(imgPath));

  } catch (err) {
    console.log("❌ Error in inf command:", err);
    return api.sendMessage("⚠️ Error occurred while fetching bot info.", event.threadID);
  }
};
