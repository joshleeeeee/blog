import{P as O,u as q}from"./PostStats-4440bd78.js";import{d as f,_ as v,g as i,o as e,c as o,i as _,j as T,k as y,t as k,l as w,T as x,b as B,m as J,p as n,h as c,F as b,q as $,s as P,w as j,v as A,x as N,y as M,z as R,S as V,u as E,r as D,P as F,A as H,e as I,B as W,f as G,n as K}from"./index_prod-05c3b0ca.js";import{C as Q}from"./Comment-4329df44.js";import{B as U}from"./Breadcrumbs-153868b6.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const X=f({name:"ARLinkAvatar",components:{},props:{title:String,link:String,source:{type:String}},setup(){}}),Y=["href","title"],Z=["src","title"];function tt(t,s,r,u,g,h){const d=i("ob-skeleton");return e(),o("a",{class:"links-group-avatar h-[120px] w-[120px] flex items-center justify-center text-white text-6xl font-bold",href:t.link,target:"_blank",title:t.title},[t.source?(e(),o("img",{key:0,class:"h-full w-full shadow-xl m-0 rounded-full",src:t.source,alt:"link-avatar",title:t.title},null,8,Z)):(e(),_(d,{key:1,width:"7rem",height:"7rem",circle:""}))],8,Y)}const et=v(X,[["render",tt]]),nt=f({name:"ARPrimaryButton",components:{},props:{text:String},setup(){const t=T();return{gradientBackground:y(()=>({background:t.themeConfig.theme.header_gradient_css}))}}});function ot(t,s,r,u,g,h){return e(),o("a",{class:"py-1 px-3 text-white flex items-center justify-center z-10 transition cursor-pointer rounded-xl font-semibold select-none",style:w(t.gradientBackground)},k(t.text),5)}const st=v(nt,[["render",ot]]),at=f({name:"ARSecondaryButton",components:{},props:{text:String},setup(){}}),it={class:"py-1 px-3 text-ob-bright flex items-center justify-center z-10 transition cursor-pointer rounded-xl bg-ob-deep-900 border-solid border-ob-bright border-t-2 border-b-2 border-r-2 border-l-2 opacity-80 select-none"};function rt(t,s,r,u,g,h){return e(),o("a",it,k(t.text),1)}const lt=v(at,[["render",rt]]),ct=f({name:"ARLinkBox",components:{LinkAvatar:et,Title:x,PrimaryButton:st,SecondaryButton:lt},emits:["onApplyClicked"],props:{gradientBackground:{type:Object,default:"",required:!0},data:{type:Object,default:[],required:!0}},setup(t,{emit:s}){const{t:r}=B(),u=J();return{applyClicked:()=>{s("onApplyClicked")},randomJump:()=>{u.sendNotification(r("settings.notification-random-jump")),setTimeout(()=>{const l=t.data[Math.floor(Math.random()*24)][Math.floor(Math.random()*2)];window.open(l.link,"_blank")},6e3)},t:r}}});const dt={class:"ob-gradient-plate absolute bg-ob-deep-900 rounded-xl opacity-90 flex justify-center items-center shadow-lg hover:shadow-2xl duration-300 overflow-hidden"},pt={class:"flex w-full relative overflow-hidden"},ut={class:"top-6 left-6 absolute flex flex-col"},mt={class:"hidden md:flex text-ob-dim text-sm"},gt={class:"absolute right-8 top-8 flex space-x-3"},ht={class:"link-group-wrapper flex flex-nowrap pt-28 left-0 top-0"},kt={class:"links-group-avatar-pair ml-4 pb-7 pt-4 select-none"},_t={class:"links-group-avatar-pair ml-4 pb-7 pt-4 select-none"};function ft(t,s,r,u,g,h){const d=i("Title"),l=i("SecondaryButton"),a=i("PrimaryButton"),p=i("LinkAvatar");return e(),o("div",{class:"h-[25rem] w-full rounded-2xl relative shadow-xl mb-8 flex",style:w(t.gradientBackground)},[n("div",dt,[n("div",pt,[n("div",ut,[n("div",mt,k(t.t("settings.links")),1),c(d,{title:"settings.links-slogan",icon:"friends","text-size":"text-3xl",paddings:"hidden md:flex pb-2",margins:"mb-0 mt-0"})]),n("div",gt,[c(l,{text:t.t("settings.links-random-visit"),onClick:s[0]||(s[0]=m=>t.randomJump())},null,8,["text"]),c(a,{text:t.t("settings.links-apply"),onClick:s[1]||(s[1]=m=>t.applyClicked())},null,8,["text"])]),n("div",ht,[t.data.length===0?(e(),o(b,{key:0},$(48,m=>n("div",kt,[c(p),c(p)])),64)):(e(!0),o(b,{key:1},$(t.data,m=>(e(),o("div",_t,[c(p,{title:m[0].nick,link:m[0].link,source:m[0].avatar},null,8,["title","link","source"]),c(p,{title:m[1].nick,link:m[1].link,source:m[1].avatar},null,8,["title","link","source"])]))),256))])])])],4)}const vt=v(ct,[["render",ft]]),yt=f({name:"ARLinkCard",components:{},props:{avatar:String,link:String,nick:String,description:String,type:String,vip:Boolean,categoryMode:Boolean},setup(t){const s=T(),{t:r}=B();return{t:r,titleStyle:{"text-xl":!0,"vip-text":!!t.vip},gradientBackground:y(()=>({background:s.themeConfig.theme.header_gradient_css})),articleClasses:y(()=>({"article-container":!0,highlighted:!!t.vip,"category-mode":!!t.categoryMode}))}}});const bt={class:"article"},$t={class:"article-thumbnail"},Ct={key:0,alt:""},Lt={key:1,src:N},wt={class:"article-content"},Bt={key:0},St=["href"],Tt={key:0};function xt(t,s,r,u,g,h){const d=i("ob-skeleton"),l=P("lazy");return e(),o("li",{id:"link-card",class:A(t.articleClasses)},[n("div",bt,[n("div",$t,[t.avatar?j((e(),o("img",Ct,null,512)),[[l,t.avatar]]):(e(),o("img",Lt)),n("span",{class:"thumbnail-screen",style:w(t.gradientBackground)},null,4)]),n("div",wt,[n("span",null,[t.type&&!t.vip?(e(),o("b",Bt,k(t.t(t.type)),1)):t.type&&t.vip?(e(),o("b",{key:1,class:"vip",style:w(t.gradientBackground)},k(t.t(t.type)),5)):(e(),_(d,{key:2,tag:"b",height:"20px",width:"35px"}))]),n("a",{href:t.link,target:"_blank"},[n("h1",{class:A(t.titleStyle)},k(t.nick),3)],8,St),t.description?(e(),o("p",Tt,k(t.description),1)):(e(),_(d,{key:1,tag:"p",count:4,height:"16px"}))])])],2)}const z=v(yt,[["render",xt]]),At=f({name:"ARLinkCategory",components:{LinkCard:z,Title:x},props:{links:{type:Object,default:{}}},setup(){const{t}=B();return{t,convertToLocale:M}}}),Dt={class:"text-ob-dim mb-8 text-lg"},Pt={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"};function jt(t,s,r,u,g,h){const d=i("Title"),l=i("LinkCard");return t.links?(e(!0),o(b,{key:0},$(Object.keys(t.links),a=>(e(),o(b,null,[c(d,{title:t.convertToLocale(a),count:t.links[a].length,margins:"mb-2"},null,8,["title","count"]),n("span",Dt,k(t.t(`${t.convertToLocale(a)}-desc`)),1),n("ul",Pt,[(e(!0),o(b,null,$(t.links[a],p=>(e(),_(l,{nick:p.nick,link:p.link,avatar:p.avatar,description:p.description,type:t.convertToLocale(p.label),vip:p.label==="links-badge-vip","category-mode":!0},null,8,["nick","link","avatar","description","type","vip"]))),256))])],64))),256)):R("",!0)}const Mt=v(At,[["render",jt]]),Rt=f({name:"ARLinkList",components:{SubTitle:V},props:{links:{type:Array,default:[],required:!0}},setup(){return{convertToLocale:M}}}),zt={class:"grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8"};function Ot(t,s,r,u,g,h){const d=i("Title"),l=i("LinkCard");return e(),o("div",null,[c(d,{title:"settings.links",icon:"friends",count:t.links.length},null,8,["count"]),n("ul",zt,[(e(!0),o(b,null,$(t.links,a=>(e(),_(l,{nick:a.nick,link:a.link,avatar:a.avatar,description:a.description,type:t.convertToLocale(a.label),vip:a.label==="links-badge-vip"},null,8,["nick","link","avatar","description","type","vip"]))),256))])])}const qt=v(Rt,[["render",Ot]]),Jt=f({name:"Links",components:{PostStats:O,LinkBox:vt,LinkCard:z,Title:x,LinkCategoryList:Mt,LinkList:qt,Comment:Q,Breadcrumbs:U},setup(){const t=E(),s=T(),r=D(new F),u=D(),g=H(),{t:h}=B(),{pageTitle:d,updateTitle:l}=I(),{jumpToEle:a}=q(),{enabledCommentPlugin:p}=W(),m=async()=>{var C,L;r.value=await t.fetchArticle("friends"),l(s.locale),await K(),(C=u.value)==null||C.getCommentCount(),(L=u.value)==null||L.getPostView(),Prism.highlightAll()},S=()=>{a("content")};return G(m),{currentPath:y(()=>g.path),pluginConfigs:y(()=>s.themeConfig.plugins),gradientBackground:y(()=>({background:s.themeConfig.theme.header_gradient_css})),enabledComment:y(()=>r.value.comments&&p.value.plugin!==""),pageTitle:d,jumpToContent:S,postStatsRef:u,pageData:r,t:h}}}),Nt={class:"mt-20"},Vt={class:"flex flex-col"},Et={class:"post-header"},Ft={key:0,class:"post-title text-white uppercase"},Ht={class:"flex flex-row items-center justify-start mt-8 mb-4"},It={class:"mt-8",id:"content"},Wt=["innerHTML"],Gt={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},Kt=n("br",null,null,-1),Qt=n("br",null,null,-1),Ut=n("br",null,null,-1),Xt={key:2,id:"comments"};function Yt(t,s,r,u,g,h){const d=i("Breadcrumbs"),l=i("ob-skeleton"),a=i("PostStats"),p=i("LinkBox"),m=i("LinkCategoryList"),S=i("LinkList"),C=i("Comment"),L=P("scroll-spy");return e(),o("div",Nt,[c(d,{current:t.pageTitle},null,8,["current"]),n("div",Vt,[n("div",Et,[t.pageTitle?(e(),o("h1",Ft,k(t.pageTitle),1)):(e(),_(l,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),n("div",Ht,[c(a,{"post-word-count":t.pageData.count_time.symbolsCount,"post-time-count":t.pageData.count_time.symbolsTime,"post-title":t.pageData.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,comments:t.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])]),c(p,{"gradient-background":t.gradientBackground,data:t.pageData.avatarWall,onOnApplyClicked:s[0]||(s[0]=Zt=>t.jumpToContent())},null,8,["gradient-background","data"]),t.pageData.categoryMode===!0?(e(),_(m,{key:0,links:t.pageData.data},null,8,["links"])):(e(),_(S,{key:1,links:t.pageData.data},null,8,["links"])),n("div",It,[t.pageData.content?j((e(),o("div",{key:0,class:"post-html",innerHTML:t.pageData.content},null,8,Wt)),[[L,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(e(),o("div",Gt,[c(l,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),Kt,c(l,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),Qt,Ut,c(l,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})]))]),t.enabledComment&&t.pageData.title&&t.pageData.text&&t.pageData.uid?(e(),o("div",Xt,[c(C,{title:t.pageData.title,body:t.pageData.text,uid:t.pageData.uid},null,8,["title","body","uid"])])):R("",!0)])])}const ae=v(Jt,[["render",Yt]]);export{ae as default};