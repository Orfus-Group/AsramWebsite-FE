import{j as l,T as t}from"./index-1R2K-QXe.js";import"./vendor-k9dDiao6.js";function z({children:s,bg:x=t.color.primary,color:g=t.color.background.white,font:m=t.font.family,weight:$=t.font.weight.regular,size:c="md",radius:u="md",rounded:r,width:f,height:h,px:e,py:n,customPadding:a,textSize:b,leading:y,tracking:j="tracking-[0px]",gap:o="",borderColor:w,borderWidth:E,borderStyle:R="solid",icon:p=null,customClass:k="",className:B="",...I}){const d={sm:{text:t.font.size.sm,padding:"px-[12px] py-[6px]",leading:"leading-[18px]"},md:{text:"text-[15px]",padding:"px-[20px] py-[10px]",leading:"leading-[23px]"},lg:{text:t.font.size.lg,padding:"px-[28px] py-[14px]",leading:t.font.leading.normal}},i=d[c]||d.md;return l.jsxs("button",{className:`
        flex items-center justify-center
        whitespace-nowrap   /* 🔥 FIXES TEXT BREAKING */

        ${m}
        ${$}
        ${b||i.text}
        ${y||i.leading}
        ${j}

        /* Radius */
        ${r?"":t.radius[u]}

        /* Padding Logic */
        ${a||""}
        ${!a&&!e&&!n?i.padding:""}
        ${e?`px-[${e}]`:""}
        ${n?`py-[${n}]`:""}

        /* Gap */
        ${o?`gap-[${o}]`:"gap-[0px]"}

        ${B}
        ${k}
      `,style:{backgroundColor:x,color:g,width:f||"auto",height:h||"auto",borderColor:w||"transparent",borderWidth:E||0,borderStyle:R,borderRadius:r||void 0},...I,children:[s,p&&l.jsx("span",{className:"ml-[6px] flex items-center",children:p})]})}export{z as B};
