(()=>{var e={};e.id=702,e.ids=[702],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5630:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>l}),r(8256),r(9357),r(9688),r(5866);var s=r(3191),a=r(8716),n=r(7922),i=r.n(n),o=r(5231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8256)),"C:\\Users\\USUARIO\\Desktop\\transactions-app-manager\\src\\app\\dashboard\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,9357)),"C:\\Users\\USUARIO\\Desktop\\transactions-app-manager\\src\\app\\dashboard\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9688)),"C:\\Users\\USUARIO\\Desktop\\transactions-app-manager\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\USUARIO\\Desktop\\transactions-app-manager\\src\\app\\dashboard\\page.tsx"],p="/dashboard/page",u={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},166:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},6365:(e,t,r)=>{Promise.resolve().then(r.bind(r,1062)),Promise.resolve().then(r.bind(r,1542))},1892:(e,t,r)=>{Promise.resolve().then(r.bind(r,9530))},3164:(e,t,r)=>{Promise.resolve().then(r.bind(r,5598))},9530:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(326),a=r(1120),n=r(9153);function i(){let{id:e,password:t}=(0,a.r)();return console.log("token",Buffer.from(`${e}:${t}`,"utf8").toString("base64")),s.jsx("div",{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx("div",{children:s.jsx(n.kJ,{data:[{name:"Ene",uv:400,pv:2400,amt:2400},{name:"Feb",uv:300,pv:1398,amt:2210},{name:"Marz",uv:200,pv:9800,amt:2290},{name:"Abril",uv:278,pv:3908,amt:2e3}]})})})}r(7577)},5598:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var s=r(326),a=r(434),n=r(9153),i=r(5047);let o=[{name:"Home",href:"/dashboard"},{name:"Accounts",href:"/dashboard/accounts"},{name:"Customers",href:"/dashboard/customers"}];function d(){return(0,i.usePathname)(),s.jsx(s.Fragment,{children:o.map(e=>s.jsx(a.default,{href:e.href,style:{display:"flex",flexDirection:"column"},children:s.jsx(n.R9,{title:e.name})},e.name))})}var l=r(4831),c=r(1120);function p(){let{setTheme:e,theme:t}=(0,l.F)(),{setAccess:r,setId:i,setPassword:o}=(0,c.r)();return(0,s.jsxs)("div",{style:{width:"250px",height:"100vh",display:"flex",flexDirection:"column",borderRight:"1px solid #e5e7eb",backgroundColor:"dark"===t?"#f9fafb":"#333",padding:"20px"},children:[s.jsx(a.default,{href:"/",children:s.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#4f46e5",borderRadius:"10px",marginBottom:"20px"},children:s.jsx("p",{style:{color:"white",fontSize:"24px",fontWeight:"bold"},children:"Tapp"})})}),s.jsx("div",{children:s.jsx(n.CO,{darkButtonText:"Dark",lightButtonText:"Light",setTheme:e,systemButtonText:"System"})}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:s.jsx(d,{})}),s.jsx("div",{children:s.jsx(a.default,{href:"/",onClick:()=>{r(""),i(""),o("")},children:s.jsx(n.R9,{title:"hi"})})})]})}},1062:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>n});var s=r(326);r(7577);var a=r(4831);function n({children:e,...t}){return s.jsx(a.f,{...t,children:e})}},1120:(e,t,r)=>{"use strict";r.d(t,{r:()=>a});var s=r(5251);let a=(0,r(3074).F)((0,s.tJ)(e=>({id:null,setId:t=>e({id:t}),password:null,setPassword:t=>e({password:t}),access:null,setAccess:t=>e({access:t})}),{name:"auth-token"}))},1542:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(326),a=r(3999),n=r(7577);let i=({children:e})=>{let[t]=(0,n.useState)(()=>new a.QueryClient);return s.jsx(a.QueryClientProvider,{client:t,children:e})}},9357:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(9510),a=r(8570);let n=(0,a.createProxy)(String.raw`C:\Users\USUARIO\Desktop\transactions-app-manager\src\app\dashboard\sidebar.tsx`),{__esModule:i,$$typeof:o}=n;n.default;let d=(0,a.createProxy)(String.raw`C:\Users\USUARIO\Desktop\transactions-app-manager\src\app\dashboard\sidebar.tsx#default`);function l({children:e}){return(0,s.jsxs)("div",{style:{width:"100%",height:"100vh",display:"flex",gap:"10px"},children:[s.jsx("div",{style:{width:"20%"},children:s.jsx(d,{})}),s.jsx("div",{style:{width:"80%"},children:e})]})}},8256:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=r(8570);let a=(0,s.createProxy)(String.raw`C:\Users\USUARIO\Desktop\transactions-app-manager\src\app\dashboard\page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`C:\Users\USUARIO\Desktop\transactions-app-manager\src\app\dashboard\page.tsx#default`)},9688:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>h});var s=r(9510);r(7418);var a=r(8570);let n=(0,a.createProxy)(String.raw`C:\Users\USUARIO\Desktop\transactions-app-manager\src\utils\providers\ReactQueryProvider.tsx`),{__esModule:i,$$typeof:o}=n;n.default;let d=(0,a.createProxy)(String.raw`C:\Users\USUARIO\Desktop\transactions-app-manager\src\utils\providers\ReactQueryProvider.tsx#default`),l=(0,a.createProxy)(String.raw`C:\Users\USUARIO\Desktop\transactions-app-manager\src\components\theme-provider.tsx`),{__esModule:c,$$typeof:p}=l;l.default;let u=(0,a.createProxy)(String.raw`C:\Users\USUARIO\Desktop\transactions-app-manager\src\components\theme-provider.tsx#ThemeProvider`),h={title:"React Query App Movies",description:"Aplication using React Query to get Movies from TMDB"};function x({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{style:{width:"100%"},children:s.jsx(d,{children:s.jsx(u,{attribute:"class",defaultTheme:"dark",enableSystem:!0,disableTransitionOnChange:!0,children:s.jsx("main",{style:{width:"100%",height:"100vh"},children:e})})})})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,114,999,434],()=>r(5630));module.exports=s})();