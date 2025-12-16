import{j as t,T as e}from"./index-DEgT2Or2.js";import"./vendor-k9dDiao6.js";function w({icon:r,title:s,description:n,years:i,seats:d,variant:a="program",buttonText:o,onClick:g}){const f=a==="program",l={program:{wrapper:`
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
    text-justify
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
  `}},p=l[a]||l.program,c=()=>{const x=typeof r!="string";return a==="research"?t.jsx("div",{className:"w-[40px] h-[40px] flex items-center justify-center shrink-0",children:x?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[38px] h-[38px] object-contain"})}):a==="keystrength"?t.jsx("div",{className:"w-[55.26px] h-[55.26px] flex items-center justify-center rounded-[9.87px] shrink-0",style:{backgroundColor:e.color.primary},children:x?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})}):a==="whychoose"?t.jsx("div",{className:"flex items-center justify-center shrink-0",style:{width:"55.26px",height:"55.26px",borderRadius:"16.18px",backgroundColor:"rgba(34,63,127,0.10)"},children:x?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})}):t.jsx("div",{className:`\r
          w-[55.26px]\r
          h-[55.26px]\r
          flex items-center justify-center\r
          rounded-[9.87px]\r
          shrink-0\r
        `,style:{backgroundColor:e.color.primary},children:x?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})})};return t.jsxs("div",{className:p.wrapper,style:p.wrapperStyle,children:[c(),t.jsx("h3",{className:p.title,style:{color:e.color.text.secondary},children:s}),f&&t.jsxs("div",{className:"flex items-center gap-[10px] mb-[26px]",children:[t.jsx("span",{className:`\r
              flex items-center justify-center\r
              w-[141.26px] h-[29.61px]\r
              rounded-[3.95px]\r
              font-montserrat text-[13.8px] leading-[1.43]\r
            `,style:{backgroundColor:e.color.primary,color:"#FFFFFF"},children:i}),t.jsx("span",{className:`\r
              flex items-center justify-center\r
              w-[97.4px] h-[29.61px]\r
              bg-white border rounded-[3.95px]\r
              font-montserrat text-[13.8px] leading-[1.43]\r
            `,style:{borderColor:e.color.text.secondary,color:e.color.text.secondary},children:d})]}),t.jsx("p",{className:p.paragraph,style:{color:a==="whychoose"?"rgba(25, 25, 25, 0.75)":a==="research"?e.color.text.researchMuted:e.color.text.muted},children:n}),o&&t.jsxs("button",{onClick:g,className:"mt-4 flex items-center gap-2 text-[#008C8C] font-semibold text-[14px] hover:underline",children:[o," ",t.jsx("span",{children:"→"})]})]})}const u="/AsramWebsite-FE/assets/newsart1-B-XhNjus.svg",b="/AsramWebsite-FE/assets/newsart2-DrNt1hDn.svg",y="/AsramWebsite-FE/assets/newsart3-DKaQ3uHv.svg",j="/AsramWebsite-FE/assets/newsart4-DCpna_T-.svg",$="/AsramWebsite-FE/assets/newsart5-C5xXprHv.svg";export{w as I,b as a,y as b,j as c,$ as d,u as i};
