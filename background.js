/*******************************************************
 * Written by Ismail Ibrahim <ismail@sleex.net>, 2023
 *
 * This file is part of Project autoMate
 * 
 *******************************************************/
'use strict';
/*******************************************************
 * 
 *******************************************************/
console.log("Hello, World!");
/*******************************************************
 * global var
 *******************************************************/
var port;
var out;
var webhook = 'https://chat.googleapis.com/v1/spaces/AAAAab1qbO0/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=zi6VqP2rfERvaGzBlbbaC30_FUIDu6667dJTTf4ozG0' ;
var timer = [
"	9:10	",
"	9:12	",
"	9:14	",
"	9:16	",
"	9:18	",
"	9:20	",
"	9:22	",
"	9:24	",
"	9:26	",
"	9:28	",
"	9:30	",
"	9:32	",
"	9:34	",
"	9:36	",
"	9:38	",
"	9:40	",
"	9:42	",
"	9:44	",
"	9:46	",
"	9:48	",
"	9:50	",
"	9:52	",
"	9:54	",
"	9:56	",
"	9:58	",
"	10:00	",
"	10:02	",
"	10:04	",
"	10:06	",
"	10:08	",
"	10:10	",
"	10:12	",
"	10:14	",
"	10:16	",
"	10:18	",
"	10:20	",
"	10:22	",
"	10:24	",
"	10:26	",
"	10:28	",
"	10:30	",
"	10:32	",
"	10:34	",
"	10:36	",
"	10:38	",
"	10:40	",
"	10:42	",
"	10:44	",
"	10:46	",
"	10:48	",
"	10:50	",
"	10:52	",
"	10:54	",
"	10:56	",
"	10:58	",
"	11:00	",
"	11:02	",
"	11:04	",
"	11:06	",
"	11:08	",
"	11:10	",
"	11:12	",
"	11:14	",
"	11:16	",
"	11:18	",
"	11:20	",
"	11:22	",
"	11:24	",
"	11:26	",
"	11:28	",
"	11:30	",
"	11:32	",
"	11:34	",
"	11:36	",
"	11:38	",
"	11:40	",
"	11:42	",
"	11:44	",
"	11:46	",
"	11:48	",
"	11:50	",
"	11:52	",
"	11:54	",
"	11:56	",
"	11:58	",
"	12:00	",
"	12:02	",
"	12:04	",
"	12:06	",
"	12:08	",
"	12:10	",
"	12:12	",
"	12:14	",
"	12:16	",
"	12:18	",
"	12:20	",
"	12:22	",
"	12:24	",
"	12:26	",
"	12:28	",
"	12:30	",
"	12:32	",
"	12:34	",
"	12:36	",
"	12:38	",
"	12:40	",
"	12:42	",
"	12:44	",
"	12:46	",
"	12:48	",
"	12:50	",
"	12:52	",
"	12:54	",
"	12:56	",
"	12:58	",
"	13:00	",
"	13:02	",
"	13:04	",
"	13:06	",
"	13:08	",
"	13:10	",
"	13:12	",
"	13:14	",
"	13:16	",
"	13:18	",
"	13:20	",
"	13:22	",
"	13:24	",
"	13:26	",
"	13:28	",
"	13:30	",
"	13:32	",
"	13:34	",
"	13:36	",
"	13:38	",
"	13:40	",
"	13:42	",
"	13:44	",
"	13:46	",
"	13:48	",
"	13:50	",
"	13:52	",
"	13:54	",
"	13:56	",
"	13:58	",
"	14:00	",
"	14:02	",
"	14:04	",
"	14:06	",
"	14:08	",
"	14:10	",
"	14:12	",
"	14:14	",
"	14:16	",
"	14:18	",
"	14:20	",
"	14:22	",
"	14:24	",
"	14:26	",
"	14:28	",
"	14:30	",
"	14:32	",
"	14:34	",
"	14:36	",
"	14:38	",
"	14:40	",
"	14:42	",
"	14:44	",
"	14:46	",
"	14:48	",
"	14:50	",
"	14:52	",
"	14:54	",
"	14:56	",
"	14:58	",
"	15:00	",
"	15:02	",
"	15:04	",
"	15:06	",
"	15:08	",
"	15:10	",
"	15:12	",
"	15:14	",
"	15:16	",
"	15:18	",
"	15:20	",
"	15:22	",
"	15:24	",
"	15:26	",
"	15:28	",
"	15:30	",
"	15:32	",
"	15:34	",
"	15:36	",
"	15:38	",
"	15:40	",
"	15:42	",
"	15:44	",
"	15:46	",
"	15:48	",
"	15:50	",
"	15:52	",
"	15:54	",
"	15:56	",
"	15:58	",
"	16:00	",
"	16:02	",
"	16:04	",
"	16:06	",
"	16:08	",
"	16:10	",
"	16:12	",
"	16:14	",
"	16:16	",
"	16:18	",
"	16:20	",
"	16:22	",
"	16:24	",
"	16:26	",
"	16:28	",
"	16:30	",
"	16:32	",
"	16:34	",
"	16:36	",
"	16:38	",
"	16:40	",
"	16:42	",
"	16:44	",
"	16:46	",
"	16:48	",
"	16:50	",
"	16:52	",
"	16:54	",
"	16:56	",
"	16:58	",
"	17:00	",
"	17:02	",
"	17:04	",
"	17:06	",
"	17:08	",
"	17:10	",
"	17:12	",
"	17:14	",
"	17:16	",
"	17:18	",
"	17:20	",
"	17:22	",
"	17:24	",
"	17:26	",
"	17:28	",
"	17:30	",
"	17:32	",
"	17:34	",
"	17:36	",
"	17:38	",
"	17:40	",
"	17:42	",
"	17:44	",
"	17:46	",
"	17:48	",
"	17:50	",
"	17:52	",
"	17:54	",
"	17:56	",
"	17:58	",
"	18:00	",
"	18:02	",
"	18:04	",
"	18:06	",
"	18:08	",
"	18:10	",
"	18:12	",
"	18:14	",
"	18:16	",
"	18:18	",
"	18:20	",
"	18:22	",
"	18:24	",
"	18:26	",
"	18:28	",
"	18:30	",
"	18:32	",
"	18:34	",
"	18:36	",
"	18:38	",
"	18:40	",
"	18:42	",
"	18:44	",
"	18:46	",
"	18:48	",
"	18:50	",
"	18:52	",
"	18:54	",
"	18:56	",
"	18:58	",
"	19:00	"
]

