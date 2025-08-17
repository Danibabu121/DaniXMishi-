module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mishi",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100006877629572") {
    var aid = ["61570294706986"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Abby MeRy Owner Ko Mention Mat Kr Jo Bolna Ha MujHy Bol🤬🤬", "TujHy Ek Br Samjh ni Aya ma Ny Kaha Owner Ko Mention Mat Kr🤨😠 ", "Owner Ko Phir Se Mention Kr Rhy😒🤬", "MujHy Bol Kya Bat Hai Owner Ko Tang Mat Kr😠😣", "Wo Busy Ha mujhe Bolo Kya Bolna Ha?", "Kya Hua boss ko q Bula Rhe Ho?", "Busy HoGi Work Me Main t0o Hun Naw mujhse baat karo 😘", "Owner ko sab bulate hai humko to koi ghas nhi dalta 😴🤧", "Wo Shayad Busy hongi" ,"Owner ko kya chumma dena hai 🙄 mujhe de do usko de dunga🤐🙆‍♂️" ,"BOSS KO ITNA MENTION KR RHE HO KAHIN PYAAR TO NHI HO GYA😆","OKH BABA BOSS KI TRF SE I LOVE YOU TOO 🙈","Boss abhi so rha h sone do unko itna memtion kroge aap log to vo aakr maarenge aapko🙄","Dani X Mishi Is my Owner.. Btao kya bat hai 🤔🙄😒 bolo 💓👈"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
