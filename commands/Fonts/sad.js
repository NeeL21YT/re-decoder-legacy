module.exports = ({
  name: "sad",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;Z̑̈];Y;Y̑̈];X;X̑̈];W;W̑̈];V;V̑̈];U;Ȗ̈];T;T̑̈];S;S̑̈];R;Ȓ̈];Q;Q̑̈];P;P̑̈];O;Ȏ̈];Ñ;Ñ];N;N̑̈];M;M̑̈];L;L̑̈];K;K̑̈];J;J̑̈];I;Ȋ̈];H;H̑̈];G;G̑̈];F;F̑̈];E;Ȇ̈];D;D̑̈];C;C̑̈];B;B̑̈];A;Ȃ̈];z;z̑̈];y;y̑̈];x;x̑̈];w;w̑̈];v;v̑̈];u;ȗ̈];t;t̑̈];s;s̑̈];r;ȓ̈];q;q̑̈];p;p̑̈];o;ȏ̈];ñ;ñ];n;n̑̈];m;m̑̈];l;l̑̈];k;k̑̈];j;j̑̈];i;ȋ̈];h;h̑̈];g;g̑̈];f;f̑̈];e;ȇ̈];d;d̑̈];c;c̑̈];b;b̑̈];a;ȃ̈]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})