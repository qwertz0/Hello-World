function start() {
	importFiles({
		js:["dev/src/base.js"],
		css:["dev/src/base.css"]
	},()=>los());
}

var video={
	init:function(callback) {
		
		const exitBtn=document.createElement("div"),
					exitBtnExit=document.createElement("span"),
					leftMenu=document.getElementById("leftMenu");
		exitBtn.className="btn-exit";
		exitBtnExit.className="btn-exit-btn";
		exitBtnExit.innerHTML="Ende";
		exitBtnExit.onclick=function() {
			navigator.app.exitApp();	
		};
		exitBtn.appendChild(exitBtnExit);
		leftMenu.appendChild(exitBtn); 
		
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
				console.log(success);
		    if(success.eventKeycode == 'KEYCODE_BACK'){
		        window.ExoPlayer.close();
		        flag.remove("player");
		        setTimeout(()=>document.addEventListener('backbutton', backbutton),500);
		    }
		    if(success.eventType == 'TOUCH_EVENT'){
		        window.ExoPlayer.showController();
		    }
			},
			function(err) {console.log(err);}
		);		
	}
};

document.addEventListener('backbutton', ()=>false);
var backbutton=(function() {
	const exitMsg=document.createElement("div");
	exitMsg.className="msg-exit";
	document.body.appendChild(exitMsg);
	return function() {
		console.log("bbback");
		if (flag.contains("exit")) {
			navigator.app.exitApp();
		} else {
			flag.add("exit");
			setTimeout(()=>flag.remove("exit"),1000);			
		}
	};
})();
document.addEventListener('backbutton', backbutton);



