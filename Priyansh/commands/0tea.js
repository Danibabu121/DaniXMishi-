const fs = require("fs");
module.exports.config = {
	name: "tea",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Muhammad Ali", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("chai") ||
     react.includes("Chai") || react.includes("tea") || react.includes("Tea") ||
react.includes("chaye") ||
react.includes("Chay")) {
		var msg = {
				body: `𝐘𝐄 𝐋𝐎 𝐀𝐑𝐀𝐌 𝐒𝐄 𝐏𝐄𝐄𝐍𝐀`,attachment: fs.createReadStream(__dirname + `/noprefix/chai.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
