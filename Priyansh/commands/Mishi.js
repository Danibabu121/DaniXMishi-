const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "Mishi",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Talha Pathan",
  description: "no prefix stylish owner card",
  commandCategory: "No command marks needed",
  usages: "...",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, body } = event;
  if (!body) return;

  const react = body.toLowerCase();
  if (
    react.includes("owner") ||
    react.includes("Owner") ||
    react.includes("Mishi") ||
    react.includes("MiSHI") ||
    react.includes("Dani")
  ) {
    const imageUrl = "https://i.ibb.co/RGxb0cvF/received-1106866464205722.jpg"; // change to your own DP if needed
    const imgPath = path.join(__dirname, "cache", "owner.jpg");

    try {
      const res = await axios.get(imageUrl, { responseType: "arraybuffer" });
      fs.ensureDirSync(path.dirname(imgPath));
      fs.writeFileSync(imgPath, Buffer.from(res.data, "utf-8"));

      const msg = {
        body: `
╔═════◇༺👑༻◇═════╗
       ✨ 𝗢𝗪𝗡𝗘𝗥 - 𝗜𝗡𝗙𝗢 ✨
╚═════◇༺👑༻◇═════╝

➤ 𝗡𝗔𝗠𝗘 :  𝐌𝐢𝐒𝐡𝐢𝐢 🖤🪽
➤ 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 : 
https://www.facebook.com/MiShal.Bebeiiw

➤ 𝗦𝗧𝗔𝗧𝗨𝗦 : 
👑 𝑲𝐢𝐬𝐢 𝐊𝐢 𝐙𝐚𝐫𝐮𝐫𝐚𝐭 𝐍𝐡𝐢, 𝐁𝐚𝐬 𝐍𝐚𝐚𝐦 𝐇𝐢 𝐊𝐚𝐟𝐢 𝐇𝐚𝐢...  
             ✨ 𝐌𝐢𝐒𝐡𝐢𝐢 𝐗 𝐃𝐚𝐧𝐢 ✨ 
`,
        attachment: fs.createReadStream(imgPath)
      };

      api.sendMessage(msg, threadID, () => {
        fs.unlinkSync(imgPath);
      });

      api.setMessageReaction("❤", messageID, () => {}, true);
    } catch (err) {
      console.error("Image send error:", err);
    }
  }
};

module.exports.run = function () {};
