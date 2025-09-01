module.exports.config = {
	name: "Asslam o Alaikum",
  version: "10.0.2",
	hasPermssion: 0,
	credits: "Mishi", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("Asslam")==0 || event.body.indexOf("asslam")==0 || event.body.indexOf("Aslam")==0 || event.body.indexOf("aslam")==0 || event.body.indexOf("Asslam o Alaikum")==0 || event.body.indexOf("asslam o Alaikum")==0 || event.body.indexOf("Good as")==0 || event.body.indexOf("Good As")==0 || event.body.indexOf("good Ass")==0 || event.body.indexOf("ass")==0 ) { 
		var msg = {
				body: `<3 وعلیکم السلام ورحمتہ اللہ وبرکاتہ ${name} 🤝`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
