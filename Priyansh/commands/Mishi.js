const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "Mishi",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Mishi",
  description: "no prefix stylish owner card",
  commandCategory: "No command marks needed",
  usages: "...",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, body } = event;
  if (!body) return;

  const react = body.toLowerCase();

  // simplified trigger check
  if (react.includes("owner") || react.includes("Mishi") || react.includes("Dani")) {
    const imageUrl = "https://i.ibb.co/RGxb0cvF/received-1106866464205722.jpg"; // change to your own DP if needed
    const imgPath = path.join(__dirname, "cache", "owner.jpg");

    try {
      const res = await axios.get(imageUrl, { responseType: "arraybuffer" });
      fs.ensureDirSync(path.dirname(imgPath));
      fs.writeFileSync(imgPath, Buffer.from(res.data)); // ✅ write binary safely

      const msg = {
        body: `
╔═════◇༺👑༻◇═════╗
       ✨ 𝗢𝗪𝗡𝗘𝗥 - 𝗜𝗡𝗙𝗢 ✨
╚═════◇༺👑༻◇═════╝

➤ 𝗡𝗔𝗠𝗘 :  𝐌𝐢𝐬𝐡𝐢 𝐗 𝐃𝐚𝐧𝐢𝐬𝐇 🖤🪽
➤ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 : 
https://www.facebook.com/MiShal.Bebeiiw

➤ 𝗦𝗧𝗔𝗧𝗨𝗦 : 
👑 𝑲𝒊𝒔𝒊 𝒌𝒊 𝒋𝒂𝒓𝒖𝒓𝒂𝒕 𝒏𝒂𝒉𝒊, 𝒃𝒂𝒔 𝒃𝒂𝒔 𝒏𝒂𝒎 𝒉𝒊 𝒌𝒂𝒂𝒇𝒊 𝒉𝒂𝒊...  
             ✨ 𝐌𝐢𝐒𝐡𝐢𝐢 𝐗 𝐃𝐚𝐧𝐢 ✨ 
        `,
        attachment: fs.createReadStream(imgPath)
      };

      api.sendMessage(msg, threadID, () => {
        try { fs.unlinkSync(imgPath); } catch (e) {} // safe deletion
      });

      api.setMessageReaction("❤", messageID, () => {}, true);
    } catch (err) {
      console.error("Image send error:", err);
    }
  }
};

module.exports.run = function () {};
