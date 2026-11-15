module.exports = ({

 name: "tts",

 code: ` 

$djsEval[const discordTTS = require("discord-tts");

client.on("messageCreate", async (msg)=>{
    if(msg.content=="tts")
    {
        const stream=discordTTS.getVoiceStream("hello text to speech world");
        const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
        if(!voiceConnection || voiceConnection?.status===VoiceConnectionStatus.Disconnected){
            voiceConnection = joinVoiceChannel({
                channelId: msg.member.voice.channelId,
                guildId: msg.guildId,
                adapterCreator: msg.guild.voiceAdapterCreator,
            });
            voiceConnection=await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
        }
        
        if(voiceConnection.status===VoiceConnectionStatus.Connected){
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }

})]
$suppressErrors

 
` 
 });