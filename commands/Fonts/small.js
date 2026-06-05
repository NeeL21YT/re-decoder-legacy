module.exports = ({
  name: "small",
  code: `
$setGlobalUserVar[usercmdsused;$sum[$getGlobalUserVar[usercmdsused];1];$authorID]
$setVar[cmdsused;$sum[$getVar[cmdsused];1]]
> Requested by **$username#$discriminator[$authorID]**

$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;Z;ᴢ];Y;ʏ];X;x];W;ᴡ];V;ᴠ];U;ᴜ];T;ᴛ];S;s];R;ʀ];Q;ǫ];P;ᴘ];O;ᴏ];Ñ;Ñ];N;ɴ];M;ᴍ];L;ʟ];K;ᴋ];J;ᴊ];I;ɪ];H;ʜ];G;ɢ];F;ғ];E;ᴇ];D;ᴅ];C;ᴄ];B;ʙ];A;ᴀ];z;ᴢ];y;ʏ];x;x];w;ᴡ];v;ᴠ];u;ᴜ];t;ᴛ];s;s];r;ʀ];q;ǫ];p;ᴘ];o;ᴏ];ñ;ñ];n;ɴ];m;ᴍ];l;ʟ];k;ᴋ];j;ᴊ];i;ɪ];h;ʜ];g;ɢ];f;ғ];e;ᴇ];d;ᴅ];c;ᴄ];b;ʙ];a;ᴀ]
$argsCheck[>0;Write something to convert to **\`$commandName\`** text.] 
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{newEmbed:{title:Banned}{description:🔨 **You seemed to be blacklisted!** Contact the developer **$userTag[$botownerid]** for more information}{color:BLACK}{timestamp}{delete:5s}}]
$channelSendMessage[$getVar[cmdslogs];{newEmbed:{title:Commands Logs}
{description:( **$userTag[$authorID]** | \`$authorID\` ) used a command!}
{field:Command Name:\`$commandName\`:no}
{field:Server:$serverName[$guildID] ($guildID):no}
{field:Total Commands Used by $userTag[$authorID]:\`$numberSeparator[$sum[$getGlobalUserVar[usercmdsused];1];,]\`:no}
{footer:$getVar[botfooter]}{color:$randomText[ORANGE;WHITE]}}]

`})