// var block = [
// 	"chiewyenl",
// 	"tuandnguyen",
// 	"ttphuong",
// 	"ledung",
// 	"tiendang",
// 	"chamh",
// 	"vantnguyen",
// 	"thuv",
// 	"thingoctrinh",
// 	"pdnguyen",
// 	"phamthin",
// 	"nthuong",
// 	"huyenle",
// 	"dtoan",
// 	"lcnguyen",
// 	"tmami",
// 	"nhoshi",
// 	"mazha",
// 	"amirizuddin",
// 	"zhenyiek",
// 	"haoshi",
// 	"jinglai",
// 	"jenseah",
// 	"louwong",
// 	"ltjun",
// 	"wonjason",
// 	"uchino",
// 	"junando",
// 	"ikematsu",
// 	"noorazharulhis",
// 	"mikikojima",
// 	"thoi",
// 	"wongling",
// 	"yingwen",
// 	"dasonc",
// ]

// var english = [
//     "nnguyenthihong",
//     "thelien",
//     "thidieulinh",
//     "ngoclongvu",
//     "minhsang",
//     "tranxuan",
//     "minhtung",
//     "qleanh",
//     "chienb",
//     "dieptrien"
// ];

// var mention = {
// 	"Technical Solutions-JP-Teledirect": "<users/105078008882927706875> <users/117352299819631699066>",
// 	"Technical Solutions-VI-Teledirect": "<users/115216326717794334012> <users/107464855649632719748>",
// 	"Technical Solutions-KO-Teledirect": "<users/100674975128516720063>",
// 	"Technical Solutions-TH-Teledirect": "<users/109982044932060879362>",
// 	"Technical Solutions-ID-Teledirect": "<users/109982044932060879362>",
// 	"Technical Solutions-ZH-Teledirect": "<users/103151582740060909758> <users/111212222535374554907> <users/105295731101360096381>",
// 	"Technical Solutions-HK-Teledirect": "<users/103151582740060909758> <users/111212222535374554907> <users/105295731101360096381>",
// };
//var tl = new RegExp( Object.keys(mention).join("|"), "ig");
var profil;
chrome.identity.getProfileUserInfo((user)=>{profil=user.email.split('@')[0]});
/*******************************************************/

/*******************************************************
 * content func declaration
 *******************************************************/

// timer : refresh backgroud page after 3 min appointment time
var makeAlarm=()=>{
	chrome.alarms.clearAll();

	timer.forEach(function (time){
		var t = time.split(":");
		var d = new Date();
		d.setHours(parseInt(t[0]), parseInt(t[1]), 0);
		chrome.alarms.create(time,{when:d.getTime()})
	});

	chrome.alarms.onAlarm.addListener((alm,func={})=>{
		console.log("alarm",alm.name,new Date);
		port.postMessage({rel:!0});
	});
}

var scdl=()=>chrome.alarms.getAll(c=>{
	var t = "";
	c.forEach(a=>{
		t += "check case "+a.name+ " at : " +new Date(a.scheduledTime)+"\n";
	})
	post(t);
});
/*******************************************************/

// do action : process data object from backgroud page
var popup=(msg)=>{
	setTimeout(function() {alert(msg);},100);
}

