const fs = require("fs");
module.exports.config = {
	name: "Liones",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Liones", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("liones") ||
     react.includes("sherni") || react.includes("lione") || react.includes("Owner") ||
react.includes("sher") ||
react.includes("admin")) {
		var msg = {
				body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★
               ★𝗗𝗮𝗻𝗶 𝗫 𝗠𝗶𝘀𝗵𝗶♡★


☞𝗗𝗮𝗻𝗶 𝗫 𝗠𝗶𝘀𝗵𝗶♡:

*میــں محـبتـوں کـے ســودے کـچھ یــوں کـرتـی ہـوں🦋
بــس مسکراتــی ہــوں اور دل خـریــد لیتـی ہوں ❤️*  


★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : 𝗗𝗮𝗻𝗶 𝗫 𝗠𝗶𝘀𝗵𝗶♡`,attachment: fs.createReadStream(__dirname + `/noprefix/lion.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
