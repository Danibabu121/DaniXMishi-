module.exports.config = {
	name: "good night",
  version: "10.0.2",
	hasPermssion: 0,
	credits: "Anup Kumar", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("Gn")==0 || event.body.indexOf("night")==0 || event.body.indexOf("GN")==0 || event.body.indexOf("gn")==0 || event.body.indexOf("NIGHT")==0 || event.body.indexOf("Night")==0 || event.body.indexOf("Good night")==0 || event.body.indexOf("Good Night")==0 || event.body.indexOf("good night")==0 || event.body.indexOf("GOOD NIGHT")==0 ) { 
		var msg = {
				body: `<3 GOOD NIGHT😴 ${name} ❤️ HAVE A SWEET DREAM AND TAKE CARE MERI JAAN ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
