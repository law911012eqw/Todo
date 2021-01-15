(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n,a){e(2,arguments);var r=t(n),s=t(a),i=r.getTime()-s.getTime();return i<0?-1:i>0?1:i}function a(n,a){e(2,arguments);var r=t(n),s=t(a),i=r.getFullYear()-s.getFullYear(),o=r.getMonth()-s.getMonth();return 12*i+o}function r(r,s){e(2,arguments);var i=t(r),o=t(s),l=n(i,o),c=Math.abs(a(i,o));i.setMonth(i.getMonth()-l*c);var d=n(i,o)===-l,u=l*(c-d);return 0===u?0:u}function s(n,a){e(2,arguments);var r=t(n),s=t(a);return r.getTime()-s.getTime()}function i(t,n){e(2,arguments);var a=s(t,n)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var c,d={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):s;a=e.formattingValues[i]||e.formattingValues[s]}else{var o=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;a=e.values[l]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var a=String(t),r=n||{},s=r.width,i=s&&e.matchPatterns[s]||e.matchPatterns[e.defaultMatchWidth],o=a.match(i);if(!o)return null;var l,c=o[0],d=s&&e.parsePatterns[s]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(d),l=e.valueCallback?e.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(c.length)}}}const p={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:d,formatRelative:function(e,t,n,a){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(c={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(c.matchPattern);if(!r)return null;var s=r[0],i=n.match(c.parsePattern);if(!i)return null;var o=c.valueCallback?c.valueCallback(i[0]):i[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:n.slice(s.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}var b=6e4;function g(e){return e.getTime()%b}function v(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var a=n>0?(b+g(t))%b:g(t);return n*b+a}var y=1440,C=43200;function k(a,s,o){e(2,arguments);var l=o||{},c=l.locale||p;if(!c.formatDistance)throw new RangeError("locale must contain formatDistance property");var d=n(a,s);if(isNaN(d))throw new RangeError("Invalid time value");var u,m,h=f(l);h.addSuffix=Boolean(l.addSuffix),h.comparison=d,d>0?(u=t(s),m=t(a)):(u=t(a),m=t(s));var b,g=i(m,u),k=(v(m)-v(u))/1e3,j=Math.round((g-k)/60);if(j<2)return l.includeSeconds?g<5?c.formatDistance("lessThanXSeconds",5,h):g<10?c.formatDistance("lessThanXSeconds",10,h):g<20?c.formatDistance("lessThanXSeconds",20,h):g<40?c.formatDistance("halfAMinute",null,h):g<60?c.formatDistance("lessThanXMinutes",1,h):c.formatDistance("xMinutes",1,h):0===j?c.formatDistance("lessThanXMinutes",1,h):c.formatDistance("xMinutes",j,h);if(j<45)return c.formatDistance("xMinutes",j,h);if(j<90)return c.formatDistance("aboutXHours",1,h);if(j<y){var W=Math.round(j/60);return c.formatDistance("aboutXHours",W,h)}if(j<2520)return c.formatDistance("xDays",1,h);if(j<C){var w=Math.round(j/y);return c.formatDistance("xDays",w,h)}if(j<86400)return b=Math.round(j/C),c.formatDistance("aboutXMonths",b,h);if((b=r(m,u))<12){var P=Math.round(j/C);return c.formatDistance("xMonths",P,h)}var S=b%12,T=Math.floor(b/12);return S<3?c.formatDistance("aboutXYears",T,h):S<9?c.formatDistance("overXYears",T,h):c.formatDistance("almostXYears",T+1,h)}class j{static createPara(e,t){const n=document.createElement("p");return""!==t&&this.elementAddId(t,n),n.textContent=e,n}static createInput(e,t,n,a,r,s){const i=document.createElement("input");return i.id=t,i.placeholder=a,i.className=n,i.required=r,i.maxLength=s,""!==t&&this.elementAddId(t,i),""!==n&&(i.className=n),i}static createTextarea(e,t,n,a,r){const s=document.createElement("textarea");return s.className=e,s.cols=t,s.rows=n,s.disabled=a,s.placeholder=r,""!==e&&(s.className=e),s}static createDate(e,t,n){const a=document.createElement("input");return a.type="date",a.value=t,a.min=n,a.id=e,a.required=!0,a}static createLabel(e,t,n,a){const r=document.createElement("label");return r.setAttribute("for",e),r.textContent=t,r.id=n,r.className=a,r}static createSelect(e){const t=document.createElement("select");return t.id=e,t}static createSelectOption(e,t){const n=document.createElement("option");return n.value=e,n.textContent=t,n}static createSubmit(e){const t=document.createElement("input");return t.type="submit",t.value=e,t}static createRadio(e,t,n){const a=document.createElement("input");return a.type="radio",a.value=e,a.id=t,a.name=n,a}static createChecklist(e){const t=document.createElement("input");return t.type="checkbox",t.className=e,t}static elWithClasses(e="",t,n,a){const r=document.createElement(a);return r.textContent=e,r.className=n,""!==t&&this.elementAddId(t,r),""!==n&&(r.className=n),r}static elementAddId(e,t){t.id=e}static modifyAttr(e,t,n){e.setAttribute(t,n)}}const W=[{sort:"rgba(161,16,15,0.95)",inner:"rgb(175,36,36)",header:"rgb(139,20,20)"},{sort:"rgba(16,15,161,0.95)",inner:"rgb(36,36,175)",header:"rgb(20,20,119)"},{sort:"rgba(15,161,16,0.95)",inner:"rgb(36,175,76)",header:"rgb(20,139,65)"},{sort:"rgba(255,255,75,0.7)",inner:"rgb(255,255,102)",header:"rgb(255,255,12)"}],w=(()=>{const e=j.elWithClasses("","settings-container","","div"),t=j.elWithClasses("","settings-tab","","div"),n=j.elWithClasses("","settings-tabs","","div"),a=j.elWithClasses("","settings-content","","div"),r=j.elWithClasses("","themes-container","","form"),s=j.createPara("Select theme:","lbl-theme"),i=j.createRadio("thred","theme-red","themes"),o=j.createLabel("red","","lbl-red","lbl-colors"),l=j.createRadio("thblue","theme-blue","themes"),c=j.createLabel("blue","","lbl-blue","lbl-colors"),d=j.createRadio("thgreen","theme-green","themes"),u=j.createLabel("green","","lbl-green","lbl-colors"),m=j.createRadio("thyellow","theme-yellow","themes"),h=j.createLabel("yellow","","lbl-yellow","lbl-colors"),p=j.elWithClasses("","","btn-tabs","div"),f=j.elWithClasses("Clear Local Data","clear-data","","button"),b=j.elWithClasses("","","btn-tabs","div");return{settings:e,settingsTab:t,settingsMain:a,settingsBtnCont:j.elWithClasses("","settings-btns","","div"),themesCont:r,btnClearData:f,btnThemes:p,btnData:b,tabs:n,themesSelectionPara:s,themeRed:i,lblRed:o,themeBlue:l,lblBlue:c,themeGreen:d,lblGreen:u,themeYellow:m,lblYellow:h,btnApply:j.createSubmit("Apply"),btnClose:j.elWithClasses("Close","settings-close","","button")}})();let P=[],S=0;null!==localStorage.getItem("savedData")&&(P=JSON.parse(localStorage.getItem("savedData")),S=localStorage.getItem("savedTheme"));const T=()=>{localStorage.setItem("savedData",JSON.stringify(P))};class E{constructor(e,t,n,a,r){this.name=e,this.description=t,this.id=n,this.tasks=a,this.active=r}}class M{constructor(e,t,n,a){this.checked=e,this.desc=t,this.dueDate=n,this.priority=a}}const x=(()=>{const t=j.elWithClasses("","theme-up-outer","theme-up-outer","div"),n=j.elWithClasses("","theme-up-inner","theme-up-inner","div"),a=j.elWithClasses("","sidebar","sidebar","div"),r=j.elWithClasses("","sidebar-header","sidebar-headers","div"),s=j.createPara(`${P.length}/24`,"prj-total"),i=j.elWithClasses("","filter-container","filter-container","div"),o=j.elWithClasses("","","fas fa-search","i"),l=j.elWithClasses("","","fas fa-plus-circle","i"),c=(j.elWithClasses("","","fas fa-arrow-circle","i"),j.elWithClasses("","","dropdown","div")),d=j.elWithClasses("","","dropbtn","button"),u=j.elWithClasses("","","dropdown-content","div"),m=j.elWithClasses("","","fas fa-times","i"),h=j.createInput("text","prj-filter","searchbar","Search for projects",!1,"62"),p=j.elWithClasses("","searchbar-wrapper","searchbar-wrapper","div"),f=j.elWithClasses("","prj-container","prj-container","div"),b=j.elWithClasses("","prj-list","","ul"),g=j.createInput("text","prj-create","","Add new project",!1,"62"),v=j.elWithClasses("","main-section","","div"),y=j.elWithClasses("","prj-header","","div"),C=j.elWithClasses("","prj-head-container","","div"),W=j.elWithClasses("","prj-desc-wrapper","","div"),w=j.elWithClasses("","prj-rnm-desc","fas fa-pen-square","i"),S=j.createTextarea("temp-textarea",30,10,!0,"Write description here."),T=j.elWithClasses("","","fas fa-cog","i"),E=j.elWithClasses("","task-feature-holder","","div"),M=j.elWithClasses("","task-container","task-container","div"),D=j.elWithClasses("Complete tasks","task-finish-btn","","button"),B=j.elWithClasses("","task-completion-cont","","div"),L=j.elWithClasses("","","dropdown","div"),I=j.elWithClasses("","tsk-dropbtn","dropbtn","button"),A=j.elWithClasses("","","dropdown-content","div"),N=j.elWithClasses("","","prj-rnm-modal","div"),q=j.elWithClasses("","","prj-rnm-box","div"),O=j.createInput("text","prj-rnm-input","","",!0,"62"),Y=j.elWithClasses("","","","div"),F=j.elWithClasses("Rename","prj-rnm-btn","","button"),X=j.elWithClasses("Cancel","prj-rnm-cancel","","button");return j.elWithClasses("","","tsk-rnm-modal","div"),j.elWithClasses("","","tsk-rnm-box","div"),j.createInput("text","tsk-rnm-input","","",!0,"500"),j.elWithClasses("","","","div"),j.elWithClasses("Save","tsk-rnm-btn","","button"),j.elWithClasses("Cancel","tsk-rnm-cancel","","button"),{themeOuter:t,themeInner:n,sidebarContainer:a,sidebarHeader:r,taskContainer:M,projectContainer:f,filterContainer:i,addButton:l,txtTskCompletionCont:B,sortPrjButtonWrapper:c,magnifyIcon:o,searchProjects:h,searchbarWrapper:p,createProject:g,prjList:b,projectHeader:y,mainSection:v,emptyFilterBox:m,tempTextarea:S,sortPrjButton:d,sortPrjContents:u,taskFeatures:E,taskSettings:T,projectHeadContainer:C,projectDescWrapper:W,projectDescIcon:w,sortTskContents:A,sortTskButtonWrapper:L,sortTskButton:I,prjNum:s,displayTaskItem:function(t,n){const a=j.elWithClasses("","","taskbox","div"),r=j.createChecklist("task-checklist"),s=j.elWithClasses(P[t].tasks[n].desc,"","todo","p"),i=P[t].tasks[n].dueDate.toString().split("-"),o=Number(i[0]),l=Number(i[1]),c=Number(i[2]),d=j.createPara(`due in ${function(t,n){return e(1,arguments),k(t,Date.now(),n)}(new Date(o,l-1,c))}`,"todo-due"),u=j.elWithClasses(`PL: ${P[t].tasks[n].priority}`,"","task-prio","p"),m=j.elWithClasses("","","fas fa-ellipsis-v","i");x.taskContainer.append(a),a.append(r,s,d,u,m)},hideTaskTopSection:function(){j.modifyAttr(y,"style","visibility: hidden"),j.modifyAttr(W,"style","visibility: hidden"),j.modifyAttr(u,"style","visibility: hidden;")},displayTotal:function(e){const t=j.createPara(`${e}/24`,"prj-total");r.removeChild(document.getElementById("prj-total")),r.insertBefore(t,l)},renamePrjModal:N,renamePrjBox:q,renamePrjInput:O,renameBtnsContainer:Y,renamePrjButton:F,renamePrjCancel:X,taskCompletion:D}})();function D(e){3===Number(e)?(document.querySelector("textarea").style.color="black",document.documentElement.style.setProperty("--main-font","black")):(document.documentElement.style.setProperty("--main-font","aliceblue"),document.querySelector("textarea").style.color="aliceblue"),j.modifyAttr(x.themeInner,"style",`background: ${W[e].inner}`),j.modifyAttr(x.sidebarHeader,"style",`background: ${W[e].header}`),j.modifyAttr(x.sidebarContainer,"style",`border-right: 16px dashed ${W[e].inner}`),j.modifyAttr(x.sortPrjButton,"style",`background: ${W[e].sort}`),j.modifyAttr(x.sortTskButton,"style",`background: white; color: ${W[e].header};`)}function B(e,t){e.addEventListener("mouseover",(()=>{t.style.visibility="visible",setTimeout((function(){t.style.visibility="hidden"}),3e3)}))}function L(){const e=document.getElementById("prj-filter").value.toUpperCase(),t=document.querySelectorAll(".prj-items");for(let n=0;n<t.length;n++)x.prjList.getElementsByTagName("li")[n].textContent.toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none"}function I(){for(let e=0;e<P.length;e++){const t=e;q(P[e].name,t,e),!0===P[e].active&&(Y(-1,t),R()),H()}}function A(){N(x.taskContainer),x.hideTaskTopSection(),x.taskContainer.appendChild(j.createPara("You don't have any task at the moment.","empty-task-text")),x.taskCompletion.style.display="none"}function N(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function q(e,t,n){const a=j.elWithClasses("","","prj-items","li");x.prjList.appendChild(a),a.append(j.createPara(e,""),j.elWithClasses("",`prj-edit${t}`,"prj-edit","div")),document.getElementById(`prj-edit${t}`).append(j.elWithClasses("","","fas fa-pen-square prj-rename","i"),j.elWithClasses("","","fas fa-trash-alt prj-remove","i")),O(a,n),function(e){document.querySelectorAll(".prj-remove").forEach(((t,n)=>{t.addEventListener("click",(t=>{t.stopPropagation(),P[n].id===e+1&&(function(e){!0===P[e].active&&A(),T()}(e),P.splice(e,1),x.displayTotal(P.length),N(x.prjList),I(),function(e){for(let t=0;t<P.length;t++)P[t].id>e&&P[t].id--}(e))}))})),T()}(n),function(e){document.querySelectorAll(".prj-rename").forEach(((t,n)=>{t.addEventListener("click",(t=>{t.stopPropagation(),n===e&&(document.getElementById("content").append(x.renamePrjModal),document.querySelector("#lbl-rename").style.color="black",x.renamePrjInput.value=P[e].name,function(e){x.renamePrjButton.addEventListener("click",(()=>{""!==x.renamePrjInput.value&&(P[e].name=x.renamePrjInput.value,N(x.prjList),I(),document.getElementById("content").removeChild(x.renamePrjModal))}))}(e),x.renamePrjCancel.addEventListener("click",(()=>{document.getElementById("content").removeChild(x.renamePrjModal)})))}))}))}(n)}function O(e,t){!0===P[t].active?e.classList.add("prj-active"):e.classList.remove("prj-active")}function Y(e,t){x.projectHeader.style.visibility="visible",x.projectDescWrapper.style.visibility="visible",-1===e?(x.projectHeader.textContent=P[t].name,x.tempTextarea.value=P[t].description):(x.projectHeader.textContent=P[e].name,x.tempTextarea.value=P[e].description)}function F(e){for(let t=0;t<P[e].tasks.length;t++)x.displayTaskItem(e,t);x.taskCompletion.onclick=()=>{!function(e){const t=document.querySelectorAll(".task-checklist"),n=t.length;let a=t.length;for(;a--;)!0===t[a].checked&&P[e].tasks.splice(a,1);R(),function(e){if(x.txtTskCompletionCont.childElementCount>0&&x.txtTskCompletionCont.removeChild(x.txtTskCompletionCont.firstChild),0===e){const e=j.createPara("You must complete a task","notasks-notif");x.txtTskCompletionCont.appendChild(e)}else if(1===e){const e=j.createPara("You completed one task","tasks-completion-notif");x.txtTskCompletionCont.appendChild(e)}else{const t=j.createPara(`You completed ${e} tasks`,"tasks-completion-notif");x.txtTskCompletionCont.appendChild(t)}}(n-document.querySelectorAll(".task-checklist").length)}(e)},function(){const e=j.elWithClasses("","","task-form","form"),t=j.elWithClasses("","form-upper","","div"),n=j.createInput("text","form-input","","e.g Finish todo-list project, Grind new PoE 3.13 expansion, World domination,..",!0,"200");n.autocomplete="off";const a=j.createLabel("due-date","Due Date: ","","");let r=new Date;const s=String(r.getDate()).padStart(2,"0"),i=String(r.getMonth()+1).padStart(2,"0"),o=r.getFullYear();r=`${o}-${i}-${s}`;const l=j.createDate("due-date",r,r),c=j.elWithClasses("","","","div"),d=j.elWithClasses("","","","div"),u=j.createLabel("priority","Priority level: ","",""),m=j.createSelect("form-prio"),h=j.createSubmit("Submit");x.taskContainer.appendChild(e),e.append(t,h),m.append(j.createSelectOption("1","1"),j.createSelectOption("2","2"),j.createSelectOption("3","3"),j.createSelectOption("4","4"),j.createSelectOption("5","5")),d.append(u,m),c.append(a,l),t.append(n,c,d),n.focus(),document.querySelector(".task-form").addEventListener("submit",(function(e){e.preventDefault();for(let e=0;e<P.length;e++)if(!0===P[e].active){const t=new M(!1,document.getElementById("form-input").value,document.getElementById("due-date").value,document.getElementById("form-prio").value);P[e].tasks.push(t)}R()}))}()}function X(){const e=document.querySelectorAll(".prj-items");for(let e=0;e<P.length;e++)P[e].active=!1;[].forEach.call(e,(function(e){e.classList.remove("prj-active")}))}function H(){document.querySelectorAll(".prj-items").forEach(((e,t)=>{e.addEventListener("click",(function(n){X(),P[t].active=!0,O(e,t),this.classList.add("prj-active"),R()}))})),T()}function R(){const e=P.length;for(let t=0;t<e;t++)!0===P[t].active&&(Y(t,e),N(x.taskContainer),F(t),x.taskCompletion.style.display="block");T()}document.getElementById("content").append(x.themeOuter,x.taskCompletion,x.txtTskCompletionCont),x.themeOuter.appendChild(x.themeInner),x.themeInner.append(x.sidebarContainer,x.mainSection),x.sidebarContainer.append(x.sidebarHeader,x.filterContainer,x.projectContainer),x.sidebarHeader.append(j.createPara("My Projects",""),x.prjNum,x.addButton),x.filterContainer.append(x.sortPrjButtonWrapper,x.searchbarWrapper),x.searchbarWrapper.append(x.magnifyIcon,x.searchProjects,x.emptyFilterBox),x.sortPrjButtonWrapper.append(x.sortPrjButton,x.sortPrjContents),x.sortPrjButton.append(j.createPara("Sort by",""),j.elWithClasses("","","fas fa-sort-down","i")),x.sortPrjContents.append(j.elWithClasses("Creation Date","sort-date","sort-items","div"),j.elWithClasses("Title","sort-title","sort-items","div"),j.elWithClasses("# of tasks","sort-num-tasks","sort-items","div")),x.projectContainer.appendChild(x.prjList),x.mainSection.append(x.projectHeadContainer,x.taskContainer),x.projectHeadContainer.append(x.projectHeader,x.projectDescWrapper,x.taskFeatures),x.projectDescWrapper.append(x.projectDescIcon,x.tempTextarea),x.taskFeatures.append(x.sortTskButtonWrapper,x.taskSettings),x.taskContainer.append(j.createPara("You don't have any task at the moment.","empty-task-text")),x.sortTskButtonWrapper.append(x.sortTskButton,x.sortTskContents),x.sortTskButton.append(j.createPara("Sort by","prj-sort-text"),j.elWithClasses("","","fas fa-sort-down","i")),x.sortTskContents.append(j.elWithClasses("By Due Date","sort-due","sort-items","div"),j.elWithClasses("Alphabetically","sort-tasktitle","sort-items","div"),j.elWithClasses("By Priority","sort-priority","sort-items","div")),x.renamePrjModal.appendChild(x.renamePrjBox),x.renameBtnsContainer.append(x.renamePrjButton,x.renamePrjCancel),x.renamePrjBox.append(j.createPara("Rename your project to:","lbl-rename"),x.renamePrjInput,x.renameBtnsContainer),document.getElementById("content").appendChild(w.settings),w.settings.append(w.settingsTab),w.settingsTab.append(w.tabs,w.settingsMain),w.tabs.append(w.btnThemes,w.btnData),w.btnThemes.appendChild(j.createPara("Themes","")),w.btnData.appendChild(j.createPara("Data","")),w.settings.style.display="none",w.lblRed.appendChild(w.themeRed),w.lblBlue.appendChild(w.themeBlue),w.lblGreen.appendChild(w.themeGreen),w.lblYellow.appendChild(w.themeYellow),w.themesCont.append(w.themesSelectionPara,w.lblRed,w.lblBlue,w.lblGreen,w.lblYellow),D(S),x.hideTaskTopSection(),0!==P.length&&I(),x.addButton.addEventListener("click",(function(){P.length<24&&(x.prjList.append(x.createProject),x.createProject.focus())})),x.emptyFilterBox.addEventListener("click",(function(){x.searchProjects.value=null})),x.createProject.addEventListener("keypress",(function(e){if("Enter"===e.key&&""!==this.value){const e=document.querySelectorAll(".prj-items");N(x.prjList);const t=[],n=new M(!1,"Click the checkbox to compete this task","2999-01-14","2");t.push(n),X(),function(e,t,n,a,r){const s=new E(e,"",n,a,!0);P.push(s)}(this.value,0,e.length+1,t),x.displayTotal(P.length),I(),this.value=""}})),B(x.sortPrjButton,x.sortPrjContents),B(x.sortTskButton,x.sortTskContents),document.querySelectorAll(".sort-items").forEach((e=>{e.onclick=()=>{x.sortPrjContents.style.visibility="hidden",x.sortTskContents.style.visibility="hidden"}})),document.getElementById("sort-title").addEventListener("click",(()=>{P.sort(((e,t)=>e.name.toUpperCase()>t.name.toUpperCase()?1:-1)),N(x.prjList),I()})),document.getElementById("sort-date").addEventListener("click",(()=>{P.sort(((e,t)=>e.id>t.id?1:-1)),N(x.prjList),I()})),document.getElementById("sort-num-tasks").addEventListener("click",(()=>{P.sort(((e,t)=>e.tasks.length<t.tasks.length?1:-1)),N(x.prjList),I()})),document.getElementById("prj-rnm-desc").addEventListener("click",(function(){!0===x.tempTextarea.disabled?(x.tempTextarea.disabled=!1,x.tempTextarea.focus(),P.forEach((function(e,t){!0===P[t].active&&(x.tempTextarea.value=P[t].description)}))):(P.forEach((function(e,t){!0===P[t].active&&(P[t].description=x.tempTextarea.value)})),x.tempTextarea.disabled=!0),T()})),x.searchProjects.addEventListener("input",L),x.taskSettings.addEventListener("click",(function(){w.settings.style.display="block",w.btnThemes.classList.add("active-tab"),w.settingsBtnCont.append(w.btnApply,w.btnClose),w.settingsMain.append(w.themesCont,w.settingsBtnCont)})),w.btnClose.addEventListener("click",(function(){N(w.settingsMain),w.btnData.classList.remove("active-tab"),w.settings.style.display="none"})),w.btnThemes.addEventListener("click",(function(){const e=w.tabs.children;for(let t=0;t<e.length;t++)e[t].classList.remove("active-tab");this.classList.add("active-tab"),N(w.settingsMain),N(w.settingsBtnCont),w.settingsBtnCont.append(w.btnApply,w.btnClose),w.themesCont.appendChild(w.settingsBtnCont),w.settingsMain.append(w.themesCont)})),w.btnData.addEventListener("click",(function(){const e=w.tabs.children;for(let t=0;t<e.length;t++)e[t].classList.remove("active-tab");this.classList.add("active-tab"),N(w.settingsMain),N(w.settingsBtnCont),w.settingsBtnCont.append(w.btnClose),w.settingsMain.append(w.btnClearData,w.settingsBtnCont)})),w.btnApply.addEventListener("click",(function(){const e=document.querySelectorAll("input[name=themes]");for(let t=0;t<e.length;t++)e[t].checked&&(D(t),localStorage.setItem("savedTheme",t))})),w.btnClearData.addEventListener("click",(function(){localStorage.removeItem("savedData"),P.splice(0,P.length),N(x.prjList),x.displayTotal(0),A()})),document.getElementById("sort-priority").addEventListener("click",(()=>{for(let e=0;e<P.length;e++)!0===P[e].active&&(P[e].tasks.sort(((e,t)=>e.priority>t.priority?1:-1)),R())})),document.getElementById("sort-tasktitle").addEventListener("click",(()=>{for(let e=0;e<P.length;e++)!0===P[e].active&&(P[e].tasks.sort(((e,t)=>{e.desc.toUpperCase(),t.desc.toUpperCase()})),R())})),document.getElementById("sort-due").addEventListener("click",(function(){for(let e=0;e<P.length;e++)!0===P[e].active&&(P[e].tasks.sort(((e,t)=>e.dueDate>t.dueDate?1:-1)),R())}))})();