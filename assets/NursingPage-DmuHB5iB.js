import{j as e}from"./animations-D3tOYQY4.js";import{r as v}from"./vendor-CEFHwVPC.js";import{T as t,P as o,u as C}from"./index-C1xl6fP5.js";import{T as N}from"./TypedText-C4vjMBaM.js";import{M as l}from"./MotionSection-BH0xkWDy.js";import{B as y}from"./button-BgFMQgWJ.js";import{I as F,a as E,b as A}from"./IconPublicHealth-8MiQZiY2.js";import{A as S}from"./AsramNewsEvents-R8y_sLSN.js";function c({icon:n,title:s,description:i,years:a,seats:h,variant:r="program",buttonText:x,onClick:g,className:p=""}){const b=r==="program",u={program:{wrapper:`
      w-full             
      h-full
      flex flex-col items-start justify-start
      rounded-[12px]
      ${p}
      `,wrapperStyle:{backgroundColor:"#EEF2F7",border:"1px solid rgba(7, 7, 7, 0.2)",padding:"30px",gap:"20px",borderRadius:"12px"},title:`
        ${t.font.family}
        ${t.font.weight.semibold}
        text-[26px] leading-[34px]
        text-left
      `,paragraph:`
        w-full
        ${t.font.family} text-[16px] leading-[24px] text-left
      `},vmv:{wrapper:`
    w-full                 /* allow responsive width */
    h-full
    flex flex-col items-start justify-start
    rounded-[12px]
    bg-white
    ${p}
  `,wrapperStyle:{border:"1px solid rgba(7, 7, 7, 0.2)",padding:"30px",gap:"20px"},title:`
    ${t.font.family}
    ${t.font.weight.bold}
    text-[20px] leading-[28px] text-left
  `,paragraph:`
    w-full
    ${t.font.family} text-[18px] leading-[26px] text-justify
    text-[rgba(25, 25, 25, 0.75)]
  `},whychoose:{wrapper:`
        w-full max-w-[380px]
        flex flex-col items-start justify-start
        rounded-[8px]
        bg-white
      `,wrapperStyle:{padding:"30px",border:`1px solid ${t.color.border}`,borderRadius:"8px",gap:"18px"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[20px]
    leading-[28px]
    text-left
    text-[#191919]
  `,paragraph:`
    ${t.font.family}
    font-normal
    text-[18px]
    leading-[26px]
  `},feature:{wrapper:`
        w-full
        max-w-[282.2px]
        min-h-[296.1px]
        flex flex-col items-start justify-start
        rounded-[12px]
        bg-[#EEF2F7]
        mx-auto
      `,wrapperStyle:{paddingTop:"23.7px",paddingLeft:"23.7px",paddingRight:"23.7px",paddingBottom:"23.7px",border:`1px solid ${t.color.border}`,boxShadow:"0px 8px 16px rgba(0, 140, 140, 0.04), 0px 4px 8px rgba(0, 140, 140, 0.08)",gap:"16.8px"},title:`
        ${t.font.family}
        ${t.font.weight.semibold}
        text-[20px] leading-[28px]
        text-left
        w-full
      `,paragraph:`
        ${t.font.family}
        font-regular
        text-[18px] leading-[24px]
        text-left
        w-full
      `},featureLeft:{wrapper:`
    w-[259.2px]
    h-[270.1px]
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-white
  `,wrapperStyle:{paddingTop:"23.7px",paddingLeft:"23.7px",paddingRight:"23.7px",paddingBottom:"23.7px",border:`1px solid ${t.color.border}`,boxShadow:"0px 8px 16px rgba(0, 140, 140, 0.04), 0px 4px 8px rgba(0, 140, 140, 0.08)",gap:"16.8px"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[20px] leading-[28px]
    text-left
    w-full
  `,paragraph:`
    ${t.font.family}
    text-[16px] leading-[24px]
    text-left
    w-full
  `},keystrength:{wrapper:`
    w-full
    h-full
    flex flex-col items-start justify-start
    rounded-[9.87px]
    bg-[#F7F9FC]
  `,wrapperStyle:{backgroundColor:"#FFF",paddingTop:"23.7px",paddingLeft:"23.7px",paddingRight:"23.7px",paddingBottom:"23.7px",gap:"16.8px",borderBottom:"4px solid #008C8C",borderTop:"none",borderLeft:"none",borderRight:"none",borderRadius:"9.87px"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[23.68px] leading-[33.2px]
    text-left w-full
  `,paragraph:`
    ${t.font.family}
    text-[15.79px] leading-[27.6px]
    text-left w-full
  `},research:{wrapper:`
    w-full
    h-full
    flex flex-col justify-start items-start
    rounded-[12px]
    bg-white
  `,wrapperStyle:{border:"1px solid #e5e7eb",padding:"20px",gap:"14px"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[20px] leading-[28px]
    text-left
    text-[#223f7f]
  `,paragraph:`
    ${t.font.family}
    ${t.font.weight.regular}
    text-[18px] leading-[26px]
    text-left
    w-full
    text-[#191919BF]
  `},socialCommitment:{wrapper:`
    w-full
    h-full
    flex flex-col items-start justify-start
    rounded-[12px]
    bg-[#EEF2F7]
  `,wrapperStyle:{backgroundColor:"#EEF2F7",padding:"24px",gap:"12px",boxShadow:"0px 8px 16px 0px rgba(0, 140, 140, 0.04), 0px 0px 4px 0px rgba(0, 140, 140, 0.04), 0px 0px 4px 0px rgba(0, 140, 140, 0.08)"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[20px] leading-[28px]
    text-left
    w-full
    text-[#223f7f]
  `,paragraph:`
    ${t.font.family}
    font-normal
    text-[16px] leading-[24px]
    text-left
    w-full
    text-[rgba(25,25,25,0.75)]
  `},studentExperience:{wrapper:`
    w-full
    h-full
    flex flex-col items-start justify-start
    rounded-[12px]
    bg-[#EEF2F7]
  `,wrapperStyle:{padding:"24px",backgroundColor:"#EEF2F7",gap:"12px",boxShadow:"0px 8px 16px 0px rgba(0, 140, 140, 0.04), 0px 0px 4px 0px rgba(0, 140, 140, 0.04), 0px 0px 4px 0px rgba(0, 140, 140, 0.08)"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[22px] leading-[1.2]
    text-left
    w-full
    text-[#223f7f]
  `,paragraph:`
    ${t.font.family}
    font-normal
    text-[18px] leading-[1.44]
    text-left
    w-full
    text-[rgba(25,25,25,0.75)]
  `}},d=u[r]||u.program,w=()=>{const m=typeof n!="string";return r==="research"?e.jsx("div",{className:"w-[40px] h-[40px] flex items-center justify-center shrink-0",children:m?n:e.jsx("img",{loading:"lazy",decoding:"async",src:n,alt:"",className:"w-[38px] h-[38px] object-contain"})}):r==="keystrength"?e.jsx("div",{className:"w-[55.26px] h-[55.26px] flex items-center justify-center rounded-[9.87px] shrink-0",style:{backgroundColor:t.color.primary},children:m?n:e.jsx("img",{loading:"lazy",decoding:"async",src:n,alt:"",className:"w-[28px] h-[28px] object-contain"})}):r==="whychoose"?e.jsx("div",{className:"flex items-center justify-center shrink-0",style:{width:"55.26px",height:"55.26px",borderRadius:"16.18px",backgroundColor:"#223F7F1A"},children:m?n:e.jsx("img",{loading:"lazy",decoding:"async",src:n,alt:"",className:"w-[28px] h-[28px] object-contain"})}):e.jsx("div",{className:`\r
          w-[55.3px]\r
          h-[55.3px]\r
          flex items-center justify-center\r
          rounded-[9.9px]\r
          shrink-0\r
        `,style:{backgroundColor:t.color.primary},children:m?n:e.jsx("img",{loading:"lazy",decoding:"async",src:n,alt:"",className:"w-[28px] h-[28px] object-contain"})})};return e.jsxs("div",{className:d.wrapper,style:d.wrapperStyle,children:[w(),e.jsx("h6",{className:d.title,style:{color:t.color.text.secondary},children:s}),b&&e.jsx("div",{className:"flex items-center gap-[10px]",children:e.jsx("span",{className:`\r
              flex items-center justify-center\r
              px-[12px] h-[30px]\r
              rounded-[4px]\r
              font-montserrat text-[14px] leading-[1.43]\r
            `,style:{backgroundColor:t.color.primary,color:"#FFFFFF"},children:a})}),e.jsx("p",{className:d.paragraph,style:{color:r==="whychoose"?"rgba(25, 25, 25, 0.75)":r==="research"?"#191919BF":"#6B7280"},children:i}),x&&e.jsxs("button",{onClick:g,className:"mt-4 flex items-center gap-2 text-[#008C8C] font-semibold text-[14px] hover:underline",children:[x," ",e.jsx("span",{children:"→"})]})]})}const k="/AsramWebsite-FE/assets/icons/MedicalIcon.svg",I="/AsramWebsite-FE/assets/icons/IconArtFacilities.svg",$="/AsramWebsite-FE/assets/icons/IconAccredited.svg";function M(){const n=[{icon:e.jsx("img",{src:k,className:"w-[28px] h-[28px] invert brightness-0",alt:""}),title:"B.Sc Nursing",years:"4 Years Full-Time",seats:"~100 Seats",description:"Flagship undergraduate programme integrating theoretical lectures, practical labs, simulation, and clinical postings. Prepares students for both patient care and professional advancement."},{icon:e.jsx("img",{src:I,className:"w-[28px] h-[28px]",alt:""}),title:"General Nursing",years:"3 Years Full-Time",seats:"~60 Seats",description:"Diploma level programme providing comprehensive training in nursing fundamentals and midwifery practices, preparing students for immediate clinical roles."},{icon:e.jsx("img",{src:$,className:"w-[28px] h-[28px]",alt:""}),title:"M.Sc Nursing",years:"3 Years Full-Time",seats:"~60 Seats",description:"Specialization tracks include Medical-Surgical Nursing, Obstetrics & Gynaecological Nursing, Paediatric Nursing, Community Health Nursing, and Psychiatric Nursing."}];return e.jsxs(o,{bg:t.bg.white,paddingClass:"py-[80px]",children:[e.jsx("h2",{className:`
    ${t.font.family}
    ${t.font.weight.bold}
    text-[#223F7F]

    /* MOBILE – strong but compact */
    text-[28px] leading-[28px] tracking-[-0.2px]

    /* TABLET */
    sm:text-[28px] sm:leading-[34px]

    /* DESKTOP – unchanged */
    md:text-[36px] md:leading-[48px]

    mb-[28px] sm:mb-[36px] md:mb-[52px]
  `,children:"Academic Programs"}),e.jsx("div",{className:`\r
          grid \r
          grid-cols-1\r
          gap-[24px]\r
          \r
          sm:grid-cols-2\r
          md:gap-[26px]\r
\r
          lg:grid-cols-3\r
          lg:gap-[30px]\r
          \r
          w-full\r
        `,children:n.map((s,i)=>e.jsx(c,{...s,variant:"program",className:"w-full max-w-none"},i))})]})}const L="/AsramWebsite-FE/assets/icons/IconCareerReady.svg",H="/AsramWebsite-FE/assets/icons/IconHeartCare.svg",P="/AsramWebsite-FE/assets/icons/IconAccredited.svg";function W(){const n=[{icon:e.jsx("img",{src:L,className:"w-[28px] h-[28px]",alt:""}),title:"Vision",description:"To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands."},{icon:e.jsx("img",{src:H,className:"w-[28px] h-[28px]",alt:""}),title:"Mission",description:"To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands."},{icon:e.jsx("img",{src:P,className:"w-[28px] h-[28px]",alt:""}),title:"Values",description:"Compassion, excellence, integrity, service, innovation—students are trained not only in technical proficiency but also in ethical and patient-centered care."}];return e.jsxs(o,{bg:"bg-[#EEF2F7]",paddingClass:"py-[80px]",children:[e.jsx("h2",{className:`\r
          font-montserrat\r
          font-bold\r
          text-[28px]\r
          leading-[36px]\r
          sm:text-[32px]\r
          sm:leading-[42px]\r
          lg:text-[36px]\r
          lg:leading-[48px]\r
          mb-[32px]\r
          md:mb-[40px]\r
          text-[#223F7F]\r
          w-full\r
        `,children:"Vision, Mission & Values"}),e.jsx("div",{className:`\r
          grid\r
          grid-cols-1\r
          sm:grid-cols-2\r
          lg:grid-cols-3\r
\r
          gap-y-[32px]\r
          lg:gap-x-[46px]\r
\r
          w-full\r
        `,children:n.map((s,i)=>e.jsx(c,{...s,variant:"vmv",className:"w-full max-w-none"},i))})]})}const R="/AsramWebsite-FE/assets/nursing/studentexp.png",B="/AsramWebsite-FE/assets/icons/IconPublicHealth.svg",z="/AsramWebsite-FE/assets/icons/IconPracticalLearning.svg",T="/AsramWebsite-FE/assets/icons/IconExtraCurricular.svg",D="/AsramWebsite-FE/assets/icons/IconAmenities.svg";function V(){const n=[{icon:e.jsx("img",{src:B,className:"w-[24px] h-[24px]",alt:""}),title:"Favorable Faculty Ratio",desc:"+56 faculty for ~377 students ensures personalized attention and mentoring"},{icon:e.jsx("img",{src:z,className:"w-[24px] h-[24px]",alt:""}),title:"Practical Learning",desc:"Simulation, skills labs, clinical rotations, case discussions, and hands-on training"},{icon:e.jsx("img",{src:T,className:"w-[24px] h-[24px]",alt:""}),title:"Extra-Curricular Activities",desc:"Workshops, seminars, case-presentations, academic clubs, and competitive events"},{icon:e.jsx("img",{src:D,className:"w-[24px] h-[24px]",alt:""}),title:"Modern Amenities",desc:"Hostels, transport, WiFi connectivity, campus safety, and comprehensive support"}];return e.jsxs(o,{bg:"bg-[#F7F9FC]",paddingClass:"py-[80px]",children:[e.jsx("div",{className:"flex flex-col gap-[8px] w-full mb-[32px] md:mb-[40px]",children:e.jsx("h2",{className:"font-montserrat font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[38px] md:leading-[44px] lg:leading-[48px] text-[#223F7F]",children:"Student Experience"})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start mb-[60px]",children:[e.jsx("div",{className:"w-full",children:e.jsx("img",{src:R,alt:"Nursing Student Experience",className:"w-full xl:h-[368px] h-auto block object-cover rounded-[12px]"})}),e.jsxs("div",{className:"w-full flex flex-col items-start justify-center",children:[e.jsx("h3",{className:"font-regular font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#223F7F] max-w-full",children:"Comprehensive Learning Environment"}),e.jsx("p",{className:"font-regular text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[26px] text-justify text-[#191919BF] mt-[20px]",children:"At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development."}),e.jsx("p",{className:"font-regular text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[26px] text-justify text-[#191919BF] mt-[20px]",children:"At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development."})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] xl:gap-x-[23.7px] xl:gap-y-[24px] w-full justify-items-center xl:justify-items-stretch",children:n.map((s,i)=>e.jsx(c,{icon:s.icon,title:s.title,description:s.desc,variant:"studentExperience"},i))})]})}const O=({size:n=32,color:s="currentColor",strokeWidth:i=2.66667,className:a=""})=>e.jsx("svg",{width:n,height:n,viewBox:n===28?"0 0 28 28":"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,children:e.jsx("path",{className:"transition-all duration-700",d:n===28?"M2.30261 10.9375C2.30264 9.65632 2.69129 8.40528 3.41724 7.34962C4.14319 6.29395 5.17229 5.48333 6.36861 5.02481C7.56493 4.56628 8.8722 4.48144 10.1178 4.78147C11.3633 5.0815 12.4886 5.7523 13.3449 6.70527C13.4052 6.76976 13.4781 6.82117 13.5591 6.85632C13.6401 6.89147 13.7275 6.90961 13.8158 6.90961C13.9041 6.90961 13.9914 6.89147 14.0724 6.85632C14.1534 6.82117 14.2263 6.76976 14.2867 6.70527C15.1403 5.74611 16.2658 5.06967 17.5134 4.76599C18.761 4.46232 20.0714 4.5458 21.2704 5.00533C22.4694 5.46486 23.4999 6.27865 24.2249 7.33838C24.95 8.39811 25.335 9.65351 25.3289 10.9375C25.3289 13.574 23.602 15.5428 21.875 17.2697L15.552 23.3867C15.3374 23.6331 15.0729 23.831 14.776 23.9673C14.4791 24.1036 14.1566 24.1752 13.8299 24.1772C13.5032 24.1793 13.1798 24.1118 12.8812 23.9793C12.5826 23.8468 12.3156 23.6522 12.098 23.4086L5.75656 17.2697C4.02959 15.5428 2.30261 13.5855 2.30261 10.9375Z":"M2.66699 12.6705C2.66702 11.1868 3.11712 9.73799 3.95784 8.51543C4.79856 7.29287 5.99035 6.35409 7.3758 5.82308C8.76126 5.29207 10.2752 5.1938 11.7177 5.54127C13.1601 5.88874 14.4633 6.66559 15.455 7.76921C15.5248 7.8439 15.6093 7.90344 15.7031 7.94415C15.7969 7.98485 15.8981 8.00586 16.0003 8.00586C16.1026 8.00586 16.2038 7.98485 16.2976 7.94415C16.3914 7.90344 16.4758 7.8439 16.5457 7.76921C17.5342 6.65841 18.8377 5.87504 20.2825 5.52335C21.7273 5.17166 23.245 5.26834 24.6335 5.80052C26.022 6.33271 27.2155 7.27515 28.0551 8.50241C28.8948 9.72968 29.3407 11.1836 29.3337 12.6705C29.3337 15.7239 27.3337 18.0039 25.3337 20.0039L18.011 27.0879C17.7625 27.3732 17.4562 27.6024 17.1124 27.7603C16.7685 27.9181 16.395 28.001 16.0167 28.0034C15.6384 28.0058 15.2639 27.9277 14.918 27.7742C14.5722 27.6207 14.263 27.3954 14.011 27.1132L6.66699 20.0039C4.66699 18.0039 2.66699 15.7372 2.66699 12.6705Z",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})}),j=({size:n=24,viewBox:s="0 0 38 38",children:i,className:a=""})=>e.jsx("svg",{width:n,height:n,viewBox:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,children:i}),q=({size:n=24,color:s="currentColor",strokeWidth:i=2,className:a=""})=>e.jsxs(j,{size:n,className:a,children:[e.jsx("path",{d:"M17.4168 3.16644V6.33311",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.91681 3.16644V6.33311",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.91663 4.74969H6.33329C5.49344 4.74969 4.68799 5.08332 4.09412 5.67719C3.50026 6.27106 3.16663 7.07651 3.16663 7.91636V14.2497C3.16663 16.7693 4.16752 19.1856 5.94911 20.9672C7.73071 22.7488 10.1471 23.7497 12.6666 23.7497C15.1862 23.7497 17.6025 22.7488 19.3841 20.9672C21.1657 19.1856 22.1666 16.7693 22.1666 14.2497V7.91636C22.1666 7.07651 21.833 6.27106 21.2391 5.67719C20.6453 5.08332 19.8398 4.74969 19 4.74969H17.4166",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12.6666 23.7499C12.6666 26.2695 13.6675 28.6859 15.4491 30.4675C17.2306 32.249 19.647 33.2499 22.1666 33.2499C24.6861 33.2499 27.1025 32.249 28.8841 30.4675C30.6657 28.6859 31.6666 26.2695 31.6666 23.7499V18.9999",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M31.6667 18.9998C33.4156 18.9998 34.8334 17.582 34.8334 15.8331C34.8334 14.0842 33.4156 12.6664 31.6667 12.6664C29.9178 12.6664 28.5001 14.0842 28.5001 15.8331C28.5001 17.582 29.9178 18.9998 31.6667 18.9998Z",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}),Y=({size:n=24,color:s="currentColor",strokeWidth:i=2,className:a=""})=>e.jsxs(j,{size:n,className:a,children:[e.jsx("path",{d:"M9.5 28.5H22.1667",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M4.75 34.832H33.25",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M22.1673 34.8346C25.1068 34.8346 27.9259 33.6669 30.0044 31.5884C32.0829 29.5099 33.2507 26.6908 33.2507 23.7513C33.2507 20.8118 32.0829 17.9927 30.0044 15.9142C27.9259 13.8357 25.1068 12.668 22.1673 12.668H20.584",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.25 22.168H17.4167",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.2507 19C13.4108 19 12.6053 18.6664 12.0115 18.0725C11.4176 17.4786 11.084 16.6732 11.084 15.8333V9.5H20.584V15.8333C20.584 16.6732 20.2504 17.4786 19.6565 18.0725C19.0626 18.6664 18.2572 19 17.4173 19H14.2507Z",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M19.0013 9.5013V4.7513C19.0013 4.33138 18.8345 3.92865 18.5376 3.63172C18.2406 3.33478 17.8379 3.16797 17.418 3.16797H14.2513C13.8314 3.16797 13.4286 3.33478 13.1317 3.63172C12.8348 3.92865 12.6680 4.33138 12.668 4.7513V9.5013",stroke:s,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]});function K(){const n=[{icon:e.jsx(O,{size:38,color:"#008C8C",strokeWidth:2.8}),title:"Cardiovascular Health",description:"Investigating novel interventions to improve outcomes for patients with heart disease."},{icon:e.jsx(F,{size:38,color:"#008C8C",strokeWidth:2.8}),title:"Mental Health & Wellness",description:"Advancing evidence-based approaches to mental health care and substance use disorders."},{icon:e.jsx(E,{size:38,strokeWidth:2.8,color:"#008C8C"}),title:"Health Equity",description:"Addressing disparities and promoting health equity in underserved communities."},{icon:e.jsx(A,{size:38,strokeWidth:2.8,color:"#008C8C"}),title:"Chronic Disease Management",description:"Developing innovative strategies for managing diabetes, cancer, and other chronic conditions."},{icon:e.jsx(q,{size:38,color:"#008C8C",strokeWidth:2.8}),title:"Clinical Practice Innovation",description:"Transforming care delivery through technology and evidence-based practice improvements."},{icon:e.jsx(Y,{size:38,color:"#008C8C",strokeWidth:2.8}),title:"Precision Health",description:"Utilizing genomics and personalized medicine to optimize patient outcomes."}];return e.jsxs(o,{bg:"bg-[#EEF2F7]",paddingClass:"py-[80px]",children:[e.jsx("h2",{className:`
          ${t.font.family}
          ${t.font.weight.bold}
          text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2]
          text-[${t.color.secondary}]
          w-full mb-[40px]
        `,children:"Research"}),e.jsx("div",{className:`\r
          grid \r
          grid-cols-1 \r
          sm:grid-cols-2 \r
          lg:grid-cols-3\r
          gap-[30px]\r
          w-full\r
        `,children:n.map((s,i)=>e.jsx(c,{icon:s.icon,title:s.title,description:s.description,variant:"research"},i))}),e.jsx("div",{className:"mt-[40px] flex justify-center",children:e.jsx(y,{children:"Explore Our Research"})})]})}function Z({title:n,innerHeading:s,image:i,paragraphs:a=[],children:h,bg:r="bg-white",bgColor:x}){return e.jsxs(o,{bg:r,bgColor:x,paddingClass:"py-[80px]",children:[n&&e.jsx("h2",{className:`
          ${t.font.family}
          ${t.font.weight.bold}
          text-[32px] md:text-[36px]
          leading-[42px] md:leading-[48px]
          mb-[40px]
        `,style:{color:t.color.secondary},children:n}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-[47px] w-full",children:[e.jsx("div",{className:"w-full",children:e.jsx("img",{loading:"lazy",decoding:"async",src:i,alt:n,className:"w-full h-auto block object-cover rounded-[10px]"})}),e.jsxs("div",{className:"w-full flex flex-col gap-[24px]",children:[s&&e.jsx("h3",{className:`
              ${t.font.family}
              ${t.font.weight.semibold}
              text-[24px] md:text-[28px]
              leading-[32px] md:leading-[38px]
              max-w-[520px]
            `,style:{color:t.color.secondary},children:s}),e.jsx("div",{className:"flex flex-col gap-[16px]",children:a.map((g,p)=>e.jsx("p",{className:`
                  ${t.font.family}
                  text-[16px] md:text-[17px]
                  leading-[24px] md:leading-[26px]
                `,style:{color:"#191919BF"},children:g},p))})]})]}),e.jsx("div",{className:"mt-[40px]",children:h})]})}const _="/AsramWebsite-FE/assets/nursing/socialcommitment.png",G="/AsramWebsite-FE/assets/icons/IconHeartCare.svg",U="/AsramWebsite-FE/assets/icons/IconPublicHealth.svg",J="/AsramWebsite-FE/assets/icons/IconClinicalPractice.svg",Q="/AsramWebsite-FE/assets/icons/IconEthicalTraining.svg";function X(){const n=[{icon:e.jsx("img",{src:G,className:"w-[24px] h-[24px]",alt:""}),title:"Health Camps",description:"Regular health camps in underserved areas providing free check-ups and health education"},{icon:e.jsx("img",{src:U,className:"w-[24px] h-[24px]",alt:""}),title:"Rural Outreach",description:"Community health programmes focusing on preventive care and health awareness"},{icon:e.jsx("img",{src:J,className:"w-[24px] h-[24px]",alt:""}),title:"Health Education",description:"Workshops and sessions on hygiene, nutrition, disease prevention, and wellness"},{icon:e.jsx("img",{src:Q,className:"w-[24px] h-[24px]",alt:""}),title:"Ethical Training",description:"Focus on compassionate care, professional ethics, and patient-centered values"}];return e.jsx(Z,{title:"Social Commitment",bgColor:"#F7F9FC",innerHeading:"Service-Oriented Education",image:_,paragraphs:["As part of the ASRAM educational society, the nursing school actively participates in health camps, rural outreach, and community health programmes—aligning education with service to society.","The focus on holistic development includes instilling ethics, empathy, and a service-oriented mindset among nursing students, preparing them to serve diverse communities with compassion and dedication."],children:e.jsx("div",{className:`\r
          grid \r
          grid-cols-1 \r
          sm:grid-cols-2 \r
          lg:grid-cols-2 \r
          xl:grid-cols-4\r
          gap-[20px]\r
          w-full\r
        `,children:n.map((s,i)=>e.jsx(c,{...s,variant:"socialCommitment"},i))})})}const ee="/AsramWebsite-FE/assets/nursing/doctor_1.png",te="/AsramWebsite-FE/assets/nursing/doctor_2.png",se="/AsramWebsite-FE/assets/nursing/doctor_3.png",ne="/AsramWebsite-FE/assets/nursing/experience.svg",ie="/AsramWebsite-FE/assets/nursing/weekcal.svg",ae="/AsramWebsite-FE/assets/nursing/timeperiod.svg";function re(){const n=[{img:ee,name:"Dr. Rajesh Kumar",role:"Cardiologist",qualification:"MBBS, MD, DM (Cardiology)",experience:"20+ Years Experience",days:"Mon - Fri",time:"9:00 AM - 5:00 PM"},{img:te,name:"Dr. Priya Sharma",role:"Neurologist",qualification:"MBBS, MD, DM (Neurology)",experience:"15+ Years Experience",days:"Mon - Sat",time:"10:00 AM - 6:00 PM"},{img:se,name:"Dr. Amit Patel",role:"Orthopedic Surgeon",qualification:"MBBS, MS (Orthopedics)",experience:"18+ Years Experience",days:"Tue - Sat",time:"11:00 AM - 7:00 PM"}];return e.jsx(o,{bg:t.bg.section,paddingClass:"py-[40px] md:py-[80px]",children:e.jsxs("div",{className:"flex flex-col gap-[50px]",children:[e.jsx("h2",{className:`
            ${t.font.family}
            ${t.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `,style:{color:t.color.text.secondary},children:"Faculty Spotlight"}),e.jsx("div",{className:`\r
            grid \r
            grid-cols-1 \r
            sm:grid-cols-2 \r
            lg:grid-cols-3\r
            gap-[32px] md:gap-[40px]\r
            w-full\r
          `,children:n.map((s,i)=>e.jsxs("div",{className:`\r
                w-full\r
                bg-white rounded-[20px]\r
                border border-[#D0D7E2]\r
                flex flex-col\r
              `,children:[e.jsx("div",{className:"w-full h-[260px] sm:h-[280px] md:h-[300px] bg-gray-200 rounded-t-[10px]",children:e.jsx("img",{loading:"lazy",decoding:"async",src:s.img,alt:s.name,className:`\r
                    w-full h-full\r
                    object-cover rounded-t-[10px]\r
                  `})}),e.jsxs("div",{className:"px-[24px] py-[26px] flex flex-col gap-[14px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`
                      ${t.font.family}
                      ${t.font.weight.semibold}
                      text-[18px] md:text-[20px]
                      mb-[10px]
                      leading-[26px] md:leading-[28px]
                    `,style:{color:t.color.text.secondary},children:s.name}),e.jsx("p",{className:`
                      ${t.font.family}
                      text-[16px] md:text-[18px]
                       mb-[10px]
                      leading-[24px]
                    `,style:{color:t.color.dark},children:s.role}),e.jsx("p",{className:`
                      ${t.font.family}
                      text-[14px] leading-[20px] mt-[6px]
                    `,style:{color:t.color.dark},children:s.qualification})]}),e.jsxs("div",{className:"flex flex-col gap-[10px] mt-[6px]",children:[e.jsxs("div",{className:"flex items-center gap-[10px]",children:[e.jsx("img",{loading:"lazy",decoding:"async",src:ne,className:"w-[18px] h-[18px]"}),e.jsx("span",{className:`${t.font.family} text-[14px] leading-[20px]`,style:{color:t.color.text.muted},children:s.experience})]}),e.jsxs("div",{className:"flex items-center gap-[10px]",children:[e.jsx("img",{loading:"lazy",decoding:"async",src:ie,className:"w-[18px] h-[18px]"}),e.jsx("span",{className:`${t.font.family} text-[14px] leading-[20px]`,style:{color:t.color.text.muted},children:s.days})]}),e.jsxs("div",{className:"flex items-center gap-[10px]",children:[e.jsx("img",{loading:"lazy",decoding:"async",src:ae,className:"w-[18px] h-[18px]"}),e.jsx("span",{className:`${t.font.family} text-[14px] leading-[20px]`,style:{color:t.color.text.muted},children:s.time})]})]}),e.jsxs("div",{className:"flex flex-row gap-[12px] mt-[20px] pt-[20px] border-t border-[#E5E5E5]",children:[e.jsx("button",{className:`\r
                      flex-1\r
                      h-[48.7px]\r
                      bg-[#008C8C]\r
                      text-white\r
                      text-[14px] font-medium\r
                      rounded-[9.7px]\r
                      hover:bg-[#007A7A]\r
                      transition-colors\r
                      flex items-center justify-center\r
                      whitespace-nowrap\r
                    `,children:"Book Appointment"}),e.jsx("button",{className:`\r
                      w-[120.2px]\r
                      h-[48.7px]\r
                      bg-white\r
                      border border-[#D1D5DB]\r
                      text-gray-700\r
                      text-[14px] font-medium\r
                      rounded-[9.7px]\r
                      hover:bg-gray-50\r
                      transition-colors\r
                      flex items-center justify-center\r
                      whitespace-nowrap\r
                    `,children:"View Profile"})]})]})]},i))}),e.jsx("div",{className:"flex justify-center mt-[10px]",children:e.jsx(y,{bg:t.color.primary,color:"#FFFFFF",textSize:"text-[15px]",className:"rounded-[10px]",width:"200px",height:"48px",children:"Meet All Faculty"})})]})})}const f="/AsramWebsite-FE/assets/icons/CheckMarkIcon.svg";function le(){return e.jsx("div",{className:"w-full mt-[50px] mb-[80px]",children:e.jsx("div",{className:"w-full flex flex-col items-center",children:e.jsxs("div",{className:`\r
            w-full\r
            rounded-[10px]\r
            flex flex-col items-center\r
            bg-[#FFF]\r
            px-[24px] md:px-[40px]\r
            py-[30px] md:py-[40px]\r
          `,children:[e.jsx("h2",{className:`
              ${t.font.family}
              ${t.font.weight.bold}
              text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px]
              leading-[30px] md:leading-[34px] lg:leading-[36px]
              text-center
              mb-[32px]
            `,style:{color:"#223F7F"},children:"Why Choose ASRAM Nursing?"}),e.jsxs("div",{className:`\r
              grid \r
              grid-cols-1 \r
              md:grid-cols-2 \r
              gap-[30px] md:gap-[40px] \r
              w-full\r
            `,children:[e.jsxs("div",{className:"flex flex-col gap-[16px]",children:[e.jsx("h3",{className:`
                  ${t.font.family}
                  ${t.font.weight.semibold}
                  text-[18px] md:text-[20px]
                  leading-[26px]
                `,style:{color:"#223F7F"},children:"Educational Excellence"}),e.jsx("ul",{className:"flex flex-col gap-[10px]",children:["Integration with comprehensive multispecialty hospital","Robust infrastructure across the 10-acre campus","Recognized affiliations and regulatory approvals"].map((n,s)=>e.jsxs("li",{className:"flex items-center gap-[10px]",children:[e.jsx("img",{src:f,className:"w-[14px] h-[14px] shrink-0",alt:""}),e.jsx("p",{className:`
                        ${t.font.family}
                        text-[14px] sm:text-[15px]
                        leading-[22px]
                        text-[#191919BF]
                      `,children:n})]},s))})]}),e.jsxs("div",{className:"flex flex-col gap-[16px]",children:[e.jsx("h3",{className:`
                  ${t.font.family}
                  ${t.font.weight.semibold}
                  text-[18px] md:text-[20px]
                  leading-[26px]
                `,style:{color:"#223F7F"},children:"Student Success"}),e.jsx("ul",{className:"flex flex-col gap-[10px]",children:["Clear pathways from undergraduate to postgraduate","Student-centered environment with strong mentoring","Practical orientation ensuring job readiness"].map((n,s)=>e.jsxs("li",{className:"flex items-center gap-[10px]",children:[e.jsx("img",{src:f,className:"w-[14px] h-[14px] shrink-0",alt:""}),e.jsx("p",{className:`
                        ${t.font.family}
                        text-[14px] sm:text-[15px]
                        leading-[22px]
                        text-[#191919BF]
                      `,children:n})]},s))})]})]})]})})})}const oe="/AsramWebsite-FE/assets/icons/IconHospitalIntegration.svg",ce="/AsramWebsite-FE/assets/icons/IconRobustInfra.svg",xe="/AsramWebsite-FE/assets/icons/IconRecognizedAffiliations.svg",pe="/AsramWebsite-FE/assets/icons/IconClearPathways.svg",de="/AsramWebsite-FE/assets/icons/IconStudentCentered.svg",me="/AsramWebsite-FE/assets/icons/IconOrientation.svg";function ge(){const n=[{icon:e.jsx("img",{src:oe,className:"w-[28px] h-[28px]",alt:""}),title:"Hospital Integration",description:"Comprehensive multispecialty hospital providing real-time clinical exposure and practical training"},{icon:e.jsx("img",{src:ce,className:"w-[28px] h-[28px]",alt:""}),title:"Robust Infrastructure",description:"State-of-the-art labs, simulation centers, library, hostels, and sports facilities"},{icon:e.jsx("img",{src:xe,className:"w-[28px] h-[28px]",alt:""}),title:"Recognized Affiliations",description:"INC approval and NTRUHS affiliation lending credibility and national recognition"},{icon:e.jsx("img",{src:pe,className:"w-[28px] h-[28px]",alt:""}),title:"Clear Pathways",description:"Structured progression from undergraduate to postgraduate levels within the institution"},{icon:e.jsx("img",{src:de,className:"w-[28px] h-[28px]",alt:""}),title:"Student-Centered Environment",description:"Strong mentoring, favorable faculty ratio, and personalized attention for holistic growth"},{icon:e.jsx("img",{src:me,className:"w-[28px] h-[28px]",alt:""}),title:"Practical Orientation",description:"Emphasis on hands-on training, simulation, and clinical rotations over theoretical learning alone"}];return e.jsxs(o,{bg:"bg-[#EEF2F7]",paddingClass:"py-[80px]",children:[e.jsxs("div",{className:"flex flex-col gap-[50px]",children:[e.jsx("h2",{className:`
            ${t.font.family}
            ${t.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `,style:{color:t.color.text.secondary},children:"Key Strengths"}),e.jsx("div",{className:`\r
            grid \r
            grid-cols-1 \r
            sm:grid-cols-2 \r
            lg:grid-cols-3\r
            gap-[40px]\r
            w-full\r
          `,children:n.map((s,i)=>e.jsx(c,{variant:"keystrength",icon:s.icon,title:s.title,description:s.description},i))})]}),e.jsx(le,{})]})}const he="/AsramWebsite-FE/assets/nursing/asramnursingbanner.png",Ne=()=>{const{setHero:n,hideHero:s}=C();return v.useLayoutEffect(()=>(n({title:e.jsx(N,{text:"Excellence in Nursing Education",className:"font-montserrat font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-[1.36] text-white"}),bgImage:he,children:e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-[520px]",children:e.jsx("p",{className:"font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.36] text-white mb-6",children:"ASRAM School of Nursing prepares skilled, ethical, and globally competent nurses through accredited programs and real-world clinical exposure."})})}),className:"!py-12 md:!pt-[263.5px] !lg:pl-[120px] !lg:pr-[120px]",alignmentClass:"items-center md:items-start"}),()=>s()),[n,s]),e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(M,{})}),e.jsx(l,{delay:.1,children:e.jsx(W,{})}),e.jsx(l,{delay:.1,children:e.jsx(V,{})}),e.jsx(l,{delay:.2,children:e.jsx(K,{})}),e.jsx(l,{delay:.2,children:e.jsx(X,{})}),e.jsx(l,{delay:.3,children:e.jsx(S,{})}),e.jsx(l,{delay:.3,children:e.jsx(re,{})}),e.jsx(l,{delay:.3,children:e.jsx(ge,{})})]})};export{Ne as default};
