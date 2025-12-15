import{j as a,T as e}from"./index-D2of1Zwq.js";import"./vendor-k9dDiao6.js";function S({children:n,className:i="",bg:o="bg-white",bgColor:t,sectionClassName:r="",paddingClass:p=""}){return a.jsx("section",{className:`w-full ${o} ${r} asram-font`,style:t?{backgroundColor:t}:void 0,children:a.jsx("div",{className:`
          w-full
          max-w-[1440px]
          mx-auto

          px-4
          sm:px-6
          md:px-10
          lg:px-[120px]

          ${p}   /* ⭐ Only added if passed by component */
          ${i}
        `,children:n})})}function T({children:n,bg:i=e.color.primary,color:o=e.color.background.white,font:t=e.font.family,weight:r=e.font.weight.regular,size:p="md",radius:u="md",rounded:m,width:f,height:h,px:s,py:d,customPadding:l,textSize:w,leading:y,tracking:b="tracking-[0px]",gap:c="",borderColor:j,borderWidth:E,borderStyle:N="solid",icon:g=null,customClass:k="",className:R="",...v}){const $={sm:{text:e.font.size.sm,padding:"px-[12px] py-[6px]",leading:"leading-[18px]"},md:{text:"text-[15px]",padding:"px-[20px] py-[10px]",leading:"leading-[23px]"},lg:{text:e.font.size.lg,padding:"px-[28px] py-[14px]",leading:e.font.leading.normal}},x=$[p]||$.md;return a.jsxs("button",{className:`
        flex items-center justify-center
        whitespace-nowrap   /* 🔥 FIXES TEXT BREAKING */

        ${t}
        ${r}
        ${w||x.text}
        ${y||x.leading}
        ${b}

        /* Radius */
        ${m?"":e.radius[u]}

        /* Padding Logic */
        ${l||""}
        ${!l&&!s&&!d?x.padding:""}
        ${s?`px-[${s}]`:""}
        ${d?`py-[${d}]`:""}

        /* Gap */
        ${c?`gap-[${c}]`:"gap-[0px]"}

        ${R}
        ${k}
      `,style:{backgroundColor:i,color:o,width:f||"auto",height:h||"auto",borderColor:j||"transparent",borderWidth:E||0,borderStyle:N,borderRadius:m||void 0},...v,children:[n,g&&a.jsx("span",{className:"ml-[6px] flex items-center",children:g})]})}export{T as B,S as P};
