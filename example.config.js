module.exports = {
    client: {
        token: 'MTI2NjAwNjMwNTAyMjQxMDgwMg.Gt34dh.zcNgkT5npD6C7yoQlAGVB_ygk8-2lKVBRtRhRc', // ← Your bot token (.env IS RECOMMENDED)
        id: '1266006305022410802' // ← Your bot ID
    },
    modmail: {
        guildId: '1072112392026210414', // ← Your server ID
        categoryId: '1072112392646951065', // ← The modmail category ID
        staffRoles: ['1085136129629630515'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'https://discord.com/api/webhooks/1184944805780922418/04UQJALA9IuAO5idzFoP1va1vGdLBbiNwI15SDqzZ68tjYFkVkfPdoIk6usxzbWcOvB0' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
