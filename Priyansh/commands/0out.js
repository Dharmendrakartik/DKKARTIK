module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝗗𝗵𝗮𝗿𝗺𝗲𝗻𝗱𝗿𝗮 𝗞𝗮𝗿𝘁𝗶𝗸",
    description: "",
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}
