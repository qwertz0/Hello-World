function start() {
	const baseUrl="https://rawgit.com/qwertz0/Hello-World/master/src/";
	importFiles({
		js:["hls.light.min.js","base.js"].map(x=>baseUrl+x),
		css:[baseUrl+"base.css"]
	},()=>los());
}

var video={
	hls:null,
	player:null,
	init:function(callback) {
		if (!Hls.isSupported()) {
			msg.err("HLS nicht unterst&uuml;tzt!");
			callback(false);
		} else {
			
			Hls.onHlsError=function(event,data) {
				const hls_fehlermeldung=(data.fatal?"Schwerer ":"")+
									(data.type===Hls.ErrorTypes.NETWORK_ERROR?"Netzwerkfehler (":
									data.type===Hls.ErrorTypes.MEDIA_ERROR?"Medienfehler (":
									data.type===Hls.ErrorTypes.MUX_ERROR?"Mux-Fehler (":
									data.type===Hls.ErrorTypes.OTHER_ERROR?"Fehler (":
									"Unbekannter Fehler (")+data.details+")!";
				//console.log("HLS "+(data.fatal?"Fatal ":"")+"Error",data.type,data.details,data);
		    if (data.fatal) {
		    	msg.err(hls_fehlermeldung);
		    	video.hls.destroy();
		    	flag.remove("player");					    				    		
		    } else if (data.details!=="bufferStalledError") msg.warn(hls_fehlermeldung); 		
			}			

			video.player=document.createElement("video");
			video.player.id="player";
						
			video.player.onloadeddata=function() { flag.add("player"); };
			video.player.onerror=()=>{
				if ('error' in video.player && ('code' in video.player.error || 'message' in video.player.error)) {
					msg.err(('code' in video.player.error?"["+video.player.error.code+"] ":"")+(video.player.error.message||""));
				} else console.warn("Unbekanntes Fehler-Ereignis"); // Wann tritt das auf?
			};
			video.player.onwaiting=()=>msg.waiting();
			video.player.onseeking=()=>msg.waiting();
			video.player.oncanplay=msg.clear;
			video.player.autoplay=true;
			video.player.controls=true;
			
			document.body.appendChild(video.player);
			
			callback(true);
		}	
	},
	start:function(url) {
		if (video.hls) {
			video.hls.destroy();
			if (video.hls.bufferTimer) { clearInterval(video.hls.bufferTimer); video.hls.bufferTimer=undefined; }
			video.hls=null;
		}
		video.hls=new Hls();
		video.hls.on(Hls.Events.ERROR,Hls.onHlsError);
		video.hls.loadSource(url);
		video.hls.attachMedia(video.player);
	}
};

document.addEventListener("keydown", function(e) {
	if (e.keyCode===27 && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)===null) {
		if (flag.contains("player")) {
			flag.remove("player");
			if (video.hls) {
				video.hls.destroy();
				if (video.hls.bufferTimer) { clearInterval(video.hls.bufferTimer); video.hls.bufferTimer=undefined; }
				video.hls=null;
			}
			msg.clear();
		} else if (flag.contains("err")) {
			if (hasEvents) msg.clear();
				else location.reload();
		}
	}
});
