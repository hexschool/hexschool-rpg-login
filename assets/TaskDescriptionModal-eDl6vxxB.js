import{_ as u}from"./Modal-8DUmgg4S.js";import{r as i,o as m,c as t,x as f,g,e as o,d as e,B as p,n as x,F as n,t as c,h as k,M as b}from"./index-2VcAIsLU.js";import{g as v}from"./date-g8ovp0aY.js";const w={class:"d-flex flex-column gap-2"},y={class:"card-body"},M={class:"d-flex"},D={class:"flex-shrink-0"},B=["src"],F={key:1,src:"https://static.104.com.tw/b_profile/cust_picture/0781/130000000190781/logo.png?v=20220705144710",class:"rounded-circle border",alt:"預設頭貼",style:{width:"48px",height:"48px"}},T=["src"],L={key:1,src:"https://static.104.com.tw/b_profile/cust_picture/0781/130000000190781/logo.png?v=20220705144710",class:"rounded-circle border",alt:"預設頭貼",style:{width:"48px",height:"48px"}},S={class:"flex-grow-1 ms-3",style:{width:"calc(100% - 52px)"}},z={key:0,class:"h6 fw-bold mb-0"},A={key:1,class:"h6 fw-bold mb-0"},C={class:"fw-bold mb-4"},E={class:"text-gentle_green me-2"},H=["innerHTML"],K={__name:"TaskDescriptionModal",props:{replyData:{type:Array,default(){return[]}}},setup(r,{expose:_}){const l=i(""),d=i(null),a=i(null);return m(()=>{a.value=new b(d.value.myBsModal,{keyboard:!1})}),_({showModal:()=>{a.value.show()},hideModal:()=>{a.value.hide()},modalTitle:l}),(j,q)=>(t(),f(u,{ref_key:"myModal",ref:d,title:l.value,hasFooter:!1,size:"lg",headerStyle:{background:"#DADEDD",padding:"12px 24px"},bodyStyle:{background:"#F5F5F5",padding:"32px 55px"}},{body:g(()=>[o("div",w,[(t(!0),e(n,null,p(r.replyData,(s,h)=>(t(),e("div",{class:x(["card rounded-3 p-3",[s!=null&&s.assistant_info?"bg-soft_green":"border"]]),key:h},[o("div",y,[o("div",M,[o("div",D,[s.assistant_info?(t(),e(n,{key:0},[s.assistant_info.icon_url?(t(),e("img",{key:0,class:"rounded-circle",style:{width:"48px",height:"48px"},src:s.assistant_info.icon_url,alt:"頭貼"},null,8,B)):(t(),e("img",F))],64)):(t(),e(n,{key:1},[s.avatar?(t(),e("img",{key:0,class:"rounded-circle",style:{width:"48px",height:"48px"},src:s.avatar,alt:"頭貼"},null,8,T)):(t(),e("img",L))],64))]),o("div",S,[s.assistant_info?(t(),e("h5",z,c(s.assistant_info.title),1)):(t(),e("h5",A,c(s.nickname),1)),o("p",C,[o("small",E,c(k(v)(s.updated_at)),1)]),o("div",{innerHTML:s.content},null,8,H)])])])],2))),128))])]),_:1},8,["title"]))}};export{K as _};
