import{j as x,T as t}from"./index-DtYukAq7.js";function R({children:d,bg:s=t.color.primary,color:g=t.color.background.white,font:$=t.font.family,weight:m=t.font.weight.regular,size:c="md",radius:f="md",rounded:e,width:u,height:h,px:n,py:r,customPadding:a,textSize:b,leading:y,tracking:j="tracking-[0px]",gap:l="",borderColor:k,borderWidth:w,borderStyle:z="solid",icon:o=null,customClass:B="",className:C="",...E}){const p={sm:{text:t.font.size.sm,padding:"px-[12px] py-[6px]",leading:"leading-[18px]"},md:{text:"text-[15px]",padding:"px-[20px] py-[10px]",leading:"leading-[23px]"},lg:{text:t.font.size.lg,padding:"px-[28px] py-[14px]",leading:t.font.leading.normal}},i=p[c]||p.md;return x.jsxs("button",{className:`
        flex items-center justify-center
        ${$}
        ${m}
        ${b||i.text}
        ${y||i.leading}
        ${j}

        ${e?"":t.radius[f]}
        

        ${a||""}
        ${!a&&!n&&!r?i.padding:""}
        ${n?`px-[${n}]`:""}
        ${r?`py-[${r}]`:""}

        ${l?`gap-[${l}]`:"gap-[0px]"}
        
        ${C}
        ${B}
      `,style:{backgroundColor:s,color:g,width:u||"auto",height:h||"auto",borderColor:k||"transparent",borderWidth:w||0,borderStyle:z,borderRadius:e||void 0},...E,children:[d,o&&x.jsx("span",{className:"ml-[6px] flex items-center",children:o})]})}export{R as B};
