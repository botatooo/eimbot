import { Intents, PermissionString, PresenceData } from "discord.js";

export default {
    prefixes: process.env.NODE_ENV === "production" ? ["!"] : ["!!"],
    botName: "EIM Bot",

    version: "1.0.0",
    admins: ["440990343899643943", "707973022988107796"],

    // If your bot isn't public, or open source, or doesn't have a
    // Support server, feel free to remove the following variables.
    supportServer: "https://discord.gg/8nTFdVQYf6",
    minimalInvite: "8nTFdVQYf6",
    gitHub: "https://github.com/botatooo/eimbot",

    presence: {
        status: "online",
        activities: [
            {
                type: "PLAYING",
                name: "with /help"
            }
        ]
    } as PresenceData,

    hastebin: "https://h.inv.wtf",

    // To replace these colors please make sure you are providing a
    // hexadecimal color.
    colors: {
        primary: "5865F2",
        success: "57F287",
        warning: "FEE75C",
        error: "ED4245"
    },

    // Properly update the following intents list for the bot to
    // Function properly, it currently only listens for guilds
    // And interactions.
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],

    // If your bot requires any permissions other than the ones below
    // Add them and all commands and interactions will only work if
    // The bot has said permissions in the environment they're run in.
    requiredPermissions: [
        "EMBED_LINKS",
        "SEND_MESSAGES",
        "USE_EXTERNAL_EMOJIS"
    ] as PermissionString[],
};
