"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[847],{10203:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(85893),i=n(67294);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=n(85466),s=n(22921),l=(0,s.zo)("div",{position:"fixed",top:0,left:0,width:50,height:50,border:"2px solid var(--colors-main)",borderRadius:"100%",transform:"translate(-50%, -50%)",transition:"0.2s ease-out",zIndex:999,pointerEvents:"none","@iPad":{display:"none"}}),c=(0,s.zo)("div",{position:"fixed",top:"50%",left:"50%",width:10,height:10,backgroundColor:"var(--colors-main)",borderRadius:"100%",transform:"translate(-50%, -50%)",zIndex:999,pointerEvents:"none","@iPad":{display:"none"}}),d=function(){var t=function(){var t=o(i.useState({x:0,y:0}),2),e=t[0],n=t[1];return i.useEffect((function(){var t=function(t){var e=t.clientX,r=t.clientY;n({x:e,y:r})};return document.addEventListener("mousemove",t),function(){document.removeEventListener("mousemove",t)}}),[]),e}(),e=t.x,n=t.y,s=i.useContext(a.m),d=s.cursorType,u=s.cursorChangeHandler;return i.useEffect((function(){document.addEventListener("mousedown",(function(){return u("hovered")})),document.addEventListener("mouseup",(function(){return u("")})),Array.from(document.getElementsByTagName("a")).forEach((function(t){t.addEventListener("mouseover",(function(){return u("hovered")})),t.addEventListener("mouseout",(function(){return u("")}))}))})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{className:"ring "+d,style:{left:"".concat(e,"px"),top:"".concat(n,"px")}}),(0,r.jsx)(c,{className:"dot "+d,style:{left:"".concat(e,"px"),top:"".concat(n,"px")}})]})}},89105:function(t,e,n){n.d(e,{Z:function(){return g}});var r=n(85893),i=n(67294),o=n(22921),a=(0,o.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:999,"@media only screen and (min-width: 1024px)":{margin:100},"@iPadPro":{flexDirection:"column",justifyContent:"center"}}),s=(0,o.zo)("div",{display:"flex",alignItems:"center","@iPadPro":{margin:"10px 0"}}),l=(0,o.zo)("p",{display:"flex",alignItems:"center",color:"$main",fontSize:"$4",fontFamily:"$primary",marginRight:20,svg:{margin:"0 10px"},"@iPadPro":{fontSize:"$2"}}),c=(0,o.zo)("a",{textDecoration:"none",color:"$main",transition:"0.1s linear",margin:"0 10px","&:hover":{color:"$white",transform:"scale(1.1, 1.1)"}}),d=(0,o.zo)("a",{textDecoration:"none",color:"$main",margin:"0 5px","&:hover":{color:"$white"}}),u=n(52006),h=n(47811),m=n(22774),f=n(16268),p=n(80289),x=n(52447);function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(){var t=v(i.useState(null),2),e=t[0],n=t[1];return i.useEffect((function(){var t=new Date;n(t.getFullYear())}),[]),(0,r.jsxs)(a,{children:[(0,r.jsx)(s,{children:(0,r.jsxs)(l,{children:[(0,r.jsx)(u.Z,{})," with ",(0,r.jsx)(h.Z,{})," and"," ",(0,r.jsx)(d,{href:"https://nextjs.org/",target:"_blank",children:"Next.js"})]})}),(0,r.jsxs)(s,{children:[(0,r.jsxs)(l,{children:["\xa9 ",e," Omid Saraei"]}),(0,r.jsx)(c,{href:"mailto:omidsaraei6@gmail.com",target:"_blank",children:(0,r.jsx)(m.Z,{})}),(0,r.jsx)(c,{href:"https://dribbble.com/omidsgn",target:"_blank",children:(0,r.jsx)(f.Z,{})}),(0,r.jsx)(c,{href:"https://www.behance.net/omid_saraei",target:"_blank",children:(0,r.jsx)(x.w,{})}),(0,r.jsx)(c,{href:"https://instagram.com/omidsgn",target:"_blank",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(c,{href:"https://www.linkedin.com/in/omidsaraei/",target:"_blank",children:(0,r.jsx)(x.n,{})})]})]})}},88066:function(t,e,n){var r=n(85893),i=(n(67294),n(9008));e.Z=function(t){var e=t.title,n=t.description,o="https://harshhhdev.github.io/";return(0,r.jsxs)(i.default,{children:[(0,r.jsxs)("title",{children:["Omid Saraei - ",e]}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"twitter:title",content:e}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:o}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"twitter:url",content:o}),(0,r.jsx)("meta",{property:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"ie=edge"}),(0,r.jsx)("meta",{name:"theme-color",content:"#0da7ee"}),(0,r.jsx)("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\udc4b</text></svg>"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"crossOrigin"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap",rel:"stylesheet"})]})}},22548:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(85893),i=n(67294),o=n(22921),a=(0,o.zo)("nav",{display:"flex",justifyContent:"center",position:"fixed",zIndex:999,top:0,left:0,right:0,background:"white",alignItems:"center",height:100,width:"100%",border:"1px solid #eaeaeb","@iPadPro":{height:80}}),s=(0,o.zo)("div",{display:"flex",justifyContent:"space-between",alignItems:"center",flex:1,maxWidth:1280,padding:"0 20px"}),l=(0,o.zo)("p",{fontFamily:"$mono",fontSize:"$3",color:"$main","@Flip":{fontSize:"$2",display:"flex !important"},"@iPhoneSE":{fontSize:"$1"},"@iPadPro":{display:"none"}}),c=(0,o.zo)("div",{display:"flex","@Flip":{display:"none"}}),d=(0,o.zo)("a",{color:"$main",fontSize:"$3",textDecoration:"none",margin:"0 10px",fontFamily:"$main","&:hover":{color:"$white"}}),u=(0,o.zo)("button",{background:"none",outline:"none",border:"none",color:"$white",display:"flex",alignItems:"center",justifyContent:"center","@media only screen and (min-width: 600px)":{display:"none"}}),h=(0,o.zo)("div",{zIndex:999999,position:"fixed",height:"100vh",width:"100vw",background:"#2A2A2A90",display:"flex",justifyContent:"center",alignItems:"center"}),m=(0,o.zo)("div",{width:280,height:300,background:"$primary",zIndex:9999999,display:"flex",flexDirection:"column",justifyContent:"center"}),f=(0,o.zo)("a",{textDecoration:"none",color:"$white",fontSize:"$3",fontFamily:"$primary",margin:"0 0 10px 30px"}),p=n(90408);function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(t){var e=t.location,n=x(i.useState(!1),2),o=n[0],v=n[1],g=function(){v((function(t){return!t}))},y=[{link:"/#home",title:"Home"},{link:"/#about",title:"About"},{link:"/#projects",title:"Projects"},{link:"/#contact",title:"Contact"}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{className:o?"":"disabled",onClick:g,children:(0,r.jsx)(m,{children:y.map((function(t,e){return(0,r.jsx)(f,{href:t.link,onClick:g,children:t.title},e)}))})}),(0,r.jsx)(a,{children:(0,r.jsxs)(s,{children:[(0,r.jsxs)(l,{children:["~/omidsaraei/",e]}),(0,r.jsx)(c,{children:y.map((function(t,e){return(0,r.jsx)(d,{href:t.link,children:t.title},e)}))}),(0,r.jsx)(u,{onClick:g,children:(0,r.jsx)(p.Z,{})})]})})]})}},37787:function(t,e,n){var r=n(85893),i=n(67294);e.Z=function(){return i.useEffect((function(){var t=document.createElement("script");t.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"),t.setAttribute("crossorigin","anonymous"),document.querySelector("body").appendChild(t)}),[]),(0,r.jsx)(r.Fragment,{})}},52447:function(t,e,n){n.d(e,{n:function(){return i},w:function(){return o}});var r=n(85893),i=function(){return(0,r.jsx)("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.836 1.836 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.839 1.839 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208V19.791ZM7.875 5.812a2.063 2.063 0 1 1-4.125.09 2.063 2.063 0 0 1 4.125-.09Z",style:{fill:"var(--colors-main)"}})})},o=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:"var(--colors-main)"},children:(0,r.jsx)("path",{d:"M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"})})}},14637:function(t,e,n){var r=(0,n(22921).CO)({"*":{margin:0,padding:0,boxSizing:"border-box",cursor:"none !important",scrollBehavior:"smooth"},html:{overflowX:"hidden",lineHeight:1.5},body:{background:"white",overflowX:"hidden",fontFamily:"Roboto"},"::selection":{background:"#4560F060"},img:{userSelect:"none"},"body::-webkit-scrollbar":{width:10},"body::-webkit-scrollbar-track":{background:"$primary"},"body::-webkit-scrollbar-thumb":{background:"$main"},"body::-webkit-scrollbar-thumb:hover":{background:"$main2"},"code, pre":{fontFamily:"$mono"},ul:{marginLeft:20},".invalid":{color:"#F16D6D !important"},".disabled":{display:"none !important"},".ring.hovered":{width:80,height:80}});e.Z=r},22921:function(t,e,n){n.d(e,{zo:function(){return i},CO:function(){return o},F4:function(){return a},vs:function(){return s}});var r=(0,n(86744).rm)({theme:{colors:{main:"#6B7C95",main2:"#8696AD",primary:"#37393E",dark:"#F4F4F5",white:"#191919",gradient:"linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)"},fontSizes:{1:"14px",2:"18px",3:"20px",4:"24px",5:"36px",6:"48px"},fonts:{main:"Roboto, sans-serif",primary:"Roboto, sans-serif",mono:"JetBrains Mono, monospace"}},media:{iPadPro:"(max-width: 1024px)",iPad:"(max-width: 768px)",Flip:"(max-width: 600px)",iPhonePlus:"(max-width: 414px)",iPhone:"(max-width: 375px)",iPhoneSE:"(max-width: 320px)"}}),i=(r.css,r.styled),o=r.global,a=(r.getCssString,r.keyframes),s=i("div",{position:"relative",overflow:"hidden"})}}]);