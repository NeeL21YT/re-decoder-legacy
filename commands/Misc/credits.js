module.exports = ({
    name: 'credits',
    aliases: ['credit','devs','developers'],
    code: `
$thumbnail[1;$userAvatar[$authorID]]
$description[1;💻 | **Bot Developers** (Dev)]
$addField[1;Dev;> $username[816235165801513002]#$discriminator[816235165801513002];no]
$addField[1;Main Dev;> $username[$botOwnerID]#$discriminator[$botOwnerID];no]
$footer[1;Requested by $username]
$addtimestamp[1;$dateStamp]
$cooldown[3s;> Wait for %time% to try again]
$color[1;$getVar[color]]`
})