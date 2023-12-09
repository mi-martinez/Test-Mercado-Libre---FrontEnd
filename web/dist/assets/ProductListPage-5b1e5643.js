import{a as U,g as L,s as w,_ as x,r as $,u as D,d as A,j as a,e as _,f as G,k as ft,b as P,L as X,o as vt,p as bt,q as yt,h as q,t as H,c as V,v as rt,w as lt,B as b,T as j,x as ct,y as Y,n as ht,S as Ct}from"./index-c2cc4767.js";import{B as dt,S as N,G as Z,a as mt}from"./axios-7bb4b42a.js";function jt(t){return U("MuiCardMedia",t)}L("MuiCardMedia",["root","media","img"]);const $t=["children","className","component","image","src","style"],It=t=>{const{classes:e,isMediaComponent:o,isImageComponent:s}=t;return G({root:["root",o&&"media",s&&"img"]},jt,e)},Mt=w("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t,{isMediaComponent:s,isImageComponent:n}=o;return[e.root,s&&e.media,n&&e.img]}})(({ownerState:t})=>x({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),Pt=["video","audio","picture","iframe","img"],zt=["picture","img"],kt=$.forwardRef(function(e,o){const s=D({props:e,name:"MuiCardMedia"}),{children:n,className:i,component:c="div",image:l,src:d,style:v}=s,u=A(s,$t),r=Pt.indexOf(c)!==-1,y=!r&&l?x({backgroundImage:`url("${l}")`},v):v,g=x({},s,{component:c,isMediaComponent:r,isImageComponent:zt.indexOf(c)!==-1}),p=It(g);return a.jsx(Mt,x({className:_(p.root,i),as:c,role:!r&&l?"img":void 0,ref:o,style:y,ownerState:g,src:r?l||d:void 0},u,{children:n}))}),Rt=kt,St=L("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),tt=St,Ot=L("MuiListItemIcon",["root","alignItemsFlexStart"]),et=Ot,Nt=L("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),at=Nt;function Lt(t){return U("MuiMenuItem",t)}const wt=L("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),F=wt,Bt=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],_t=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.divider&&e.divider,!o.disableGutters&&e.gutters]},Tt=t=>{const{disabled:e,dense:o,divider:s,disableGutters:n,selected:i,classes:c}=t,d=G({root:["root",o&&"dense",e&&"disabled",!n&&"gutters",s&&"divider",i&&"selected"]},Lt,c);return x({},c,d)},Wt=w(dt,{shouldForwardProp:t=>ft(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:_t})(({theme:t,ownerState:e})=>x({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:P(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${F.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:P(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${F.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:P(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:P(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${F.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${F.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${tt.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${tt.inset}`]:{marginLeft:52},[`& .${at.root}`]:{marginTop:0,marginBottom:0},[`& .${at.inset}`]:{paddingLeft:36},[`& .${et.root}`]:{minWidth:36}},!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},e.dense&&x({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${et.root} svg`]:{fontSize:"1.25rem"}}))),Ft=$.forwardRef(function(e,o){const s=D({props:e,name:"MuiMenuItem"}),{autoFocus:n=!1,component:i="li",dense:c=!1,divider:l=!1,disableGutters:d=!1,focusVisibleClassName:v,role:u="menuitem",tabIndex:r,className:y}=s,g=A(s,Bt),p=$.useContext(X),z=$.useMemo(()=>({dense:c||p.dense||!1,disableGutters:d}),[p.dense,c,d]),I=$.useRef(null);vt(()=>{n&&I.current&&I.current.focus()},[n]);const h=x({},s,{dense:z.dense,divider:l,disableGutters:d}),M=Tt(s),C=bt(I,o);let k;return s.disabled||(k=r!==void 0?r:-1),a.jsx(X.Provider,{value:z,children:a.jsx(Wt,x({ref:C,role:u,tabIndex:k,component:i,focusVisibleClassName:_(M.focusVisible,v),className:_(M.root,y)},g,{ownerState:h,classes:M}))})}),E=Ft;function Vt(t){return U("MuiPagination",t)}L("MuiPagination",["root","ul","outlined","text"]);const At=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Et(t={}){const{boundaryCount:e=1,componentName:o="usePagination",count:s=1,defaultPage:n=1,disabled:i=!1,hideNextButton:c=!1,hidePrevButton:l=!1,onChange:d,page:v,showFirstButton:u=!1,showLastButton:r=!1,siblingCount:y=1}=t,g=A(t,At),[p,z]=yt({controlled:v,default:n,name:o,state:"page"}),I=(f,S)=>{v||z(S),d&&d(f,S)},h=(f,S)=>{const xt=S-f+1;return Array.from({length:xt},(ve,gt)=>f+gt)},M=h(1,Math.min(e,s)),C=h(Math.max(s-e+1,e+1),s),k=Math.max(Math.min(p-y,s-e-y*2-1),e+2),O=Math.min(Math.max(p+y,e+y*2+2),C.length>0?C[0]-2:s-1),T=[...u?["first"]:[],...l?[]:["previous"],...M,...k>e+2?["start-ellipsis"]:e+1<s-e?[e+1]:[],...h(k,O),...O<s-e-1?["end-ellipsis"]:s-e>e?[s-e]:[],...C,...c?[]:["next"],...r?["last"]:[]],W=f=>{switch(f){case"first":return 1;case"previous":return p-1;case"next":return p+1;case"last":return s;default:return null}},R=T.map(f=>typeof f=="number"?{onClick:S=>{I(S,f)},type:"page",page:f,selected:f===p,disabled:i,"aria-current":f===p?"true":void 0}:{onClick:S=>{I(S,W(f))},type:f,page:W(f),selected:!1,disabled:i||f.indexOf("ellipsis")===-1&&(f==="next"||f==="last"?p>=s:p<=1)});return x({items:R},g)}function Ut(t){return U("MuiPaginationItem",t)}const Dt=L("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),m=Dt,ot=q(a.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),st=q(a.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),nt=q(a.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),it=q(a.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Gt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],pt=(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],e[`size${V(o.size)}`],o.variant==="text"&&e[`text${V(o.color)}`],o.variant==="outlined"&&e[`outlined${V(o.color)}`],o.shape==="rounded"&&e.rounded,o.type==="page"&&e.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&e.ellipsis,(o.type==="previous"||o.type==="next")&&e.previousNext,(o.type==="first"||o.type==="last")&&e.firstLast]},qt=t=>{const{classes:e,color:o,disabled:s,selected:n,size:i,shape:c,type:l,variant:d}=t,v={root:["root",`size${V(i)}`,d,c,o!=="standard"&&`${d}${V(o)}`,s&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return G(v,Ut,e)},Ht=w("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:pt})(({theme:t,ownerState:e})=>x({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${m.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),Kt=w(dt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:pt})(({theme:t,ownerState:e})=>x({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${m.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${m.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:P(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${m.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:P(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${m.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>x({},e.variant==="text"&&{[`&.${m.selected}`]:x({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${m.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${m.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${m.selected}`]:x({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:P(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:P(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:P(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:P(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${m.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),Qt=w("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>x({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),Jt=$.forwardRef(function(e,o){const s=D({props:e,name:"MuiPaginationItem"}),{className:n,color:i="standard",component:c,components:l={},disabled:d=!1,page:v,selected:u=!1,shape:r="circular",size:y="medium",slots:g={},type:p="page",variant:z="text"}=s,I=A(s,Gt),h=x({},s,{color:i,disabled:d,selected:u,shape:r,size:y,type:p,variant:z}),M=H(),C=qt(h),O=(M.direction==="rtl"?{previous:g.next||l.next||it,next:g.previous||l.previous||nt,last:g.first||l.first||ot,first:g.last||l.last||st}:{previous:g.previous||l.previous||nt,next:g.next||l.next||it,first:g.first||l.first||ot,last:g.last||l.last||st})[p];return p==="start-ellipsis"||p==="end-ellipsis"?a.jsx(Ht,{ref:o,ownerState:h,className:_(C.root,n),children:"…"}):a.jsxs(Kt,x({ref:o,ownerState:h,component:c,disabled:d,className:_(C.root,n)},I,{children:[p==="page"&&v,O?a.jsx(Qt,{as:O,ownerState:h,className:C.icon}):null]}))}),Xt=Jt,Yt=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Zt=t=>{const{classes:e,variant:o}=t;return G({root:["root",o],ul:["ul"]},Vt,e)},te=w("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})({}),ee=w("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ae(t,e,o){return t==="page"?`${o?"":"Go to "}page ${e}`:`Go to ${t} page`}const oe=$.forwardRef(function(e,o){const s=D({props:e,name:"MuiPagination"}),{boundaryCount:n=1,className:i,color:c="standard",count:l=1,defaultPage:d=1,disabled:v=!1,getItemAriaLabel:u=ae,hideNextButton:r=!1,hidePrevButton:y=!1,renderItem:g=R=>a.jsx(Xt,x({},R)),shape:p="circular",showFirstButton:z=!1,showLastButton:I=!1,siblingCount:h=1,size:M="medium",variant:C="text"}=s,k=A(s,Yt),{items:O}=Et(x({},s,{componentName:"Pagination"})),T=x({},s,{boundaryCount:n,color:c,count:l,defaultPage:d,disabled:v,getItemAriaLabel:u,hideNextButton:r,hidePrevButton:y,renderItem:g,shape:p,showFirstButton:z,showLastButton:I,siblingCount:h,size:M,variant:C}),W=Zt(T);return a.jsx(te,x({"aria-label":"pagination navigation",className:_(W.root,i),ownerState:T,ref:o},k,{children:a.jsx(ee,{className:W.ul,ownerState:T,children:O.map((R,f)=>a.jsx("li",{children:g(x({},R,{color:c,"aria-label":u(R.type,R.page,R.selected),shape:p,size:M,variant:C}))},f))})}))}),se=oe;var K={},ne=lt;Object.defineProperty(K,"__esModule",{value:!0});var ut=K.default=void 0,ie=ne(rt()),re=a,le=(0,ie.default)((0,re.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");ut=K.default=le;const ce=({data:t,loading:e})=>a.jsx(b,{sx:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 0px"},children:e?a.jsx(N,{variant:"text",width:100,height:28}):a.jsx(a.Fragment,{children:t==null?void 0:t.map((o,s)=>{var n;return a.jsxs(j,{variant:"body1",component:"div",sx:{display:"flex",alignItems:"center",color:"#88888a",fontWeight:"400",fontSize:"14px"},children:[(n=o==null?void 0:o.values[0])==null?void 0:n.name,s<(t==null?void 0:t.length)-1&&a.jsx(ut,{sx:{color:"#bdbdbd",fontSize:"18px"}})]},o+s)})})});var Q={},de=lt;Object.defineProperty(Q,"__esModule",{value:!0});var J=Q.default=void 0,pe=de(rt()),ue=a,xe=(0,pe.default)((0,ue.jsx)("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"LocalShipping");J=Q.default=xe;const ge=({item:t})=>{var l,d,v,u;const e=H(),o=ct(e.breakpoints.up("sm")),s=t==null?void 0:t.currency_id,n=r=>new Intl.NumberFormat("es-AR",{style:"currency",currency:s,minimumFractionDigits:0}).format(r),i=`https://http2.mlstatic.com/D-NQ-NP-${t==null?void 0:t.thumbnail_id}-O.webp`,c=()=>{Y.navigate(Y.routes.productDetails({id:t.id}))};return a.jsx(a.Fragment,{children:a.jsxs(b,{sx:{display:"flex",gap:"16px",padding:"16px",alignItems:"flex-start",borderBottom:"1px solid #eeeeee",cursor:"pointer"},onClick:()=>c(),children:[a.jsx(b,{sx:{background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",width:["150px","200px"],height:["150px","200px"]},children:a.jsx(Rt,{component:"img",sx:{width:"100%",height:["150px","200px"],objectFit:"contain",minWidth:["150px","200px"]},image:i,alt:t==null?void 0:t.title})}),a.jsxs(b,{sx:{flex:"1",paddingTop:"16px"},children:[a.jsxs(b,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[a.jsx(j,{variant:"h5",sx:{fontSize:"22px",fontWeight:"400"},children:n(t==null?void 0:t.price)}),(t==null?void 0:t.original_price)&&a.jsx(j,{variant:"body1",sx:{color:"#999999",fontSize:"12px",textDecoration:"line-through"},children:n(t==null?void 0:t.original_price)}),((l=t==null?void 0:t.shipping)==null?void 0:l.free_shipping)&&a.jsx(b,{sx:{height:"24px",width:"24px",background:"#05a651",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",borderRadius:"30px"},children:a.jsx(J,{sx:{fontSize:"14px",color:"#dfffe1"}})})]}),(t==null?void 0:t.installments)&&a.jsx(b,{children:a.jsxs(j,{variant:"body1",sx:{fontSize:"14px",color:"#7c7c7c"},children:["en ",(d=t==null?void 0:t.installments)==null?void 0:d.quantity,"x"," ",n((v=t==null?void 0:t.installments)==null?void 0:v.amount)]})}),a.jsx(j,{variant:"body1",sx:{fontSize:"16px",fontWeight:"400",mt:"12px",textWrap:"wrap"},children:t==null?void 0:t.title})]}),o&&a.jsx(b,{sx:{minWidth:"180px"},children:a.jsx(j,{variant:"body1",sx:{fontSize:"12px",color:"#999999",pt:"16px"},children:(u=t==null?void 0:t.seller)==null?void 0:u.nickname})})]})})},fe=()=>{const t=H(),e=ct(t.breakpoints.up("sm"));return a.jsxs(b,{sx:{display:"flex",gap:"16px",padding:"16px",alignItems:"flex-start",borderBottom:"1px solid #eeeeee",cursor:"pointer"},onClick:()=>handleClick(),children:[a.jsx(b,{sx:{background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",width:"200px",height:"200px"},children:a.jsx(N,{variant:"rectangular",width:"100%",height:e?"200px":"150px"})}),a.jsxs(b,{sx:{flex:"1",paddingTop:"16px"},children:[a.jsxs(b,{sx:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(j,{variant:"h5",sx:{fontSize:"22px",fontWeight:"400"},children:a.jsx(N,{variant:"text",width:"80px"})}),a.jsx(j,{variant:"body1",sx:{color:"#999999",fontSize:"12px",textDecoration:"line-through"},children:a.jsx(N,{variant:"text",width:"50px"})}),a.jsx(b,{sx:{height:"24px",width:"24px",background:"#05a651",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",borderRadius:"30px"},children:a.jsx(J,{sx:{fontSize:"14px",color:"#dfffe1"}})})]}),a.jsx(b,{children:a.jsx(j,{variant:"body1",sx:{fontSize:"14px",color:"#7c7c7c"},children:a.jsx(N,{variant:"text",width:"100px"})})}),a.jsx(j,{variant:"body1",sx:{fontSize:"16px",fontWeight:"400",mt:"12px",textWrap:"wrap"},children:a.jsx(N,{variant:"text",width:"80%"})})]}),e&&a.jsx(b,{sx:{minWidth:"180px"},children:a.jsx(j,{variant:"body1",sx:{fontSize:"12px",color:"#999999",pt:"16px"},children:a.jsx(N,{variant:"text",width:"100px"})})})]})},B={mainContainer:{background:"white",boxShadow:"0px 20px 20px #a8a8a840",mb:"16px",p:"0 0 ",ml:["-15px","0"],mr:["-15px","0"]},resultsContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",mb:"16px"},resultsTextContainer:{display:"flex",alignItems:"center",gap:"12px",pl:"15px"},resultsText:{variant:"body1",sx:{fontSize:"14px",color:"#999999"}},select:{height:"30px",borderRadius:"0",border:"none","&:focus":{border:"none",outline:"none"},"& fieldset":{border:"none"}},pagination:{"& .MuiPaginationItem-root":{color:"#3483fa"},"& .Mui-selected":{color:"#3483fa",background:"#fff !important"},"& .MuiPaginationItem-root:hover":{color:"#3483fa",background:"#f2f2f2"}}},he=({search:t})=>{var v;const[e,o]=$.useState([]),[s,n]=$.useState(!1),[i,c]=$.useState({total:0,offset:0,limit:4}),l=(u,r)=>{c({...i,offset:(r-1)*i.limit}),d(t,{...i,offset:(r-1)*i.limit})},d=async(u,r)=>{const y=`https://api.mercadolibre.com/sites/MLA/search?q=${u}&limit=${r.limit}&offset=${r.offset}`;n(!0);try{const p=await(await mt.get(y)).data;o(p),c({...r,total:p.paging.total}),n(!1)}catch(g){console.log(g),n(!1)}};return $.useEffect(()=>{d(t,i)},[t]),a.jsxs(a.Fragment,{children:[a.jsx(ht.MetaTags,{title:t===void 0?"Mercado Libre":`${t} | Mercado Libre`,description:"Encuentra lo que necesitas, miles de productos de todo tipo en un solo lugar: Mercado Libre"}),a.jsxs(b,{children:[a.jsx(ce,{loading:s,data:e==null?void 0:e.filters}),a.jsx(b,{sx:B.mainContainer,children:s?a.jsx(a.Fragment,{children:[...Array(4)].map((u,r)=>a.jsx(fe,{},r))}):a.jsx(Z,{container:!0,spacing:0,children:(v=e==null?void 0:e.results)==null?void 0:v.map((u,r)=>a.jsx(Z,{item:!0,xs:12,children:a.jsx(ge,{item:u})},r))})}),a.jsxs(b,{sx:B.resultsContainer,children:[a.jsxs(b,{sx:B.resultsTextContainer,children:[a.jsx(j,{...B.resultsText,children:"Resultados por página:"}),a.jsxs(Ct,{value:i.limit,onChange:u=>{c({...i,limit:u.target.value,offset:0}),d(t,{...i,limit:u.target.value,offset:0})},sx:B.select,children:[a.jsx(E,{value:4,children:"4"}),a.jsx(E,{value:10,children:"10"}),a.jsx(E,{value:50,children:"50"}),a.jsx(E,{value:100,children:"100"})]})]}),a.jsx(se,{count:Math.ceil(i.total/i.limit),shape:"rounded",onChange:(u,r)=>{l(u,r)},page:i.offset/i.limit+1,sx:B.pagination})]})]})]})};export{he as default};
