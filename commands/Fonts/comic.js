module.exports = ({
  name: "comic",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;ᘔ];Y;Y];X;᙭];W;ᗯ];V;ᐯ];U;ᑌ];T;T];S;Տ];R;ᖇ];Q;ᑫ];P;ᑭ];O;O];Ñ;ᑎ̃];N;ᑎ];M;ᗰ];L;ᒪ];K;K];J;ᒍ];I;I];H;ᕼ];G;ᘜ];F;ᖴ];E;ᗴ];D;ᗪ];C;ᑕ];B;ᗷ];A;ᗩ];z;ᘔ];y;Y];x;᙭];w;ᗯ];v;ᐯ];u;ᑌ];t;T];s;Տ];r;ᖇ];q;ᑫ];p;ᑭ];o;O];ñ;ᑎ̃];n;ᑎ];m;ᗰ];l;ᒪ];k;K];j;ᒍ];i;I];h;ᕼ];g;ᘜ];f;ᖴ];e;ᗴ];d;ᗪ];c;ᑕ];b;ᗷ];a;ᗩ]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})