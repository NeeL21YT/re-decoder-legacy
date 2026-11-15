module.exports = ({
    name: 'credits',
    aliases: ['credit','devs','developers'],
    code: `
$thumbnail[1;$userAvatar[$authorID]]
$description[1;💻 | **Bot Developers** (Dev)]
$addField[1;Dev;> $username[000000000000000000]#$discriminator[000000000000000000];no]
$addField[1;Main Dev;> $username[$botOwnerID]#$discriminator[$botOwnerID];no]
$footer[1;Requested by $username]
$addtimestamp[1;$dateStamp]
$cooldown[3s;> Wait for %time% to try again]
$color[1;$getVar[color]]`
})