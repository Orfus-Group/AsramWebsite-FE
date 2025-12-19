import{j as t,T as e}from"./index-C5rHOwJy.js";import"./vendor-k9dDiao6.js";function w({icon:r,title:n,description:i,years:s,seats:d,variant:p="program",buttonText:a,onClick:f}){const g=p==="program",o={program:{wrapper:`
      w-full             
    max-w-[380px]    
    min-w-[340px]       
    h-[422.37px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
      `,wrapperStyle:{backgroundColor:"#F7F9FC",border:"none",paddingTop:"23.7px",paddingLeft:"23.7px",paddingRight:"23.7px",paddingBottom:"23.7px",gap:"16.8px",borderRadius:"9.87px"},title:`
        ${e.font.family}
        ${e.font.weight.semibold}
        text-[26px] leading-[34px]
        text-left
      `,paragraph:`
        w-[293.1px] h-[144px]
        ${e.font.family} text-[16px] leading-[24px] text-left
      `},vmv:{wrapper:`
    w-full                 /* allow responsive width */
    max-w-[380px]    
    min-w-[340px]   
    h-[330px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-white
  `,wrapperStyle:{border:`1px solid ${e.color.border}`,padding:"33px",gap:"20px"},title:`
    ${e.font.family}
    ${e.font.weight.bold}
    text-[20px] leading-[28px] text-left
  `,paragraph:`
    w-full
    max-w-[304.93px]
    ${e.font.family} text-[16px] leading-[24px] text-left
  `},whychoose:{wrapper:`
        w-full max-w-[380px]
        flex flex-col items-start justify-start
        rounded-[8px]
        bg-white
      `,wrapperStyle:{padding:"30px",border:`1px solid ${e.color.border}`,borderRadius:"8px",gap:"18px"},title:`
    ${e.font.family}
    ${e.font.weight.semibold}
    text-[20px]
    leading-[28px]
    text-left
    text-[#191919]
  `,paragraph:`
    ${e.font.family}
    font-normal
    text-[18px]
    leading-[26px]
  `},feature:{wrapper:`
        w-full
        max-w-[282.2px]
        min-h-[296.1px]
        flex flex-col items-start justify-start
        rounded-[9.87px]
        bg-white
        mx-auto
      `,wrapperStyle:{paddingTop:"23.7px",paddingLeft:"23.7px",paddingRight:"23.7px",paddingBottom:"23.7px",border:`1px solid ${e.color.border}`,boxShadow:"0px 8px 16px rgba(0, 140, 140, 0.04), 0px 4px 8px rgba(0, 140, 140, 0.08)",gap:"16.8px"},title:`
        ${e.font.family}
        ${e.font.weight.semibold}
        text-[20px] leading-[28px]
        text-left
        w-full
      `,paragraph:`
        ${e.font.family}
        text-[16px] leading-[24px]
        text-left
        w-full
      `},featureLeft:{wrapper:`
    w-[259.2px]
    h-[270.1px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-white
  `,wrapperStyle:{paddingTop:"23.7px",paddingLeft:"23.7px",paddingRight:"23.7px",paddingBottom:"23.7px",border:`1px solid ${e.color.border}`,boxShadow:"0px 8px 16px rgba(0, 140, 140, 0.04), 0px 4px 8px rgba(0, 140, 140, 0.08)",gap:"16.8px"},title:`
    ${e.font.family}
    ${e.font.weight.semibold}
    text-[20px] leading-[28px]
    text-left
    w-full
  `,paragraph:`
    ${e.font.family}
    text-[16px] leading-[24px]
    text-left
    w-full
  `},keystrength:{wrapper:`
    w-full
    max-w-[390px]        /* FIX: Prevents breaking on smaller laptops */
    min-h-[277px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-[#F7F9FC]
  `,wrapperStyle:{backgroundColor:"#F7F9FC",paddingTop:"23.7px",paddingLeft:"23.7px",paddingRight:"23.7px",paddingBottom:"23.7px",gap:"16.8px",borderBottom:"3.95px solid #223F7F",borderTop:"none",borderLeft:"none",borderRight:"none",borderRadius:"9.87px"},title:`
    ${e.font.family}
    ${e.font.weight.semibold}
    text-[23.68px] leading-[33.2px]
    text-left w-full
  `,paragraph:`
    ${e.font.family}
    text-[15.79px] leading-[27px]
    text-left w-full
  `},research:{wrapper:`
    w-full
    max-w-[390px]        /* FIX: Prevents breaking on smaller laptops */
    min-h-[220px]
    flex flex-col justify-start items-start
    rounded-[10px]
  `,wrapperStyle:{backgroundColor:e.color.background.soft,border:`1px solid ${e.color.border}`,padding:"26px",gap:"16px"},title:`
    ${e.font.family}
    ${e.font.weight.semibold}
    text-[20px] leading-[28px]
    text-left
  `,paragraph:`
    ${e.font.family}
    ${e.font.weight.regular}
    text-[16px] leading-[24px]
    text-left
    w-full
  `}},x=o[p]||o.program,c=()=>{const l=typeof r!="string";return p==="research"?t.jsx("div",{className:"w-[40px] h-[40px] flex items-center justify-center shrink-0",children:l?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[38px] h-[38px] object-contain"})}):p==="keystrength"?t.jsx("div",{className:"w-[55.26px] h-[55.26px] flex items-center justify-center rounded-[9.87px] shrink-0",style:{backgroundColor:e.color.primary},children:l?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})}):p==="whychoose"?t.jsx("div",{className:"flex items-center justify-center shrink-0",style:{width:"55.26px",height:"55.26px",borderRadius:"16.18px",backgroundColor:"#223F7F1A"},children:l?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})}):t.jsx("div",{className:`\r
          w-[55.26px]\r
          h-[55.26px]\r
          flex items-center justify-center\r
          rounded-[9.87px]\r
          shrink-0\r
        `,style:{backgroundColor:e.color.primary},children:l?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})})};return t.jsxs("div",{className:x.wrapper,style:x.wrapperStyle,children:[c(),t.jsx("h6",{className:x.title,style:{color:e.color.text.secondary},children:n}),g&&t.jsxs("div",{className:"flex items-center gap-[10px] mb-[26px]",children:[t.jsx("span",{className:`\r
              flex items-center justify-center\r
              w-[141.26px] h-[29.61px]\r
              rounded-[3.95px]\r
              font-montserrat text-[13.8px] leading-[1.43]\r
            `,style:{backgroundColor:e.color.primary,color:"#FFFFFF"},children:s}),t.jsx("span",{className:`\r
              flex items-center justify-center\r
              w-[97.4px] h-[29.61px]\r
              bg-white border rounded-[3.95px]\r
              font-montserrat text-[13.8px] leading-[1.43]\r
            `,style:{borderColor:e.color.text.secondary,color:e.color.text.secondary},children:d})]}),t.jsx("p",{className:x.paragraph,style:{color:p==="whychoose"?"rgba(25, 25, 25, 0.75)":p==="research"?e.color.text.researchMuted:e.color.text.muted},children:i}),a&&t.jsxs("button",{onClick:f,className:"mt-4 flex items-center gap-2 text-[#008C8C] font-semibold text-[14px] hover:underline",children:[a," ",t.jsx("span",{children:"→"})]})]})}export{w as I};
