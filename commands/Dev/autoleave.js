module.exports = [{
name:"$alwaysExecute",
$if: "v4",
code:`
$forEachGuild[1;{};forceLeave;]
`
},{
name:"forceLeave",
type:"awaited",
$if: "v4",
code:`
$botLeave
$onlyif[$membersCount[$guildID;;no]<6;]
`
}] 