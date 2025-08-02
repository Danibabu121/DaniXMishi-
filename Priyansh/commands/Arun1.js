module.exports.config = {
  name: "Liones",
  version: "1.1.1",
  hasPermssion: 0,
  credits: "Liones",
  description: "Just Respond",
  commandCategory: "no prefix",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event }) {
  const { threadID, messageID, body } = event;
  const react = body.toLowerCase();

  if (
    react.includes("liones") ||
    react.includes("sherni") ||
    react.includes("lione") ||
    react.includes("owner") ||
    react.includes("sher") ||
    react.includes("admin")
  ) {
    const msg = {
      body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★
★𝗗𝗮𝗻𝗶 𝗫 𝗠𝗶𝘀𝗵𝗶♡★

☞𝗗𝗮𝗻𝗶 𝗫 𝗠𝗶𝘀𝗵𝗶♡:

میــں محـبتـوں کـے ســودے کـچھ یــوں کـرتـی ہـوں🦋
بــس مسکراتــی ہــوں اور دل خـریــد لیتـی ہوں ❤️`,
      attachment: [
        api.sendMessage({
          attachment: [
            // Add ibb direct image URL here
            api.resolvePhotoUrl("https://i.ibb.co/99pSZhbT/received-1295330775646213.jpg")
          ]
        })
      ]
    };

    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", messageID, () => {}, true);
  }
};

module.exports.run = function() {};
