module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Anup Kumar",
	description: "Notify bots or people leaving the group",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐔𝐒𝐍𝐄 𝐁𝐀𝐓𝐀𝐘𝐀 𝐍𝐇𝐈" : "𝐌𝐞𝐑𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐑𝐢 𝐌𝐞𝐫𝐙𝐢.";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `bye.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "─── ❝ 𝐆𝐎𝐎𝐃 𝐁𝐘𝐄 ❞ ───\n\n『 ✦ {name} 𝐀𝐰𝐰𝐰 𝐊𝐀𝐇𝐈𝐍 𝐎𝐑 𝐌𝐔𝐇 𝐊𝐀𝐋𝐀 𝐊𝐀𝐑𝐍𝐀 𝐇𝐎𝐆𝐀 𝐁𝐀𝐁𝐔 ✦ 』\n\n✩ Reason ✩ ➤ ✩ {type} ✩\n\n☣ Good Bye Friend But Always Remember The Time We Spent Together" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
} 
