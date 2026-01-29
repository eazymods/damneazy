import{r as $,j as d,g as wa,R as Fn}from"./index-B9RLhQNM.js";async function ka(){try{if(!navigator.getBattery)return null;const e=await navigator.getBattery();return{level:typeof e.level=="number"?Math.round(e.level*100):null,charging:typeof e.charging=="boolean"?e.charging:null}}catch{return null}}function Aa(){const e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;return e?{effectiveType:e.effectiveType||null,downlink:typeof e.downlink=="number"?e.downlink:null,rtt:typeof e.rtt=="number"?e.rtt:null,saveData:typeof e.saveData=="boolean"?e.saveData:null}:null}async function Na(e){if(!e)return null;try{const n=await(await fetch("https://api.ipify.org?format=json")).json();return(n==null?void 0:n.ip)||null}catch{return null}}async function Sa({externalIpLookup:e=!1}={}){var o,f,c,u,v,g;const t=new Date,n=Intl.DateTimeFormat().resolvedOptions().timeZone,a=Aa(),r=await ka(),s=await Na(e);return{timestamp:t.toISOString(),timezone:n,language:navigator.language||null,languages:Array.isArray(navigator.languages)?navigator.languages:null,platform:navigator.platform||null,userAgent:navigator.userAgent||null,screen:{width:((o=window.screen)==null?void 0:o.width)??null,height:((f=window.screen)==null?void 0:f.height)??null,availWidth:((c=window.screen)==null?void 0:c.availWidth)??null,availHeight:((u=window.screen)==null?void 0:u.availHeight)??null,colorDepth:((v=window.screen)==null?void 0:v.colorDepth)??null,pixelDepth:((g=window.screen)==null?void 0:g.pixelDepth)??null,devicePixelRatio:window.devicePixelRatio??null},hardware:{cores:navigator.hardwareConcurrency??null,memoryGB:navigator.deviceMemory??null,maxTouchPoints:navigator.maxTouchPoints??null},privacy:{cookiesEnabled:navigator.cookieEnabled??null,doNotTrack:navigator.doNotTrack??null},network:{online:navigator.onLine??null,connection:a,publicIp:s,publicIpNote:s?"Fetched from ipify (external request).":e?"Unable to fetch public IP (blocked/offline).":"Not requested."},battery:r}}function Pa(e){return/^https?:\/\//i.test(e)}function A(e,t){const n=t==null||t===""?"N/A":String(t);return`${e}: ${n}`}function Oa(){return"------------------------------------------------------------"}function Ia(e){const t=String(e||"").toUpperCase(),n=Math.max(1,60-t.length);return`=== ${t} ${"=".repeat(n)}`}function k(e,t,n=[]){const a=[Ia(e),...t];return n.length&&a.push(Oa(),...n),a}function ne(e){return String(e||"").trim().toLowerCase()}function _e(e,t){const n=String(e||"").trim();if(!n)return{ok:!1,reason:"missing"};const a=Number(n);if(Number.isFinite(a)&&String(a)===n){const s=a-1;return s<0||s>=t.length?{ok:!1,reason:"range"}:{ok:!0,idx:s}}const r=t.findIndex(s=>ne(s==null?void 0:s.id)===ne(n));return r===-1?{ok:!1,reason:"notfound"}:{ok:!0,idx:r}}function Ea({config:e,onScrollToServers:t}){var wt,kt;const n=((wt=e==null?void 0:e.terminal)==null?void 0:wt.prompt)||"C:\\>",a=((kt=e==null?void 0:e.terminal)==null?void 0:kt.title)||"terminal",r=$.useMemo(()=>{var y;const p=((y=e==null?void 0:e.owner)==null?void 0:y.displayName)||"damneazy";return[{kind:"out",text:`${a} — interactive batch UI`},{kind:"out",text:"Type 'help' to see commands. Try: servers | websites | projects | socials"},{kind:"out",text:`Welcome, visitor. (${p})`},{kind:"out",text:""}]},[e,a]),[s,i]=$.useState(r),[o,f]=$.useState(""),[c,u]=$.useState([]),[v,g]=$.useState(-1),E=$.useRef(null),j=$.useRef(null);$.useEffect(()=>{var p;(p=j.current)==null||p.focus()},[]),$.useEffect(()=>{const p=y=>{var F,D;if(y.ctrlKey||y.metaKey||y.altKey||y.key==="Shift"||y.key==="Control"||y.key==="Meta"||y.key==="Alt"||y.key==="Tab"||y.key.startsWith("Arrow")||y.key==="Escape")return;const w=document.activeElement,O=(F=w==null?void 0:w.tagName)==null?void 0:F.toLowerCase();O==="input"||O==="textarea"||(w==null?void 0:w.isContentEditable)||(D=j.current)==null||D.focus()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]),$.useEffect(()=>{const p=E.current;p&&(p.scrollTop=p.scrollHeight)},[s]);function b(p){i(y=>[...y,...p.map(w=>({kind:"out",text:w}))])}function C(p){i(y=>[...y,...p])}function N(){i(r)}function S(p){return p?(window.open(p,"_blank","noopener,noreferrer"),!0):!1}function _(){return k("help",["Core:","  help","  clear | cls","  date | time","","Info:","  info [brief|stack]","  infoself [short|full|ip]","","Servers:","  servers [list]","  servers show <#>","  servers open <#> <discord|website|youtube|store|connect>","","Websites:","  websites [list]","  websites open <#>","","Projects:","  projects [all|past|future]","","Links:","  socials","  open <discord|github|youtube|store|website|https://...>","","UI:","  scroll servers"],["Examples:","  servers show 1","  servers open 1 discord","  websites open 1","  infoself short"])}function U(p){const y=(e==null?void 0:e.owner)||{};return(ne(p)||"brief")==="stack"?k("info / stack",[`Stack: ${(y.stack||[]).join(" · ")||"N/A"}`],["Next: info brief"]):k("info",[`${y.displayName||"damneazy"} — ${y.title||"Developer"}`,"",y.brief||"N/A"],["Next: info stack | socials"])}function W(){const p=(e==null?void 0:e.servers)||[];if(!p.length)return k("servers",["No servers configured yet."]);const y=p.map((w,O)=>{const I=w.subtitle?` — ${w.subtitle}`:"";return`[${O+1}] ${w.name}${I}`});return k("servers",y,["Next:","  servers show 1","  servers open 1 discord","  scroll servers"])}function ie(p){const w=((e==null?void 0:e.servers)||[])[p];if(!w)return k("servers show",["Server not found."]);const O=w.links||{},I=Object.keys(O).filter(F=>O[F]);return k(`servers / show #${p+1}`,[`${w.name}`,w.subtitle?`Subtitle: ${w.subtitle}`:null,w.description?`About: ${w.description}`:null,Array.isArray(w.tags)&&w.tags.length?`Tags: ${w.tags.join(" · ")}`:null,"","Links:",...I.length?I.map(F=>`  - ${F}`):["  - none configured"]].filter(Boolean),["Next:",`  servers open ${p+1} discord`,`  servers open ${p+1} website`])}function K(){const p=(e==null?void 0:e.websites)||[];if(!p.length)return k("websites",["No websites configured yet."]);const y=p.map((w,O)=>`[${O+1}] ${w.name}${w.url?` — ${w.url}`:""}`);return k("websites",y,["Next: websites open 1"])}function q(p){const y=(e==null?void 0:e.projects)||{},w=y.past||[],O=y.future||[],I=ne(p)||"all",F=D=>D.length?D.map(ue=>`- ${ue.name}: ${ue.details}`):["- N/A"];return I==="past"?k("projects / past",F(w),["Next: projects future"]):I==="future"?k("projects / future",F(O),["Next: projects past"]):k("projects",["Past:",...F(w).map(D=>`  ${D}`),"","Future:",...F(O).map(D=>`  ${D}`)],["Next: projects past | projects future"])}function ya(){const p=(e==null?void 0:e.links)||{};return k("socials",[`discord: ${p.discord||"N/A"}`,`github : ${p.github||"N/A"}`,`youtube: ${p.youtube||"N/A"}`,`store  : ${p.store||"N/A"}`,`website: ${p.website||"N/A"}`],["Next: open discord | open github | open website"])}async function va(p){var D,ue,At,Nt,St,Pt,Ot,It,Et,Ct,jt,Tt,_t,Ft,Lt,Mt,Rt,Dt,zt,$t,Ut,Wt,Yt,Bt,Gt,Ht,Vt,Xt,Kt,qt,Zt;const y=p.trim();if(!y)return;u(T=>[y,...T].slice(0,50)),g(-1),C([{kind:"in",text:`${n} ${y}`}]);const[w,...O]=y.split(/\s+/),I=(w||"").toLowerCase(),F=O[0]?ne(O[0]):"";if(I==="clear"||I==="cls"){N();return}if(I==="help"||I==="?"){b(_());return}if(I==="info"){b(U(O[0]));return}if(I==="servers"){const T=(e==null?void 0:e.servers)||[];if(!F||F==="list"){b(W());return}if(F==="show"){const z=_e(O[1],T);if(!z.ok){b(k("servers show",["Usage: servers show <#>"],["Example: servers show 1"]));return}b(ie(z.idx));return}if(F==="open"){const z=_e(O[1],T),m=ne(O[2]);if(!z.ok||!m){b(k("servers open",["Usage: servers open <#> <discord|website|youtube|store|connect>"]));return}const M=T[z.idx],Qt=(D=M==null?void 0:M.links)==null?void 0:D[m];if(!Qt){b(k("servers open",[`No link '${m}' configured for ${(M==null?void 0:M.name)||"that server"}.`]));return}S(Qt),b(k("servers open",[`Opened: ${M.name} / ${m}`]));return}b(k("servers",["Unknown subcommand.","Try: servers list | servers show <#> | servers open <#> discord"]));return}if(I==="websites"){const T=(e==null?void 0:e.websites)||[];if(!F||F==="list"){b(K());return}if(F==="open"){const z=_e(O[1],T);if(!z.ok){b(k("websites open",["Usage: websites open <#>"],["Example: websites open 1"]));return}const m=T[z.idx];if(!(m!=null&&m.url)){b(k("websites open",["No URL configured for that website."]));return}S(m.url),b(k("websites open",[`Opened: ${m.name}`]));return}b(k("websites",["Unknown subcommand.","Try: websites list | websites open <#>"]));return}if(I==="projects"){b(q(O[0]));return}if(I==="socials"){b(ya());return}if(I==="date"||I==="time"){b([new Date().toString()]);return}if(I==="config"){b(["Edit the config here:","  src/config/damneazy.config.js"]);return}if(I==="scroll"){if((O[0]||"").toLowerCase()==="servers"){t==null||t(),b(k("scroll",["Scrolling to server cards..."]));return}b(["Usage: scroll servers"]);return}if(I==="open"){const T=O.join(" ").trim();if(!T){b(k("open",["Usage: open <discord|github|youtube|store|website|https://...>"]));return}const z=(e==null?void 0:e.links)||{},m=T.toLowerCase(),M=z[m]||(Pa(T)?T:null);if(!M){b(k("open",[`Unknown link '${T}'.`],["Next: socials"]));return}if(!S(M)){b(k("open",[`Unable to open: ${M}`]));return}b(k("open",[`Opened: ${m}`],[`URL: ${M}`]));return}if(I==="infoself"){const T=ne(O[0])||"short",z=T==="ip"||T==="full";b(k("infoself",["Collecting available client-side info..."]));const m=await Sa({externalIpLookup:!!((ue=e==null?void 0:e.terminal)!=null&&ue.externalIpLookup)&&z}),M=[A("timezone",m.timezone),A("language",m.language),A("platform",m.platform),A("resolution",(At=m.screen)!=null&&At.width&&((Nt=m.screen)!=null&&Nt.height)?`${m.screen.width}x${m.screen.height}`:null),A("cores",(St=m.hardware)==null?void 0:St.cores),A("memoryGB",(Pt=m.hardware)!=null&&Pt.memoryGB?`${m.hardware.memoryGB}GB`:null),A("online",(Ot=m.network)==null?void 0:Ot.online)];if(T==="short"){b(k("infoself / short",M,["Next: infoself full","Note: websites cannot read local files/apps without permission."]));return}if(T==="ip"){b(k("infoself / ip",[...M,A("publicIp",(It=m.network)==null?void 0:It.publicIp),`note: ${((Et=m.network)==null?void 0:Et.publicIpNote)||""}`],["Next: infoself full"]));return}b(k("infoself / full",[A("timestamp",m.timestamp),A("timezone",m.timezone),A("language",m.language),A("languages",m.languages?m.languages.join(", "):null),A("platform",m.platform),A("userAgent",m.userAgent),"","Screen:",A("resolution",(Ct=m.screen)!=null&&Ct.width&&((jt=m.screen)!=null&&jt.height)?`${m.screen.width}x${m.screen.height}`:null),A("avail",(Tt=m.screen)!=null&&Tt.availWidth&&((_t=m.screen)!=null&&_t.availHeight)?`${m.screen.availWidth}x${m.screen.availHeight}`:null),A("colorDepth",(Ft=m.screen)==null?void 0:Ft.colorDepth),A("devicePixelRatio",(Lt=m.screen)==null?void 0:Lt.devicePixelRatio),"","Hardware:",A("cores",(Mt=m.hardware)==null?void 0:Mt.cores),A("memoryGB",(Rt=m.hardware)!=null&&Rt.memoryGB?`${m.hardware.memoryGB}GB`:null),A("maxTouchPoints",(Dt=m.hardware)==null?void 0:Dt.maxTouchPoints),"","Network:",A("online",(zt=m.network)==null?void 0:zt.online),A("connection",(Ut=($t=m.network)==null?void 0:$t.connection)!=null&&Ut.effectiveType?m.network.connection.effectiveType:null),A("downlink",(Yt=(Wt=m.network)==null?void 0:Wt.connection)!=null&&Yt.downlink?`${m.network.connection.downlink} Mbps`:null),A("rtt",(Gt=(Bt=m.network)==null?void 0:Bt.connection)!=null&&Gt.rtt?`${m.network.connection.rtt} ms`:null),A("saveData",(Vt=(Ht=m.network)==null?void 0:Ht.connection)==null?void 0:Vt.saveData),A("publicIp",(Xt=m.network)==null?void 0:Xt.publicIp),`note: ${((Kt=m.network)==null?void 0:Kt.publicIpNote)||""}`,"","Privacy:",A("cookiesEnabled",(qt=m.privacy)==null?void 0:qt.cookiesEnabled),A("doNotTrack",(Zt=m.privacy)==null?void 0:Zt.doNotTrack),"",m.battery?`Battery: ${m.battery.level??"N/A"}%  charging: ${m.battery.charging??"N/A"}`:"Battery: N/A","","Limitations: websites can't read your local files, installed apps, real name, or exact location without explicit permissions."],["Next: infoself short | infoself ip"]));return}b([`'${w}' is not recognized as a command.`,"Type `help` for a list of commands."])}function xa(p){if(p.key==="Enter"){p.preventDefault();const y=o;f(""),va(y);return}if(p.key==="ArrowUp"){p.preventDefault();const y=Math.min(v+1,c.length-1);y>=0&&(g(y),f(c[y]||""));return}if(p.key==="ArrowDown"){p.preventDefault();const y=v-1;y<0?(g(-1),f("")):(g(y),f(c[y]||""))}}return d.jsxs("div",{className:"batch-shell-modern",onPointerDown:()=>{var p;return(p=j.current)==null?void 0:p.focus()},children:[d.jsxs("div",{className:"batch-header",children:[d.jsxs("div",{className:"batch-dots",children:[d.jsx("div",{className:"terminal-dot bg-[#ff5f57]"}),d.jsx("div",{className:"terminal-dot bg-[#febc2e]"}),d.jsx("div",{className:"terminal-dot bg-[#28c840]"})]}),d.jsx("span",{className:"batch-title",children:a}),d.jsx("span",{className:"batch-meta",children:"interactive"})]}),d.jsxs("div",{ref:E,className:"batch-output custom-scrollbar",children:[s.map((p,y)=>d.jsx("div",{className:p.kind==="in"?"batch-line batch-line-in":p.kind==="err"?"batch-line batch-line-err":"batch-line batch-line-out",children:p.text||" "},`${y}-${p.kind}`)),d.jsxs("div",{className:"batch-input-line",children:[d.jsx("span",{className:"batch-prompt",children:n}),d.jsx("input",{ref:j,className:"batch-input",value:o,onChange:p=>f(p.target.value),onKeyDown:xa,spellCheck:!1,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off"})]})]})]})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ca(e,t,n){return(t=Ta(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jt(Object(n),!0).forEach(function(a){Ca(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ja(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ta(e){var t=ja(e,"string");return typeof t=="symbol"?t:t+""}const en=()=>{};let ft={},Ln={},Mn=null,Rn={mark:en,measure:en};try{typeof window<"u"&&(ft=window),typeof document<"u"&&(Ln=document),typeof MutationObserver<"u"&&(Mn=MutationObserver),typeof performance<"u"&&(Rn=performance)}catch{}const{userAgent:tn=""}=ft.navigator||{},J=ft,P=Ln,nn=Mn,xe=Rn;J.document;const X=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",Dn=~tn.indexOf("MSIE")||~tn.indexOf("Trident/");var _a=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Fa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,zn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},La={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$n=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],L="classic",Ie="duotone",Ma="sharp",Ra="sharp-duotone",Un=[L,Ie,Ma,Ra],Da={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},za={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},$a=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Ua={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Wa=["fak","fa-kit","fakd","fa-kit-duotone"],an={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ya=["kit"],Ba={kit:{"fa-kit":"fak"}},Ga=["fak","fakd"],Ha={kit:{fak:"fa-kit"}},rn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},we={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Va=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Xa=["fak","fa-kit","fakd","fa-kit-duotone"],Ka={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},qa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Za={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Be={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Qa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ge=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Va,...Qa],Ja=["solid","regular","light","thin","duotone","brands"],Wn=[1,2,3,4,5,6,7,8,9,10],er=Wn.concat([11,12,13,14,15,16,17,18,19,20]),tr=[...Object.keys(Za),...Ja,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",we.GROUP,we.SWAP_OPACITY,we.PRIMARY,we.SECONDARY].concat(Wn.map(e=>"".concat(e,"x"))).concat(er.map(e=>"w-".concat(e))),nr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const H="___FONT_AWESOME___",He=16,Yn="fa",Bn="svg-inline--fa",re="data-fa-i2svg",Ve="data-fa-pseudo-element",ar="data-fa-pseudo-element-pending",ut="data-prefix",dt="data-icon",sn="fontawesome-i2svg",rr="async",sr=["HTML","HEAD","STYLE","SCRIPT"],Gn=(()=>{try{return!0}catch{return!1}})();function ye(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[L]}})}const Hn=l({},zn);Hn[L]=l(l(l(l({},{"fa-duotone":"duotone"}),zn[L]),an.kit),an["kit-duotone"]);const ir=ye(Hn),Xe=l({},Ua);Xe[L]=l(l(l(l({},{duotone:"fad"}),Xe[L]),rn.kit),rn["kit-duotone"]);const on=ye(Xe),Ke=l({},Be);Ke[L]=l(l({},Ke[L]),Ha.kit);const mt=ye(Ke),qe=l({},qa);qe[L]=l(l({},qe[L]),Ba.kit);ye(qe);const or=_a,Vn="fa-layers-text",lr=Fa,cr=l({},Da);ye(cr);const fr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fe=La,ur=[...Ya,...tr],pe=J.FontAwesomeConfig||{};function dr(e){var t=P.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function mr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}P&&typeof P.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=mr(dr(n));r!=null&&(pe[a]=r)});const Xn={styleDefault:"solid",familyDefault:L,cssPrefix:Yn,replacementClass:Bn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pe.familyPrefix&&(pe.cssPrefix=pe.familyPrefix);const ce=l(l({},Xn),pe);ce.autoReplaceSvg||(ce.observeMutations=!1);const h={};Object.keys(Xn).forEach(e=>{Object.defineProperty(h,e,{enumerable:!0,set:function(t){ce[e]=t,he.forEach(n=>n(h))},get:function(){return ce[e]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(e){ce.cssPrefix=e,he.forEach(t=>t(h))},get:function(){return ce.cssPrefix}});J.FontAwesomeConfig=h;const he=[];function pr(e){return he.push(e),()=>{he.splice(he.indexOf(e),1)}}const Z=He,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hr(e){if(!e||!X)return;const t=P.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=P.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return P.head.insertBefore(t,a),e}const gr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ge(){let e=12,t="";for(;e-- >0;)t+=gr[Math.random()*62|0];return t}function fe(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function pt(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Kn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function br(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Kn(e[n]),'" '),"").trim()}function Ee(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ht(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function yr(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(s," ").concat(i," ").concat(o)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function vr(e){let{transform:t,width:n=He,height:a=He,startCentered:r=!1}=e,s="";return r&&Dn?s+="translate(".concat(t.x/Z-n/2,"em, ").concat(t.y/Z-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/Z,"em), calc(-50% + ").concat(t.y/Z,"em)) "):s+="translate(".concat(t.x/Z,"em, ").concat(t.y/Z,"em) "),s+="scale(".concat(t.size/Z*(t.flipX?-1:1),", ").concat(t.size/Z*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var xr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function qn(){const e=Yn,t=Bn,n=h.cssPrefix,a=h.replacementClass;let r=xr;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let ln=!1;function Le(){h.autoAddCss&&!ln&&(hr(qn()),ln=!0)}var wr={mixout(){return{dom:{css:qn,insertCss:Le}}},hooks(){return{beforeDOMElementCreation(){Le()},beforeI2svg(){Le()}}}};const V=J||{};V[H]||(V[H]={});V[H].styles||(V[H].styles={});V[H].hooks||(V[H].hooks={});V[H].shims||(V[H].shims=[]);var G=V[H];const Zn=[],Qn=function(){P.removeEventListener("DOMContentLoaded",Qn),Ne=1,Zn.map(e=>e())};let Ne=!1;X&&(Ne=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Ne||P.addEventListener("DOMContentLoaded",Qn));function kr(e){X&&(Ne?setTimeout(e,0):Zn.push(e))}function ve(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Kn(e):"<".concat(t," ").concat(br(n),">").concat(a.map(ve).join(""),"</").concat(t,">")}function cn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Me=function(t,n,a,r){var s=Object.keys(t),i=s.length,o=n,f,c,u;for(a===void 0?(f=1,u=t[s[0]]):(f=0,u=a);f<i;f++)c=s[f],u=o(u,t[c],c,t);return u};function Ar(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Ze(e){const t=Ar(e);return t.length===1?t[0].toString(16):null}function Nr(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function fn(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Qe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=fn(t);typeof G.hooks.addPack=="function"&&!a?G.hooks.addPack(e,fn(t)):G.styles[e]=l(l({},G.styles[e]||{}),r),e==="fas"&&Qe("fa",t)}const{styles:be,shims:Sr}=G,Jn=Object.keys(mt),Pr=Jn.reduce((e,t)=>(e[t]=Object.keys(mt[t]),e),{});let gt=null,ea={},ta={},na={},aa={},ra={};function Or(e){return~ur.indexOf(e)}function Ir(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Or(r)?r:null}const sa=()=>{const e=a=>Me(be,(r,s,i)=>(r[i]=Me(s,a,{}),r),{});ea=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),ta=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),ra=e((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const t="far"in be||h.autoFetchSvg,n=Me(Sr,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});na=n.names,aa=n.unicodes,gt=Ce(h.styleDefault,{family:h.familyDefault})};pr(e=>{gt=Ce(e.styleDefault,{family:h.familyDefault})});sa();function bt(e,t){return(ea[e]||{})[t]}function Er(e,t){return(ta[e]||{})[t]}function ae(e,t){return(ra[e]||{})[t]}function ia(e){return na[e]||{prefix:null,iconName:null}}function Cr(e){const t=aa[e],n=bt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return gt}const oa=()=>({prefix:null,iconName:null,rest:[]});function jr(e){let t=L;const n=Jn.reduce((a,r)=>(a[r]="".concat(h.cssPrefix,"-").concat(r),a),{});return Un.forEach(a=>{(e.includes(n[a])||e.some(r=>Pr[a].includes(r)))&&(t=a)}),t}function Ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=L}=t,a=ir[n][e];if(n===Ie&&!e)return"fad";const r=on[n][e]||on[n][a],s=e in G.styles?e:null;return r||s||null}function Tr(e){let t=[],n=null;return e.forEach(a=>{const r=Ir(h.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function un(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=Ge.concat(Xa),s=un(e.filter(v=>r.includes(v))),i=un(e.filter(v=>!Ge.includes(v))),o=s.filter(v=>(a=v,!$n.includes(v))),[f=null]=o,c=jr(s),u=l(l({},Tr(i)),{},{prefix:Ce(f,{family:c})});return l(l(l({},u),Mr({values:e,family:c,styles:be,config:h,canonical:u,givenPrefix:a})),_r(n,a,u))}function _r(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const s=t==="fa"?ia(r):{},i=ae(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!be.far&&be.fas&&!h.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Fr=Un.filter(e=>e!==L||e!==Ie),Lr=Object.keys(Be).filter(e=>e!==L).map(e=>Object.keys(Be[e])).flat();function Mr(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=e,o=n===Ie,f=t.includes("fa-duotone")||t.includes("fad"),c=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(f||c||u)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Fr.includes(n)&&(Object.keys(s).find(g=>Lr.includes(g))||i.autoFetchSvg)){const g=$a.get(n).defaultShortPrefixId;a.prefix=g,a.iconName=ae(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=ee()||"fas"),a}class Rr{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=l(l({},this.definitions[s]||{}),r[s]),Qe(s,r[s]);const i=mt[L][s];i&&Qe(i,r[s]),sa()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],f=o[2];t[s]||(t[s]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(t[s][c]=o)}),t[s][i]=o}),t}}let dn=[],oe={};const le={},Dr=Object.keys(le);function zr(e,t){let{mixoutsTo:n}=t;return dn=e,oe={},Object.keys(le).forEach(a=>{Dr.indexOf(a)===-1&&delete le[a]}),dn.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{oe[i]||(oe[i]=[]),oe[i].push(s[i])})}a.provides&&a.provides(le)}),n}function Je(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(oe[e]||[]).forEach(i=>{t=i.apply(null,[t,...a])}),t}function se(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(oe[e]||[]).forEach(s=>{s.apply(null,n)})}function te(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return le[e]?le[e].apply(null,t):void 0}function et(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ee();if(t)return t=ae(n,t)||t,cn(la.definitions,n,t)||cn(G.styles,n,t)}const la=new Rr,$r=()=>{h.autoReplaceSvg=!1,h.observeMutations=!1,se("noAuto")},Ur={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return X?(se("beforeI2svg",e),te("pseudoElements2svg",e),te("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,kr(()=>{Yr({autoReplaceSvgRoot:t}),se("watch",e)})}},Wr={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ae(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ce(e[0]);return{prefix:n,iconName:ae(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(h.cssPrefix,"-"))>-1||e.match(or))){const t=je(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ee(),iconName:ae(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ee();return{prefix:t,iconName:ae(t,e)||e}}}},R={noAuto:$r,config:h,dom:Ur,parse:Wr,library:la,findIconDefinition:et,toHtml:ve},Yr=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=P}=e;(Object.keys(G.styles).length>0||h.autoFetchSvg)&&X&&h.autoReplaceSvg&&R.dom.i2svg({node:t})};function Te(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ve(n))}}),Object.defineProperty(e,"node",{get:function(){if(!X)return;const n=P.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Br(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:i}=e;if(ht(i)&&n.found&&!a.found){const{width:o,height:f}=n,c={x:o/f/2,y:.5};r.style=Ee(l(l({},s),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Gr(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const i=s===!0?"".concat(t,"-").concat(h.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function yt(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:f,titleId:c,extra:u,watchable:v=!1}=e,{width:g,height:E}=n.found?n:t,j=Ga.includes(a),b=[h.replacementClass,r?"".concat(h.cssPrefix,"-").concat(r):""].filter(W=>u.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(u.classes).join(" ");let C={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:b,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(E)})};const N=j&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/E*16*.0625,"em")}:{};v&&(C.attributes[re]=""),o&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||ge())},children:[o]}),delete C.attributes.title);const S=l(l({},C),{},{prefix:a,iconName:r,main:t,mask:n,maskId:f,transform:s,symbol:i,styles:l(l({},N),u.styles)}),{children:_,attributes:U}=n.found&&t.found?te("generateAbstractMask",S)||{children:[],attributes:{}}:te("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=_,S.attributes=U,i?Gr(S):Br(S)}function mn(e){const{content:t,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=e,f=l(l(l({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(f[re]="");const c=l({},i.styles);ht(r)&&(c.transform=vr({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=Ee(c);u.length>0&&(f.style=u);const v=[];return v.push({tag:"span",attributes:f,children:[t]}),s&&v.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),v}function Hr(e){const{content:t,title:n,extra:a}=e,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Ee(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Re}=G;function tt(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(Fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Fe.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(Fe.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const Vr={found:!1,width:512,height:512};function Xr(e,t){!Gn&&!h.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nt(e,t){let n=t;return t==="fa"&&h.styleDefault!==null&&(t=ee()),new Promise((a,r)=>{if(n==="fa"){const s=ia(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Re[t]&&Re[t][e]){const s=Re[t][e];return a(tt(s))}Xr(e,t),a(l(l({},Vr),{},{icon:h.showMissingIcons&&e?te("missingIconAbstract")||{}:{}}))})}const pn=()=>{},at=h.measurePerformance&&xe&&xe.mark&&xe.measure?xe:{mark:pn,measure:pn},me='FA "6.7.2"',Kr=e=>(at.mark("".concat(me," ").concat(e," begins")),()=>ca(e)),ca=e=>{at.mark("".concat(me," ").concat(e," ends")),at.measure("".concat(me," ").concat(e),"".concat(me," ").concat(e," begins"),"".concat(me," ").concat(e," ends"))};var vt={begin:Kr,end:ca};const ke=()=>{};function hn(e){return typeof(e.getAttribute?e.getAttribute(re):null)=="string"}function qr(e){const t=e.getAttribute?e.getAttribute(ut):null,n=e.getAttribute?e.getAttribute(dt):null;return t&&n}function Zr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(h.replacementClass)}function Qr(){return h.autoReplaceSvg===!0?Ae.replace:Ae[h.autoReplaceSvg]||Ae.replace}function Jr(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function es(e){return P.createElement(e)}function fa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Jr:es}=t;if(typeof e=="string")return P.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(fa(s,{ceFn:n}))}),a}function ts(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ae={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(fa(n),t)}),t.getAttribute(re)===null&&h.keepOriginalSource){let n=P.createComment(ts(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~pt(t).indexOf(h.replacementClass))return Ae.replace(e);const a=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===h.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>ve(s)).join(`
`);t.setAttribute(re,""),t.innerHTML=r}};function gn(e){e()}function ua(e,t){const n=typeof t=="function"?t:ke;if(e.length===0)n();else{let a=gn;h.mutateApproach===rr&&(a=J.requestAnimationFrame||gn),a(()=>{const r=Qr(),s=vt.begin("mutate");e.map(r),s(),n()})}}let xt=!1;function da(){xt=!0}function rt(){xt=!1}let Se=null;function bn(e){if(!nn||!h.observeMutations)return;const{treeCallback:t=ke,nodeCallback:n=ke,pseudoElementsCallback:a=ke,observeMutationsRoot:r=P}=e;Se=new nn(s=>{if(xt)return;const i=ee();fe(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!hn(o.addedNodes[0])&&(h.searchPseudoElements&&a(o.target),t(o.target)),o.type==="attributes"&&o.target.parentNode&&h.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&hn(o.target)&&~fr.indexOf(o.attributeName))if(o.attributeName==="class"&&qr(o.target)){const{prefix:f,iconName:c}=je(pt(o.target));o.target.setAttribute(ut,f||i),c&&o.target.setAttribute(dt,c)}else Zr(o.target)&&n(o.target)})}),X&&Se.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ns(){Se&&Se.disconnect()}function as(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function rs(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=je(pt(e));return r.prefix||(r.prefix=ee()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Er(r.prefix,e.innerText)||bt(r.prefix,Ze(e.innerText))),!r.iconName&&h.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ss(e){const t=fe(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return h.autoA11y&&(n?t["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(a||ge()):(t["aria-hidden"]="true",t.focusable="false")),t}function is(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=rs(e),s=ss(e),i=Je("parseNodeAttributes",{},e);let o=t.styleParser?as(e):[];return l({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:os}=G;function ma(e){const t=h.autoReplaceSvg==="nest"?yn(e,{styleParser:!1}):yn(e);return~t.extra.classes.indexOf(Vn)?te("generateLayersText",e,t):te("generateSvgReplacementMutation",e,t)}function ls(){return[...Wa,...Ge]}function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!X)return Promise.resolve();const n=P.documentElement.classList,a=u=>n.add("".concat(sn,"-").concat(u)),r=u=>n.remove("".concat(sn,"-").concat(u)),s=h.autoFetchSvg?ls():$n.concat(Object.keys(os));s.includes("fa")||s.push("fa");const i=[".".concat(Vn,":not([").concat(re,"])")].concat(s.map(u=>".".concat(u,":not([").concat(re,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=fe(e.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const f=vt.begin("onTree"),c=o.reduce((u,v)=>{try{const g=ma(v);g&&u.push(g)}catch(g){Gn||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise((u,v)=>{Promise.all(c).then(g=>{ua(g,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),f(),u()})}).catch(g=>{f(),v(g)})})}function cs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ma(e).then(n=>{n&&ua([n],t)})}function fs(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:et(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:et(r||{})),e(a,l(l({},n),{},{mask:r}))}}const us=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=B,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:f=[],attributes:c={},styles:u={}}=t;if(!e)return;const{prefix:v,iconName:g,icon:E}=e;return Te(l({type:"icon"},e),()=>(se("beforeDOMElementCreation",{iconDefinition:e,params:t}),h.autoA11y&&(i?c["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(o||ge()):(c["aria-hidden"]="true",c.focusable="false")),yt({icons:{main:tt(E),mask:r?tt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:g,transform:l(l({},B),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:f}})))};var ds={mixout(){return{icon:fs(us)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=vn,e.nodeCallback=cs,e}}},provides(e){e.i2svg=function(t){const{node:n=P,callback:a=()=>{}}=t;return vn(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:f,mask:c,maskId:u,extra:v}=n;return new Promise((g,E)=>{Promise.all([nt(a,i),c.iconName?nt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(j=>{let[b,C]=j;g([t,yt({icons:{main:b,mask:C},prefix:i,iconName:a,transform:o,symbol:f,maskId:u,title:r,titleId:s,extra:v,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:i}=t;const o=Ee(i);o.length>0&&(a.style=o);let f;return ht(s)&&(f=te("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},ms={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Te({type:"layer"},()=>{se("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},ps={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return Te({type:"counter",content:e},()=>(se("beforeDOMElementCreation",{content:e,params:t}),Hr({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(h.cssPrefix,"-layers-counter"),...a]}})))}}}},hs={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=B,title:a=null,classes:r=[],attributes:s={},styles:i={}}=t;return Te({type:"text",content:e},()=>(se("beforeDOMElementCreation",{content:e,params:t}),mn({content:e,transform:l(l({},B),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(h.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Dn){const f=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();i=c.width/f,o=c.height/f}return h.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,mn({content:t.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const gs=new RegExp('"',"ug"),xn=[1105920,1112319],wn=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),za),nr),Ka),st=Object.keys(wn).reduce((e,t)=>(e[t.toLowerCase()]=wn[t],e),{}),bs=Object.keys(st).reduce((e,t)=>{const n=st[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ys(e){const t=e.replace(gs,""),n=Nr(t,0),a=n>=xn[0]&&n<=xn[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ze(r?t[0]:t),isSecondary:a||r}}function vs(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(st[n]||{})[r]||bs[n]}function kn(e,t){const n="".concat(ar).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const i=fe(e.children).filter(g=>g.getAttribute(Ve)===t)[0],o=J.getComputedStyle(e,t),f=o.getPropertyValue("font-family"),c=f.match(lr),u=o.getPropertyValue("font-weight"),v=o.getPropertyValue("content");if(i&&!c)return e.removeChild(i),a();if(c&&v!=="none"&&v!==""){const g=o.getPropertyValue("content");let E=vs(f,u);const{value:j,isSecondary:b}=ys(g),C=c[0].startsWith("FontAwesome");let N=bt(E,j),S=N;if(C){const _=Cr(j);_.iconName&&_.prefix&&(N=_.iconName,E=_.prefix)}if(N&&!b&&(!i||i.getAttribute(ut)!==E||i.getAttribute(dt)!==S)){e.setAttribute(n,S),i&&e.removeChild(i);const _=is(),{extra:U}=_;U.attributes[Ve]=t,nt(N,E).then(W=>{const ie=yt(l(l({},_),{},{icons:{main:W,mask:oa()},prefix:E,iconName:S,extra:U,watchable:!0})),K=P.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(K,e.firstChild):e.appendChild(K),K.outerHTML=ie.map(q=>ve(q)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function xs(e){return Promise.all([kn(e,"::before"),kn(e,"::after")])}function ws(e){return e.parentNode!==document.head&&!~sr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ve)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function An(e){if(X)return new Promise((t,n)=>{const a=fe(e.querySelectorAll("*")).filter(ws).map(xs),r=vt.begin("searchPseudoElements");da(),Promise.all(a).then(()=>{r(),rt(),t()}).catch(()=>{r(),rt(),n()})})}var ks={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=An,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=P}=t;h.searchPseudoElements&&An(n)}}};let Nn=!1;var As={mixout(){return{dom:{unwatch(){da(),Nn=!0}}}},hooks(){return{bootstrap(){bn(Je("mutationObserverCallbacks",{}))},noAuto(){ns()},watch(e){const{observeMutationsRoot:t}=e;Nn?rt():bn(Je("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Sn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var Ns={mixout(){return{parse:{transform:e=>Sn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Sn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(f," ").concat(c)},v={transform:"translate(".concat(s/2*-1," -256)")},g={outer:i,inner:u,path:v};return{tag:"g",attributes:l({},g.outer),children:[{tag:"g",attributes:l({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),g.path)}]}]}}}};const De={x:0,y:0,width:"100%",height:"100%"};function Pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ss(e){return e.tag==="g"?e.children:[e]}var Ps={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?je(n.split(" ").map(r=>r.trim())):oa();return a.prefix||(a.prefix=ee()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=t;const{width:f,icon:c}=r,{width:u,icon:v}=s,g=yr({transform:o,containerWidth:u,iconWidth:f}),E={tag:"rect",attributes:l(l({},De),{},{fill:"white"})},j=c.children?{children:c.children.map(Pn)}:{},b={tag:"g",attributes:l({},g.inner),children:[Pn(l({tag:c.tag,attributes:l(l({},c.attributes),g.path)},j))]},C={tag:"g",attributes:l({},g.outer),children:[b]},N="mask-".concat(i||ge()),S="clip-".concat(i||ge()),_={tag:"mask",attributes:l(l({},De),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,C]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Ss(v)},_]};return n.push(U,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")")},De)}),{children:n,attributes:a}}}},Os={provides(e){let t=!1;J.matchMedia&&(t=J.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=l(l({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l(l({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Is={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Es=[wr,ds,ms,ps,hs,ks,As,Ns,Ps,Os,Is];zr(Es,{mixoutsTo:R});R.noAuto;R.config;R.library;R.dom;const it=R.parse;R.findIconDefinition;R.toHtml;const Cs=R.icon;R.layer;R.text;R.counter;var ze={exports:{}},$e,On;function js(){if(On)return $e;On=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $e=e,$e}var Ue,In;function Ts(){if(In)return Ue;In=1;var e=js();function t(){}function n(){}return n.resetWarningCache=t,Ue=function(){function a(i,o,f,c,u,v){if(v!==e){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}a.isRequired=a;function r(){return a}var s={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:t};return s.PropTypes=s,s},Ue}var En;function _s(){return En||(En=1,ze.exports=Ts()()),ze.exports}var Fs=_s();const x=wa(Fs);var Ls={};function ot(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function Ms(e){if(Array.isArray(e))return e}function Rs(e){if(Array.isArray(e))return ot(e)}function Q(e,t,n){return(t=Gs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ds(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zs(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a,r,s,i,o=[],f=!0,c=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(f=(a=s.call(n)).done)&&(o.push(a.value),o.length!==t);f=!0);}catch(u){c=!0,r=u}finally{try{if(!f&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw r}}return o}}function $s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Us(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cn(Object(n),!0).forEach(function(a){Q(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ws(e,t){if(e==null)return{};var n,a,r=Ys(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ys(e,t){if(e==null)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)!==-1)continue;n[a]=e[a]}return n}function jn(e,t){return Ms(e)||zs(e,t)||pa(e,t)||$s()}function lt(e){return Rs(e)||Ds(e)||pa(e)||Us()}function Bs(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gs(e){var t=Bs(e,"string");return typeof t=="symbol"?t:t+""}function Pe(e){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe(e)}function pa(e,t){if(e){if(typeof e=="string")return ot(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ot(e,t):void 0}}var Hs="7.0.0",ct;try{var Vs=require("@fortawesome/fontawesome-svg-core/package.json");ct=Vs.version}catch{ct=typeof process<"u"&&Ls.FA_VERSION||"7.0.0"}function Xs(e){var t=e.beat,n=e.fade,a=e.beatFade,r=e.bounce,s=e.shake,i=e.flash,o=e.spin,f=e.spinPulse,c=e.spinReverse,u=e.pulse,v=e.fixedWidth,g=e.inverse,E=e.border,j=e.listItem,b=e.flip,C=e.size,N=e.rotation,S=e.pull,_=e.swapOpacity,U=e.rotateBy,W=e.widthAuto,ie=Ks(ct,Hs),K=Q(Q(Q(Q(Q(Q({"fa-beat":t,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":u,"fa-fw":v,"fa-inverse":g,"fa-border":E,"fa-li":j,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},"fa-".concat(C),typeof C<"u"&&C!==null),"fa-rotate-".concat(N),typeof N<"u"&&N!==null&&N!==0),"fa-pull-".concat(S),typeof S<"u"&&S!==null),"fa-swap-opacity",_),"fa-rotate-by",ie&&U),"fa-width-auto",ie&&W);return Object.keys(K).map(function(q){return K[q]?q:null}).filter(function(q){return q})}function Ks(e,t){for(var n=e.split("-"),a=jn(n,2),r=a[0],s=a[1],i=t.split("-"),o=jn(i,2),f=o[0],c=o[1],u=r.split("."),v=f.split("."),g=0;g<Math.max(u.length,v.length);g++){var E=u[g]||"0",j=v[g]||"0",b=parseInt(E,10),C=parseInt(j,10);if(b!==C)return b>C}for(var N=0;N<Math.max(u.length,v.length);N++){var S=u[N]||"0",_=v[N]||"0";if(S!==_&&S.length!==_.length)return S.length<_.length}return!(s&&!c)}function qs(e){return e=e-0,e===e}function ha(e){return qs(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Zs=["style"];function Qs(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Js(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=ha(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?t[Qs(r)]=s:t[r]=s,t},{})}function ga(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return ga(e,f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var u=t.attributes[c];switch(c){case"class":f.attrs.className=u,delete t.attributes.class;break;case"style":f.attrs.style=Js(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=u:f.attrs[ha(c)]=u}return f},{attrs:{}}),s=n.style,i=s===void 0?{}:s,o=Ws(n,Zs);return r.attrs.style=Y(Y({},r.attrs.style),i),e.apply(void 0,[t.tag,Y(Y({},r.attrs),o)].concat(lt(a)))}var ba=!1;try{ba=!0}catch{}function ei(){if(!ba&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Tn(e){if(e&&Pe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(it.icon)return it.icon(e);if(e===null)return null;if(e&&Pe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function We(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}var _n={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Oe=Fn.forwardRef(function(e,t){var n=Y(Y({},_n),e),a=n.icon,r=n.mask,s=n.symbol,i=n.className,o=n.title,f=n.titleId,c=n.maskId,u=Tn(a),v=We("classes",[].concat(lt(Xs(n)),lt((i||"").split(" ")))),g=We("transform",typeof n.transform=="string"?it.transform(n.transform):n.transform),E=We("mask",Tn(r)),j=Cs(u,Y(Y(Y(Y({},v),g),E),{},{symbol:s,title:o,titleId:f,maskId:c}));if(!j)return ei("Could not find icon",u),null;var b=j.abstract,C={ref:t};return Object.keys(n).forEach(function(N){_n.hasOwnProperty(N)||(C[N]=n[N])}),ti(b[0],C)});Oe.displayName="FontAwesomeIcon";Oe.propTypes={beat:x.bool,border:x.bool,beatFade:x.bool,bounce:x.bool,className:x.string,fade:x.bool,flash:x.bool,mask:x.oneOfType([x.object,x.array,x.string]),maskId:x.string,fixedWidth:x.bool,inverse:x.bool,flip:x.oneOf([!0,!1,"horizontal","vertical","both"]),icon:x.oneOfType([x.object,x.array,x.string]),listItem:x.bool,pull:x.oneOf(["right","left"]),pulse:x.bool,rotation:x.oneOf([0,90,180,270]),rotateBy:x.bool,shake:x.bool,size:x.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:x.bool,spinPulse:x.bool,spinReverse:x.bool,symbol:x.oneOfType([x.bool,x.string]),title:x.string,titleId:x.string,transform:x.oneOfType([x.string,x.object]),swapOpacity:x.bool,widthAuto:x.bool};var ti=ga.bind(null,Fn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ni={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},Ye={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ai={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},ri={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};function de({href:e,icon:t,label:n}){return e?d.jsxs("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"server-card-btn",title:n,children:[d.jsx(Oe,{icon:t,className:"text-sm"}),d.jsx("span",{children:n}),d.jsx(Oe,{icon:ni,className:"text-[10px] opacity-60"})]}):null}function si({servers:e}){return e!=null&&e.length?d.jsx("div",{className:"grid md:grid-cols-2 xl:grid-cols-3 gap-6",children:e.map(t=>{var n,a,r,s,i;return d.jsxs("div",{className:"server-card-modern",children:[d.jsxs("div",{className:"flex items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-display text-2xl text-eazy-white",children:t.name}),d.jsx("div",{className:"server-card-subtitle",children:t.subtitle||""})]}),d.jsx("div",{className:"server-card-pill",children:t.tags&&t.tags[0]||"SERVER"})]}),d.jsx("p",{className:"server-card-desc",children:t.description||"—"}),Array.isArray(t.tags)&&t.tags.length>0&&d.jsx("div",{className:"server-card-tags",children:t.tags.map(o=>d.jsx("span",{className:"server-card-tag",children:o},o))}),d.jsxs("div",{className:"server-card-actions",children:[d.jsx(de,{href:(n=t.links)==null?void 0:n.website,icon:Ye,label:"Website"}),d.jsx(de,{href:(a=t.links)==null?void 0:a.youtube,icon:ri,label:"YouTube"}),d.jsx(de,{href:(r=t.links)==null?void 0:r.discord,icon:ai,label:"Discord"}),d.jsx(de,{href:(s=t.links)==null?void 0:s.store,icon:Ye,label:"Store"}),d.jsx(de,{href:(i=t.links)==null?void 0:i.connect,icon:Ye,label:"Connect"})]})]},t.id)})}):null}const ii={owner:{handle:"damneazy",displayName:"damneazy",title:"Developer",brief:"I build FiveM systems/scripts + web tooling. Clean code, fast iteration, and performance-first.",stack:["Lua","JavaScript","React","Node.js","SQL"]},terminal:{title:"damneazy.bat",prompt:"C:\\damneazy>",externalIpLookup:!0,ui:{help:{title:"Help / Guide",subtitle:"what this site is + how to use it",intro:"Everything is command-driven. Type a command in the terminal to browse servers, websites, projects, or links.",sections:[{title:"Start here",rows:[{k:"help",v:"list commands"},{k:"info",v:"who is damneazy?"},{k:"servers",v:"list servers (then `servers open 1 discord` or `scroll servers`)"},{k:"socials",v:"show links (then `open discord`)"}]},{title:"Navigation",rows:[{k:"websites",v:"websites I host (`websites open 1`)"},{k:"projects",v:"past + future (`projects past` / `projects future`)"},{k:"clear",v:"clean terminal output"},{k:"↑/↓",v:"command history"}]},{title:"Privacy / InfoSelf",rows:[{k:"infoself",v:"browser-visible info only. IP lookup is optional and uses a third-party API."}]}]}}},links:{discord:"https://discord.com/invite/ybndev",github:"https://github.com/eazymods",youtube:"https://youtube.com/@YBNDevelopment",store:"https://dev.paidservers.com/",website:"https://damneazy.dev"},servers:[{id:"ybn-development",name:"YBN Development",subtitle:"Development hub",description:"Development hub for scripts, releases, and updates.",tags:["Dev","Community"],links:{website:"https://damneazy.dev",youtube:"https://youtube.com/@YBNDevelopment",discord:"https://discord.com/invite/ybndev"}},{id:"ybn-ls-shooting",name:"YBN LS Shooting",subtitle:"Shooting / progression",description:"Competitive shooting + progression systems.",tags:["Server"],links:{store:"https://dev.paidservers.com/",discord:"https://discord.com/invite/ybndev",connect:""}},{id:"ybn-ls-roleplay",name:"YBN LS Roleplay",subtitle:"Roleplay / economy",description:"Roleplay experience with custom economy and systems.",tags:["RP","Server"],links:{store:"https://dev.paidservers.com/",discord:"https://discord.com/invite/ybndev",connect:""}}],websites:[{id:"main",name:"damneazy.dev",url:"https://damneazy.dev",description:"Personal site / command UI."},{id:"store",name:"Store",url:"https://dev.paidservers.com/",description:"Scripts & products."}],projects:{past:[{name:"FiveM systems",details:"Framework features, gameplay systems, UI/HUD, optimizations."}],future:[{name:"More open-source tooling",details:"Developer tools, templates, and automation."},{name:"Server ecosystem",details:"More servers + better integrations across web/discord/in-game."}]}},li=()=>{var a,r;const e=$.useRef(null),t=$.useMemo(()=>ii,[]),n=(r=(a=t==null?void 0:t.terminal)==null?void 0:a.ui)==null?void 0:r.help;return d.jsxs("div",{className:"min-h-screen bg-eazy-black",children:[d.jsx("div",{className:"fixed left-0 top-0 w-1 h-full bg-accent-primary z-50"}),d.jsxs("section",{className:"min-h-screen flex items-center relative overflow-hidden pt-12 pb-16",children:[d.jsx("div",{className:"absolute inset-0 grid-pattern opacity-20"}),d.jsx("div",{className:"absolute inset-0 scanlines opacity-20"}),d.jsx("div",{className:"content-wide w-full relative z-10",children:d.jsxs("div",{className:"grid xl:grid-cols-12 gap-10 items-start",children:[d.jsx("div",{className:"xl:col-span-8",children:d.jsx(Ea,{config:t,onScrollToServers:()=>{var s;return(s=e.current)==null?void 0:s.scrollIntoView({behavior:"smooth",block:"start"})}})}),d.jsx("aside",{className:"xl:col-span-4",children:d.jsxs("div",{className:"server-card-modern help-sidebar",children:[d.jsx("div",{className:"flex items-start justify-between gap-4",children:d.jsxs("div",{children:[d.jsx("div",{className:"font-display text-2xl text-eazy-white leading-tight",children:(n==null?void 0:n.title)||d.jsxs(d.Fragment,{children:["Help ",d.jsx("span",{className:"text-accent-primary",children:"/"})," Guide"]})}),d.jsx("div",{className:"server-card-subtitle",children:(n==null?void 0:n.subtitle)||"what this site is + how to use it"})]})}),d.jsx("p",{className:"help-sidebar-text",children:(n==null?void 0:n.intro)||""}),((n==null?void 0:n.sections)||[]).map(s=>d.jsxs("div",{className:"help-sidebar-section",children:[d.jsx("div",{className:"help-sidebar-h",children:s.title}),(s.rows||[]).map((i,o)=>d.jsxs("div",{className:"help-sidebar-row",children:[d.jsx("span",{className:"help-k",children:i.k})," ",i.v]},`${s.title}-${o}`))]},s.title))]})})]})})]}),d.jsxs("section",{ref:e,id:"servers",className:"py-24 relative overflow-hidden",children:[d.jsx("div",{className:"absolute inset-0 grid-pattern opacity-10"}),d.jsxs("div",{className:"content-wide relative z-10",children:[d.jsxs("div",{className:"flex items-end justify-between gap-6 flex-wrap mb-10",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"font-display text-5xl md:text-6xl text-eazy-white leading-[0.9]",children:["Servers ",d.jsx("span",{className:"text-accent-primary",children:"I own"})]}),d.jsx("div",{className:"mt-4 h-4"})]}),d.jsx("a",{href:"#",onClick:s=>{s.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"server-card-btn",children:"Back to terminal"})]}),d.jsx(si,{servers:t.servers})]})]})]})};export{li as default};
