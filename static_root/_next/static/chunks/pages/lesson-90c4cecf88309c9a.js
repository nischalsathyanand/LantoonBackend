(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{3059:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lesson",function(){return t(6725)}])},6725:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return lesson}});var s=t(5893),l=t(1664),o=t.n(l),n=t(7294),a=t(1163),i=t(9500),c=t(5434);let PlayAudioUrl=e=>{let{audioUrl:r,playbackRate:t,setQuestionFinished:s}=e;console.log(r);let l=new Audio(r);null!=t&&(l.playbackRate=t);try{l.play().then(()=>{null!=s&&s(!0)})}catch(e){console.error("Error playing audio:",e)}};var problemL1=e=>{let{problem:r,question:t,mediaRoot:l,correctImagePath1:o,audioPath1:n}=e;return(0,s.jsxs)("section",{className:"flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5",children:[(0,s.jsx)("h1",{className:"self-start text-2xl font-bold sm:text-3xl",children:t}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 hover:bg-gray-100",src:l+o,style:{width:300,height:300}})}),(0,s.jsxs)("div",{className:"mt-4 row",style:{display:"flex"},children:[(0,s.jsx)("button",{onClick:()=>PlayAudioUrl({audioUrl:l+n}),className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit sm:grow-0",children:(0,s.jsx)(c.oZS,{size:30,style:{margin:"auto"}})}),(0,s.jsx)("div",{style:{width:"10px"}}),(0,s.jsx)("button",{onClick:()=>PlayAudioUrl({audioUrl:l+n,playbackRate:.5}),className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit sm:grow-0",children:(0,s.jsx)(c.lMP,{size:30,style:{margin:"auto"}})})]})]})},d=t(8816);let CheckAnswer=e=>{let{isAnswerSelected:r,isAnswerCorrect:t,correctAnswerShown:l,correctAnswer:o,onCheckAnswer:n,onFinish:a,onSkip:i}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:l?t?"fixed bottom-0 left-0 right-0 bg-lime-100 font-bold text-green-600 transition-all":"fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all":"fixed -bottom-52 left-0 right-0",children:(0,s.jsxs)("div",{className:"flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:py-14",children:[(0,s.jsx)(s.Fragment,{children:t?(0,s.jsxs)("div",{className:"mb-2 flex flex-col gap-5 sm:flex-row sm:items-center",children:[(0,s.jsx)("div",{className:"hidden rounded-full bg-white p-5 text-green-500 sm:block",children:(0,s.jsx)(d.f9,{})}),(0,s.jsx)("div",{className:"text-2xl",children:"Good job!"})]}):(0,s.jsxs)("div",{className:"mb-2 flex flex-col gap-5 sm:flex-row sm:items-center",children:[(0,s.jsx)("div",{className:"hidden rounded-full bg-white p-5 text-red-500 sm:block",children:(0,s.jsx)(d.Ni,{})}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("div",{className:"text-2xl",children:"You are wrong!"})," ",(0,s.jsx)("div",{className:"text-sm font-normal",children:"Try again"})]})]})}),(0,s.jsx)("button",{onClick:()=>{a()},className:t?"w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit":"w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit",children:"Continue"})]})})})},problemP1_PlayAudioUrl=e=>{let{audioUrl:r,playbackRate:t,setQuestionFinished:s}=e;console.log(r);let l=new Audio(r);null!=t&&(l.playbackRate=t);try{l.play().then(()=>{null!=s&&s(!0)})}catch(e){console.error("Error playing audio:",e)}};var problemP1=e=>{let{problem:r,question:t,skipHeading:l,correctAnswer:o,wrongAnswers:a,mediaRoot:i,onFinish:d}=e,[u,m]=(0,n.useState)(null),[x,g]=(0,n.useState)([]),[h,p]=(0,n.useState)(-1),[b,w]=(0,n.useState)(null),[f,y]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let e=[...a,o].sort(()=>Math.random()-.5),r=e.indexOf(o);g(e),p(r),m(null),w(null),y(null)},[o,a]),(0,n.useEffect)(()=>{null!==u&&(w(u==h),null===f&&(console.log("yeay"),u==h?y(!0):y(!1)))},[u]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("section",{className:"flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5",children:[l?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)("h1",{className:"self-start text-2xl font-bold sm:text-3xl",children:t}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-2 sm:grid-cols-2",role:"radiogroup",children:x.map((e,r)=>(0,s.jsx)("div",{className:r===u?"cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400":"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100",role:"radio","aria-checked":r===u,tabIndex:0,onClick:()=>{null===u&&m(r)},children:(0,s.jsx)("img",{className:"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 hover:bg-gray-100",src:i+e,style:{width:300,height:300}})},r))}),(0,s.jsxs)("div",{className:"mt-4 row",style:{display:"flex"},children:[(0,s.jsx)("button",{onClick:()=>problemP1_PlayAudioUrl({audioUrl:i+r.audioPath1}),className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit sm:grow-0",children:(0,s.jsx)(c.oZS,{size:30,style:{margin:"auto"}})}),(0,s.jsx)("div",{style:{width:"10px"}}),(0,s.jsx)("button",{onClick:()=>problemP1_PlayAudioUrl({audioUrl:i+r.audioPath1,playbackRate:.5}),className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit sm:grow-0",children:(0,s.jsx)(c.lMP,{size:30,style:{margin:"auto"}})})]})]}),null!==b?(0,s.jsx)(CheckAnswer,{correctAnswer:"answername",correctAnswerShown:!0,isAnswerCorrect:b,isAnswerSelected:!0,onCheckAnswer:()=>{console.log("yeay")},onFinish:()=>{if(b)d(f);else{let e=[...a,o].sort(()=>Math.random()-.5),r=e.indexOf(o);g(e),p(r),m(null),w(null)}},onSkip:()=>{console.log("yeay")}}):null]})};let problemQ_PlayAudioUrl=e=>{let{audioUrl:r,playbackRate:t,onPlaybackFinish:s}=e;console.log(r);let l=new Audio(r);null!=t&&(l.playbackRate=t);try{l.play().then(()=>{s&&l.addEventListener("ended",s)})}catch(e){console.error("Error playing audio:",e)}};var problemQ=e=>{let{onFinish:r,problem:t,question:l,mediaRoot:o,correctImagePath1:n,correctImagePath2:a,audioPath1:i}=e,playAudio=e=>{t&&(("L1"==t.questionType||"P1"==t.questionType||"P2"==t.questionType)&&problemQ_PlayAudioUrl({audioUrl:o+t.audioPath1,playbackRate:e}),"Q"==t.questionType&&problemQ_PlayAudioUrl({audioUrl:o+t.audioPath2,playbackRate:e,onPlaybackFinish:()=>{problemQ_PlayAudioUrl({audioUrl:o+t.audioPath1,playbackRate:e})}}))};return(0,s.jsxs)("section",{className:"flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5",children:[(0,s.jsx)("h1",{className:"self-start text-2xl font-bold sm:text-3xl",children:l}),(0,s.jsxs)("div",{className:"grid grid-cols-4 gap-2 sm:grid-cols-2",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 hover:bg-gray-100",src:o+a,style:{width:300,height:300}})}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 hover:bg-gray-100",src:o+n,style:{width:300,height:300}})})]}),(0,s.jsxs)("div",{className:"mt-4 row",style:{display:"flex"},children:[(0,s.jsx)("button",{onClick:()=>playAudio(1),className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit sm:grow-0",children:(0,s.jsx)(c.oZS,{size:30,style:{margin:"auto"}})}),(0,s.jsx)("div",{style:{width:"10px"}}),(0,s.jsx)("button",{onClick:()=>playAudio(.5),className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit sm:grow-0",children:(0,s.jsx)(c.lMP,{size:30,style:{margin:"auto"}})})]})]})};let problemQ1_CheckAnswer=e=>{let{isAnswerSelected:r,isAnswerCorrect:t,correctAnswerShown:l,correctAnswer:o,onCheckAnswer:n,onFinish:a,onSkip:i}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:l?t?"fixed bottom-0 left-0 right-0 bg-lime-100 font-bold text-green-600 transition-all":"fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all":"fixed -bottom-52 left-0 right-0",children:(0,s.jsxs)("div",{className:"flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:py-14",children:[(0,s.jsx)(s.Fragment,{children:t?(0,s.jsxs)("div",{className:"mb-2 flex flex-col gap-5 sm:flex-row sm:items-center",children:[(0,s.jsx)("div",{className:"hidden rounded-full bg-white p-5 text-green-500 sm:block",children:(0,s.jsx)(d.f9,{})}),(0,s.jsx)("div",{className:"text-2xl",children:"Good job!"})]}):(0,s.jsxs)("div",{className:"mb-2 flex flex-col gap-5 sm:flex-row sm:items-center",children:[(0,s.jsx)("div",{className:"hidden rounded-full bg-white p-5 text-red-500 sm:block",children:(0,s.jsx)(d.Ni,{})}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("div",{className:"text-2xl",children:"You are wrong!"})," ",(0,s.jsx)("div",{className:"text-sm font-normal",children:"Try again"})]})]})}),(0,s.jsx)("button",{onClick:()=>{a()},className:t?"w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit":"w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit",children:"Continue"})]})})})},problemQ1_PlayAudioUrl=e=>{let{audioUrl:r,playbackRate:t,onPlaybackFinish:s}=e;console.log(r);let l=new Audio(r);null!=t&&(l.playbackRate=t);try{l.play().then(()=>{s&&l.addEventListener("ended",s)})}catch(e){console.error("Error playing audio:",e)}};var problemQ1=e=>{let{problem:r,question:t,skipHeading:l,correctAnswer:o,wrongAnswers:a,mediaRoot:i,onFinish:d,answerText:u}=e,[m,x]=(0,n.useState)(null),[g,h]=(0,n.useState)([]),[p,b]=(0,n.useState)(-1),[w,f]=(0,n.useState)(null),[y,j]=(0,n.useState)(null),playAudio=e=>{r&&("Q"==r.questionType||"QP1"==r.questionType||"QP2"==r.questionType)&&problemQ1_PlayAudioUrl({audioUrl:i+r.audioPath1,playbackRate:e})},playAudio2=e=>{r&&("Q"==r.questionType||"QP1"==r.questionType||"QP2"==r.questionType)&&problemQ1_PlayAudioUrl({audioUrl:i+r.audioPath2,playbackRate:e})};return(0,n.useEffect)(()=>{let e=[...a,o].sort(()=>Math.random()-.5),r=e.indexOf(o);h(e),b(r),x(null),f(null),j(null)},[o,a]),(0,n.useEffect)(()=>{null!==m&&(f(m==p),null===y&&(m==p?j(!0):j(!1)))},[m]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("section",{className:"flex flex-wrap w-full grow self-center sm:items-center sm:justify-center sm:px-5 ",style:{marginBottom:30},children:[(0,s.jsxs)("div",{className:"flex flex-col w-full sm:w-1/3 items-center ",children:[l?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)("h1",{className:"self-start text-2xl font-bold sm:text-3xl",children:t}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 hover:bg-gray-100",src:i+r.correctImagePath2,style:{width:300,height:300}})}),(0,s.jsxs)("div",{className:"mt-4 row flex justify-center",style:{display:"flex"},children:[(0,s.jsx)("button",{onClick:()=>playAudio(1),className:"rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit",children:(0,s.jsx)(c.oZS,{size:30,style:{margin:"auto"}})}),(0,s.jsx)("div",{style:{width:"10px"}}),(0,s.jsx)("button",{onClick:()=>playAudio(.5),className:"rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit",children:(0,s.jsx)(c.lMP,{size:30,style:{margin:"auto"}})})]})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full sm:w-2/3 items-center",children:[l?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)("h1",{className:"self-start text-2xl font-bold sm:text-3xl",children:u}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-2",role:"radiogroup",children:g.map((e,r)=>(0,s.jsx)("div",{className:r===m?"cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400":"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100",role:"radio","aria-checked":r===m,tabIndex:0,onClick:()=>{null===m&&x(r)},children:(0,s.jsx)("img",{className:"cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 hover:bg-gray-100",src:i+e,style:{width:300,height:300}})},r))}),(0,s.jsxs)("div",{className:"mt-4 row",style:{display:"flex"},children:[(0,s.jsx)("button",{onClick:()=>playAudio2(1),className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit sm:grow-0",children:(0,s.jsx)(c.oZS,{size:30,style:{margin:"auto"}})}),(0,s.jsx)("div",{style:{width:"10px"}}),(0,s.jsx)("button",{onClick:()=>playAudio2(.5),className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[50px] sm:max-w-fit sm:grow-0",children:(0,s.jsx)(c.lMP,{size:30,style:{margin:"auto"}})})]})]})]}),null!==w?(0,s.jsx)(problemQ1_CheckAnswer,{correctAnswer:"answername",correctAnswerShown:!0,isAnswerCorrect:w,isAnswerSelected:!0,onCheckAnswer:()=>{console.log("yeay")},onFinish:()=>{if(w)d(y);else{let e=[...a,o].sort(()=>Math.random()-.5),r=e.indexOf(o);h(e),b(r),x(null),f(null)}},onSkip:()=>{console.log("yeay")}}):null]})};let u="https://lantoonfiles.s3.ap-south-1.amazonaws.com/",ProgressBar=e=>{let{correctAnswerCount:r,totalCorrectAnswersNeeded:t,setQuitMessageShown:l,hearts:n}=e;return(0,s.jsxs)("header",{className:"flex items-center gap-4",children:[(0,s.jsxs)(o(),{href:"/learn",className:"text-gray-400",children:[(0,s.jsx)(d.sZ,{}),(0,s.jsx)("span",{className:"sr-only",children:"Exit lesson"})]}),(0,s.jsx)("div",{className:"h-4 grow rounded-full bg-gray-200",role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":r/t,children:(0,s.jsx)("div",{className:"h-full rounded-full bg-green-500 transition-all duration-700 "+(r>0?"px-2 pt-1 ":""),style:{width:"".concat(r/t*100,"%")},children:(0,s.jsx)("div",{className:"h-[5px] w-full rounded-full bg-green-400"})})}),null!==n&&[1,2,3].map(e=>e<=n?(0,s.jsx)(d.CE,{},e):(0,s.jsx)(d.mw,{},e))]})},LessonContinue=e=>{let{onFinish:r,lessonProblem:t,playAudio:l}=e,[o,a]=(0,n.useState)(0!==t);return(0,s.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,s.jsx)("div",{className:"mx-auto flex max-w-5xl sm:justify-center",children:(0,s.jsx)("button",{onClick:()=>{o?r(null):(a(!0),l())},className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0",children:o?"Continue":"Start"})})})},QuitLesson=()=>(0,s.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,s.jsx)("div",{className:"mx-auto flex max-w-5xl sm:justify-center",children:(0,s.jsx)("button",{onClick:()=>{router.push("/learn")},className:"grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0",children:"Quit without completing?"})})}),Topic=e=>{let{problem:r,correctAnswerCount:t,totalCorrectAnswersNeeded:l,quitMessageShown:o,setQuitMessageShown:n,hearts:a,onFinish:i,lessonProblem:c,playAudio:d}=e,{correctImagePath1:m,questionText:x,audioPath1:g}=r;return(0,s.jsxs)("div",{className:"flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0",children:[(0,s.jsxs)("div",{className:"flex grow flex-col items-center gap-5",children:[(0,s.jsx)("div",{className:"w-full max-w-5xl sm:mt-8 sm:px-5",children:(0,s.jsx)(ProgressBar,{correctAnswerCount:t,totalCorrectAnswersNeeded:l,setQuitMessageShown:n,hearts:a})}),"L1"===r.questionType?(0,s.jsx)(problemL1,{problem:r,question:x,mediaRoot:u,correctImagePath1:m,audioPath1:g}):null,"P1"===r.questionType?(0,s.jsx)(problemP1,{problem:r,question:x,skipHeading:!1,correctAnswer:r.correctImagePath1,wrongAnswers:[r.wrongImagePath1,r.wrongImagePath2,r.wrongImagePath3],mediaRoot:u,onFinish:i}):null,"P2"===r.questionType?(0,s.jsx)(problemP1,{problem:r,question:x,skipHeading:!0,correctAnswer:r.correctImagePath1,wrongAnswers:[r.wrongImagePath1,r.wrongImagePath2,r.wrongImagePath3],mediaRoot:u,onFinish:i}):null,"Q"===r.questionType?(0,s.jsx)(problemQ,{problem:r,question:x,mediaRoot:u,correctImagePath1:m,correctImagePath2:r.correctImagePath2,audioPath1:g,onFinish:i}):null,"QP1"===r.questionType?(0,s.jsx)(problemQ1,{answerText:r.answerText,problem:r,question:x,skipHeading:!1,correctAnswer:r.correctImagePath1,wrongAnswers:[r.wrongImagePath1,r.wrongImagePath2,r.wrongImagePath3],mediaRoot:u,onFinish:i}):null,"QP2"===r.questionType?(0,s.jsx)(problemQ1,{answerText:r.answerText,problem:r,question:x,skipHeading:!0,correctAnswer:r.correctImagePath1,wrongAnswers:[r.wrongImagePath1,r.wrongImagePath2,r.wrongImagePath3],mediaRoot:u,onFinish:i}):null]}),"L1"===r.questionType||"Q"===r.questionType?(0,s.jsx)(LessonContinue,{onFinish:i,lessonProblem:c,playAudio:d}):null,o?(0,s.jsx)(QuitLesson,{}):null]})},lesson_PlayAudioUrl=e=>{let{audioUrl:r,playbackRate:t,onPlaybackFinish:s}=e;console.log(r);let l=new Audio(r);null!=t&&(l.playbackRate=t);try{l.play().then(()=>{s&&l.addEventListener("ended",s)})}catch(e){console.error("Error playing audio:",e)}},LessonComplete=e=>{let{correctAnswerCount:r,incorrectAnswerCount:t}=e,l=Math.round(r/(r+t)*100);return(0,s.jsxs)("div",{className:"flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0",children:[(0,s.jsxs)("div",{className:"flex grow flex-col items-center justify-center gap-8 font-bold",children:[(0,s.jsx)("h1",{className:"text-center text-3xl text-black-400",children:"Lesson Complete!"}),(0,s.jsxs)("div",{className:"flex flex-wrap justify-center gap-5",children:[(0,s.jsxs)("div",{className:"min-w-[110px] rounded-xl border-2 border-green-400 bg-green-400",children:[(0,s.jsx)("h2",{className:"py-1 text-center text-white",children:"Correct"}),(0,s.jsx)("div",{className:"flex justify-center rounded-xl bg-white py-4 text-green-400",children:r})]}),(0,s.jsxs)("div",{className:"min-w-[110px] rounded-xl border-2 border-red-400 bg-red-400",children:[(0,s.jsx)("h2",{className:"py-1 text-center text-white",children:"Wrong"}),(0,s.jsx)("div",{className:"flex justify-center rounded-xl bg-white py-4 text-red-400",children:t})]}),l?(0,s.jsxs)("div",{className:"min-w-[110px] rounded-xl border-2 border-yellow-400 bg-yellow-400",children:[(0,s.jsx)("h2",{className:"py-1 text-center text-white",children:"Percentage"}),(0,s.jsxs)("div",{className:"flex justify-center rounded-xl bg-white py-4 text-yellow-400",children:[l,"%"]})]}):null]})]}),(0,s.jsx)("section",{className:"border-gray-200 sm:border-t-2 sm:p-10",children:(0,s.jsx)("div",{className:"mx-auto flex max-w-5xl sm:justify-between",children:(0,s.jsx)(o(),{className:"flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit",href:"/learn",style:{margin:"auto"},onClick:()=>{console.log("yeay")},children:"Next Lesson"})})})]})};var lesson=()=>{a.useRouter;let[e,r]=(0,n.useState)([]),[t,l]=(0,n.useState)(0),[o,c]=(0,n.useState)(!1),[d,m]=(0,n.useState)(0),[x,g]=(0,n.useState)(0),[h,p]=(0,n.useState)(!1),loadData=async()=>{let e=localStorage.getItem("token"),t=JSON.parse(localStorage.getItem("selectedLesson"));if(console.log(t),e&&t){let s=await (0,i.tI)(e,t.id);console.log(s),r(s)}},lessonCompleted=async()=>{let e=localStorage.getItem("token"),r=JSON.parse(localStorage.getItem("selectedLesson"));if(e&&r){let t=await (0,i._P)(e,r.id);console.log(t),c(!0)}},b=e?e[t]:null;(0,n.useEffect)(()=>{loadData()},[]);let playAudio=()=>{b&&(("L1"==b.questionType||"P1"==b.questionType||"P2"==b.questionType)&&lesson_PlayAudioUrl({audioUrl:u+b.audioPath1}),"Q"==b.questionType&&lesson_PlayAudioUrl({audioUrl:u+b.audioPath2,playbackRate:1,onPlaybackFinish:()=>{lesson_PlayAudioUrl({audioUrl:u+b.audioPath1})}}))};return(0,n.useEffect)(()=>{t>0&&playAudio()},[t]),b?(0,s.jsx)("div",{children:o?(0,s.jsx)(LessonComplete,{correctAnswerCount:d,incorrectAnswerCount:x}):(0,s.jsx)(Topic,{lessonProblem:t,problem:b,correctAnswerCount:t,totalCorrectAnswersNeeded:e.length,quitMessageShown:h,setQuitMessageShown:()=>{},onFinish:r=>{console.log(r),t+1<e.length?l(t+1):lessonCompleted(),r&&m(d+1),!1===r&&g(x+1)},hearts:2,playAudio:playAudio})}):null}},9500:function(e,r,t){"use strict";t.d(r,{AE:function(){return getUserLessonProgress},Uo:function(){return getChapters},Vb:function(){return getLanguages},_P:function(){return setUserLessonProgress},hJ:function(){return setUserLanguage},jg:function(){return getAccountDetails},tI:function(){return getQuestions},x4:function(){return login},z2:function(){return register},z_:function(){return getUserLanguages}});var s=t(6154);let l=s.Z.create({baseURL:"https://app.lantoon.net",headers:{"Content-Type":"application/json"}}),register=async e=>{try{let r=await l.post("/api/auth/register/",e);return r.data}catch(e){throw e}},login=async e=>{try{let r=await l.post("/api/auth/login/",e);return console.log(r),r.data}catch(e){throw e}},getAccountDetails=async e=>{try{let r=await l.get("/api/auth/user/",{headers:{Authorization:"Token ".concat(e)}});return r.data}catch(e){throw e}},getLanguages=async e=>{try{let r=await l.get("/api/content/languages/",{headers:{Authorization:"Token ".concat(e)}});return console.log(r),r.data}catch(e){throw e}},getUserLanguages=async e=>{try{let r=await l.get("/api/learning/languages/",{headers:{Authorization:"Token ".concat(e)}});return r.data}catch(e){throw e}},setUserLanguage=async(e,r)=>{try{let t=await l.post("/api/learning/languages/create/",{language_id:r},{headers:{Authorization:"Token ".concat(e)}});return t.data}catch(e){throw e}},getChapters=async(e,r)=>{try{let t=await l.get("/api/content/languages/".concat(r,"/chapters/"),{headers:{Authorization:"Token ".concat(e)}});return t.data}catch(e){throw e}},getQuestions=async(e,r)=>{try{let t=await l.get("/api/content/lessons/".concat(r,"/questions/"),{headers:{Authorization:"Token ".concat(e)}});return t.data}catch(e){throw e}},setUserLessonProgress=async(e,r)=>{try{let t=await l.post("/api/learning/lesson-progress/create/",{lesson_id:r},{headers:{Authorization:"Token ".concat(e)}});return t.data}catch(e){throw e}},getUserLessonProgress=async(e,r)=>{try{let t=await l.get("/api/learning/lesson-progress/".concat(r,"/"),{headers:{Authorization:"Token ".concat(e)}});return t.data}catch(e){throw e}}},1163:function(e,r,t){e.exports=t(9974)},8357:function(e,r,t){"use strict";t.d(r,{w_:function(){return GenIcon}});var s=t(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=s.createContext&&s.createContext(l),__assign=function(){return(__assign=Object.assign||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e}).apply(this,arguments)},__rest=function(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>r.indexOf(s)&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)0>r.indexOf(s[l])&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(t[s[l]]=e[s[l]]);return t};function GenIcon(e){return function(r){return s.createElement(IconBase,__assign({attr:__assign({},e.attr)},r),function Tree2Element(e){return e&&e.map(function(e,r){return s.createElement(e.tag,__assign({key:r},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(r){var t,l=e.attr,o=e.size,n=e.title,a=__rest(e,["attr","size","title"]),i=o||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),s.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,l,a,{className:t,style:__assign(__assign({color:e.color||r.color},r.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),n&&s.createElement("title",null,n),e.children)};return void 0!==o?s.createElement(o.Consumer,null,function(e){return elem(e)}):elem(l)}}},function(e){e.O(0,[228,664,154,816,774,888,179],function(){return e(e.s=3059)}),_N_E=e.O()}]);