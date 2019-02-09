var hasEvents=false;

const flag=document.documentElement.classList,
			msg=(function() {
				document.getElementById("spinner").innerHTML='<div class="spinner-msg"><span id="msgTxt" class="spinner-txt"></span></div>';	
				document.documentElement.classList.add("waiting");
								
				const msgTxt=document.getElementById("msgTxt"),
							txt=(s)=>msgTxt.innerHTML=s?s:"";
				return {
					info:(s)=>txt(s),
					waiting:(s)=>{ flag.add("waiting"); txt(s); },
					clear:()=>{ flag.remove("err","waiting","warn"); txt(); },
					err:(s)=>{ flag.add("err"); document.title="FEHLER: "+document.title; txt("FEHLER"+(s?": "+s:"!")); },
					warn:(s)=>{ flag.add("warn"); txt("ACHTUNG"+(s?": "+s:"!")); }
				}
			})();
				
function los() {

	const mehrAlsFussball=window.localStorage.getItem("all")==="true";
	
	const leftMenu=document.createElement("div");
	leftMenu.className="menu";
	leftMenu.id="leftMenu";
	
	leftMenu.innerHTML='<div id="reloadBtn"><svg viewBox="0 0 857 1000"><g transform="matrix(1 0 0 -1 0 850)"><path fill="currentColor" d="M857 707v-250q0 -14 -10 -25t-26 -11h-250q-23 0 -32.5 22.5t7.5 38.5l77 77q-82 77 -194 77q-58 0 -111 -23t-91 -61t-61 -91t-23 -111t23 -111t61 -91t91 -61t111 -23q66 0 125 29t100 82q4 6 12.5 6.5t14.5 -4.5l76 -77q5 -4 6 -11t-5 -13q-60 -74 -147 -114t-182 -41q-87 0 -167 34t-136 92t-92 137t-34 166t34 166t92 137t136 92t167 34q82 0 158 -31t137 -88l72 72q17 18 39 8.5t22 -33.5z" /></g></svg></div>'
		+(mehrAlsFussball?'':'<input type="checkbox" id="cbBundesliga"><label for="cbBundesliga"><svg viewBox="0 0 245.1 196"><g transform="translate(-43.5,-12)"><rect x="43.2" y="12" fill="#D20515" width="245" height="196"/><path fill="white" d="M245.2,115.2c0.1,0.5-0.3,0.8-1.2,1.5l-0.5,0.3l0.2,0.4c0.1,0.2-0.1,0.6-0.5,0.8l-0.8,0.4c-0.4,0.2-0.8,0.2-0.9-0.1l-0.2-0.3l-1,0.5l0.2,0.3c0.1,0.2-0.1,0.6-0.5,0.7l-0.8,0.4c-0.4,0.2-0.8,0.1-0.9-0.1l-0.1-0.3c-3.1,1.5-6.7,3-10.3,4.7l0.2,0.5c0.1,0.2-0.1,0.6-0.5,0.7l-0.8,0.4c-0.4,0.2-0.8,0.1-0.9-0.1l-0.2-0.5l-1.2,0.6l0.2,0.5c0.1,0.2-0.1,0.6-0.5,0.7l-0.8,0.4c-0.4,0.2-0.8,0.1-0.9-0.1l-0.2-0.5c-1.6,0.7-3.4,1-4.7-1.5c-0.6-1.1-0.6-3.7-1-5.1c-0.2-0.4-0.6-0.8-1.1-0.8c-16-3.1-21.4,0.3-31.6-2.2c-3.2-0.8-5-3.7-8.9-3.8c-8.6-0.3-11.2-0.1-20.6-0.5c-0.4,1.4-0.5,1.7-0.5,1.7l-32.9-0.2l5,2.5l1.6,14.5c0,0-1.3,0.4-1.7,0.4c0.3,2.9,0.6,6.8,0.8,10.4c0.1,3.2,0.3,6.5,0.3,8.6c0,1.4-0.3,2.7-1,3.9c-0.6,1.1-1.5,2-2.5,2.7c-0.3,0.2-1.6,1.1-3,1.9c-1.5,0.8-3.2,1.8-4.1,2.2c0.1,0.4,0.3,0.8,0.5,1.1c-20,9.7-44.8,13-52.9,28.4c-1,1.8-4.2,0.9-4.3-1.1c0-0.9,0-2.3,0-3.1h-0.3c-0.3,0-0.5-0.4-0.4-0.8v-0.9c0-0.4,0.2-0.7,0.5-0.7h0.3c0.1-0.9,0.3-1.8,0.5-2.6l-0.3-0.1c-0.2-0.1-0.3-0.5-0.2-0.9l0.3-0.8c0.1-0.4,0.4-0.6,0.7-0.6l0.3,0.1c1.4-3.3,4.2-4.8,5.5-8l-0.2-0.1c-0.3-0.1-0.3-0.5-0.2-0.9l0.3-0.9c0.1-0.4,0.5-0.6,0.7-0.5l0.2,0.1c0.2-0.5,0.4-1,0.7-1.5l-0.3-0.2c-0.2-0.1-0.2-0.5,0-0.9l0.5-0.8c0.2-0.3,0.6-0.5,0.8-0.4l0.1,0.1h0.1c0.1,0,0.1,0,0.2-0.1c0.1-0.1,0.3-0.3,0.4-0.4c1.3-0.9,3-1,4.2-0.1c1.3,0.8,6.2,3.6,10.9-0.7c7.8-7,16.9-16.5,23.8-16.9c-1.9-4-5.1-12.4-5.5-15.5l-2.2-0.5c-1.2-2.6-4.1-14.5-4.9-23.5c0,0-1-9.7,0-13.1c-0.5-0.1-1.5,0.7-1.8,0.7c-1.3-3.1,2.8-29.1,6.9-36.7l6.2-2.5c-0.6-0.1-5.1-0.3-16.9-1.2C84,61.3,76.4,67.6,72.6,71c-0.7,0.5-1.7,4.2-1.7,4.2s-1.9,1.7-3.8,3c-2.4,1.7-8.2,3-9.5,1c-0.3-0.5-0.2-0.7,0-1c0.9-1,4.3-2.6,5.5-4.7c-1.9,1-3.9,1.9-5.6,1.8c-0.7,0-1.1-1.8-0.2-2.1c2.5-1,4.4-1.5,5.9-3.6s3.1-3.3,5.4-3.3c0,0,10.9-14.3,17.4-21.1c1.8-1.9,5.1-1.2,5.1-1.2l0.6-2.2c0,0,22.1-2.6,32.4,0.8c-0.2-6.3,2.6-14.6,12.4-14.6c5,0,12.4,4.4,13.4,9.8c0.3,1.7-0.7,2.8-1.2,4.9c-0.9,3.2,0.3,6.7,0,7.8c-0.3,0.9-1.3,0.8-2.2,2.1c-0.8,1.2-1.5,2.5-2,3.8l-1.3,3l-6.9-0.5c-2.5,5.4-7.7,16.5-9.5,27.5l0,0c5.4,0.5,30,4,30,4l0.6,2c0,0,10.3,1.2,18.8,5.3c1.9,0.5,6.6-0.2,9.8,1.2c0.2-0.1,0.7-0.7,1-0.8c11,3.4,20.2,9.2,30.8,11.8c0,0,5,1.2,6.6,1.5c2.8,0.5,5.7,0.9,8.5,1.1c3.4,0.3,5.3,0.2,7.8,0.4C242.4,112.9,244.5,112.6,245.2,115.2 M261,81.6c-7.5,0-13.6,6.1-13.6,13.6c0,7.5,6.1,13.6,13.6,13.6c7.5,0,13.6-6.1,13.6-13.6c0,0,0,0,0,0C274.6,87.7,268.5,81.6,261,81.6L261,81.6L261,81.6z"/></g></svg></label>')
		+'<input type="checkbox" id="cbGerman"><label for="cbGerman"><svg viewBox="0 0 512 512"><path fill="#FFDA44" d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783L15.923,345.043z"/><path d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z"/><path fill="#D80027" d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z"/></svg></label>';
		//+'<div class="btn-exit"><svg viewBox="0 0 928 1000"><g transform="matrix(1 0 0 -1 0 850)"><path fill="currentColor" d="M357 46q0 -2 1 -11t0 -14l-2 -14q-1 -9 -5 -11t-12 -3h-178q-67 0 -114 47t-47 114v392q0 67 47 114t114 47h178q8 0 13 -5t5 -13l1 -11q1 -9 0 -15l-2 -13q-1 -7 -5 -11t-12 -3h-178q-37 0 -63 -26t-27 -64v-392q0 -37 27 -63t63 -27h180q6 0 7 -2t4 -3t4 -5t1 -8z M875 350q0 -14 -11 -25l-303 -304q-11 -10 -25 -10t-25 10t-11 25v161h-250q-14 0 -25 11t-11 25v214q0 15 11 25t25 11h250v161q0 14 11 25t25 10t25 -10l303 -304q11 -10 11 -25z" /></g></svg></div>';
	
	document.body.appendChild(leftMenu);
	
	const mainContent=document.createElement("div");
	mainContent.className="main";
	mainContent.id="mainContent";
	mainContent.innerHTML='<div class="no-event">kein Ereignis!</div>';	
	document.body.appendChild(mainContent);

	(function() {
		const cbGerman=document.getElementById("cbGerman"),
					reloadBtn=document.getElementById("reloadBtn");
		cbGerman.checked=flag.toggle("german",window.localStorage.getItem("german")!=="false");
		cbGerman.onclick=function() { window.localStorage.setItem("german",flag.toggle("german")?"true":"false"); };
		reloadBtn.onclick=function() { location.reload(); };
		reloadBtn.oncontextmenu=function() {
			window.localStorage.setItem("all",mehrAlsFussball?"false":"true");
			location.reload();
			return false;
		};
		if (!mehrAlsFussball) {
			const cbBundesliga=document.getElementById("cbBundesliga");
			cbBundesliga.checked=flag.toggle("bundesliga",window.localStorage.getItem("bundesliga")!=="false");
			cbBundesliga.onclick=function() { window.localStorage.setItem("bundesliga",flag.toggle("bundesliga")?"true":"false"); };
		}
	})();	
	
	video.init(isInit=>{
		if (isInit) {
			
			const xUrl="http://www.sport365.live/de/events/-/-/"+(mehrAlsFussball?"-":"10")+"/-/"+((new Date).getTimezoneOffset()*-1);

			msg.info("Laden [1]");
			console.log("Laden","http://www.sport365.live/de/home");
			xmlRequest("http://www.sport365.live/de/home",{'responseType':'document'},function(doc){
				
				const [A,adshell]=(function() {
					const s=[].map.call(doc.querySelectorAll('script[src]'),x=>x.src);
					return [s.filter(x=>/medianetworkinternational\.com\/js\/[a-f0-9]{32}\.js$/.test(x)),s.filter(x=>x.includes("adshell.net"))[0]||null];
				})();
							
				
				if (A.length>0) {
					fetchAdshell(adshell,function() {
						getKey(A,(xKey)=>{
							msg.info("Key: "+xKey); console.log("Key",xKey); console.log("Laden",xUrl);
							xmlRequest(xUrl,{'responseType':'document'},function(doc){
								const trs=doc.querySelectorAll('tr[onclick]'),
											tmp=document.createElement("div");
								let X=[];
								for (let i=0, tr, tr2; tr=trs[i], tr2=trs[i+1]; i+=2) {
									const x=tr.getAttribute("onclick").match(/['"][^"']+["']/g);
									let url=null;
									if (x.length===3) {
										try {
											url=deCrypt(x[1].slice(1,-1),xKey);
										} catch(e) {
											console.log("Fehler Decrypt",e);
										}
									}
									if (url) {
										const tds=tr.getElementsByTagName("td"), n=tds.length;
										X.push({
											url:url,
											online:(function() {
												const x=n>1?tds[1].querySelector("img"):null;
												return x?x.src.includes("dot-green"):null;
											})(),
											time:(function() {
												const x=n>2?tds[2].innerText:"";
												return /^\d\d:\d\d$/.test(x)?x.replace(/\s*\(direkt\)/i,""):"??:??";
											})(),
											title:n>3?tds[3].innerText:"??? - ???",
											lang:n>4?tds[4].innerText:"?",
											league:(function() {
												const x=tr2.querySelector("td:nth-child(2)");
												return x?x.innerText:"?";
											})(),
											german:n>4?(/deutsch|german/i.test(tds[4].innerText)?true:false):null,
											bundesliga:(function() {
												const x=tr2.querySelector("td:nth-child(2)");
												return x?(/bundesliga|german/i.test(x.innerText)?true:false):null;
											})()
										});
									}
								}
								
								if (X.length>0) {
									console.log("Gefundene Events",X);
									hasEvents=true;
									msg.clear();
									X.forEach(x=>{
										let loading=false;
										const obj=document.createElement("div"), objContent=document.createElement("div");
										obj.className='event event-'+(x.online?"online":"offline")+(x.bundesliga?" event-bundesliga":"")+(x.german?" event-german":"");
										obj.innerHTML='<div class="event-header"><span class="event-time">'+x.time+'</span><span class="event-title"><span class="event-title-title">'+x.title+'</span><span class="event-title-league">'+x.league+'</span></span><span class="event-lang">'+x.lang+'</span></div>';
										objContent.className="event-content";
										obj.appendChild(objContent);
										if (x.online) {
											obj.onclick=function(e) {
												console.log("E",e);
												if (loading) return;
												loading=true;
												console.log("Aufrufen",x.title,x.url);
												objContent.innerHTML='<div class="event-spinner"></div>';
												getLinks(x.url,xKey,function(lnks) {
													//console.log("Links",lnks);
													if (lnks.length===0) {
														objContent.innerHTML='<div class="event-error">Keine Streams gefunden</div>';
													} else {											
														objContent.innerHTML="";
														lnks.forEach((l,i)=>{
															const lObj=document.createElement("div");
															lObj.className="event-stream";
															lObj.innerHTML="Stream "+i;
															lObj.onclick=function(e) {
																e.stopPropagation();																
																lObj.classList.add("event-visited");
																
																getStream(l,xKey,(stream)=>{
																	
																	console.log("Stream",stream);
																	flag.add("player");
																	//msg.clear();
																	video.start(stream);

																},(e)=>msg.err(e));
															};
															objContent.appendChild(lObj);
														});
													}
													loading=false;
												},(e)=>{ loading=false; objContent.innerHTML='<div class="event-error">'+e+'</div>'; });
											};
										}
										mainContent.appendChild(obj);
									});
								} else msg.err("Nichts gefunden! [E1]")
								
								function getLinks(u,k,callback,errfnc) {
									console.log("Aufrufen","http://www.sport365.live"+u);
									xmlRequest("http://www.sport365.live"+u,{'responseType':'document'},function(doc){
										const spns=[...doc.querySelectorAll('span#span_link_links')],
										Z=spns.map(spn=>{
											const x=spn.getAttribute("onclick").match(/['"][^"']+["']/);
											try {
												 return deCrypt(x[0].slice(1,-1),k);
											} catch(e) {
												//console.log("Fehler Decrypt",e);
												return null;
											}
										}).filter(x=>x!==null);
										if (Z.length>0) callback(Z); else errfunc("Nichts gefunden! [E2]")
									},()=>errfnc("XML-Fehler! [E3]"));
								}
								
								function getStream(u,k,callback,errfnc) {
									console.log("Aufrufen",u);
									msg.waiting("&Ouml;ffne Stream [3]");
									xmlRequest(u,{'responseType':'document'},function(doc){
										//const z=[].filter.call(doc.querySelectorAll("script:not([src])"),x=>x.textContent.includes("document.write")).map(s=>{
										//	const z=s.textContent.match(/src\s*=\s*["']([^"']+)/i);
										//	if (z) {
										//		tmp.innerHTML=z[1];
										//		return tmp.innerText; // oder .textContent
										//	} else return null;
										//}).filter(x=>x!==null)[0]||null;
										//tmp.innerText="";
										const z=(doc.querySelector("#area-middle iframe")||{}).src||null;
										if (z) {
											msg.waiting("&Ouml;ffne Stream [4]");
											xmlRequest(z,{'responseType':'document'},function(doc) {
												const postData=[].map.call(doc.querySelectorAll('input[type="hidden"]'),x=>x.name+"="+x.value).join("&"),
															postUrl=[].filter.call(doc.querySelectorAll("script:not([src])"),x=>x.textContent.includes("action")).map(x=>{
																const u=x.textContent.match(/["']action["']\s*,\s*["']([^"']+)["']/i);
																return u?u[1]:null;
															}).filter(x=>x!==null)[0]||null;
												console.log("Aufrufen",postUrl,postData);
												if (postData!=="" && postUrl) {
													msg.waiting("&Ouml;ffne Stream [5]");
													xmlRequest(postUrl,{'post':postData,'responseType':'document','header':[["Content-Type", "application/x-www-form-urlencoded"]]},function (doc) {
														const Z=[].filter.call(doc.querySelectorAll('script:not([src])'),x=>x.textContent.includes("vjs_options")).map(x=>x.textContent.match(/["']([^"']+)["']/g)).reduce((a,b)=>a.concat(b),[]).sort((a,b)=>a.length<b.length);
														let t=null;
														for (let i=0,z; z=Z[i]; i++) {
															try { t=deCrypt(z.slice(1,-1),k); } catch (e) { t=null; }
															if (t!==null && /\/(i$|index\.m3u8?)/.test(t)) break; // TODO: evtl. stabiler machen
														}
														if (t) callback(t); else errfnc("Nichts gefunden [E5]");
													},()=>errfnc("XML-Fehler! [E6]"));
												} else errfnc("Nichts gefunden [E7]");
											},()=>errfnc("XML-Fehler! [E8]"));
										} else errfnc("Nichts gefunden [E9]");
									},()=>errfnc("XML-Fehler! [E10]"));
								}

							},()=>msg.err("XML [E11]"));
							
						},(e)=>msg.err(e));
					});
				} else msg.err("Nichts gefunden! [E12]")
				
				function getKey(A,callback,errfnc) {
					msg.info("Laden [2]");
					_getKey(A.pop(),callback,()=>{
						if (A.length>1) getKey(A,callback,errfnc); else errfnc("Nichts gefunden! [E13]");
					});
					function _getKey(url,callback,errfnc) {
						console.log("Laden",url);
						xmlRequest(url,null,function(txt){
							const x=unwise(txt).match(/return\s+["']([a-z0-9]+)["']/);
							if (x) callback(x[1]); else errfnc();
						},()=>errfnc("XML [E14]"));
					}	
				} // getKey
				
				function fetchAdshell(url,callback) {
					const _fetchAdshell=function(callback) {
						xmlRequest(url,null,function(txt){
							const m=txt.match(/url\s*:\s*["']([^"']+)/i);
							if (m) {
								xmlRequest(m[1],{responseType:'document'},()=>callback(0)
								/* wohl nicht notwendig
								function(doc){
									const s=[].filter.call(doc.querySelectorAll("script:not([src])"),x=>x.textContent.includes("location.replace"))[0]||null,
												z=s.textContent.match(/location\.replace\s*\(\s*["']([^"']+)/i);
									if (z) xmlRequest(z[1],{responseType:'document'},()=>callback(0),()=>callback(5));
										else callback(4);
								}*/,()=>callback(3));
							} else callback(2);
						},()=>callback(1));
					}; // fetchAdshell
					_fetchAdshell((status)=>{
						console.log("adshell-Status",status);
						if (status===0) {
							setTimeout(()=>fetchAdshell(url,()=>{}),3600000); // = 60 Min.
						} else {
							const adWarn=document.createElement("div");
							adWarn.className="ad-warn";
							adWarn.innerHTML="Warnung: Werbung ["+status+"]";
							document.body.appendChild(adWarn);							
						}
						callback(status);
					});
				}	//fetchAdshell
				
			},()=>msg.err("XML [E15]"));
							
/////////////////////// FUNKTIONEN ////////////////////////////////////

var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

			function deCrypt(s,k) {
				var ll = {
					stringify: function (cipherParams) {
						var j = {
							ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
						};
						if (cipherParams.iv) j.iv = cipherParams.iv.toString();
						if (cipherParams.salt) j.s = cipherParams.salt.toString();
						return JSON.stringify(j);
					},
					parse: function (l1) {
						var j = JSON.parse(l1);
						var cipherParams = CryptoJS.lib.CipherParams.create({
							ciphertext: CryptoJS.enc.Base64.parse(j.ct)
						});
						if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
						if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);
						return cipherParams;
					}
				};
				return JSON.parse(CryptoJS.AES.decrypt(window.atob(s), k, {format: ll}).toString(CryptoJS.enc.Utf8));
			} // deCrypt

			function xmlRequest(url,param,callback,errfnc) { // Vorlage: v2.0.1
				if (typeof param === 'function') { errfnc=callback; callback=param; param=""; }
				callback = (typeof callback === 'function') ? callback : function() {};
				errfnc = (typeof errfnc === 'function') ? errfnc : callback;
				param = (typeof param === 'string')?{'responseType': param }:(param && typeof param==='object' && param.toString()==="[object Object]")?param:{};		
				if ('post' in param===false) param.post=false;
				var xhr=new XMLHttpRequest();
				if (param.hasOwnProperty("responseType")) xhr.responseType=param.responseType;
				xhr.onreadystatechange=function() {
					if (xhr.readyState===4) {
						if (xhr.status===200) {
							if (xhr.response!==null) callback(xhr.response,200);
								else { console.warn("xhr-Error: Wrong Type! No '"+(param.responseType?param.responseType:"DOMString")+"' (Response Content-Type: '"+xhr.getResponseHeader("Content-Type")+"')"); errfnc(null,-200); }
						} else { console.warn("xhr-Error! (Status: "+xhr.status+")"); errfnc(xhr.response,xhr.status); }
					}
				} // onreadystatechange
				xhr.open((param.post!==false)?"POST":"GET",url,true);
				if ('header' in param) param.header.forEach(([k,v])=>xhr.setRequestHeader(k,v));
				if (typeof param.post === 'boolean') xhr.send(); else xhr.send(param.post);
				return xhr;
			} // xmlRequest

			function unwise(txt) {
				var c = txt,
						a = 5,
						x = 1;
				while(x < a) {
					c = unescape(c);
					if(/eval\(+function\(/.test(c)) {
						c = depack(c);
						x++
					}
					else {
						break
					}
				};
				return unescape(c);
			
				function depack(p) {
					if(p != "") {
						c = unescape(p);
						var _e = eval,
							s = "eval=function(v){c=v;};" + c +
							";eval=_e;";
						eval(s)
					}
					else {
						c = p
					};
					return c
				} // depack
				
			} // unwise
		} // if (isInit)
	}); // video.init
} // los
