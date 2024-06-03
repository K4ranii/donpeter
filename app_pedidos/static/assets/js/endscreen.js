(function(g){var window=this;'use strict';var lvb=function(a,b){a.jb("onAutonavCoundownStarted",b)},j6=function(a,b,c){g.Iv(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.eh(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.oS&&(b.lengthText?(e=b.lengthText||null,f=b.kx||null):b.lengthSeconds&&(e=g.VF(b.lengthSeconds),f=g.VF(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.qVa(d).type;var l=b instanceof g.oS?b.isLivePlayback:null,m=b instanceof g.oS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.iJ("Ver $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Yk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.Vs};b instanceof g.nS&&(c.playlist_length=b.playlistLength);a.update(c)},k6=function(a){var b=a.U(),c=b.D;
g.W.call(this,{I:"a",S:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",Ka:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ka:["ytp-autonav-timestamp"],xa:"{{duration}}"},{I:"div",Ka:["ytp-autonav-live-stamp"],xa:"En directo"},
{I:"div",Ka:["ytp-autonav-upcoming-stamp"],xa:"Pr\u00f3ximamente"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",xa:"Mix"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",Ka:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],xa:"{{title}}"},{I:"div",Ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],xa:"{{author}}"},{I:"div",Ka:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],xa:"{{views_and_publish_time}}"}]});this.J=
a;this.suggestion=null;this.j=c;this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress)},l6=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.K=b;this.cancelCommand=this.G=void 0;this.C=0;this.container=new g.W({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.N(this,this.container);this.container.Ja(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.W({I:"div",S:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",xa:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.Y:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",X:{style:"{{background}}"},V:[{I:"div",X:{"aria-label":"{{timestamp}}"},Ka:["ytp-autonav-timestamp"],
xa:"{{duration}}"},{I:"div",Ka:["ytp-autonav-live-stamp"],xa:"En directo"},{I:"div",Ka:["ytp-autonav-upcoming-stamp"],xa:"Pr\u00f3ximamente"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",xa:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",xa:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",xa:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",xa:"{{author_and_views}}"}]}]}]});
g.N(this,this.j);this.j.Ja(this.container.element);d||this.T(this.j.Ga("ytp-autonav-endscreen-link-container"),"click",this.tU);this.J.createClientVe(this.container.element,this,115127);this.J.createClientVe(this.j.Ga("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({I:"div",S:"ytp-autonav-overlay"});g.N(this,this.overlay);this.overlay.Ja(this.container.element);this.B=new g.W({I:"div",S:"ytp-autonav-endscreen-button-container"});g.N(this,this.B);this.B.Ja(this.container.element);
this.cancelButton=new g.W({I:"button",Ka:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},xa:"Cancelar"});g.N(this,this.cancelButton);this.cancelButton.Ja(this.B.element);this.cancelButton.listen("click",this.D4,this);this.J.createClientVe(this.cancelButton.element,this,115129);this.playButton=new g.W({I:"a",Ka:["ytp-autonav-endscreen-upnext-button",
"ytp-autonav-endscreen-upnext-play-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Reproducir siguiente v\u00eddeo"},xa:"Ver ahora"});g.N(this,this.playButton);this.playButton.Ja(this.B.element);this.playButton.listen("click",this.tU,this);this.J.L("web_player_autonav_next_button_renderer")?(this.J.createServerVe(this.playButton.element,this.playButton,!0),(b=this.J.getVideoData())&&mvb(this,b)):this.J.createClientVe(this.playButton.element,
this,115130);this.D=new g.wv(function(){nvb(c)},500);
g.N(this,this.D);this.sU();this.T(a,"autonavvisibility",this.sU);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.C4),this.T(a,"onAutonavCoundownStarted",this.Z$))},m6=function(a){var b=a.J.Nn(!0,a.J.isFullscreen());
g.Iv(a.container.element,"ytp-autonav-endscreen-small-mode",a.Og(b));g.Iv(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.UL);g.Iv(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.Gf());g.Iv(a.J.getRootNode(),"countdown-running",a.bl());g.Iv(a.container.element,"ytp-player-content",a.J.Gf());g.Hs(a.overlay.element,{width:b.width+"px"});if(!a.bl()){a.J.Gf()?ovb(a,Math.round(pvb(a)/1E3)):ovb(a);b=!!a.suggestion&&!!a.suggestion.Vs;var c=a.J.Gf()||!b;
g.Iv(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.Iv(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.$E(a.B,a.J.Gf());g.Iv(a.element,"ytp-enable-w2w-color-transitions",qvb(a))}},nvb=function(a){var b=pvb(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);ovb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.bl()?a.select(!0):a.bl()&&a.D.start()},pvb=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.PC;return-1===a||void 0===a?8E3:a}return 0<=a.J.Ft()?a.J.Ft():g.wI(a.J.U().experiments,"autoplay_time")||1E4},mvb=function(a,b){a.J.L("web_player_autonav_next_button_renderer");
b=b.oda;a.G=null==b?void 0:b.navigationEndpoint;b=null==b?void 0:b.trackingParams;a.playButton&&b&&a.J.setTrackingParams(a.playButton.element,b)},qvb=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},ovb=function(a,b){b=void 0===b?-1:b;
a=a.j.Ga("ytp-autonav-endscreen-upnext-header");g.Cf(a);if(0<=b){b=String(b);var c="A continuaci\u00f3n en $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="A continuaci\u00f3n en $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.zf("A continuaci\u00f3n en $SECONDS".slice(0,d)));var e=g.yf("span");g.Cv(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Kf(e,b);a.appendChild(e);a.appendChild(g.zf("A continuaci\u00f3n en $SECONDS".slice(d+c.length)));return}}g.Kf(a,"Siguiente")},n6=function(a,b){g.W.call(this,
{I:"div",
Ka:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},o6=function(a){g.W.call(this,{I:"div",
Ka:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",xa:"Siguiente"},{I:"span",S:"ytp-upnext-title",xa:"{{title}}"},{I:"span",S:"ytp-upnext-author",xa:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Reproducir siguiente v\u00eddeo"},V:[{I:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},V:[{I:"circle",S:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
xa:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa"}]}]});this.api=a;this.cancelButton=null;this.G=this.Ga("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.wv(this.wI,5E3,this);this.B=0;var b=this.Ga("ytp-upnext-cancel");this.cancelButton=new g.W({I:"button",Ka:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancelar reproducci\u00f3n autom\u00e1tica"},xa:"Cancelar"});g.N(this,this.cancelButton);this.cancelButton.listen("click",
this.E4,this);this.cancelButton.Ja(b);this.cancelButton&&this.api.createClientVe(this.cancelButton.element,this,115129);g.N(this,this.D);this.api.createClientVe(this.element,this,18788);b=this.Ga("ytp-upnext-autoplay-icon");this.T(b,"click",this.F4);this.api.createClientVe(b,this,115130);this.uU();this.T(a,"autonavvisibility",this.uU);this.T(a,"mdxnowautoplaying",this.Oaa);this.T(a,"mdxautoplaycanceled",this.Paa);g.Iv(this.element,"ytp-upnext-mobile",this.api.U().B)},rvb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.PC;return-1===a||void 0===a?8E3:a}return 0<=a.api.Ft()?a.api.Ft():g.wI(a.api.U().experiments,"autoplay_time")||1E4},svb=function(a,b){b=rvb(a,b);
var c=Math,d=c.min;var e=(0,g.wC)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.bl()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.bl()&&a.j.start()},p6=function(a){n6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",Ka:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],xa:"M\u00e1s v\u00eddeos"}]});this.N=new g.W({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new l6(this.player);g.N(this,this.B);this.B.Ja(this.element);a.getVideoData().Rf?this.j=this.B:(this.j=new o6(a),g.TT(this.player,this.j.element,4),g.N(this,this.j));this.overlay=new g.W({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.N(this,this.overlay);this.overlay.Ja(this.element);this.D=new g.XJ(this);g.N(this,this.D);g.N(this,this.table);this.table.Ja(this.element);this.table.show();g.N(this,this.N);this.N.Ja(this.table.element);this.hide()},q6=function(a){var b=a.Gf();
b!==a.G&&(a.G=b,a.player.publish("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},r6=function(a,b){g.W.call(this,{I:"button",
Ka:["ytp-watch-on-youtube-button","ytp-button"],xa:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.t1();2===this.buttonType&&g.Ev(this.element,"ytp-continue-watching-button");this.listen("click",this.onClick);this.listen("videodatachange",this.t1);g.$E(this,!0)},s6=function(a,b){n6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.Ne=b;this.J.createClientVe(this.element,this,156943);this.watchButton=new r6(a,2);g.N(this,this.watchButton);this.watchButton.Ja(this.element);this.hide()},tvb=function(a){n6.call(this,a,"subscribecard-endscreen");
this.j=new g.W({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",X:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",xa:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.N(this,this.j);this.j.Ja(this.element);var b=a.getVideoData();this.subscribeButton=new g.cW("Suscribirme",null,"Anular suscripci\u00f3n",null,!0,!1,b.Hl,b.subscribed,"trailer-endscreen",null,a,!1);g.N(this,this.subscribeButton);this.subscribeButton.Ja(this.j.Ga("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ta);this.Ta();this.hide()},t6=function(a){var b=a.U(),c=g.VJ||g.zR?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{I:"a",Ka:e,X:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",X:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",X:c,V:[{I:"span",S:"ytp-videowall-still-info-title",xa:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",xa:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",xa:"En directo"},{I:"span",S:"ytp-videowall-still-info-duration",xa:"{{duration}}"}]}]}]},{I:"span",Ka:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Lista de reproducci\u00f3n",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",xa:"{{playlist_length}}"},")"]}]},
{I:"span",Ka:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",S:"ytp-videowall-still-listlabel-length",xa:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.XJ(this);g.N(this,this.j);this.listen("click",this.onClick);this.listen("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.createServerVe(this.element,this);this.onVideoDataChange()},
u6=function(a){n6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.Y=null;this.B=new g.XJ(this);g.N(this,this.B);this.K=new g.wv(function(){g.Ev(b.element,"ytp-show-tiles")},0);
g.N(this,this.K);var c=new g.W({I:"button",Ka:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Anterior"},V:[g.fF()]});g.N(this,c);c.Ja(this.element);c.listen("click",this.J4,this);this.table=new g.XE({I:"div",S:"ytp-endscreen-content"});g.N(this,this.table);this.table.Ja(this.element);c=new g.W({I:"button",Ka:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Siguiente"},V:[g.gF()]});g.N(this,c);c.Ja(this.element);c.listen("click",this.I4,this);a.getVideoData().Rf?this.j=new l6(a,!0):this.j=
new o6(a);g.N(this,this.j);g.TT(this.player,this.j.element,4);a.createClientVe(this.element,this,158789);this.hide()},v6=function(a){return g.UT(a.player)&&a.KD()&&!a.D},w6=function(a){var b=a.Gf();
b!==a.N&&(a.N=b,a.player.publish("autonavvisibility"))},x6=function(a){n6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new r6(a,1);g.N(this,this.watchButton);this.watchButton.Ja(this.element);g.ujb(a)&&(this.j=new g.e2(a),g.N(this,this.j),this.B=new g.W({I:"div",Ka:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},V:[this.j]}),g.N(this,this.B),this.j.Ja(this.B.element),this.B.Ja(this.element));a.createClientVe(this.element,this,156914);this.hide()},xvb=function(a){g.tV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.XJ(this);g.N(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.tB(g.IR(c))&&d&&!g.QT(a)?(this.B=!0,this.endScreen=new s6(a,g.HT(a))):a.Zc()?this.endScreen=new x6(a):uvb(a)?(this.D=!0,vvb(this),this.j?this.endScreen=new p6(a):this.endScreen=new u6(a)):c.Hg?this.endScreen=new tvb(a):this.endScreen=new n6(a);g.N(this,this.endScreen);g.TT(a,this.endScreen.element,4);wvb(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.cJ("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.dJ("endscreen"),function(e){b.onCueRangeExit(e)})},vvb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Ol&&a.C===b.Rf)return!1;a.j=b.Ol;a.C=b.Rf;return!0},uvb=function(a){a=a.U();
return a.yd&&!a.Hg},wvb=function(a){a.player.nf("endscreen");
var b=a.player.getVideoData();b=new g.bJ(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.bJ(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.gf([b,c])};
g.MT.prototype.Ft=g.fa(15,function(){return this.app.Ft()});
g.H0.prototype.Ft=g.fa(14,function(){return this.getVideoData().DW});
g.IT.prototype.zs=g.fa(13,function(a){this.Bi().zs(a)});
g.sW.prototype.zs=g.fa(12,function(a){this.j!==a&&(this.j=a,this.Ta())});
g.yX.prototype.zs=g.fa(11,function(a){this.overflowButton&&this.overflowButton.zs(a)});
g.IT.prototype.As=g.fa(10,function(a){this.Bi().As(a)});
g.xW.prototype.As=g.fa(9,function(a){this.j!==a&&(this.j=a,this.Ta())});
g.yX.prototype.As=g.fa(8,function(a){this.shareButton&&this.shareButton.As(a)});
g.IT.prototype.YB=g.fa(7,function(a){this.Bi().YB(a)});
g.WV.prototype.YB=g.fa(6,function(a){this.PR!==a&&(this.PR=a,this.Iq())});
g.IT.prototype.XB=g.fa(5,function(a){this.Bi().XB(a)});
g.yX.prototype.XB=g.fa(4,function(a){this.OR!==a&&(this.OR=a,this.Hq())});g.y(k6,g.W);k6.prototype.select=function(){this.J.Wo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.hE||void 0)&&this.J.logClick(this.element)};
k6.prototype.onClick=function(a){g.kU(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
k6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.y(l6,g.W);g.k=l6.prototype;g.k.FH=function(a){this.suggestion!==a&&(this.suggestion=a,j6(this.j,a),this.playButton.updateValue("url",this.suggestion.Yk()),m6(this))};
g.k.bl=function(){return 0<this.C};
g.k.gC=function(){this.bl()||(this.C=Date.now(),nvb(this),lvb(this.J,pvb(this)),g.Iv(this.J.getRootNode(),"countdown-running",this.bl()))};
g.k.Px=function(){this.Cq();nvb(this);var a=this.j.Ga("ytp-autonav-endscreen-upnext-header");a&&g.Kf(a,"Siguiente")};
g.k.Cq=function(){this.bl()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.Cq()};
g.k.tU=function(a){g.kU(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.logClick(this.playButton.element):a.currentTarget===this.j.Ga("ytp-autonav-endscreen-link-container")&&(a=this.j.Ga("ytp-autonav-endscreen-link-container"),this.J.logVisibility(a,!0),this.J.logClick(a)),this.J.L("web_player_autonav_next_button_renderer")&&this.G?(this.J.jb("innertubeCommand",this.G),this.Cq()):this.select())};
g.k.D4=function(){this.J.logClick(this.cancelButton.element);g.OT(this.J,!0);this.cancelCommand&&this.J.jb("innertubeCommand",this.cancelCommand)};
g.k.onVideoDataChange=function(a,b){this.J.L("web_player_autonav_next_button_renderer")&&mvb(this,b);var c;this.cancelCommand=null==(c=b.Uca)?void 0:c.command};
g.k.Z$=function(a){if(qvb(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.cG(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.cG(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.cG(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.cG(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.cG(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.cG(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.Iv(this.element,"ytp-w2w-animate",!0)}};
g.k.C4=function(a){this.J.L("web_autonav_color_transition")&&2!==a&&g.Iv(this.element,"ytp-w2w-animate",!1)};
g.k.sU=function(){var a=this.J.Gf();this.K&&this.Gb!==a&&g.$E(this,a);m6(this);this.J.logVisibility(this.container.element,a);this.J.logVisibility(this.cancelButton.element,a);this.J.logVisibility(this.j.Ga("ytp-autonav-endscreen-link-container"),a);this.J.logVisibility(this.playButton.element,a)};
g.k.Og=function(a){return 400>a.width||459>a.height};g.y(n6,g.W);g.k=n6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.KD=function(){return!1};
g.k.Gf=function(){return!1};
g.k.iZ=function(){return!1};g.y(o6,g.W);g.k=o6.prototype;g.k.wI=function(){this.notification&&(this.D.stop(),this.Pc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.FH=function(a){this.suggestion=a;j6(this,a,"hqdefault.jpg")};
g.k.uU=function(){g.$E(this,this.api.Gf());this.api.logVisibility(this.element,this.api.Gf());this.api.logVisibility(this.Ga("ytp-upnext-autoplay-icon"),this.api.Gf());this.cancelButton&&this.api.logVisibility(this.cancelButton.element,this.api.Gf())};
g.k.Xaa=function(){window.focus();this.wI()};
g.k.gC=function(a){var b=this;this.bl()||(g.GD("a11y-announce","Siguiente "+this.suggestion.title),this.B=(0,g.wC)(),this.j=new g.wv(function(){svb(b,a)},25),svb(this,a),lvb(this.api,rvb(this,a)));
g.Gv(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.bl=function(){return!!this.j};
g.k.Px=function(){this.Cq();this.B=(0,g.wC)();svb(this);g.Ev(this.element,"ytp-upnext-autoplay-paused")};
g.k.Cq=function(){this.bl()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.wI(),this.notification=new Notification("Siguiente",{body:this.suggestion.title,icon:this.suggestion.eh()}),this.C=this.T(this.notification,"click",this.Xaa),this.D.start())}this.Cq();this.api.nextVideo(!1,a)};
g.k.F4=function(a){!g.Jf(this.cancelButton.element,a.target)&&g.kU(a,this.api)&&(this.api.Gf()&&this.api.logClick(this.Ga("ytp-upnext-autoplay-icon")),this.select())};
g.k.E4=function(){this.api.Gf()&&this.cancelButton&&this.api.logClick(this.cancelButton.element);g.OT(this.api,!0)};
g.k.Oaa=function(a){this.api.getPresentingPlayerType();this.show();this.gC(a)};
g.k.Paa=function(){this.api.getPresentingPlayerType();this.Cq();this.hide()};
g.k.va=function(){this.Cq();this.wI();g.W.prototype.va.call(this)};g.y(p6,n6);g.k=p6.prototype;g.k.create=function(){n6.prototype.create.call(this);this.D.T(this.player,"appresize",this.WC);this.D.T(this.player,"onVideoAreaChange",this.WC);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.vU);this.D.T(this.player,"onAutonavCancelled",this.G4);this.onVideoDataChange()};
g.k.show=function(){n6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.OT(this.player,!1);g.UT(this.player)&&this.KD()&&!this.C?(q6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.gC():3===this.videoData.autonavState&&this.j.Px()):(g.OT(this.player,!0),q6(this));this.WC()};
g.k.hide=function(){n6.prototype.hide.call(this);this.j.Px();q6(this)};
g.k.WC=function(){var a=this.player.Nn(!0,this.player.isFullscreen());q6(this);m6(this.B);g.Iv(this.element,"ytp-autonav-cancelled-small-mode",this.Og(a));g.Iv(this.element,"ytp-autonav-cancelled-tiny-mode",this.bK(a));g.Iv(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Hs(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.Iv(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.PS(this.videoData);b&&(this.j.FH(b),this.j!==this.B&&this.B.FH(b))}if(a&&a.length)for(b=0;b<yvb.length;++b){var c=yvb[b];if(a&&a[c]){this.videos[b]=new k6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,j6(d,c));g.N(this,this.videos[b]);this.videos[b].Ja(this.N.element)}}this.WC()}};
g.k.vU=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Cq(),this.Gb&&this.WC()):(this.K=!0,this.Gf()&&(2===a?this.j.gC():3===a&&this.j.Px()))};
g.k.G4=function(a){a?this.vU(1):(this.C=null,this.K=!1)};
g.k.KD=function(){return 1!==this.videoData.autonavState};
g.k.Og=function(a){return(910>a.width||459>a.height)&&!this.bK(a)&&!(400>=a.width||360>=a.height)};
g.k.bK=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Gf=function(){return this.Gb&&g.UT(this.player)&&this.KD()&&!this.C};
var yvb=[1,3,2,4];g.y(r6,g.W);g.k=r6.prototype;g.k.t1=function(){switch(this.buttonType){case 1:var a="Ver otra vez en YouTube";var b=156915;break;case 2:a="Seguir reproduciendo en YouTube";b=156942;break;default:a="Seguir reproduciendo en YouTube",b=156942}this.update({content:a});this.J.hasVe(this.element)&&this.J.destroyVe(this.element);this.J.createClientVe(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.logClick(this.element);g.lU(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.logClick(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.AR(b)){var c={};g.AR(b)&&g.BT(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.WO(c,b);a=g.to(a,c)}return a};
g.k.logVisibility=function(){this.J.logVisibility(this.element,this.Gb&&this.Z)};
g.k.show=function(){g.W.prototype.show.call(this);this.logVisibility()};
g.k.hide=function(){g.W.prototype.hide.call(this);this.logVisibility()};
g.k.Mc=function(a){g.W.prototype.Mc.call(this,a);this.logVisibility()};g.y(s6,n6);s6.prototype.show=function(){3!==this.player.getPlayerState()&&(n6.prototype.show.call(this),this.Ne.XB(!0),this.Ne.As(!0),this.J.U().ge||this.Ne.zs(!0),this.J.logVisibility(this.element,!0),this.watchButton.Mc(!0))};
s6.prototype.hide=function(){n6.prototype.hide.call(this);this.Ne.XB(!1);this.Ne.As(!1);this.Ne.zs(!1);this.J.logVisibility(this.element,!1);this.watchButton.Mc(!1)};g.y(tvb,n6);tvb.prototype.Ta=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Hl;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.y(t6,g.W);t6.prototype.select=function(){this.api.Wo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.hE||void 0)&&this.api.logClick(this.element)};
t6.prototype.onClick=function(a){if(g.AR(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.logClick(this.element);var b=this.suggestion.Yk(),c={};g.PXa(this.api,c,"emb_rel_end");b=g.to(b,c);g.lU(b,this.api,a)}else g.kU(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
t6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
t6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.If?!1:b.D};g.y(u6,n6);g.k=u6.prototype;g.k.create=function(){n6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Oq();this.B.T(this.player,"appresize",this.Oq);this.B.T(this.player,"onVideoAreaChange",this.Oq);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.HM);this.B.T(this.player,"onAutonavCancelled",this.H4);a=this.videoData.autonavState;a!==this.Y&&this.HM(a);this.B.T(this.element,"transitionend",this.mca)};
g.k.destroy=function(){g.MB(this.B);g.wb(this.stills);this.stills=[];n6.prototype.destroy.call(this);g.Gv(this.element,"ytp-show-tiles");this.K.stop();this.Y=this.videoData.autonavState};
g.k.KD=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Gb;n6.prototype.show.call(this);g.Gv(this.element,"ytp-show-tiles");this.player.U().B?g.yv(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.OT(this.player,!1);v6(this)?(w6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.gC():3===this.videoData.autonavState&&this.j.Px()):(g.OT(this.player,!0),w6(this));a!==this.Gb&&this.player.logVisibility(this.element,!0)};
g.k.hide=function(){var a=this.Gb;n6.prototype.hide.call(this);this.j.Px();w6(this);a!==this.Gb&&this.player.logVisibility(this.element,!1)};
g.k.mca=function(a){a.target===this.element&&this.Oq()};
g.k.Oq=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.PS(d)];if(e.length){g.Ev(this.element,"ytp-endscreen-paginate");var f=this.J.Nn(!0,this.J.isFullscreen());if(a=g.HT(this.J))a=a.Dh()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,v=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&v)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(v)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.Ss(f,n,p);g.Hs(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.FH(g.PS(this.videoData));this.j instanceof
l6&&m6(this.j);g.Iv(this.element,"ytp-endscreen-takeover",v6(this));w6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.Ce(q+this.C,c),0!==t){r=this.stills[h];r||(r=new t6(this.player),this.stills[h]=r,f.appendChild(r.element));v=Math.floor(p*m/b);var w=Math.floor(n*l/a),A=Math.floor(p*(m+t)/b)-v-4,C=Math.floor(n*(l+t)/a)-w-4;g.Os(r.element,w,v);g.Ss(r.element,C,A);g.Hs(r.element,"transitionDelay",
(m+l)/20+"s");g.Iv(r.element,"ytp-videowall-still-mini",1===t);g.Iv(r.element,"ytp-videowall-still-large",2<t);t=Math.max(C,A);g.Iv(r.element,"ytp-videowall-still-round-large",256<=t);g.Iv(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.Iv(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),v=g.Dv(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",j6(r,q,v),g.AR(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Yk(),v={},g.BT(r.api,"addEmbedsConversionTrackingParams",[v]),t=g.to(t,g.WO(v,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.setTrackingParams(r.element,q));h++}f.ariaBusy="false";g.Iv(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.Hf(a.element),g.vb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData(1);this.videoData!==a&&(null!=a&&g.PS(a)?(this.C=0,this.videoData=a,this.Oq()):this.player.ma("missg",{vid:(null==a?void 0:a.videoId)||"",cpn:(null==a?void 0:a.clientPlaybackNonce)||""}))};
g.k.I4=function(){this.C+=this.stills.length;this.Oq()};
g.k.J4=function(){this.C-=this.stills.length;this.Oq()};
g.k.iZ=function(){return this.j.bl()};
g.k.HM=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.Cq(),this.Gb&&this.Oq()):(this.G=!0,this.Gb&&v6(this)&&(2===a?this.j.gC():3===a&&this.j.Px()))};
g.k.H4=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.logVisibility(this.stills[a].element,!0);this.HM(1)}else this.D=null,this.G=!1;this.Oq()};
g.k.Gf=function(){return this.Gb&&v6(this)};g.y(x6,n6);x6.prototype.show=function(){if(3!==this.player.getPlayerState()){n6.prototype.show.call(this);var a=this.B;if(a){var b=0<this.j.suggestionData.length;g.Iv(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.HT(this.player))||c.YB(!0);this.player.logVisibility(this.element,!0);this.watchButton.Mc(!0)}};
x6.prototype.hide=function(){n6.prototype.hide.call(this);var a;null==(a=g.HT(this.player))||a.YB(!1);this.player.logVisibility(this.element,!1);this.watchButton.Mc(!1)};g.y(xvb,g.tV);g.k=xvb.prototype;g.k.Qu=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((this.player.Zc()||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.PS(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!uvb(this.player)||d;a=a.Dj;c=this.player.tE();return d&&!a&&!c&&!b};
g.k.Gf=function(){return this.endScreen.Gf()};
g.k.N9=function(){return this.Gf()?this.endScreen.iZ():!1};
g.k.va=function(){this.player.nf("endscreen");g.tV.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.yb().Fe.get("heartbeat"),d=g.PS(a);!d||b.videoId!==d.videoId||a.yV?(this.player.Wo(b.videoId,void 0,void 0,!0,!0,b),c&&c.lK("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.tV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.tV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Qu()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){wvb(this);this.D&&vvb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new p6(this.player):this.endScreen=new u6(this.player),g.N(this,this.endScreen),g.TT(this.player,this.endScreen.element,4))};g.sV("endscreen",xvb);})(_yt_player);