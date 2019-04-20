// v1.0.1
function start() {
	importFiles({
		js:["dev/src/base.js"],
		css:["dev/src/base.css"]
	},()=>los());
}

var video={
	init:function(callback) {
		
		const exitBtn=document.createElement("div"),
					leftMenu=document.getElementById("leftMenu"),
					mainContent=document.getElementById("mainContent");
		exitBtn.className="btn-exit";
		exitBtn.innerHTML='<svg viewBox="0 0 928 1000"><g transform="matrix(1 0 0 -1 0 850)"><path fill="currentColor" d="M357 46q0 -2 1 -11t0 -14l-2 -14q-1 -9 -5 -11t-12 -3h-178q-67 0 -114 47t-47 114v392q0 67 47 114t114 47h178q8 0 13 -5t5 -13l1 -11q1 -9 0 -15l-2 -13q-1 -7 -5 -11t-12 -3h-178q-37 0 -63 -26t-27 -64v-392q0 -37 27 -63t63 -27h180q6 0 7 -2t4 -3t4 -5t1 -8z M875 350q0 -14 -11 -25l-303 -304q-11 -10 -25 -10t-25 10t-11 25v161h-250q-14 0 -25 11t-11 25v214q0 15 11 25t25 11h250v161q0 14 11 25t25 10t25 -10l303 -304q11 -10 11 -25z" /></g></svg>';
		exitBtn.onclick=function() {
			navigator.app.exitApp();	
		};
		leftMenu.appendChild(exitBtn);
		
		// Scrolling per Air-Maus
		mainContent.addEventListener('pointerdown',function(e) {
			if (e.pointerType!=="mouse") return;
			e.preventDefault();
			mainContent.setPointerCapture(e.pointerId);
			
			let y0=e.clientY, y=e.clientY, raf=false, flg=false;
			
			const pointercancel=function(evt) {
							if (evt.pointerType!=="mouse" || evt.pointerId!==e.pointerId) return;
							evt.preventDefault();						
							mainContent.releasePointerCapture(evt.pointerId);
							mainContent.onpointermove=null;
							mainContent.onpointerup=null;
							mainContent.onpointercancel=null;
							if (flg) mainContent.classList.remove("scrll");
						},
						scrll=function() {
							if (raf) {
								mainContent.scrollBy(0,y0-y);
								y0=y;
							}
							raf=false;
						};
			mainContent.onpointermove=function(evt) {
				if (evt.pointerType!=="mouse" || evt.pointerId!==e.pointerId) return;
				evt.preventDefault();
				y=evt.clientY;
				if (raf) return;
				if (!flg) { mainContent.classList.add("scrll"); flg=true; }
				raf=true;
				window.requestAnimationFrame(scrll);
			};
			mainContent.onpointerup=pointercancel;	
			mainContent.onpointercancel=pointercancel;
			
		});		

		callback(true);
	},
	start:function(url) {
		msg.clear();
		document.removeEventListener('backbutton', backbutton);
		window.ExoPlayer.show(
			{
				url: url,
			},
			function(success){
				//console.log(success);
		    if(success.eventKeycode == 'KEYCODE_BACK'){
		    	video.close();
		    }
		    if(success.eventType == 'TOUCH_EVENT'){
		        window.ExoPlayer.showController();
		    }
			},
			function(err) {
				console.log(err);
				msg.err("ExoPlayer: "+err);
				video.close();
			}
		);		
	},
	close:function() {
		window.ExoPlayer.close();
		flag.remove("player");
		adshell.remove();
		setTimeout(()=>document.addEventListener('backbutton', backbutton),500);
	}
};

document.addEventListener('backbutton', ()=>false);
var backbutton=(function() {
	const exitMsg=document.createElement("div");
	exitMsg.className="msg-exit";
	document.body.appendChild(exitMsg);
	return function() {
		if (flag.contains("exit")) {
			navigator.app.exitApp();
		} else if (flag.contains("player")) {
			flag.remove("player");
			adshell.remove();
		} else if (flag.contains("err")) {
			if (hasEvents) msg.clear();
				else location.reload();
		} else {
			flag.add("exit");
			setTimeout(()=>flag.remove("exit"),1000);			
		}
	};
})();
document.addEventListener('backbutton', backbutton);
