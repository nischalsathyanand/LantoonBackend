(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{7484:function(e){var n,s,i,o,c,u,f,x,p,g,m,b,v,j,w,S,C,N,E,k,L,O;e.exports=(n="millisecond",s="second",i="minute",o="hour",c="week",u="month",f="quarter",x="year",p="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v=function(e,n,s){var i=String(e);return!i||i.length>=n?e:""+Array(n+1-i.length).join(s)+e},(w={})[j="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var n=["th","st","nd","rd"],s=e%100;return"["+e+(n[(s-20)%10]||n[s]||"th")+"]"}},S="$isDayjsObject",C=function(e){return e instanceof L||!(!e||!e[S])},N=function t(e,n,s){var i;if(!e)return j;if("string"==typeof e){var o=e.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var c=e.split("-");if(!i&&c.length>1)return t(c[0])}else{var u=e.name;w[u]=e,i=u}return!s&&i&&(j=i),i||!s&&j},E=function(e,n){if(C(e))return e.clone();var s="object"==typeof n?n:{};return s.date=e,s.args=arguments,new L(s)},(k={s:v,z:function(e){var n=-e.utcOffset(),s=Math.abs(n);return(n<=0?"+":"-")+v(Math.floor(s/60),2,"0")+":"+v(s%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,u),o=n-i<0,c=e.clone().add(s+(o?-1:1),u);return+(-(s+(n-i)/(o?i-c:c-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:u,y:x,w:c,d:"day",D:p,h:o,m:i,s:s,ms:n,Q:f})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=N,k.i=C,k.w=function(e,n){return E(e,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})},O=(L=function(){function M(e){this.$L=N(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[S]=!0}var e=M.prototype;return e.parse=function(e){this.$d=function(e){var n=e.date,s=e.utc;if(null===n)return new Date(NaN);if(k.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(m);if(i){var o=i[2]-1||0,c=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,c)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,c)}}return new Date(n)}(e),this.init()},e.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},e.$utils=function(){return k},e.isValid=function(){return this.$d.toString()!==g},e.isSame=function(e,n){var s=E(e);return this.startOf(n)<=s&&s<=this.endOf(n)},e.isAfter=function(e,n){return E(e)<this.startOf(n)},e.isBefore=function(e,n){return this.endOf(n)<E(e)},e.$g=function(e,n,s){return k.u(e)?this[n]:this.set(s,e)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(e,n){var f=this,g=!!k.u(n)||n,m=k.p(e),l=function(e,n){var s=k.w(f.$u?Date.UTC(f.$y,n,e):new Date(f.$y,n,e),f);return g?s:s.endOf("day")},$=function(e,n){return k.w(f.toDate()[e].apply(f.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(n)),f)},b=this.$W,v=this.$M,j=this.$D,w="set"+(this.$u?"UTC":"");switch(m){case x:return g?l(1,0):l(31,11);case u:return g?l(1,v):l(0,v+1);case c:var S=this.$locale().weekStart||0,C=(b<S?b+7:b)-S;return l(g?j-C:j+(6-C),v);case"day":case p:return $(w+"Hours",0);case o:return $(w+"Minutes",1);case i:return $(w+"Seconds",2);case s:return $(w+"Milliseconds",3);default:return this.clone()}},e.endOf=function(e){return this.startOf(e,!1)},e.$set=function(e,c){var f,g=k.p(e),m="set"+(this.$u?"UTC":""),b=((f={}).day=m+"Date",f[p]=m+"Date",f[u]=m+"Month",f[x]=m+"FullYear",f[o]=m+"Hours",f[i]=m+"Minutes",f[s]=m+"Seconds",f[n]=m+"Milliseconds",f)[g],v="day"===g?this.$D+(c-this.$W):c;if(g===u||g===x){var j=this.clone().set(p,1);j.$d[b](v),j.init(),this.$d=j.set(p,Math.min(this.$D,j.daysInMonth())).$d}else b&&this.$d[b](v);return this.init(),this},e.set=function(e,n){return this.clone().$set(e,n)},e.get=function(e){return this[k.p(e)]()},e.add=function(e,n){var f,p=this;e=Number(e);var g=k.p(n),y=function(n){var s=E(p);return k.w(s.date(s.date()+Math.round(n*e)),p)};if(g===u)return this.set(u,this.$M+e);if(g===x)return this.set(x,this.$y+e);if("day"===g)return y(1);if(g===c)return y(7);var m=((f={})[i]=6e4,f[o]=36e5,f[s]=1e3,f)[g]||1,b=this.$d.getTime()+e*m;return k.w(b,this)},e.subtract=function(e,n){return this.add(-1*e,n)},e.format=function(e){var n=this,s=this.$locale();if(!this.isValid())return s.invalidDate||g;var i=e||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),c=this.$H,u=this.$m,f=this.$M,x=s.weekdays,p=s.months,m=s.meridiem,h=function(e,s,o,c){return e&&(e[s]||e(n,i))||o[s].slice(0,c)},d=function(e){return k.s(c%12||12,e,"0")},v=m||function(e,n,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i};return i.replace(b,function(e,i){return i||function(e){switch(e){case"YY":return String(n.$y).slice(-2);case"YYYY":return k.s(n.$y,4,"0");case"M":return f+1;case"MM":return k.s(f+1,2,"0");case"MMM":return h(s.monthsShort,f,p,3);case"MMMM":return h(p,f);case"D":return n.$D;case"DD":return k.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return h(s.weekdaysMin,n.$W,x,2);case"ddd":return h(s.weekdaysShort,n.$W,x,3);case"dddd":return x[n.$W];case"H":return String(c);case"HH":return k.s(c,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return v(c,u,!0);case"A":return v(c,u,!1);case"m":return String(u);case"mm":return k.s(u,2,"0");case"s":return String(n.$s);case"ss":return k.s(n.$s,2,"0");case"SSS":return k.s(n.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},e.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},e.diff=function(e,n,p){var g,m=this,b=k.p(n),v=E(e),j=(v.utcOffset()-this.utcOffset())*6e4,w=this-v,D=function(){return k.m(m,v)};switch(b){case x:g=D()/12;break;case u:g=D();break;case f:g=D()/3;break;case c:g=(w-j)/6048e5;break;case"day":g=(w-j)/864e5;break;case o:g=w/36e5;break;case i:g=w/6e4;break;case s:g=w/1e3;break;default:g=w}return p?g:k.a(g)},e.daysInMonth=function(){return this.endOf(u).$D},e.$locale=function(){return w[this.$L]},e.locale=function(e,n){if(!e)return this.$L;var s=this.clone(),i=N(e,n,!0);return i&&(s.$L=i),s},e.clone=function(){return k.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},M}()).prototype,E.prototype=O,[["$ms",n],["$s",s],["$m",i],["$H",o],["$W","day"],["$M",u],["$y",x],["$D",p]].forEach(function(e){O[e[1]]=function(n){return this.$g(n,e[0],e[1])}}),E.extend=function(e,n){return e.$i||(e(n,L,E),e.$i=!0),E},E.locale=N,E.isDayjs=C,E.unix=function(e){return E(1e3*e)},E.en=w[j],E.Ls=w,E.p={},E)},9275:function(e,n,s){"use strict";s.d(n,{_:function(){return BottomBar},c:function(){return useBottomBarItems}});var i=s(5893),o=s(1664),c=s.n(o);let useBottomBarItems=()=>{let e=[{name:"Learn",href:"/learn",icon:(0,i.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"h-[50px] w-[50px]",children:[(0,i.jsx)("path",{d:"M24.5852 25.2658C24.2883 26.8243 22.9257 27.9519 21.3392 27.9519H10.6401C9.05354 27.9519 7.69094 26.8243 7.39408 25.2658L4.98096 12.5969L15.9001 4.52225L26.9988 12.5941L24.5852 25.2658Z",fill:"#FFC800"}),(0,i.jsx)("path",{opacity:"0.5",fillRule:"evenodd",clipRule:"evenodd",d:"M13.1558 23.1111C13.1558 22.522 13.6333 22.0444 14.2224 22.0444H18.4891C19.0782 22.0444 19.5558 22.522 19.5558 23.1111C19.5558 23.7002 19.0782 24.1778 18.4891 24.1778H14.2224C13.6333 24.1778 13.1558 23.7002 13.1558 23.1111Z",fill:"#945151"}),(0,i.jsx)("path",{d:"M19.4785 16.2998C19.4785 18.2208 17.9212 19.778 16.0002 19.778C14.0792 19.778 12.522 18.2208 12.522 16.2998C12.522 14.3788 14.0792 12.8215 16.0002 12.8215C17.9212 12.8215 19.4785 14.3788 19.4785 16.2998Z",fill:"#945151"}),(0,i.jsx)("path",{d:"M16.1685 2.84462C16.6431 2.84231 17.1233 2.98589 17.5361 3.28558L17.5368 3.2861L29.9455 12.2319C30.9781 12.9822 31.207 14.4275 30.4568 15.4601C29.7067 16.4924 28.262 16.7215 27.2294 15.9719L27.2286 15.9714L16.1602 7.99185L5.09208 15.9712L5.09121 15.9719C4.05865 16.7213 2.61395 16.4923 1.86391 15.4599C1.11367 14.4273 1.34258 12.982 2.3752 12.2318L2.37679 12.2306L14.7839 3.28596L14.7846 3.28544C15.2022 2.98229 15.6887 2.83889 16.1685 2.84462Z",fill:"#FF4B4B"})]})},{name:"Profile",href:"/profile",icon:(0,i.jsxs)("svg",{width:"46",height:"46",viewBox:"0 0 46 46",fill:"none",className:"h-[50px] w-[50px]",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.1826 5.00195C14.3461 5.00195 7.18262 12.1654 7.18262 21.002V21.9375C4.21918 23.4102 2.18262 26.4682 2.18262 30.002C2.18262 34.9725 6.21206 39.002 11.1826 39.002H35.1826C40.1532 39.002 44.1826 34.9725 44.1826 30.002C44.1826 26.4682 42.1461 23.4102 39.1826 21.9375V21.002C39.1826 12.1654 32.0192 5.00195 23.1826 5.00195Z",fill:"#9069CD"}),(0,i.jsx)("path",{d:"M11.1826 21.002C11.1826 14.3745 16.5552 9.00195 23.1826 9.00195C29.81 9.00195 35.1826 14.3745 35.1826 21.002V29.002C35.1826 35.6294 29.81 41.002 23.1826 41.002C16.5552 41.002 11.1826 35.6294 11.1826 29.002V21.002Z",fill:"#F3AD6D"}),(0,i.jsx)("path",{d:"M7.18262 24.502C7.18262 22.0167 9.19734 20.002 11.6826 20.002H34.6826C37.1679 20.002 39.1826 22.0167 39.1826 24.502C39.1826 26.9872 37.1679 29.002 34.6826 29.002H11.6826C9.19734 29.002 7.18262 26.9872 7.18262 24.502Z",fill:"#F3AD6D"}),(0,i.jsx)("path",{d:"M18.1826 20.502C18.1826 19.6735 18.8542 19.002 19.6826 19.002C20.511 19.002 21.1826 19.6735 21.1826 20.502V24.502C21.1826 25.3304 20.511 26.002 19.6826 26.002C18.8542 26.002 18.1826 25.3304 18.1826 24.502V20.502Z",fill:"#BF8034"}),(0,i.jsx)("path",{d:"M24.1826 20.502C24.1826 19.6735 24.8542 19.002 25.6826 19.002C26.511 19.002 27.1826 19.6735 27.1826 20.502V24.502C27.1826 25.3304 26.511 26.002 25.6826 26.002C24.8542 26.002 24.1826 25.3304 24.1826 24.502V20.502Z",fill:"#BF8034"}),(0,i.jsx)("path",{d:"M17.1826 29.0445C17.1826 28.4687 17.6494 28.002 18.2252 28.002H27.1401C27.7159 28.002 28.1826 28.4687 28.1826 29.0445V29.502C28.1826 32.5395 25.7202 35.002 22.6826 35.002C19.6451 35.002 17.1826 32.5395 17.1826 29.502V29.0445Z",fill:"white"}),(0,i.jsx)("path",{d:"M7.18262 21.0062V21.002C7.18262 12.1654 14.3461 5.00195 23.1826 5.00195C26.0199 5.00195 28.6847 5.74049 30.9953 7.0358C29.7326 15.5 22.2386 22.002 13.1826 22.002C11.0788 22.002 9.05929 21.6511 7.18262 21.0062Z",fill:"#9069CD"})]})}];return e.splice(1,0,{name:"Leaderboards",href:"/leaderboard",icon:(0,i.jsxs)("svg",{width:"46",height:"46",viewBox:"0 0 46 46",fill:"none",children:[(0,i.jsx)("path",{d:"M7 9.5C7 7.84314 8.34315 6.5 10 6.5H36C37.6569 6.5 39 7.84315 39 9.5V23.5C39 32.3366 31.8366 39.5 23 39.5C14.1634 39.5 7 32.3366 7 23.5V9.5Z",fill:"#FEC701"}),(0,i.jsx)("path",{opacity:"0.3",d:"M39.0001 13.3455V9.5C39.0001 7.84315 37.657 6.5 36.0001 6.5H31.5706L8.30957 29.8497C9.68623 33.0304 12.0656 35.6759 15.0491 37.3877L39.0001 13.3455Z",fill:"white"})]})}),e},BottomBar=e=>{let{selectedTab:n}=e,s=useBottomBarItems();return(0,i.jsx)("nav",{className:"fixed bottom-0 left-0 right-0 z-20 border-t-2 border-[#e5e5e5] bg-white md:hidden",children:(0,i.jsx)("ul",{className:"flex h-[88px]",children:s.map(e=>(0,i.jsx)("li",{className:"flex flex-1 items-center justify-center",children:(0,i.jsxs)(c(),{href:e.href,className:e.name===n?"rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] px-2 py-1":"px-2 py-1",children:[e.icon,(0,i.jsx)("span",{className:"sr-only",children:e.name})]})},e.href))})})}},4038:function(e,n,s){"use strict";s.d(n,{f:function(){return Calendar}});var i=s(5893),o=s(7484),c=s.n(o),u=s(2282),f=s(8816),x=s(8399);let getCalendarDays=e=>{let n=e.startOf("month"),s=[],i=8-n.day(),o=[...(0,x.w)(0,n.day()).map(()=>null),...(0,x.w)(1,i)];s.push(o);for(let n=i;n<=e.daysInMonth();n+=7)s.push((0,x.w)(n,n+7).map(n=>n<=e.daysInMonth()?n:null));return s},Calendar=e=>{let{now:n,setNow:s}=e,o=(0,u.w)(e=>e.isActiveDay),x=n.format("MMMM YYYY"),p=c()(),g=getCalendarDays(n);return(0,i.jsxs)("article",{className:"flex flex-col rounded-xl border-2 border-gray-300 p-3 text-gray-400",children:[(0,i.jsxs)("header",{className:"flex items-center justify-between gap-3",children:[(0,i.jsxs)("button",{className:"text-gray-400",onClick:()=>s(e=>e.add(-1,"month")),children:[(0,i.jsx)(f.zr,{}),(0,i.jsx)("span",{className:"sr-only",children:"Go to previous month"})]}),(0,i.jsx)("h3",{className:"text-lg font-bold uppercase text-gray-500",children:x}),(0,i.jsxs)("button",{className:"text-gray-400",onClick:()=>s(e=>e.add(1,"month")),children:[(0,i.jsx)(f.dj,{}),(0,i.jsx)("span",{className:"sr-only",children:"Go to next month"})]})]}),(0,i.jsx)("div",{className:"flex justify-between px-3 py-2",children:"SMTWTFS".split("").map((e,n)=>(0,i.jsx)("div",{className:"flex h-9 w-9 items-center justify-center",children:e},n))}),(0,i.jsx)("div",{className:"flex flex-col gap-3 px-3 py-2",children:g.map((e,s)=>(0,i.jsx)("div",{className:"flex justify-between",children:e.map((e,s)=>{let c=null!==e&&o(n.date(e)),u=e===p.date()&&n.month()===p.month()&&n.year()===p.year();return(0,i.jsx)("div",{className:["flex h-9 w-9 items-center justify-center rounded-full",c?"bg-orange-400 text-white":u?"bg-gray-300 text-gray-600":""].join(" "),children:e},s)})},s))})]})}},3251:function(e,n,s){"use strict";s.d(n,{W:function(){return Flag}});var i=s(5893);let Flag=e=>{let{language:n,width:s=84}=e;return(0,i.jsx)("svg",{viewBox:n.viewBox,style:{height:s*(19.3171/24),width:s},children:(0,i.jsx)("image",{height:3168,href:"/static/_next/static/media/flags.1f5c86a8.svg",width:82})})}},9395:function(e,n,s){"use strict";s.d(n,{_:function(){return LeftBar}});var i=s(5893),o=s(1664),c=s.n(o),u=s(7294),f=s(9275),x=s(8650),p=s(2282);let LeftBarMoreMenuSvg=e=>(0,i.jsxs)("svg",{width:"46",height:"46",viewBox:"0 0 46 46",fill:"none",...e,children:[(0,i.jsx)("circle",{cx:"23",cy:"23",r:"19",fill:"#CE82FF",stroke:"#CE82FF",strokeWidth:"2"}),(0,i.jsx)("circle",{cx:"15",cy:"23",r:"2",fill:"white"}),(0,i.jsx)("circle",{cx:"23",cy:"23",r:"2",fill:"white"}),(0,i.jsx)("circle",{cx:"31",cy:"23",r:"2",fill:"white"})]}),LeftBar=e=>{let{selectedTab:n}=e,s=(0,p.w)(e=>e.loggedIn),o=(0,p.w)(e=>e.logOut),[g,m]=(0,u.useState)(!1),[b,v]=(0,u.useState)("HIDDEN"),j=(0,f.c)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("nav",{className:"fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2 border-[#e5e5e5] bg-white p-3 md:flex lg:w-64 lg:p-5",children:[(0,i.jsx)(c(),{href:"/learn",className:"mb-5 ml-5 mt-5 hidden text-3xl font-bold text-[#58cc02] lg:block",children:"Lantoon"}),(0,i.jsxs)("ul",{className:"flex flex-col items-stretch gap-3",children:[j.map(e=>(0,i.jsx)("li",{className:"flex flex-1",children:e.name===n?(0,i.jsxs)(c(),{href:e.href,className:"flex grow items-center gap-3 rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] px-2 py-1 text-sm font-bold uppercase text-blue-400",children:[e.icon," ",(0,i.jsx)("span",{className:"sr-only lg:not-sr-only",children:e.name})]}):(0,i.jsxs)(c(),{href:e.href,className:"flex grow items-center gap-3 rounded-xl px-2 py-1 text-sm font-bold uppercase text-gray-400 hover:bg-gray-100",children:[e.icon," ",(0,i.jsx)("span",{className:"sr-only lg:not-sr-only",children:e.name})]})},e.href)),(0,i.jsxs)("div",{className:"relative flex grow cursor-default items-center gap-3 rounded-xl px-2 py-1 font-bold uppercase text-gray-400 hover:bg-gray-100",onClick:()=>m(e=>!e),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),role:"button",tabIndex:0,children:[(0,i.jsx)(LeftBarMoreMenuSvg,{})," ",(0,i.jsx)("span",{className:"hidden text-sm lg:inline",children:"More"}),(0,i.jsx)("div",{className:["absolute left-full top-[-10px] min-w-[300px] rounded-2xl border-2 border-gray-300 bg-white text-left text-gray-400",g?"":"hidden"].join(" "),children:(0,i.jsxs)("div",{className:"flex flex-col border-t-2 border-gray-300 py-2",children:[!s&&(0,i.jsx)("button",{className:"px-5 py-2 text-left uppercase hover:bg-gray-100",onClick:()=>v("SIGNUP"),children:"Create a profile"}),(0,i.jsx)(c(),{className:"px-5 py-2 text-left uppercase hover:bg-gray-100",href:s?"/settings/account":"/settings/sound",children:"Settings"}),(0,i.jsx)(c(),{className:"px-5 py-2 text-left uppercase hover:bg-gray-100",href:"https://support.duolingo.com/hc/en-us",children:"Help"}),!s&&(0,i.jsx)("button",{className:"px-5 py-2 text-left uppercase hover:bg-gray-100",onClick:()=>v("LOGIN"),children:"Sign in"}),s&&(0,i.jsx)("button",{className:"px-5 py-2 text-left uppercase hover:bg-gray-100",onClick:o,children:"Sign out"})]})})]})]})]}),(0,i.jsx)(x.cf,{loginScreenState:b,setLoginScreenState:v})]})}},8402:function(e,n,s){"use strict";s.d(n,{D:function(){return TopBar}});var i=s(5893),o=s(7484),c=s.n(o),u=s(1664),f=s.n(u),x=s(7294),p=s(2282),g=s(4038),m=s(3251),b=s(8816);let AddLanguageSvg=e=>(0,i.jsx)("svg",{width:"36",height:"29",viewBox:"0 0 36 29",...e,children:(0,i.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,i.jsxs)("g",{stroke:"#AFAFAF",children:[(0,i.jsx)("path",{d:"M7.743 3c-1.67 0-2.315.125-2.98.48A3.071 3.071 0 0 0 3.48 4.763c-.355.665-.48 1.31-.48 2.98v13.514c0 1.67.125 2.315.48 2.98.297.555.728.986 1.283 1.283.665.355 1.31.48 2.98.48h20.514c1.67 0 2.315-.125 2.98-.48a3.071 3.071 0 0 0 1.283-1.283c.355-.665.48-1.31.48-2.98V7.743c0-1.67-.125-2.315-.48-2.98a3.071 3.071 0 0 0-1.283-1.283c-.665-.355-1.31-.48-2.98-.48H7.743z",strokeWidth:"2"}),(0,i.jsx)("g",{strokeLinecap:"round",strokeWidth:"3",children:(0,i.jsx)("path",{d:"M18 10v9M13.5 14.5h9"})})]})})}),TopBar=e=>{let{backgroundColor:n="bg-[#58cc02]",borderColor:s="border-[#46a302]"}=e,[o,u]=(0,x.useState)("HIDDEN"),[v,j]=(0,x.useState)(c()());(0,p.w)(e=>e.streak);let w=(0,p.w)(e=>e.lingots),S=(0,p.w)(e=>e.language),[C,N]=(0,x.useState)(null);return(0,x.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("selectedLanguage"));N(e)},[]),(0,i.jsx)("header",{className:" z-20 h-[58px] w-full",children:(0,i.jsxs)("div",{className:"relative flex h-full w-full items-center justify-between border-b-2 px-[10px] transition duration-500 ".concat(s," ").concat(n),children:[(0,i.jsxs)("button",{onClick:()=>{window.location.href="/register"},children:[C?(0,i.jsx)("img",{src:C.picture,alt:S.name,style:{width:45,height:36,objectFit:"cover",objectPosition:"center",border:"2px solid white",borderRadius:"10px"}}):null,(0,i.jsx)("span",{className:"sr-only",children:"See languages"})]}),(0,i.jsx)(b.wi,{onClick:()=>u(e=>"MORE"===e?"HIDDEN":"MORE"),role:"button",tabIndex:0,"aria-label":"Toggle more menu"}),(0,i.jsxs)("div",{className:["absolute left-0 right-0 top-full bg-white transition duration-300","HIDDEN"===o?"opacity-0":"opacity-100"].join(" "),"aria-hidden":"HIDDEN"===o,children:[(()=>{switch(o){case"LANGUAGES":return(0,i.jsxs)("div",{className:"flex gap-5 p-5",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center justify-between gap-2",children:[(0,i.jsx)("div",{className:"rounded-2xl border-4 border-blue-400",children:(0,i.jsx)(m.W,{language:S,width:80})}),(0,i.jsx)("span",{className:"font-bold",children:S.name})]}),(0,i.jsxs)(f(),{className:"flex flex-col items-center justify-between gap-2",href:"/register",children:[(0,i.jsx)("div",{className:"rounded-2xl border-4 border-white",children:(0,i.jsx)(AddLanguageSvg,{className:"h-16 w-20"})}),(0,i.jsx)("span",{className:"font-bold text-gray-400",children:"Courses"})]})]});case"STREAK":return(0,i.jsxs)("div",{className:"flex grow flex-col items-center gap-3 p-5",children:[(0,i.jsx)("h2",{className:"text-xl font-bold",children:"Streak"}),(0,i.jsx)("p",{className:"text-sm text-gray-400",children:"Practice each day so your streak won't reset!"}),(0,i.jsx)("div",{className:"self-stretch",children:(0,i.jsx)(g.f,{now:v,setNow:j})})]});case"GEMS":return(0,i.jsxs)("div",{className:"flex grow items-center gap-3 p-5",children:[(0,i.jsx)(b.i8,{className:"h-24 w-24"}),(0,i.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,i.jsx)("h2",{className:"text-xl font-bold text-black",children:"Lingots"}),(0,i.jsxs)("p",{className:"text-sm font-normal text-gray-400",children:["You have ",w," ",1===w?"lingot":"lingots","."]}),(0,i.jsx)(f(),{className:"font-bold uppercase text-blue-400 transition hover:brightness-110",href:"/shop",children:"Go to shop"})]})]});case"MORE":return(0,i.jsxs)("div",{className:"flex grow flex-col",children:[(0,i.jsxs)(f(),{className:"flex items-center gap-2 p-2 font-bold text-gray-700",href:"https://podcast.duolingo.com",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(b.Df,{className:"h-10 w-10"}),"Podcast"]}),(0,i.jsxs)(f(),{className:"flex items-center gap-2 border-t-2 border-gray-300 p-2 font-bold text-gray-700",href:"https://schools.duolingo.com",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(b.tL,{className:"h-10 w-10"}),"Schools"]})]});case"HIDDEN":return null}})(),(0,i.jsx)("div",{className:["absolute left-0 top-full h-screen w-screen bg-black opacity-30","HIDDEN"===o?"pointer-events-none":""].join(" "),onClick:()=>u("HIDDEN"),"aria-label":"Hide menu",role:"button"})]})]})})}},1163:function(e,n,s){e.exports=s(9974)},3250:function(e,n,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=s(7294),o="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},c=i.useState,u=i.useEffect,f=i.useLayoutEffect,x=i.useDebugValue;function r(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!o(e,s)}catch(e){return!0}}var p="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var s=n(),i=c({inst:{value:s,getSnapshot:n}}),o=i[0].inst,p=i[1];return f(function(){o.value=s,o.getSnapshot=n,r(o)&&p({inst:o})},[e,s,n]),u(function(){return r(o)&&p({inst:o}),e(function(){r(o)&&p({inst:o})})},[e]),x(s),s};n.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:p},139:function(e,n,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=s(7294),o=s(1688),c="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},u=o.useSyncExternalStore,f=i.useRef,x=i.useEffect,p=i.useMemo,g=i.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,s,i,o){var m=f(null);if(null===m.current){var b={hasValue:!1,value:null};m.current=b}else b=m.current;var v=u(e,(m=p(function(){function a(n){if(!f){if(f=!0,e=n,n=i(n),void 0!==o&&b.hasValue){var s=b.value;if(o(s,n))return u=s}return u=n}if(s=u,c(e,n))return s;var x=i(n);return void 0!==o&&o(s,x)?s:(e=n,u=x)}var e,u,f=!1,x=void 0===s?null:s;return[function(){return a(n())},null===x?void 0:function(){return a(x())}]},[n,s,i,o]))[0],m[1]);return x(function(){b.hasValue=!0,b.value=v},[v]),g(v),v}},1688:function(e,n,s){"use strict";e.exports=s(3250)},2798:function(e,n,s){"use strict";e.exports=s(139)},4529:function(e,n,s){"use strict";s.d(n,{Ue:function(){return create}});let createStoreImpl=e=>{let n;let s=new Set,setState=(e,i)=>{let o="function"==typeof e?e(n):e;if(!Object.is(o,n)){let e=n;n=(null!=i?i:"object"!=typeof o)?o:Object.assign({},n,o),s.forEach(s=>s(n,e))}},getState=()=>n,i={setState,getState,subscribe:e=>(s.add(e),()=>s.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),s.clear()}};return n=e(setState,getState,i),i},createStore=e=>e?createStoreImpl(e):createStoreImpl;var i=s(7294),o=s(2798);let{useSyncExternalStoreWithSelector:c}=o,u=!1,createImpl=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let n="function"==typeof e?createStore(e):e,useBoundStore=(e,s)=>(function(e,n=e.getState,s){s&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let o=c(e.subscribe,e.getState,e.getServerState||e.getState,n,s);return(0,i.useDebugValue)(o),o})(n,e,s);return Object.assign(useBoundStore,n),useBoundStore},create=e=>e?createImpl(e):createImpl}}]);