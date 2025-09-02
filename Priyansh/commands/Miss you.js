const fs = require("fs");
module.exports.config = {
	name: "Miss You",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Miss You")==0 || event.body.indexOf("miss you")==0 || event.body.indexOf("miss")==0 || event.body.indexOf("Miss")==0 || event.body.indexOf("i miss you")==0 || event.body.indexOf("I miss you")==0 || event.body.indexOf("miss u")==0 || event.body.indexOf("Miss u")==0 || event.body.indexOf("miss")==0 || event.body.indexOf("miss me")==0 || event.body.indexOf("Miss me")==0 || event.body.indexOf("I Miss You")==0) {
		var msg = {
				body: "😍𝐌𝐢𝐒𝐬 𝐘𝐨𝐮 𝐓𝐎𝐨 𝐁𝐚𝐁𝐲😘",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
