import{r as u,o as h,c as a,d as o,e,t as c,F as p,B as m,q as g,s as f,i as b,p as v}from"./index-2VcAIsLU.js";const k={class:"col-md-8"},y=e("h1",{class:"fs-4 mb-3"},"已註冊的六角學院課程",-1),C={class:"border rounded-4 p-6"},x={class:"fs-5 mb-2"},B={class:"row row-cols-2 g-3"},w={class:"card"},M=["src","alt"],U={class:"card-body"},F={class:"card-title mb-0 fs-6"},L=["href"],N={class:"card-text mb-0"},V={key:0,class:"text-muted"},D={__name:"UserCourses",setup($){const{apiGetUserCourses:_}=v,r=u([]),i=g(async()=>{var l,n,s,d;try{const{courses:t}=await _();r.value=t}catch(t){f.toastMessage("danger","info",`${(n=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:n.statusCode}:${(d=(s=t==null?void 0:t.response)==null?void 0:s.data)==null?void 0:d.message}`)}});return h(i),(l,n)=>(a(),o("div",k,[y,e("div",C,[e("p",x,"共 "+c(r.value.length)+" 門課程",1),e("div",B,[(a(!0),o(p,null,m(r.value,s=>(a(),o("div",{class:"col",key:s},[e("div",w,[e("img",{src:s.image_url,class:"card-img-top mb-1 course-img",alt:s.title},null,8,M),e("div",U,[e("h5",F,[e("a",{href:s.url,class:"stretched-link",target:"_blank"},c(s.title),9,L)]),e("p",N," 已完成進度 "+c(s.percent_complete)+"% ",1),s.enrolled_time?(a(),o("small",V,c(s.enrolled_time.substr(0,10))+" 註冊",1)):b("",!0)])])]))),128))])])]))}};export{D as default};
