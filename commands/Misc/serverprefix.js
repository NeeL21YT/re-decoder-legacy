module.exports = {
 name: "$alwaysExecute",
 code: `<@$authorID>,my prefix here is **\`$getServerVar[prefix]\`** anyone with \`manage_server\` perms can change it by using \`$getServerVar[prefix] setprefix <new prefix>\`
$onlyIf[$checkContains[$message;$clientID]==true;] 
$deleteIn[10s]
$suppressErrors`
}