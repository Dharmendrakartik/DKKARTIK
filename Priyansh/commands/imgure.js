module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝗗𝗵𝗮𝗿𝗺𝗲𝗻𝗱𝗿𝗮 𝗞𝗮𝗿𝘁𝗶𝗸",
    description: "",
    commandCategory: "Game",
    usages: "[reply]",
    cooldowns: 5,
    dependencies: {
      "axios": ""
    }
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Please reply or enter a link 1 image!!!', event.threadID, event.messageID)
const res = await axios.get(`https://imgur-api-by-koja.xx0xkoja.repl.co/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
    return api.sendMessage(`${img}`, event.threadID, event.messageID);
}
