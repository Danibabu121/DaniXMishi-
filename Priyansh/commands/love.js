module.exports.config = {
	name: "Love",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "liones", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("i love you")==0 || event.body.indexOf("I Love You")==0 || event.body.indexOf("Love")==0 || event.body.indexOf("love")==0 || event.body.indexOf("I love")==0 || event.body.indexOf("I love")==0 || event.body.indexOf("magandang gabi")==0 || event.body.indexOf("Magandang gabi")==0 || event.body.indexOf("magandang Gabi")==0 || event.body.indexOf("Magandang Gabi")==0 ) { 
		var msg = {
				body: `𝗜 𝗟𝗼𝗩𝗲 𝗬𝗼𝗨 𝗧𝗢𝗼 𝗕𝗮𝗕𝘆😍ᯓᡣ𐭩 ${name} 😍`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
