module.exports = ({
  name: "bfractur",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]

> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;𝖅];Y;𝖄];X;𝖃];W;𝖂];V;𝖁];U;𝖀];T;𝕿];S;𝕾];R;𝕽];Q;𝕼];P;𝕻];O;𝕺];Ñ;Ñ];N;𝕹];M;𝕸];L;𝕷];K;𝕶];J;𝕵];I;𝕴];H;𝕳];G;𝕲];F;𝕱];E;𝕰];D;𝕯];C;𝕮];B;𝕭];A;𝕬];z;𝖟];y;𝖞];x;𝖝];w;𝖜];v;𝖛];u;𝖚];t;𝖙];s;𝖘];r;𝖗];q;𝖖];p;𝖕];o;𝖔];ñ;ñ];n;𝖓];m;𝖒];l;𝖑];k;𝖐];j;𝖏];i;𝖎];h;𝖍];g;𝖌];f;𝖋];e;𝖊];d;𝖉];c;𝖈];b;𝖇];a;𝖆]

$onlyIf[$message[1]!=;Write something to convert to **\`$commandName\`** text.]
$onlyIf[$message[1]!=;Write something to convert to **\`$commandName\`** text.]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]

$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})