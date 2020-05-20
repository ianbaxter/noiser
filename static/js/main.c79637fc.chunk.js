(this.webpackJsonpnoiser=this.webpackJsonpnoiser||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a,l,c,o,r,i,s,u,m,d,f=n(0),h=n.n(f),v=n(4),g=n.n(v),p=(n(3),n(1)),y=n(5),b=n(6);a=new(window.AudioContext||window.webkitAudioContext);var E=function(e){var t=e.name,n=e.min,a=e.max,l=e.step,c=e.label,o=e.handleChange,r=e.controlStyle,i=e.defultValue;return h.a.createElement("div",{className:"control "+r},h.a.createElement("input",{type:"range",orient:"vertical",name:t,min:n,max:a,step:l,onInput:o,defaultValue:i}),h.a.createElement("label",{htmlFor:t},c))},w=new(function(){function e(){Object(y.a)(this,e)}return Object(b.a)(e,[{key:"init",value:function(){(o=a.createGain()).gain.setValueAtTime(1,a.currentTime),(c=a.createBiquadFilter()).type="lowshelf",c.frequency.setValueAtTime(1e3,a.currentTime),c.gain.setValueAtTime(25,a.currentTime),(l=a.createOscillator()).type="sine",l.frequency.value=440,(r=a.createOscillator()).type="sine",r.frequency.value=20,r.connect(o.gain),l.connect(c),c.connect(o),r.start(),l.start(),s=o,(i=a.createDelay()).delayTime.value=.5,(u=a.createGain()).gain.value=.8,i.connect(u),u.connect(i),s.connect(i)}},{key:"start",value:function(){"running"!==a.state&&a.resume(),o.connect(a.destination),s.connect(a.destination),i.connect(a.destination)}},{key:"stop",value:function(){o.disconnect(a.destination),i.disconnect(a.destination)}},{key:"changeFreq",value:function(e){console.log("DCO frequency: "+e+" Hz"),l.frequency.value=e}},{key:"changeFilterFreq",value:function(e){console.log("Filter frequency: "+e+" Hz"),c.frequency.value=e}},{key:"changeAmp",value:function(e){console.log("Volume: "+e),s.gain.value=e}},{key:"changeLfoSpeed",value:function(e){console.log("LFO speed: "+e+" Hz"),r.frequency.value=e}},{key:"changeDelayTime",value:function(e){console.log("Delay time: "+e),i.delayTime.value=e}},{key:"changeDelayFeedback",value:function(e){console.log("Delay feedback: "+e),u.gain.value=e}},{key:"startRecording",value:function(){d=a.createMediaStreamDestination(),o.connect(d),s.connect(d),i.connect(d);(m=new MediaRecorder(d.stream,{audioBitsPerSecond:128e3,mimeType:"audio/webm"})).start()}},{key:"stopRecording",value:function(){m.addEventListener("dataavailable",(function(e){document.querySelector("#recording").src=URL.createObjectURL(e.data),m=null,d=null})),m.stop()}}]),e}()),k=function(){var e=Object(f.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],l=Object(f.useState)(!1),c=Object(p.a)(l,2),o=c[0],r=c[1];Object(f.useEffect)((function(){w.init()}),[]);var i=function(e){var t=e.target;switch(t.name){case"freq":w.changeFreq(t.value);break;case"filter-freq":w.changeFilterFreq(t.value);break;case"amp":w.changeAmp(t.value);break;case"lfo":w.changeLfoSpeed(t.value);break;case"delay-time":w.changeDelayTime(t.value);break;case"delay-feedback":w.changeDelayFeedback(t.value);break;default:console.log("Default case")}};return h.a.createElement("div",{className:"app"},h.a.createElement("div",{className:"app-container"},h.a.createElement("main",null,h.a.createElement("div",{className:"synth-interface"},h.a.createElement("div",{className:"top-panel"},h.a.createElement("button",{className:"btn btn__on",onClick:function(){return function(e){e?(w.stop(),a(!1)):(w.start(),a(!0))}(n)}},h.a.createElement("svg",{viewBox:"0 0 24 24",fill:n?"red":"white",width:"32px",height:"32px"},h.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),h.a.createElement("path",{d:"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"}))),h.a.createElement("h1",null,"NOISER"),h.a.createElement("button",{className:"btn btn__record",onClick:function(){return function(e){e?(w.stopRecording(),r(!1)):(w.startRecording(),r(!0))}(o)},name:o?"stop":"record"},o?h.a.createElement("svg",{viewBox:"0 0 24 24",fill:"red",width:"32px",height:"32px"},h.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),h.a.createElement("path",{d:"M6 6h12v12H6z"})):h.a.createElement("svg",{viewBox:"0 0 24 24",fill:"white",width:"32px",height:"32px"},h.a.createElement("path",{d:"M24 24H0V0h24v24z",fill:"none"}),h.a.createElement("circle",{cx:"12",cy:"12",r:"8"})))),h.a.createElement("div",{className:"main-panel"},h.a.createElement("div",{className:"module module__source"},h.a.createElement("label",{className:"module-title module-title__source",htmlFor:"source-module"},"Source"),h.a.createElement("div",{name:"source-module",className:"controls"},h.a.createElement(E,{name:"amp",min:"0",max:"1",step:"0.01",label:"DCO Vol",handleChange:i,controlStyle:"control__source"}),h.a.createElement(E,{name:"freq",min:"10",max:"8000",step:"1",label:"DCO Freq",handleChange:i,controlStyle:"control__source",defultValue:"440"}),h.a.createElement(E,{name:"lpf-freq",min:"20",max:"8000",step:"1",label:"LPF",handleChange:i,controlStyle:"control__source",defultValue:"1000"}),h.a.createElement(E,{name:"lfo",min:"1",max:"100",step:"1",label:"LFO",handleChange:i,controlStyle:"control__source",defultValue:"20"}))),h.a.createElement("div",{className:"module module__delay"},h.a.createElement("label",{className:"module-title",htmlFor:"delay-module"},"Delay"),h.a.createElement("div",{name:"delay-module",className:"controls"},h.a.createElement(E,{name:"delay-time",min:"0",max:"1.5",step:"0.05",label:"Time",handleChange:i,controlStyle:"control__delay",defultValue:"0.5"}),h.a.createElement(E,{name:"delay-feedback",min:"0",max:"0.95",step:"0.1",label:"Feedback",handleChange:i,controlStyle:"control__delay",defultValue:"0.8"}))))),h.a.createElement("div",{id:"info-section"},h.a.createElement("h3",null,"Recordings"),h.a.createElement("ol",null,h.a.createElement("audio",{id:"recording",controls:!0})),h.a.createElement("div",{className:"description"},h.a.createElement("p",null,"Noiser uses the Web Audio API to create earthshattering dubbed out noise.",h.a.createElement("br",null),h.a.createElement("br",null),"Try sweeping through the frequencies with the digitally controlled oscillator (DCO) to build up a wall of noise.")))),h.a.createElement("footer",null,h.a.createElement("a",{href:"https://github.com/ianbaxter/noiser"},h.a.createElement("svg",{viewBox:"0 0 128 128"},h.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),h.a.createElement("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}))))))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}g.a.render(h.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/noiser",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/noiser","/service-worker.js");x?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()},3:function(e,t,n){},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.c79637fc.chunk.js.map