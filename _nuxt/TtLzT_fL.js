import{n as h,u as _,q as p,s as e,c as u,a as s,t as i,F as g,v as y,o as f}from"./DH_s2a5g.js";import{u as x,d as w}from"./BCN7CNh8.js";const b={class:"text-3xl font-semibold"},v=["src","width","hight"],A={class:"mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4"},F={class:"rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"},C={class:"text-sm text-gray-700"},M=["innerHTML"],H=h({__name:"[id]",async setup(k){let o,n;const{params:a}=_(),{data:t}=([o,n]=p(()=>x({endpoint:"blogs",contentId:Array.isArray(a.id)?a.id[0]:a.id})),o=await o,n(),o);return console.log(t),(r,B)=>{var d,c,m,l;return e(t)?(f(),u(g,{key:0},[s("h1",b,i(e(t).title),1),s("img",{src:(d=e(t).eyecatch)==null?void 0:d.url,width:(c=e(t).eyecatch)==null?void 0:c.width,hight:(m=e(t).eyecatch)==null?void 0:m.height,alt:"",class:"mt-6 md:mt-10"},null,8,v),s("div",A,[s("div",F,i((l=e(t).category)==null?void 0:l.name),1),s("div",C,i(("dateFormat"in r?r.dateFormat:e(w))(e(t).pushlishedAt??e(t).createdAt)),1)]),s("div",{innerHTML:e(t).content,class:"prose mt-6 md:mt10"},null,8,M)],64)):y("",!0)}}});export{H as default};
