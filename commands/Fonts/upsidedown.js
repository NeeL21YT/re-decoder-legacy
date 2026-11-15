module.exports = ({
  name: "upsidedown",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;z];Y;ʎ];X;x];W;ʍ];V;ʌ];U;n];T;ʇ];S;s];R;ɹ];Q;b];P;d];O;o];Ñ;Ñ];N;u];M;ɯ];L;l];K;ʞ];J;ɾ];I;ᴉ];H;ɥ];G;ƃ];F;ɟ];E;ǝ];D;p];C;ɔ];B;q];A;ɐ];z;z];y;ʎ];x;x];w;ʍ];v;ʌ];u;n];t;ʇ];s;s];r;ɹ];q;b];p;d];o;o];ñ;ñ];n;u];m;ɯ];l;l];k;ʞ];j;ɾ];i;ᴉ];h;ɥ];g;ƃ];f;ɟ];e;ǝ];d;p];c;ɔ];b;q];a;ɐ]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})