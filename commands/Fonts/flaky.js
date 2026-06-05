module.exports = ({
  name: "flaky",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]

> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;乙];Y;Ƴ];X;᙭];W;ᗯ];V;ᐯ];U;ᑌ];T;丅];S;ᔕ];R;ᖇ];Q;Ɋ];P;ᑭ];O;ᗝ];Ñ;Ñ];N;ᑎ];M;ᗰ];L;ᒪ];K;ᛕ];J;ᒎ];I;I];H;ᕼ];G;Ǥ];F;ᖴ];E;ᗴ];D;ᗪ];C;ᑕ];B;ᗷ];A;];z;乙];y;Ƴ];x;᙭];w;ᗯ];v;ᐯ];u;ᑌ];t;丅];s;ᔕ];r;ᖇ];q;Ɋ];p;ᑭ];o;ᗝ];ñ;ñ];n;ᑎ];m;ᗰ];l;ᒪ];k;ᛕ];j;ᒎ];i;I];h;ᕼ];g;Ǥ];f;ᖴ];e;ᗴ];d;ᗪ];c;ᑕ];b;ᗷ];a;]

$onlyIf[$message[1]!=;Write something to convert to **\`$commandName\`** text.]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})