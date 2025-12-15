import{j as t,T as e}from"./index-BaII_yPw.js";import"./vendor-k9dDiao6.js";function w({icon:r,title:x,description:n,years:i,seats:d,variant:a="program",buttonText:o,onClick:g}){const c=a==="program",l={program:{wrapper:`
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
  `}},p=l[a]||l.program,f=()=>{const s=typeof r!="string";return a==="research"?t.jsx("div",{className:"w-[40px] h-[40px] flex items-center justify-center shrink-0",children:s?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[38px] h-[38px] object-contain"})}):a==="keystrength"?t.jsx("div",{className:"w-[55.26px] h-[55.26px] flex items-center justify-center rounded-[9.87px] shrink-0",style:{backgroundColor:e.color.primary},children:s?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})}):a==="whychoose"?t.jsx("div",{className:"flex items-center justify-center shrink-0",style:{width:"55.26px",height:"55.26px",borderRadius:"16.18px",backgroundColor:"rgba(34,63,127,0.10)"},children:s?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})}):t.jsx("div",{className:`\r
          w-[55.26px]\r
          h-[55.26px]\r
          flex items-center justify-center\r
          rounded-[9.87px]\r
          shrink-0\r
        `,style:{backgroundColor:e.color.primary},children:s?r:t.jsx("img",{loading:"lazy",decoding:"async",src:r,alt:"",className:"w-[28px] h-[28px] object-contain"})})};return t.jsxs("div",{className:p.wrapper,style:p.wrapperStyle,children:[f(),t.jsx("h3",{className:p.title,style:{color:e.color.text.secondary},children:x}),c&&t.jsxs("div",{className:"flex items-center gap-[10px] mb-[26px]",children:[t.jsx("span",{className:`\r
              flex items-center justify-center\r
              w-[141.26px] h-[29.61px]\r
              rounded-[3.95px]\r
              font-montserrat text-[13.8px] leading-[1.43]\r
            `,style:{backgroundColor:e.color.primary,color:"#FFFFFF"},children:i}),t.jsx("span",{className:`\r
              flex items-center justify-center\r
              w-[97.4px] h-[29.61px]\r
              bg-white border rounded-[3.95px]\r
              font-montserrat text-[13.8px] leading-[1.43]\r
            `,style:{borderColor:e.color.text.secondary,color:e.color.text.secondary},children:d})]}),t.jsx("p",{className:p.paragraph,style:{color:a==="whychoose"?"rgba(25, 25, 25, 0.75)":a==="research"?e.color.text.researchMuted:e.color.text.muted},children:n}),o&&t.jsxs("button",{onClick:g,className:"mt-4 flex items-center gap-2 text-[#008C8C] font-semibold text-[14px] hover:underline",children:[o," ",t.jsx("span",{children:"→"})]})]})}const C="/AsramWebsite-FE/assets/newsart1-B-XhNjus.svg",u="/AsramWebsite-FE/assets/newsart2-DrNt1hDn.svg",b="/AsramWebsite-FE/assets/newsart3-DKaQ3uHv.svg",y="/AsramWebsite-FE/assets/newsart4-DCpna_T-.svg",j="/AsramWebsite-FE/assets/newsart5-C5xXprHv.svg",V="data:image/svg+xml,%3csvg%20width='14'%20height='18'%20viewBox='0%200%2014%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.95841%206.95833C8.70732%206.95833%2010.1251%205.54057%2010.1251%203.79167C10.1251%202.04276%208.70732%200.625%206.95841%200.625C5.20951%200.625%203.79175%202.04276%203.79175%203.79167C3.79175%205.54057%205.20951%206.95833%206.95841%206.95833Z'%20stroke='%23C2C2C2'%20stroke-width='1.25'/%3e%3cpath%20d='M13.2917%2012.8965C13.2917%2014.8638%2013.2917%2016.459%206.95833%2016.459C0.625%2016.459%200.625%2014.8638%200.625%2012.8965C0.625%2010.9292%203.46075%209.33398%206.95833%209.33398C10.4559%209.33398%2013.2917%2010.9292%2013.2917%2012.8965Z'%20stroke='%23C2C2C2'%20stroke-width='1.25'/%3e%3c/svg%3e",H="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.38935%200C5.56572%200%205.73486%200.0700623%205.85958%200.194774C5.98429%200.319486%206.05435%200.488631%206.05435%200.665V1.90855H13.1955V0.67355C13.1955%200.497181%2013.2656%200.328036%2013.3903%200.203324C13.515%200.0786123%2013.6841%200.00855%2013.8605%200.00855C14.0369%200.00855%2014.206%200.0786123%2014.3307%200.203324C14.4554%200.328036%2014.5255%200.497181%2014.5255%200.67355V1.90855H17.1C17.6037%201.90855%2018.0869%202.1086%2018.4432%202.46471C18.7995%202.82082%2018.9997%203.30385%2019%203.8076V17.1009C18.9997%2017.6047%2018.7995%2018.0877%2018.4432%2018.4438C18.0869%2018.8%2017.6037%2019%2017.1%2019H1.9C1.39625%2019%200.913125%2018.8%200.556833%2018.4438C0.200541%2018.0877%200.000251873%2017.6047%200%2017.1009L0%203.8076C0.000251873%203.30385%200.200541%202.82082%200.556833%202.46471C0.913125%202.1086%201.39625%201.90855%201.9%201.90855H4.72435V0.66405C4.7246%200.487846%204.79478%200.318944%204.91946%200.194438C5.04414%200.0699317%205.21315%20-1.798e-07%205.38935%200ZM1.33%207.3549V17.1009C1.33%2017.1758%201.34474%2017.2499%201.37339%2017.3191C1.40203%2017.3882%201.44402%2017.4511%201.49695%2017.504C1.54988%2017.5569%201.61271%2017.5989%201.68187%2017.6276C1.75103%2017.6562%201.82515%2017.6709%201.9%2017.6709H17.1C17.1749%2017.6709%2017.249%2017.6562%2017.3181%2017.6276C17.3873%2017.5989%2017.4501%2017.5569%2017.5031%2017.504C17.556%2017.4511%2017.598%2017.3882%2017.6266%2017.3191C17.6553%2017.2499%2017.67%2017.1758%2017.67%2017.1009V7.3682L1.33%207.3549ZM6.33365%2013.8881V15.4707H4.75V13.8881H6.33365ZM10.2914%2013.8881V15.4707H8.70865V13.8881H10.2914ZM14.25%2013.8881V15.4707H12.6664V13.8881H14.25ZM6.33365%2010.1099V11.6926H4.75V10.1099H6.33365ZM10.2914%2010.1099V11.6926H8.70865V10.1099H10.2914ZM14.25%2010.1099V11.6926H12.6664V10.1099H14.25ZM4.72435%203.2376H1.9C1.82515%203.2376%201.75103%203.25234%201.68187%203.28099C1.61271%203.30963%201.54988%203.35162%201.49695%203.40455C1.44402%203.45748%201.40203%203.52031%201.37339%203.58947C1.34474%203.65863%201.33%203.73275%201.33%203.8076V6.02585L17.67%206.03915V3.8076C17.67%203.73275%2017.6553%203.65863%2017.6266%203.58947C17.598%203.52031%2017.556%203.45748%2017.5031%203.40455C17.4501%203.35162%2017.3873%203.30963%2017.3181%203.28099C17.249%203.25234%2017.1749%203.2376%2017.1%203.2376H14.5255V4.12015C14.5255%204.29652%2014.4554%204.46566%2014.3307%204.59038C14.206%204.71509%2014.0369%204.78515%2013.8605%204.78515C13.6841%204.78515%2013.515%204.71509%2013.3903%204.59038C13.2656%204.46566%2013.1955%204.29652%2013.1955%204.12015V3.2376H6.05435V4.1116C6.05435%204.28797%205.98429%204.45711%205.85958%204.58183C5.73486%204.70654%205.56572%204.7766%205.38935%204.7766C5.21298%204.7766%205.04384%204.70654%204.91912%204.58183C4.79441%204.45711%204.72435%204.28797%204.72435%204.1116V3.2376Z'%20fill='%23C2C2C2'/%3e%3c/svg%3e",v="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.70833%2017.4167C8.49837%2017.4167%208.29701%2017.3333%208.14854%2017.1848C8.00007%2017.0363%207.91667%2016.835%207.91667%2016.625V14.25H4.75C4.33007%2014.25%203.92735%2014.0832%203.63041%2013.7863C3.33348%2013.4893%203.16667%2013.0866%203.16667%2012.6667V4.75C3.16667%204.33007%203.33348%203.92735%203.63041%203.63041C3.92735%203.33348%204.33007%203.16667%204.75%203.16667H15.8333C16.2533%203.16667%2016.656%203.33348%2016.9529%203.63041C17.2499%203.92735%2017.4167%204.33007%2017.4167%204.75V12.6667C17.4167%2013.0866%2017.2499%2013.4893%2016.9529%2013.7863C16.656%2014.0832%2016.2533%2014.25%2015.8333%2014.25H12.5875L9.65833%2017.1871C9.5%2017.3375%209.30208%2017.4167%209.10417%2017.4167H8.70833ZM9.5%2012.6667V15.105L11.9383%2012.6667H15.8333V4.75H4.75V12.6667H9.5ZM1.58333%2011.0833H0V1.58333C0%201.16341%200.166815%200.76068%200.463748%200.463748C0.76068%200.166815%201.16341%200%201.58333%200H14.25V1.58333H1.58333V11.0833Z'%20fill='%23C2C2C2'/%3e%3c/svg%3e";export{w as I,u as a,b,H as c,y as d,j as e,C as i,v as n,V as u};
