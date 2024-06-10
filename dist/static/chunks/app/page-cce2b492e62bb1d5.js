(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2235:function(e,r,t){Promise.resolve().then(t.bind(t,3433))},3433:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return S}});var s=t(7437),a=t(2265),l=t(9512),n=t(5929),i=t(9555),o=t(4328),d=t(8472);let c=async(e,r)=>{try{return(await e.post("/token",r)).data}catch(e){if(d.Z.isAxiosError(e)){var t,s;return alert((null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.map(e=>e.message).join(", "))||e.message),null}{let e="An unexpected error occurred";return console.error(e),alert(e),null}}},u=()=>{let e=(0,o.Z)(),r=async r=>c(e,r);return(0,i.useMutation)(r)};var f=t(6463),p=t(5815),x=t(2218),m=t(4839),h=t(6164);function y(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,h.m6)((0,m.W)(r))}let g=(0,x.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),v=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(p.f,{ref:r,className:y(g(),t),...a})});v.displayName=p.f.displayName;let j=a.forwardRef((e,r)=>{let{className:t,type:a,...l}=e;return(0,s.jsx)("input",{type:a,className:y("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...l})});j.displayName="Input",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:y("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})}).displayName="Card";let b=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:y("flex flex-col space-y-1.5 p-6",t),...a})});b.displayName="CardHeader";let w=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("h3",{ref:r,className:y("text-2xl font-semibold leading-none tracking-tight",t),...a})});w.displayName="CardTitle";let N=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("p",{ref:r,className:y("text-sm text-muted-foreground",t),...a})});N.displayName="CardDescription";let k=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:y("p-6 pt-0",t),...a})});k.displayName="CardContent";let C=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:y("flex items-center p-6 pt-0",t),...a})});C.displayName="CardFooter";var R=t(299);function S(){let{setTheme:e}=(0,l.F)(),{mutateAsync:r,isSuccess:t,data:i,isError:o,isLoading:d,error:c,status:p}=u(),{setAccess:x,setId:m,setPassword:h}=(0,R.r)(),y=(0,f.useRouter)(),[g,S]=(0,a.useState)({id:"",password:""}),E=async e=>{e.preventDefault(),await r(g)};return(0,a.useEffect)(()=>{(null==i?void 0:i.access)&&(null==i?void 0:i.refresh)&&(x(null==i?void 0:i.access),m(g.id),h(g.password),y.push("/dashboard"))},[null==i?void 0:i.access,null==i?void 0:i.refresh]),(0,s.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsxs)(n.Zb,{style:{width:"100%",maxWidth:"20rem"},children:[(0,s.jsxs)(b,{children:[(0,s.jsx)(n.CO,{darkButtonText:"Dark",lightButtonText:"Light",setTheme:e,systemButtonText:"System"}),(0,s.jsx)(w,{children:" Welcome Back"}),(0,s.jsx)(N,{children:"Sign in to your account"})]}),(0,s.jsx)(k,{children:(0,s.jsxs)("form",{onSubmit:E,children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[(0,s.jsx)(v,{htmlFor:"username",style:{display:"block"},children:"Secret Id"}),(0,s.jsx)(j,{id:"username",type:"text",placeholder:"Enter your username",value:g.id,onChange:e=>S({...g,id:e.target.value})})]}),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"5px"},children:[(0,s.jsx)(v,{htmlFor:"password",style:{display:"block"},children:"Secret Password"}),(0,s.jsx)(j,{id:"password",type:"password",placeholder:"Enter your password",value:g.password,onChange:e=>S({...g,password:e.target.value})})]})]}),d&&(0,s.jsx)("p",{children:"Loading..."}),c&&(0,s.jsx)("p",{style:{color:"red"},children:c.message}),(null==i?void 0:i.access)&&(0,s.jsx)("p",{children:"Success: Logged in!"}),(0,s.jsx)(C,{children:(0,s.jsx)(n.R9,{type:"submit",title:"Log In"})})]})})]})})}},4328:function(e,r,t){"use strict";var s=t(299),a=t(8472),l=t(6300).Buffer;r.Z=()=>{let{id:e,password:r}=(0,s.r)(),t=l.from("".concat(e,":").concat(r),"utf8").toString("base64");return a.Z.create({baseURL:"https://sandbox.belvo.com/api",headers:{accept:"application/json",authorization:"Basic ".concat(t)}})}},299:function(e,r,t){"use strict";t.d(r,{r:function(){return a}});var s=t(9291);let a=(0,t(4408).F)((0,s.tJ)(e=>({id:null,setId:r=>e({id:r}),password:null,setPassword:r=>e({password:r}),access:null,setAccess:r=>e({access:r})}),{name:"auth-token"}))}},function(e){e.O(0,[912,838,555,300,472,858,971,23,744],function(){return e(e.s=2235)}),_N_E=e.O()}]);