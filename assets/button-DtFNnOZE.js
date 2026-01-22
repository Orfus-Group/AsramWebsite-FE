import{j as l}from"./animations-DcqeVXJS.js";import"./vendor-x-yVq9gV.js";import{T as t}from"./index-DJznWsAu.js";function A({children:s,bg:x=t.color.primary,color:g=t.color.background.white,font:m=t.font.family,weight:$=t.font.weight.regular,size:c="md",radius:u="md",rounded:a,width:f,height:h,px:e,py:r,customPadding:i,textSize:b,leading:y,tracking:j="tracking-[0px]",gap:o="",borderColor:w,borderWidth:E,borderStyle:R="solid",icon:p=null,customClass:k="",className:B="",...I}){const d={sm:{text:t.font.size.sm,padding:"px-[12px] py-[6px]",leading:"leading-[18px]"},md:{text:"text-[15px]",padding:"px-[20px] py-[10px]",leading:"leading-[23px]"},lg:{text:t.font.size.lg,padding:"px-[28px] py-[14px]",leading:t.font.leading.normal}},n=d[c]||d.md;return l.jsxs("button",{className:`
        flex items-center justify-center
        whitespace-nowrap   /* 🔥 FIXES TEXT BREAKING */

        ${m}
        ${$}
        ${b||n.text}
        ${y||n.leading}
        ${j}

        /* Radius */
        ${a?"":t.radius[u]}

        /* Padding Logic */
        ${i||""}
        ${!i&&!e&&!r?n.padding:""}
        ${e?`px-[${e}]`:""}
        ${r?`py-[${r}]`:""}

        /* Gap */
        ${o?`gap-[${o}]`:"gap-[0px]"}

        ${B}
        ${k}
      `,style:{backgroundColor:x,color:g,width:f||"auto",height:h||"auto",borderColor:w||"transparent",borderWidth:E||0,borderStyle:R,borderRadius:a||void 0},...I,children:[s,p&&l.jsx("span",{className:"ml-[6px] flex items-center",children:p})]})}export{A as B};