var post=(msg)=>{
	if (profil == "ismaili") {
		chat(msg,webhook)
		//popup(msg);
		//chat(msg,"webhook")
	} else if (profil == "lemanhlinh") {
		chat(msg,webhook)
	} else {
		popup(msg);
	}
}

var chat=(msg,dest)=>{
	//msg = msg.replaceAll("supportCases/","https://appointments.connect.corp.google.com/appointmentDetails?caseId=").replace(tl,function(m){return mention[m]});
	const xhr = new XMLHttpRequest();
	xhr.open("POST", dest);
	xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	const body = JSON.stringify({text: msg});
	xhr.send(body);
}

var seiri=(data)=>{
	out = JSON.parse(data.match(/([\s]+)\{[\s\S]+\}/gm));

	//chat
	var buff = "";
	var date = new Date();
	console.log("+checking",date);
	out.appointmentDetailsEntries.forEach(function(list){
		if (
			list.assignee &&
			//list.supportCase.vendorPartner == "tdcx" &&
			list.appointment.callStatus == "CALL_STATUS_NOT_STARTED" &&
			list.appointment.changeAction != "APPOINTMENT_CHANGE_ACTION_CANCEL"
		) {
		var st = new Date(list.appointment.appointmentInterval.startTime);
		var diffMs = st - date;
		var diff = Math.floor((diffMs/1000)/60);
		var assigneeLdap = list.assignee.username.replace(/@google.com/g, '');
		var language = list.assignee.businessLanguages;
		var supportCase = list.appointment.supportCase.replace(/[supportCases/]/g, '');
		var linkCase = 'https://appointments.connect.corp.google.com/appointmentDetails?caseId=' + supportCase;
		var render_linkCase = "<" + linkCase + "|" + supportCase + ">";
		var VN_user_id = {
		  minhsang: "109559763029663629013", // start English
		  tranxuan: "115008743285513430659",
		  minhtung: "101935476178230003332",
		  qleanh: "101562913825059940525",
		  dieptrien: "118229833832960257875",
		  nnguyenthihong: "109150983215395411236",
		  thelien: "103406657044129320536",
		  thidieulinh: "115873856127024281810",
		  ngoclongvu: "107677763235161904981",
		  duongthi: "109834218741253857657", // end English
		  ducanh: "102086423803894592730", // 4 slots PM 
		  dinhtram: "106934928061746840698", // 6 slots
		  thimay: "108084478721203416047",
		  leminhhieu: "109321187882325982323",
		  thihaphuong: "108660843362017736978",
		  thiphuongthaot: "106415224313217310837",
		  xuanthac: "112801938838052529914",
		  tmpham: "102784328182951646112",
		  vothientrung: "112764970033933621016",
		  thoad: "117038686160160364905",
		  anhm: "102279804267797211394",
		  thangson: "104288028074276139829",
		  dtrandinh: "108913714642314100300", // UMM 7 slots
		  thuybach: "116331719870633544760",
		  thienthuat: "109270413350977958905",
		  dongmai: "108833715081133008418",
		  hongquanh: "116479408114123312677",
		  doanquoc: "118113742594652280245",
		  quyet: "112849964138673894408",
		  chienb: "106100766246076541731",
		  vanti: "102989748874065880951",
		  ngocphu: "112882244200458141256",
		  tienkhoa: "111001627725158380395",
		  trunghieun: "114703647760222369071",
		  thiminhtrang: "113962722115745839899", // HT 5 slots
		  vanbo: "114626586877997815996",
		  tienlam: "118227400097034570697",
		  haitnguyen: "118044315722123601378",
		  tiendatc: "117543636383989481346",
		  rozaca: "106643888714387124798"
		}
			//var text = list.pool.displayName + " @" + list.assignee.username.split('@')[0] + " " + diff + " min " + st.toLocaleTimeString() + " " + list.appointment.supportCase;
	        var text = "<users/" + VN_user_id[assigneeLdap] + ">" + ' aka ' + assigneeLdap + " " + diff + "min " + st.toLocaleTimeString() + " " + render_linkCase + "\n";
			if (VN_user_id[assigneeLdap] > -1) {
				if (diff < 6 && diff > -1 ) { //0~5
					console.log(text, list)
				} else if (diff < 0 && diff > -6 ) {//-1~-5 diff < 0 && diff > -6
					console.warn(text, list);
					chrome.alarms.create("late",{delayInMinutes:4})
					buff += text  + "\n";
				} else if (diff < -5) {//-6~
					buff += text  + "\n";
					console.error(text, list);
					chrome.alarms.create("superlate",{delayInMinutes:3})
				}
		}
		}
	});
	if (buff) post("*Beep beep!!!*\n\n" + buff);
}

chrome.runtime.onConnect.addListener(p=>{
	p.onMessage.addListener(msg=>{msg.list&&seiri(msg.list)});
	console.log("background page ready, sent chat to inform everyone");
	//post(".");
	makeAlarm();
	//scdl();
	port = p;
});

/*******************************************************/