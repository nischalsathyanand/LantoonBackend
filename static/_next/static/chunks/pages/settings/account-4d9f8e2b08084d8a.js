(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{6093:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/account",function(){return l(580)}])},1762:function(e,t,l){"use strict";l.d(t,{V:function(){return SettingsRightNav}});var s=l(5893),a=l(1664),n=l.n(a);l(7294);var r=l(2282);let useSettingsPages=()=>{let e=(0,r.w)(e=>e.loggedIn);return e?[{title:"Account",href:"/settings/account"},{title:"Sound",href:"/settings/sound"},{title:"Edit Daily Goal",href:"/settings/coach"}]:[{title:"Sound",href:"/settings/sound"},{title:"Edit Daily Goal",href:"/settings/coach"}]},SettingsRightNav=e=>{let{selectedTab:t}=e,l=useSettingsPages();return(0,s.jsx)("div",{className:"hidden h-fit w-80 flex-col gap-1 rounded-2xl border-2 border-gray-200 p-5 lg:flex",children:l.map(e=>{let{title:l,href:a}=e;return(0,s.jsx)(n(),{href:a,className:["rounded-2xl p-4 font-bold hover:bg-gray-300",l===t?"bg-gray-300":""].join(" "),children:l},l)})})}},580:function(e,t,l){"use strict";l.r(t);var s=l(5893),a=l(7294),n=l(9275),r=l(9395),i=l(8402),o=l(1762),c=l(9500);t.default=()=>{let[e,t]=(0,a.useState)([]),[l,u]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let fetchAccountDetails=async()=>{try{let e=localStorage.getItem("token");if(e){let l=await (0,c.jg)(e);u(l),console.log(l),t([{title:"First Name",value:l.first_name,setValue:()=>{console.log("yeay")}},{title:"Last Name",value:l.last_name,setValue:()=>{console.log("yeay")}},{title:"Username",value:l.username,setValue:()=>{console.log("yeay")}},{title:"Email",value:l.email,setValue:()=>{console.log("yeay")}}])}}catch(e){}};fetchAccountDetails()},[]),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.D,{}),(0,s.jsx)(r._,{selectedTab:null}),(0,s.jsx)(n._,{selectedTab:null}),(0,s.jsxs)("div",{className:"mx-auto flex flex-col gap-5 px-4 py-20 sm:py-10 md:pl-28 lg:pl-72",children:[(0,s.jsxs)("div",{className:"mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-4xl",children:[(0,s.jsx)("h1",{className:"text-lg font-bold text-gray-800 sm:text-2xl",children:"Account"}),(0,s.jsx)("button",{className:"rounded-2xl border-b-4 border-green-600 bg-green-500 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100",onClick:()=>{console.log("yeay")},children:"Save changes"})]}),(0,s.jsxs)("div",{className:"flex justify-center gap-12",children:[(0,s.jsx)("div",{className:"flex w-full max-w-xl flex-col gap-8",children:e.map(e=>{let{title:t,value:l,setValue:a}=e;return(0,s.jsxs)("div",{className:"flex flex-col items-stretch justify-between gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-10 sm:pl-10",children:[(0,s.jsx)("div",{className:"font-bold sm:w-1/6",children:t}),(0,s.jsx)("input",{className:"grow rounded-2xl border-2 border-gray-200 p-4 py-2",value:l,onChange:e=>a(e.target.value)})]},t)})}),(0,s.jsx)(o.V,{selectedTab:"Account"})]})]})]})}}},function(e){e.O(0,[664,154,816,650,286,774,888,179],function(){return e(e.s=6093)}),_N_E=e.O()}]);