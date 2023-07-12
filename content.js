/*******************************************************
 * Written by Ismail Ibrahim <ismail@sleex.net>, 2023
 *
 * This file is part of Project autoMate
 *
 *******************************************************/
'use strict';
/*******************************************************
 * common func
 *******************************************************/
var main=(path=document.location.pathname.replace(/\/|-/g,''))=>((path in page)||((path="sf"+path.substr(0,4)) in page))&&run(path);
var run=path=>{('now' in page[path])&&page[path].now();('dom' in page[path])&&window.addEventListener("DOMContentLoaded",page[path].dom);('load' in page[path])&&window.addEventListener("load",page[path].load);}
/*******************************************************
 * helper func
 *******************************************************/
var inject=(js,s=document.createElement("script"))=>{s.innerHTML=js;document.head.appendChild(s);s.remove()};
/*******************************************************
 * content func declaration
 *******************************************************/
var page={};

//https://appointments.connect.corp.google.com/calendar?wfm
page.calendar={
now:()=>{
if (document.location.search.includes("wfm")) {
var port=chrome.runtime.connect({name:"calendar"});
port.onMessage.addListener(msg=>{msg.rel&&window.postMessage({update:!0},'https://appointments.connect.corp.google.com')});
window.addEventListener("message",msg=>{msg.data.list&&port.postMessage({list:msg.data.list})});
}
},
dom:()=>{
document.location.search.includes("wfm")&&inject(`
(function(open){
	XMLHttpRequest.prototype.open=function(method,url,async,user,pass){
		this.addEventListener("load",e=>{
			var data = e.target.responseText;
			data.includes("appointmentDetailsEntries")&&window.postMessage({list:data},'https://appointments.connect.corp.google.com');
		});
		open.call(this,method,url,async,user,pass);
	};
})(XMLHttpRequest.prototype.open);
var update=()=>document.querySelector(".mdc-button__label").click();
window.addEventListener('message',m=>{m.data.update&&update()});
console.log('listening in calendar');
`);
}//dom
}//page
/*******************************************************/

/*******************************************************
 * execute
 *******************************************************/
main();

