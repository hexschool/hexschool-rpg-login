import{_ as v,a as y}from"./fb-R3zjQfrO.js";import{_ as k,u as x,A as I,o as S,b as d,c as w,x as V,g as R,h as T,e,f as _,n as M,q as C,s as F,J as L,K as q,m as E,y as $}from"./index-2VcAIsLU.js";const r=i=>(L("data-v-332b6c64"),i=i(),q(),i),N=r(()=>e("h1",{class:"h2 mb-3"}," 登入成功 ",-1)),z=r(()=>e("p",{class:"mb-4 text-dark"}," 請至方才註冊的 Email 信箱收取驗證信， 可點擊驗證連結登入，或在下方輸入驗證碼 ",-1)),A={class:"mb-4"},B=r(()=>e("label",{for:"validation",class:"form-label"},"驗證碼",-1)),U=["disabled"],D=r(()=>e("p",{class:"text-center text-dark"},[e("small",null,"還沒有收到驗證碼嗎？聯絡小幫手")],-1)),P=r(()=>e("div",{class:"d-flex justify-content-center"},[e("a",{href:"https://line.me/R/ti/p/%40guv7422g",target:"_blank",title:"LINE 客服",class:"rounded-circle bg-light text-dark me-4"},[e("img",{class:"img-fluid",width:"30",src:v,alt:"line-logo"})]),e("a",{href:"https://m.me/hexschool",target:"_blank",title:"Facebook 客服",class:"rounded-circle bg-light text-dark"},[e("img",{class:"img-fluid",width:"30",src:y,alt:"fb-logo"})])],-1)),j={__name:"LoginVerify",setup(i){const{apiPutLoginVerify:u,apiGetLoginTeachable:p}=E,m=x(),a=I({verify_code:""});S(()=>{const t=localStorage.getItem("d_RTfznkkwslIopaqd_account");t?a.account=decodeURIComponent(t):m.push("/login")});const g=({name:t,value:o,expires:s})=>{document.cookie=`${t}=${o};${$()};${s?`expires=${s}`:""}`},f=async()=>{localStorage.removeItem("d_RTfznkkwslIopaqd_account");const t=localStorage.getItem("h_redirect"),o=localStorage.getItem("t_redirectType"),s=localStorage.getItem("t_redirectRoute");if(t)localStorage.removeItem("h_redirect"),window.location.assign(t);else if(o&&s){const c={redirectType:"user"};o==="teachable"&&(c.redirectType=o,c.route=s),localStorage.removeItem("t_redirectType"),localStorage.removeItem("t_redirectRoute");const n=new URLSearchParams(c).toString(),l=await p(n);window.location.href=l.redirect_url}else m.push("/user")},h=C(async()=>{const{access_token:t,expiration:o}=await u(a);g({name:"h_MqhC49RxFRI6pR3Z_token",value:t,expires:new Date(o*1e3)}),F.toastMessage("success","","驗證成功"),f()});return(t,o)=>{const s=d("VField"),c=d("ErrorMessage"),n=d("VForm");return w(),V(n,{ref:"form",onSubmit:T(h)},{default:R(({errors:l})=>[N,z,e("div",A,[B,e("div",null,[_(s,{id:"validation",modelValue:a.verify_code,"onUpdate:modelValue":o[0]||(o[0]=b=>a.verify_code=b),modelModifiers:{trim:!0},name:"verify_code",label:"驗證碼",type:"text",class:M(["form-control",{"is-invalid":l.verify_code}]),rules:"required|digits:6","aria-label":"驗證碼","aria-describedby":"button-addon2"},null,8,["modelValue","class"]),_(c,{name:"verify_code",class:"invalid-feedback"})])]),e("button",{type:"submit",class:"btn btn-primary w-100 mb-3",disabled:!a.verify_code}," 驗證帳號 ",8,U),D,P]),_:1},8,["onSubmit"])}}},Z=k(j,[["__scopeId","data-v-332b6c64"]]);export{Z as default};
