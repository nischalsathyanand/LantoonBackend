(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[659],{9562:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lesson3",function(){return t(8295)}])},2282:function(e,s,t){"use strict";t.d(s,{w:function(){return c}});var r=t(4529);let createGoalXpSlice=e=>({goalXp:10,setGoalXp:s=>e({goalXp:s})});var n=t(6947);let createLanguageSlice=e=>({language:n.Z[6],setLanguage:s=>e({language:s})});var o=t(5043);let createLessonSlice=e=>({lessonsCompleted:0,increaseLessonsCompleted:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e(e=>{let{lessonsCompleted:t}=e;return{lessonsCompleted:t+s}})},jumpToUnit:s=>e(e=>{let{lessonsCompleted:t}=e,r=o.D.filter(e=>e.unitNumber<s).map(e=>4*e.tiles.length).reduce((e,s)=>e+s,0);return{lessonsCompleted:Math.max(t,r)}})}),createLingotSlice=e=>({lingots:0,increaseLingots:s=>e(e=>{let{lingots:t}=e;return{lingots:t+s}})}),createSoundSettingsSlice=e=>({soundEffects:!0,speakingExercises:!0,listeningExercises:!0,setSoundEffects:s=>e(()=>({soundEffects:s})),setSpeakingExercises:s=>e(()=>({speakingExercises:s})),setListeningExercises:s=>e(()=>({listeningExercises:s}))});var a=t(7484),i=t.n(a);let toDateString=e=>e.format("YYYY-MM-DD"),addActiveDay=(e,s)=>new Set([...e,toDateString(s)]),isActiveDay=(e,s)=>e.has(toDateString(s)),getCurrentStreak=e=>{let s=0,t=i()();for(;isActiveDay(e,t);)t=t.add(-1,"day"),s+=1;return s},createStreakSlice=(e,s)=>({activeDays:new Set,streak:0,isActiveDay:e=>isActiveDay(s().activeDays,e),addToday:()=>{let t=addActiveDay(s().activeDays,i()());e({activeDays:t,streak:getCurrentStreak(t)})}}),createUserSlice=e=>({name:"",username:"",joinedAt:i()(),loggedIn:!1,setName:s=>e(()=>({name:s})),setUsername:s=>e(()=>({username:s})),logIn:()=>e(()=>({loggedIn:!0})),logOut:()=>e(()=>({loggedIn:!1}))});var l=t(8399);let addXpToday=(e,s)=>addXp(e,s,i()()),addXp=(e,s,t)=>({...e,[toDateString(t)]:xpAt(e,t)+s}),xpAt=(e,s)=>{var t;return null!==(t=e[toDateString(s)])&&void 0!==t?t:0},createXpSlice=(e,s)=>({xpByDate:{},increaseXp:t=>e({xpByDate:addXpToday(s().xpByDate,t)}),xpToday:()=>xpAt(s().xpByDate,i()()),xpThisWeek:()=>(0,l.S)((0,l.w)(0,i()().day()+1).map(e=>xpAt(s().xpByDate,i()().add(-e))))}),c=(0,r.Ue)(function(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return{...createGoalXpSlice(...s),...createLanguageSlice(...s),...createLessonSlice(...s),...createLingotSlice(...s),...createSoundSettingsSlice(...s),...createStreakSlice(...s),...createUserSlice(...s),...createXpSlice(...s)}})},8295:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return lesson3}});var r=t(5893),n=t(5675),o=t.n(n),a=t(1664),i=t.n(a),l=t(7294),c=t(8816),d=t(2282),x=t(1163),m={src:"/_next/static/media/speaker_normal.510e5330.svg",height:202,width:202,blurWidth:0,blurHeight:0},u={src:"/_next/static/media/speaker_slow.af9c3115.svg",height:232,width:232,blurWidth:0,blurHeight:0};let h={q_type:"L",question:'This is "the apple"?',image:(0,r.jsx)(c.Wo,{}),audioUrl:"https://lantoon.co.in/Lantoon/content/3/3/3/audio/c216/c216.mp3"},p={q_type:"P1",question:'Which one of these is "the apple"?',audioUrl:"https://lantoon.co.in/Lantoon/content/3/3/3/audio/c216/c216.mp3",answers:[{icon:(0,r.jsx)(c.Wo,{}),name:"la manzana"},{icon:(0,r.jsx)(c.k5,{}),name:"el ni\xf1o"},{icon:(0,r.jsx)(c.hV,{}),name:"la mujer"},{icon:(0,r.jsx)(c.k5,{}),name:"el ni\xf1o"}],correctAnswer:0},g={q_type:"P2",question:'Which one of these is "the apple"?',audioUrl:"https://lantoon.co.in/Lantoon/content/3/3/3/audio/c216/c216.mp3",answers:[{icon:(0,r.jsx)(c.Wo,{}),name:"la manzana"},{icon:(0,r.jsx)(c.k5,{}),name:"el ni\xf1o"},{icon:(0,r.jsx)(c.hV,{}),name:"la mujer"},{icon:(0,r.jsx)(c.k5,{}),name:"el ni\xf1o"}],correctAnswer:0};c.Wo,c.Wo,c.Wo,c.Wo,c.k5,c.hV,c.k5,c.Wo,c.Wo,c.k5,c.hV,c.k5;let b=[h,p,g],numbersEqual=(e,s)=>e.length===s.length&&e.every((t,r)=>e[r]===s[r]),formatTime=e=>{let s=Math.floor(e/1e3)%60,t=Math.floor(e/1e3/60)%60,r=Math.floor(e/1e3/60/60);return 0===r?[t,s].map(e=>e.toString().padStart(2,"0")).join(":"):[r,t,s].map(e=>e.toString().padStart(2,"0")).join(":")};var lesson3=()=>{var e;let s=(0,x.useRouter)(),[t,n]=(0,l.useState)(0),[o,a]=(0,l.useState)(0),[i,c]=(0,l.useState)(0),[d,m]=(0,l.useState)(null),[u,p]=(0,l.useState)(!1),[g,w]=(0,l.useState)(!1),[f,y]=(0,l.useState)([]),j=(0,l.useRef)(Date.now()),v=(0,l.useRef)(j.current+18e4+33e3),[N,k]=(0,l.useState)([]),[S,C]=(0,l.useState)(!1),A=null!==(e=b[t])&&void 0!==e?e:h,L=b.map(e=>e.q_type).filter((e,s,t)=>t.indexOf(e)===s),q=L.map(e=>({q_type:e,count:L.filter(s=>s.q_type===e).length})),R=q.filter(e=>"P1"===e.q_type||"P2"===e.q_type||"P3"===e.q_type||"QP1"===e.q_type||"QP2"===e.q_type).length;(0,l.useEffect)(()=>{var e;t!=b.length&&PlayAudioUrl({audioUrl:null===(e=b[t])||void 0===e?void 0:e.audioUrl})},[t]);let[P,B]=(0,l.useState)(!0),F="fast-forward"in s.query&&!isNaN(Number(s.query["fast-forward"]))?3-i:null,{correctAnswer:E}=A,D=Array.isArray(E)?numbersEqual(f,E):d===E,onCheckAnswer=()=>{p(!0),D?a(e=>e+1):c(e=>e+1),k(e=>{var s,t;return[...e,{question:A.question,yourResponse:"P1"===A.q_type&&null!==(t=null===(s=A.answers[null!=d?d:0])||void 0===s?void 0:s.name)&&void 0!==t?t:"",correctResponse:"P1"===A.q_type?A.answers[A.correctAnswer].name:""}]})},onFinish=()=>{m(null),y([]),p(!1),n(e=>e+1),v.current=Date.now()},onSkip=()=>{m(null),p(!0)},_=Number(s.query["fast-forward"]);if(null!==F&&F<0&&!u)return(0,r.jsx)(LessonFastForwardEndFail,{unitNumber:_,reviewLessonShown:S,setReviewLessonShown:C,questionResults:N});if(null!==F&&F>=0&&!u&&o>=R)return(0,r.jsx)(LessonFastForwardEndPass,{unitNumber:_,reviewLessonShown:S,setReviewLessonShown:C,questionResults:N});if(null!==F&&P)return(0,r.jsx)(LessonFastForwardStart,{unitNumber:_,setIsStartingLesson:B});if(o>=R&&!u)return(0,r.jsx)(LessonComplete,{correctAnswerCount:o,incorrectAnswerCount:i,startTime:j,endTime:v,reviewLessonShown:S,setReviewLessonShown:C,questionResults:N});switch(A.q_type){case"L":return(0,r.jsx)(Topic,{problem:A,correctAnswerCount:o,totalCorrectAnswersNeeded:R,quitMessageShown:g,setQuitMessageShown:w,onFinish:onFinish,hearts:F});case"P1":return(0,r.jsx)(ProblemWriteInEnglish,{problem:A,correctAnswerCount:o,totalCorrectAnswersNeeded:R,quitMessageShown:g,correctAnswerShown:u,setQuitMessageShown:w,isAnswerCorrect:D,onCheckAnswer:onCheckAnswer,onFinish:onFinish,onSkip:onSkip,hearts:F,selectedAnswer:d,setSelectedAnswer:m,skipHeading:!1});case"P2":return(0,r.jsx)(ProblemWriteInEnglish,{problem:A,correctAnswerCount:o,totalCorrectAnswersNeeded:R,quitMessageShown:g,correctAnswerShown:u,setQuitMessageShown:w,isAnswerCorrect:D,onCheckAnswer:onCheckAnswer,onFinish:onFinish,onSkip:onSkip,hearts:F,selectedAnswer:d,setSelectedAnswer:m,skipHeading:!0})}};let ProgressBar=e=>{let{correctAnswerCount:s,totalCorrectAnswersNeeded:t,setQuitMessageShown:n,hearts:o}=e;return(0,r.jsxs)("header",{className:"flex items-center gap-4",children:[0===s?(0,r.jsxs)(i(),{href:"/learn",className:"text-gray-400",children:[(0,r.jsx)(c.sZ,{}),(0,r.jsx)("span",{className:"sr-only",children:"Exit lesson"})]}):(0,r.jsxs)("button",{className:"text-gray-400",onClick:()=>n(!0),children:[(0,r.jsx)(c.sZ,{}),(0,r.jsx)("span",{className:"sr-only",children:"Exit lesson"})]}),(0,r.jsx)("div",{className:"h-4 grow rounded-full bg-gray-200",role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":s/t,children:(0,r.jsx)("div",{className:"h-full rounded-full bg-green-500 transition-all duration-700 "+(s>0?"px-2 pt-1 ":""),style:{width:"".concat(s/t*100,"%")},children:(0,r.jsx)("div",{className:"h-[5px] w-full rounded-full bg-green-400"})})}),null!==o&&[1,2,3].map(e=>e<=o?(0,r.jsx)(c.CE,{},e):(0,r.jsx)(c.mw,{},e))]})},QuitMessage=e=>{let{quitMessageShown:s,setQuitMessageShown:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:s?"fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-60 transition-all duration-300":"pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-0 transition-all duration-300",onClick:()=>t(!1),"aria-label":"Close quit message",role:"button"}),(0,r.jsxs)("article",{className:s?"fixed bottom-0 left-0 right-0 z-40 flex flex-col gap-4 bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row":"fixed -bottom-96 left-0 right-0 z-40 flex flex-col bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row","aria-hidden":!s,children:[(0,r.jsxs)("div",{className:"flex grow flex-col gap-4",children:[(0,r.jsx)("h2",{className:"text-lg font-bold sm:text-2xl",children:"Are you sure you want to quit?"}),(0,r.jsx)("p",{className:"text-gray-500 sm:text-lg",children:"All progress for this lesson will be lost."})]}),(0,r.jsxs)("div",{className:"flex grow flex-col items-center justify-center gap-4 sm:flex-row-reverse",children:[(0,r.jsx)(i(),{className:"flex w-full items-center justify-center rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-105 sm:w-48",href:"/learn",children:"Quit"}),(0,r.jsx)("button",{className:"w-full rounded-2xl py-3 font-bold uppercase text-blue-400 transition hover:brightness-90 sm:w-48 sm:border-2 sm:border-b-4 sm:border-gray-300 sm:text-gray-400 sm:hover:bg-gray-100",onClick:()=>t(!1),children:"Stay"})]})]})]})},CheckAnswer=e=>{let{isAnswerSelected:s,isAnswerCorrect:t,correctAnswerShown:n,correctAnswer:o,onCheckAnswer:a,onFinish:i,onSkip:l}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,r.jsxs)("div",{className:"mx-auto flex max-w-5xl sm:justify-between",children:[(0,r.jsx)("button",{className:"hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit",onClick:l,children:"Skip"}),s?(0,r.jsx)("button",{onClick:a,className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0",children:"Check"}):(0,r.jsx)("button",{className:"grow rounded-2xl bg-gray-200 p-3 font-bold uppercase text-gray-400 sm:min-w-[150px] sm:max-w-fit sm:grow-0",disabled:!0,children:"Check"})]})}),(0,r.jsx)("div",{className:n?t?"fixed bottom-0 left-0 right-0 bg-lime-100 font-bold text-green-600 transition-all":"fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all":"fixed -bottom-52 left-0 right-0",children:(0,r.jsxs)("div",{className:"flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:py-14",children:[(0,r.jsx)(r.Fragment,{children:t?(0,r.jsxs)("div",{className:"mb-2 flex flex-col gap-5 sm:flex-row sm:items-center",children:[(0,r.jsx)("div",{className:"hidden rounded-full bg-white p-5 text-green-500 sm:block",children:(0,r.jsx)(c.f9,{})}),(0,r.jsx)("div",{className:"text-2xl",children:"Good job!"})]}):(0,r.jsxs)("div",{className:"mb-2 flex flex-col gap-5 sm:flex-row sm:items-center",children:[(0,r.jsx)("div",{className:"hidden rounded-full bg-white p-5 text-red-500 sm:block",children:(0,r.jsx)(c.Ni,{})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-2xl",children:"Correct solution:"})," ",(0,r.jsx)("div",{className:"text-sm font-normal",children:o})]})]})}),(0,r.jsx)("button",{onClick:i,className:t?"w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit":"w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit",children:"Continue"})]})})]})},LessonContinue=e=>{let{onFinish:s}=e;return(0,r.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,r.jsx)("div",{className:"mx-auto flex max-w-5xl sm:justify-center",children:(0,r.jsx)("button",{onClick:s,className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0",children:"Continue"})})})},PlayAudioUrl=e=>{let{audioUrl:s,playbackRate:t,setQuestionFinished:r}=e,n=new Audio(s);null!=t&&(n.playbackRate=t),n.play().then(()=>{null!=r&&r(!0)})},Topic=e=>{let{problem:s,correctAnswerCount:t,totalCorrectAnswersNeeded:n,quitMessageShown:a,setQuitMessageShown:i,hearts:l,onFinish:c}=e,{image:d,question:x,audioUrl:h}=s;return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0",children:[(0,r.jsxs)("div",{className:"flex grow flex-col items-center gap-5",children:[(0,r.jsx)("div",{className:"w-full max-w-5xl sm:mt-8 sm:px-5",children:(0,r.jsx)(ProgressBar,{correctAnswerCount:t,totalCorrectAnswersNeeded:n,setQuitMessageShown:i,hearts:l})}),(0,r.jsxs)("section",{className:"flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5",children:[(0,r.jsx)("h1",{className:"self-start text-2xl font-bold sm:text-3xl",children:x}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100",children:d})})]}),(0,r.jsxs)("div",{className:"mt-4 row",style:{display:"flex"},children:[(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("button",{onClick:()=>PlayAudioUrl({audioUrl:h}),children:(0,r.jsx)(o(),{src:m,alt:"Image",height:60})}),(0,r.jsx)("button",{onClick:()=>PlayAudioUrl({audioUrl:h,playbackRate:.5}),children:(0,r.jsx)(o(),{src:u,alt:"Image",height:60})})]})]}),(0,r.jsx)(LessonContinue,{onFinish:c}),(0,r.jsx)(QuitMessage,{quitMessageShown:a,setQuitMessageShown:i})]})},ProblemWriteInEnglish=e=>{let{problem:s,correctAnswerCount:t,totalCorrectAnswersNeeded:n,selectedAnswer:a,setSelectedAnswer:i,quitMessageShown:l,correctAnswerShown:c,setQuitMessageShown:d,isAnswerCorrect:x,onCheckAnswer:h,onFinish:p,onSkip:g,hearts:b,skipHeading:w}=e,{question:f,correctAnswer:y,answers:j,audioUrl:v}=s;return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0",children:[(0,r.jsxs)("div",{className:"flex grow flex-col items-center gap-5",children:[(0,r.jsx)("div",{className:"w-full max-w-5xl sm:mt-8 sm:px-5",children:(0,r.jsx)(ProgressBar,{correctAnswerCount:t,totalCorrectAnswersNeeded:n,setQuitMessageShown:d,hearts:b})}),(0,r.jsxs)("section",{className:"flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5",children:[w?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("h1",{className:"self-start text-2xl font-bold sm:text-3xl",children:f}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-2 sm:grid-cols-2",role:"radiogroup",children:j.map((e,s)=>(0,r.jsxs)("div",{className:s===a?"cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400":"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100",role:"radio","aria-checked":s===a,tabIndex:0,onClick:()=>i(s),children:[e.icon,(0,r.jsx)("h2",{className:"text-center",children:e.name})]},s))})]}),(0,r.jsxs)("div",{className:"mt-4 row",style:{display:"flex"},children:[(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("button",{onClick:()=>PlayAudioUrl({audioUrl:v}),children:(0,r.jsx)(o(),{src:m,alt:"Image",height:60})}),(0,r.jsx)("button",{onClick:()=>PlayAudioUrl({audioUrl:v,playbackRate:.5}),children:(0,r.jsx)(o(),{src:u,alt:"Image",height:60})})]})]}),(0,r.jsx)(CheckAnswer,{correctAnswer:j[y].name,correctAnswerShown:c,isAnswerCorrect:x,isAnswerSelected:null!==a,onCheckAnswer:h,onFinish:p,onSkip:g}),(0,r.jsx)(QuitMessage,{quitMessageShown:l,setQuitMessageShown:d})]})},LessonComplete=e=>{let{correctAnswerCount:s,incorrectAnswerCount:t,startTime:n,endTime:o,reviewLessonShown:a,setReviewLessonShown:l,questionResults:c}=e,m=(0,x.useRouter)(),u="practice"in m.query,h=(0,d.w)(e=>e.increaseXp),p=(0,d.w)(e=>e.addToday),g=(0,d.w)(e=>e.increaseLingots),b=(0,d.w)(e=>e.increaseLessonsCompleted);return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0",children:[(0,r.jsxs)("div",{className:"flex grow flex-col items-center justify-center gap-8 font-bold",children:[(0,r.jsx)("h1",{className:"text-center text-3xl text-yellow-400",children:"Lesson Complete!"}),(0,r.jsxs)("div",{className:"flex flex-wrap justify-center gap-5",children:[(0,r.jsxs)("div",{className:"min-w-[110px] rounded-xl border-2 border-yellow-400 bg-yellow-400",children:[(0,r.jsx)("h2",{className:"py-1 text-center text-white",children:"Total XP"}),(0,r.jsx)("div",{className:"flex justify-center rounded-xl bg-white py-4 text-yellow-400",children:s})]}),(0,r.jsxs)("div",{className:"min-w-[110px] rounded-xl border-2 border-blue-400 bg-blue-400",children:[(0,r.jsx)("h2",{className:"py-1 text-center text-white",children:"Committed"}),(0,r.jsx)("div",{className:"flex justify-center rounded-xl bg-white py-4 text-blue-400",children:formatTime(o.current-n.current)})]}),(0,r.jsxs)("div",{className:"min-w-[110px] rounded-xl border-2 border-green-400 bg-green-400",children:[(0,r.jsx)("h2",{className:"py-1 text-center text-white",children:"Amazing"}),(0,r.jsxs)("div",{className:"flex justify-center rounded-xl bg-white py-4 text-green-400",children:[Math.round(s/(s+t)*100),"%"]})]})]})]}),(0,r.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,r.jsxs)("div",{className:"mx-auto flex max-w-5xl sm:justify-between",children:[(0,r.jsx)("button",{className:"hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit",onClick:()=>l(!0),children:"Review lesson"}),(0,r.jsx)(i(),{className:"flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit",href:"/learn",onClick:()=>{h(s),p(),g(u?0:1),u||b()},children:"Continue"})]})}),(0,r.jsx)(ReviewLesson,{reviewLessonShown:a,setReviewLessonShown:l,questionResults:c})]})},ReviewLesson=e=>{let{reviewLessonShown:s,setReviewLessonShown:t,questionResults:n}=e,[o,a]=(0,l.useState)(null);return(0,r.jsxs)("div",{className:["fixed inset-0 flex items-center justify-center p-5 transition duration-300",s?"":"pointer-events-none opacity-0"].join(" "),children:[(0,r.jsx)("div",{className:["absolute inset-0 bg-black",s?"opacity-75":"pointer-events-none opacity-0"].join(" "),onClick:()=>t(!1)}),(0,r.jsxs)("div",{className:"relative flex w-full max-w-4xl flex-col gap-5 rounded-2xl border-2 border-gray-200 bg-white p-8",children:[(0,r.jsxs)("button",{className:"absolute -right-5 -top-5 rounded-full border-2 border-gray-200 bg-gray-100 p-1 text-gray-400 hover:brightness-90",onClick:()=>t(!1),children:[(0,r.jsx)(c.Ni,{className:"h-8 w-8"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]}),(0,r.jsx)("h2",{className:"text-center text-3xl",children:"Check out your scorecard!"}),(0,r.jsx)("p",{className:"text-center text-xl text-gray-400",children:"Click the tiles below to reveal the solutions"}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:n.map((e,s)=>(0,r.jsxs)("button",{className:["relative flex flex-col items-stretch gap-3 rounded-xl p-5 text-left",e.yourResponse===e.correctResponse?"bg-yellow-100 text-yellow-600":"bg-red-100 text-red-500"].join(" "),onClick:()=>a(s=>s===e?null:e),children:[(0,r.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,r.jsx)("h3",{className:"font-bold",children:e.question}),(0,r.jsx)("div",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white",children:e.yourResponse===e.correctResponse?(0,r.jsx)(c.f9,{className:"h-5 w-5"}):(0,r.jsx)(c.Ni,{className:"h-5 w-5"})})]}),(0,r.jsx)("div",{children:e.yourResponse}),o===e&&(0,r.jsxs)("div",{className:"absolute left-1 right-1 top-20 z-10 rounded-2xl border-2 border-gray-200 bg-white p-3 text-sm tracking-tighter",children:[(0,r.jsx)("div",{className:"absolute -top-2 h-3 w-3 rotate-45 border-l-2 border-t-2 border-gray-200 bg-white",style:{left:"calc(50% - 6px)"}}),(0,r.jsx)("div",{className:"font-bold uppercase text-gray-400",children:"Your response:"}),(0,r.jsx)("div",{className:"mb-3 text-gray-700",children:e.yourResponse}),(0,r.jsx)("div",{className:"font-bold uppercase text-gray-400",children:"Correct response:"}),(0,r.jsx)("div",{className:"text-gray-700",children:e.correctResponse})]})]},s))})]})]})},LessonFastForwardStart=e=>{let{unitNumber:s,setIsStartingLesson:t}=e;return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col px-5 py-8 text-center",children:[(0,r.jsxs)("div",{className:"flex grow flex-col items-center justify-center gap-5",children:[(0,r.jsx)(c.DO,{}),(0,r.jsxs)("h1",{className:"text-lg font-bold",children:["Want to jump to Unit ",s,"?"]}),(0,r.jsx)("p",{className:"text-sm text-gray-400",children:"Pass the test to jump ahead. We won't make it easy for you though."})]}),(0,r.jsx)("div",{className:"flex flex-col gap-5"}),(0,r.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,r.jsxs)("div",{className:"mx-auto flex max-w-5xl flex-col-reverse items-center gap-5 sm:flex-row sm:justify-between",children:[(0,r.jsx)(i(),{href:"/learn",className:"font-bold uppercase text-blue-400 transition hover:brightness-110",children:"Maybe later"}),(0,r.jsx)("button",{className:"w-full rounded-2xl border-b-4 border-blue-500 bg-blue-400 p-3 font-bold uppercase text-white transition hover:brightness-110 sm:min-w-[150px] sm:max-w-fit",onClick:()=>t(!1),children:"Let's go"})]})})]})},LessonFastForwardEndFail=e=>{let{unitNumber:s,reviewLessonShown:t,setReviewLessonShown:n,questionResults:o}=e;return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col px-5 py-8 text-center",children:[(0,r.jsxs)("div",{className:"flex grow flex-col items-center justify-center gap-5",children:[(0,r.jsx)(c.sd,{}),(0,r.jsx)("h1",{className:"text-2xl font-bold",children:"You didn't unlock Unit ".concat(s)}),(0,r.jsx)("p",{className:"text-lg text-gray-500",children:"Don't worry! Practice makes perfect."})]}),(0,r.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,r.jsxs)("div",{className:"mx-auto flex max-w-5xl sm:justify-between",children:[(0,r.jsx)("button",{className:"hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit",onClick:()=>n(!0),children:"Review lesson"}),(0,r.jsx)(i(),{className:"flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit",href:"/learn",children:"Continue"})]})}),(0,r.jsx)(ReviewLesson,{reviewLessonShown:t,setReviewLessonShown:n,questionResults:o})]})},LessonFastForwardEndPass=e=>{let{unitNumber:s,reviewLessonShown:t,setReviewLessonShown:n,questionResults:o}=e,a=(0,d.w)(e=>e.jumpToUnit);return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col px-5 py-8 text-center",children:[(0,r.jsxs)("div",{className:"flex grow flex-col items-center justify-center gap-5",children:[(0,r.jsx)(c.ER,{}),(0,r.jsxs)("h1",{className:"text-2xl font-bold",children:["You unlocked Unit ",s,"!"]}),(0,r.jsx)("p",{className:"text-lg text-gray-500",children:"Way to go! You’re making great strides!"})]}),(0,r.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,r.jsxs)("div",{className:"mx-auto flex max-w-5xl sm:justify-between",children:[(0,r.jsx)("button",{className:"hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit",onClick:()=>n(!0),children:"Review lesson"}),(0,r.jsx)(i(),{className:"flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit",href:"/learn",onClick:()=>a(s),children:"Continue"})]})}),(0,r.jsx)(ReviewLesson,{reviewLessonShown:t,setReviewLessonShown:n,questionResults:o})]})}},8399:function(e,s,t){"use strict";t.d(s,{S:function(){return sum},w:function(){return range}});let range=(e,s)=>{let t=Array(s-e);for(let r=e;r<s;r++)t[r-e]=r;return t},sum=e=>{let s=0;for(let t of e)s+=t;return s}},6947:function(e,s){"use strict";s.Z=[{name:"Arabic",nativeName:"العربية",viewBox:"0 2178 82 66",code:"ar"},{name:"Bengali",nativeName:"বাংলা",viewBox:"0 1914 82 66",code:"bn"},{name:"Czech",nativeName:"Čeština",viewBox:"0 1848 82 66",code:"cs"},{name:"German",nativeName:"Deutsch",viewBox:"0 198 82 66",code:"de"},{name:"Greek",nativeName:"Ελληνικά",viewBox:"0 924 82 66",code:"el"},{name:"English",nativeName:"English",viewBox:"0 0 82 66",code:"en"},{name:"Spanish",nativeName:"Espa\xf1ol",viewBox:"0 66 82 66",code:"es"},{name:"French",nativeName:"Fran\xe7ais",viewBox:"0 132 82 66",code:"fr"},{name:"Hindi",nativeName:"हिंदी",viewBox:"0 1914 82 66",code:"hi"},{name:"Hungarian",nativeName:"Magyar",viewBox:"0 1584 82 66",code:"hu"},{name:"Indonesian",nativeName:"Bahasa Indonesia",viewBox:"0 1980 82 66",code:"id"},{name:"Italian",nativeName:"Italiano",viewBox:"0 330 82 66",code:"it"},{name:"Japanese",nativeName:"日本語",viewBox:"0 264 82 66",code:"ja"},{name:"Korean",nativeName:"한국어",viewBox:"0 396 82 66",code:"ko"},{name:"Dutch",nativeName:"Nederlands",viewBox:"0 726 82 66",code:"code-NL"},{name:"Polish",nativeName:"Polski",viewBox:"0 1056 82 66",code:"pl"},{name:"Portuguese",nativeName:"Portugu\xeas",viewBox:"0 594 82 66",code:"pt"},{name:"Romanian",nativeName:"Rom\xe2nă",viewBox:"0 1386 82 66",code:"ro"},{name:"Russian",nativeName:"Русский",viewBox:"0 528 82 66",code:"ru"},{name:"Thai",nativeName:"ภาษาไทย",viewBox:"0 2310 82 66",code:"th"},{name:"Tagalog",nativeName:"Tagalog",viewBox:"0 3036 82 66",code:"tl"},{name:"Turkish",nativeName:"T\xfcrk\xe7e",viewBox:"0 660 82 66",code:"tr"},{name:"Ukrainian",nativeName:"Українською",viewBox:"0 1716 82 66",code:"uk"},{name:"Vietnamese",nativeName:"Tiếng Việt",viewBox:"0 1188 82 66",code:"vi"},{name:"Chinese",nativeName:"中文",viewBox:"0 462 82 66",code:"code-CN"}]},5043:function(e,s,t){"use strict";t.d(s,{D:function(){return r}});let r=[{unitNumber:1,description:"Form basic sentences, greet people",backgroundColor:"bg-[#58cc02]",textColor:"text-[#58cc02]",borderColor:"border-[#46a302]",tiles:[{type:"star",description:"Form basic sentences"},{type:"book",description:"Good morning"},{type:"star",description:"Greet people"},{type:"treasure"},{type:"book",description:"A date"},{type:"trophy",description:"Unit 1 review"}]},{unitNumber:2,description:"Get around in a city",backgroundColor:"bg-[#ce82ff]",textColor:"text-[#ce82ff]",borderColor:"border-[#a568cc]",tiles:[{type:"fast-forward",description:"Get around in a city"},{type:"dumbbell",description:"Personalized practice"},{type:"book",description:"One thing"},{type:"treasure"},{type:"star",description:"Get around in a city"},{type:"book",description:"A very big family"},{type:"star",description:"Greet people"},{type:"book",description:"The red jacket"},{type:"treasure"},{type:"dumbbell",description:"Personalized practice"},{type:"trophy",description:"Unit 2 review"}]},{unitNumber:3,description:"Order food and drink",backgroundColor:"bg-[#00cd9c]",textColor:"text-[#00cd9c]",borderColor:"border-[#00a47d]",tiles:[{type:"fast-forward",description:"Order food and drink"},{type:"book",description:"The passport"},{type:"star",description:"Order food and drinks"},{type:"treasure"},{type:"book",description:"The honeymoon"},{type:"star",description:"Get around in a city"},{type:"treasure"},{type:"dumbbell",description:"Personalized practice"},{type:"book",description:"Doctor Eddy"},{type:"trophy",description:"Unit 2 review"}]}]}},function(e){e.O(0,[664,241,816,774,888,179],function(){return e(e.s=9562)}),_N_E=e.O()}]);