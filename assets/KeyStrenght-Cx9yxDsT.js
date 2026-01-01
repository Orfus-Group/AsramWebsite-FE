import{j as e}from"./animations-Ddm3AZVI.js";import{T as t,P as u}from"./index-C6Seta4K.js";import"./vendor-CEFHwVPC.js";import{B as I}from"./button-P7XFFMMG.js";function b({icon:s,title:o,description:x,ctafontweight:r,years:l,seats:c,variant:a="program",buttonText:i,onClick:d,className:m="",iconBg:p,cardBg:n,badgeBg:f,badgeClassName:g,iconContainerClassName:h,cardBorder:y,borderColor:k,titleClassName:$="",titleColor:S}){const E=a==="program",C={program:{wrapper:`
      w-full             
      h-full
      flex flex-col items-start justify-start
      rounded-[12px]
      ${m}
      `,wrapperStyle:{backgroundColor:n||"#EEF2F7",border:"1px solid rgba(7, 7, 7, 0.2)",padding:"30px",gap:"20px",borderRadius:"12px"},title:`
        ${t.font.family}
        ${t.font.weight.semibold}
        text-[28px] leading-[34px]
        text-left
      `,paragraph:`
        w-full
        ${t.font.family} text-[16px] leading-[24px] text-left
      `},vmv:{wrapper:`
    w-full                 /* allow responsive width */
    h-full
    flex flex-col items-start justify-start
    rounded-[12px]
    ${m}
  `,wrapperStyle:{backgroundColor:n||"#FFFFFF",border:"1px solid rgba(7, 7, 7, 0.2)",padding:"30px",gap:"20px"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[28px] leading-[28px] text-left
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
  `,wrapperStyle:{backgroundColor:"#FFF",padding:"30px",gap:"12px",borderBottom:`4px solid ${k||"#008C8C"}`,borderTop:"none",borderLeft:"none",borderRight:"none",borderRadius:"12px",boxShadow:"0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[22px] leading-[33.2px]
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
            flex flex-col items-start justify-start 
            ${m}
            `,wrapperStyle:{backgroundColor:n||"#FFFFFF",borderRadius:"12px",padding:"24px",gap:"12px",border:y||"none",boxShadow:"0px 8px 16px 0px rgba(0, 140, 140, 0.04), 0px 0px 4px 0px rgba(0, 140, 140, 0.04), 0px 0px 4px 0px rgba(0, 140, 140, 0.08)"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[22px] leading-[1.2]
    text-left
    w-full
    ${$}
  `,paragraph:`
    ${t.font.family}
    font-normal
    text-[18px] leading-[1.44]
    text-left
    w-full
  `}},w=C[a]||C.program,A=()=>{const j=typeof s!="string";return a==="research"?e.jsx("div",{className:"w-[40px] h-[40px] flex items-center justify-center shrink-0",children:j?s:e.jsx("img",{loading:"lazy",decoding:"async",src:s,alt:"",className:"w-[38px] h-[38px] object-contain"})}):a==="keystrength"?e.jsx("div",{className:`
                        flex items-center justify-center shrink-0
                        ${h||"w-[55.26px] h-[55.26px] rounded-[9.87px]"}
                    `,style:{backgroundColor:p||t.color.primary},children:j?s:e.jsx("img",{loading:"lazy",decoding:"async",src:s,alt:"",className:"w-[28px] h-[28px] object-contain"})}):a==="whychoose"?e.jsx("div",{className:"flex items-center justify-center shrink-0",style:{width:"55.26px",height:"55.26px",borderRadius:"16.18px",backgroundColor:"#223F7F1A"},children:j?s:e.jsx("img",{loading:"lazy",decoding:"async",src:s,alt:"",className:"w-[28px] h-[28px] object-contain"})}):e.jsx("div",{className:`
          flex items-center justify-center
          rounded-[9.9px]
          shrink-0
          ${h||"w-[55.3px] h-[55.3px]"}
        `,style:{backgroundColor:p||t.color.primary},children:j?s:e.jsx("img",{loading:"lazy",decoding:"async",src:s,alt:"",className:"w-[28px] h-[28px] object-contain"})})};return e.jsxs("div",{className:w.wrapper,style:{...w.wrapperStyle,...n?{backgroundColor:n}:{},...y?{border:y,boxShadow:"none"}:{}},children:[A(),e.jsx("h4",{className:w.title,style:{color:S||t.color.text.secondary},children:o}),E&&e.jsx("div",{className:"flex items-center gap-[10px]",children:e.jsx("span",{className:`
              flex items-center justify-center
              rounded-[4px]
              ${r}
              font-montserrat text-[14px] leading-[1.43]
              ${g||"h-[30px] px-[12px]"}
            `,style:{backgroundColor:f||t.color.primary,color:"#FFFFFF"},children:l})}),e.jsx("p",{className:w.paragraph,style:{color:a==="whychoose"?"rgba(25, 25, 25, 0.75)":a==="research"?"#191919BF":"#6B7280"},children:x}),i&&e.jsxs("button",{onClick:d,className:"mt-4 flex items-center gap-2 text-[#008C8C] font-semibold text-[14px] hover:underline",children:[i," ",e.jsx("span",{children:"→"})]})]})}const M="/AsramWebsite-FE/assets/icons/MedicalIcon.svg",L="/AsramWebsite-FE/assets/icons/IconArtFacilities.svg",W="/AsramWebsite-FE/assets/icons/IconAccredited.svg";function pe({programs:s,iconBg:o,cardBg:x,ctafontweight:r,badgeBg:l,badgeClassName:c,titleColor:a,iconFilter:i}){const m=s||[{icon:e.jsx("img",{src:M,className:"w-[28px] h-[28px] invert brightness-0",alt:""}),title:"B.Sc Nursing",years:"4 Years Full-Time",seats:"~100 Seats",description:"Flagship undergraduate programme integrating theoretical lectures, practical labs, simulation, and clinical postings. Prepares students for both patient care and professional advancement."},{icon:e.jsx("img",{src:L,className:"w-[28px] h-[28px]",alt:""}),title:"General Nursing",years:"3 Years Full-Time",seats:"~60 Seats",description:"Diploma level programme providing comprehensive training in nursing fundamentals and midwifery practices, preparing students for immediate clinical roles."},{icon:e.jsx("img",{src:W,className:"w-[28px] h-[28px]",alt:""}),title:"M.Sc Nursing",years:"3 Years Full-Time",seats:"~60 Seats",description:"Specialization tracks include Medical-Surgical Nursing, Obstetrics & Gynaecological Nursing, Paediatric Nursing, Community Health Nursing, and Psychiatric Nursing."}];return e.jsxs(u,{bg:t.bg.white,paddingClass:"py-[80px]",children:[e.jsx("h2",{className:`
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
        `,children:m.map((p,n)=>e.jsx(b,{...p,variant:"program",ctafontweight:r,className:"w-full max-w-none",iconBg:o,cardBg:x,badgeBg:l,badgeClassName:c||"h-[36px] px-[20px]"},n))})]})}const P="/AsramWebsite-FE/assets/nursing/studentexp.png",R="/AsramWebsite-FE/assets/icons/IconPublicHealth.svg",B="/AsramWebsite-FE/assets/icons/IconPracticalLearning.svg",z="/AsramWebsite-FE/assets/icons/IconExtraCurricular.svg",H="/AsramWebsite-FE/assets/icons/IconAmenities.svg";function de({data:s,iconBg:o,cardBg:x,iconContainerClassName:r,titleColor:l,cardBorder:c,titleClassName:a="min-h-[54px]",imageSrc:i=P,heading:d="Student Experience",subHeading:m="Comprehensive Learning Environment",description:p=["At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development.","At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development."]}){const f=s||[{icon:e.jsx("img",{src:R,className:"w-[24px] h-[24px]",alt:""}),title:"Favorable Faculty Ratio",desc:"+56 faculty for ~377 students ensures personalized attention and mentoring"},{icon:e.jsx("img",{src:B,className:"w-[24px] h-[24px]",alt:""}),title:"Practical Learning",desc:"Simulation, skills labs, clinical rotations, case discussions, and hands-on training"},{icon:e.jsx("img",{src:z,className:"w-[24px] h-[24px]",alt:""}),title:"Extra-Curricular Activities",desc:"Workshops, seminars, case-presentations, academic clubs, and competitive events"},{icon:e.jsx("img",{src:H,className:"w-[24px] h-[24px]",alt:""}),title:"Modern Amenities",desc:"Hostels, transport, WiFi connectivity, campus safety, and comprehensive support"}];return e.jsxs(u,{bg:"bg-[#FFF]",paddingClass:"py-[80px]",children:[e.jsx("div",{className:"flex flex-col gap-[8px] w-full mb-[32px] md:mb-[40px]",children:e.jsx("h2",{className:"font-montserrat font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[38px] md:leading-[44px] lg:leading-[48px] text-[#223F7F]",children:d})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start mb-[60px]",children:[e.jsx("div",{className:"w-full",children:e.jsx("img",{src:i,alt:d,className:"w-full xl:h-[368px] h-auto block object-cover rounded-[12px]"})}),e.jsxs("div",{className:"w-full flex flex-col items-start justify-center",children:[e.jsx("h4",{className:"font-regular font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#223F7F] max-w-full",children:m}),Array.isArray(p)?p.map((g,h)=>e.jsx("p",{className:"font-regular text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[26px] text-justify text-[#191919BF] mt-[20px]",children:g},h)):e.jsx("p",{className:"font-regular text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[26px] text-justify text-[#191919BF] mt-[20px]",children:p})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] xl:gap-x-[23.7px] xl:gap-y-[24px] w-full justify-items-center xl:justify-items-stretch",children:f.map((g,h)=>e.jsx(b,{icon:g.icon,title:g.title,description:g.desc,variant:"studentExperience",iconBg:o,cardBg:x,iconContainerClassName:r,titleColor:l,cardBorder:c,titleClassName:a},h))})]})}const V="/AsramWebsite-FE/assets/icons/IconCareerReady.svg",T="/AsramWebsite-FE/assets/icons/IconHeartCare.svg",D="/AsramWebsite-FE/assets/icons/IconAccredited.svg";function me({data:s,iconBg:o,cardBg:x,iconContainerClassName:r}){const c=s||[{icon:e.jsx("img",{src:V,className:"w-[28px] h-[28px]",alt:""}),title:"Vision",description:"To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands."},{icon:e.jsx("img",{src:T,className:"w-[28px] h-[28px]",alt:""}),title:"Mission",description:"To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands."},{icon:e.jsx("img",{src:D,className:"w-[28px] h-[28px]",alt:""}),title:"Values",description:"Compassion, excellence, integrity, service, innovation—students are trained not only in technical proficiency but also in ethical and patient-centered care."}];return e.jsxs(u,{bg:"bg-[#EEF2F7]",paddingClass:"py-[80px]",children:[e.jsx("h2",{className:`\r
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
        `,children:c.map((a,i)=>e.jsx(b,{...a,variant:"vmv",className:"w-full max-w-none",iconBg:o,cardBg:x,iconContainerClassName:r},i))})]})}function O({title:s,innerHeading:o,image:x,paragraphs:r=[],children:l,bg:c="bg-white",bgColor:a}){return e.jsxs(u,{bg:c,bgColor:a,paddingClass:"py-[80px]",children:[s&&e.jsx("h2",{className:`
          ${t.font.family}
          ${t.font.weight.bold}
          text-[32px] md:text-[36px]
          leading-[42px] md:leading-[48px]
          mb-[40px]
        `,style:{color:t.color.secondary},children:s}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-[47px] w-full",children:[e.jsx("div",{className:"w-full",children:e.jsx("img",{loading:"lazy",decoding:"async",src:x,alt:s,className:"w-full h-auto block object-cover rounded-[10px]"})}),e.jsxs("div",{className:"w-full flex flex-col gap-[24px]",children:[o&&e.jsx("h3",{className:`
              ${t.font.family}
              ${t.font.weight.semibold}
              text-[24px] md:text-[28px]
              leading-[32px] md:leading-[38px]
              max-w-[520px]
            `,style:{color:t.color.secondary},children:o}),e.jsx("div",{className:"flex flex-col gap-[16px]",children:r.map((i,d)=>e.jsx("p",{className:`
                  ${t.font.family}
                  text-[16px] md:text-[17px]
                  leading-[24px] md:leading-[26px]
                `,style:{color:"#191919BF"},children:i},d))})]})]}),e.jsx("div",{className:"mt-[40px]",children:l})]})}const q="/AsramWebsite-FE/assets/nursing/socialcommitment.png",G=({color:s="white"})=>e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{className:"transition-all duration-700",d:"M2.30261 10.9375C2.30264 9.65632 2.69129 8.40528 3.41724 7.34962C4.14319 6.29395 5.17229 5.48333 6.36861 5.02481C7.56493 4.56628 8.8722 4.48144 10.1178 4.78147C11.3633 5.0815 12.4886 5.7523 13.3449 6.70527C13.4052 6.76976 13.4781 6.82117 13.5591 6.85632C13.6401 6.89147 13.7275 6.90961 13.8158 6.90961C13.9041 6.90961 13.9914 6.89147 14.0724 6.85632C14.1534 6.82117 14.2263 6.76976 14.2867 6.70527C15.1403 5.74611 16.2658 5.06967 17.5134 4.76599C18.761 4.46232 20.0714 4.5458 21.2704 5.00533C22.4694 5.46486 23.4999 6.27865 24.2249 7.33838C24.95 8.39811 25.335 9.65351 25.3289 10.9375C25.3289 13.574 23.602 15.5428 21.8750 17.2697L15.5520 23.3867C15.3374 23.6331 15.0729 23.8310 14.7760 23.9673C14.4791 24.1036 14.1566 24.1752 13.8299 24.1772C13.5032 24.1793 13.1798 24.1118 12.8812 23.9793C12.5826 23.8468 12.3156 23.6522 12.0980 23.4086L5.75656 17.2697C4.02959 15.5428 2.30261 13.5855 2.30261 10.9375Z",stroke:s,strokeWidth:"2.30263",strokeLinecap:"round",strokeLinejoin:"round"})}),Y=({color:s="white"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"-1 -1 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 3.12695C16.8578 3.34932 17.6174 3.85022 18.1597 4.55102C18.702 5.25181 18.9962 6.11284 18.9962 6.99895C18.9962 7.88506 18.702 8.74609 18.1597 9.44689C17.6174 10.1477 16.8578 10.6486 16 10.871",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M22 21.0009V19.0009C21.9993 18.1146 21.7044 17.2536 21.1614 16.5532C20.6184 15.8527 19.8581 15.3524 19 15.1309",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),K=({color:s="white"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M17.4168 3.16644V6.33311",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.91681 3.16644V6.33311",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.91663 4.74969H6.33329C5.49344 4.74969 4.68799 5.08332 4.09412 5.67719C3.50026 6.27106 3.16663 7.07651 3.16663 7.91636V14.2497C3.16663 16.7693 4.16752 19.1856 5.94911 20.9672C7.73071 22.7488 10.1471 23.7497 12.6666 23.7497C15.1862 23.7497 17.6025 22.7488 19.3841 20.9672C21.1657 19.1856 22.1666 16.7693 22.1666 14.2497V7.91636C22.1666 7.07651 21.833 6.27106 21.2391 5.67719C20.6453 5.08332 19.8398 4.74969 19 4.74969H17.4166",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12.6666 23.7499C12.6666 26.2695 13.6675 28.6859 15.4491 30.4675C17.2306 32.249 19.647 33.2499 22.1666 33.2499C24.6861 33.2499 27.1025 32.249 28.8841 30.4675C30.6657 28.6859 31.6666 26.2695 31.6666 23.7499V18.9999",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M31.6667 18.9998C33.4156 18.9998 34.8334 17.582 34.8334 15.8331C34.8334 14.0842 33.4156 12.6664 31.6667 12.6664C29.9178 12.6664 28.5001 14.0842 28.5001 15.8331C28.5001 17.582 29.9178 18.9998 31.6667 18.9998Z",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Z=({color:s="white"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M10.8717 2.7766C10.914 2.55022 11.0341 2.34576 11.2113 2.19862C11.3885 2.05149 11.6115 1.97095 11.8418 1.97095C12.0721 1.97095 12.2951 2.05149 12.4723 2.19862C12.6494 2.34576 12.7696 2.55022 12.8119 2.7766L13.849 8.26147C13.9227 8.65142 14.1122 9.0101 14.3928 9.29071C14.6734 9.57133 15.0321 9.76083 15.422 9.83449L20.9069 10.8717C21.1333 10.9139 21.3378 11.0341 21.4849 11.2112C21.632 11.3884 21.7126 11.6114 21.7126 11.8417C21.7126 12.072 21.632 12.2951 21.4849 12.4722C21.3378 12.6494 21.1333 12.7695 20.9069 12.8118L15.422 13.849C15.0321 13.9226 14.6734 14.1121 14.3928 14.3927C14.1122 14.6734 13.9227 15.032 13.849 15.422L12.8119 20.9069C12.7696 21.1332 12.6494 21.3377 12.4723 21.4848C12.2951 21.632 12.0721 21.7125 11.8418 21.7125C11.6115 21.7125 11.3885 21.632 11.2113 21.4848C11.0341 21.3377 10.914 21.1332 10.8717 20.9069L9.83455 15.422C9.76089 15.032 9.57138 14.6734 9.29077 14.3927C9.01016 14.1121 8.65147 13.9226 8.26152 13.849L2.77665 12.8118C2.55028 12.7695 2.34581 12.6494 2.19868 12.4722C2.05154 12.2951 1.971 12.072 1.971 11.8417C1.971 11.6114 2.05154 11.3884 2.19868 11.2112C2.34581 11.0341 2.55028 10.9139 2.77665 10.8717L8.26152 9.83449C8.65147 9.76083 9.01016 9.57133 9.29077 9.29071C9.57138 9.0101 9.76089 8.65142 9.83455 8.26147L10.8717 2.7766Z",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M19.7367 1.97302V5.92039",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M21.7104 3.94678H17.763",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3.94725 21.7098C5.03729 21.7098 5.92094 20.8262 5.92094 19.7361C5.92094 18.6461 5.03729 17.7625 3.94725 17.7625C2.85722 17.7625 1.97357 18.6461 1.97357 19.7361C1.97357 20.8262 2.85722 21.7098 3.94725 21.7098Z",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});function ge({iconColor:s="white",cardBg:o,cardBorder:x,iconBg:r}){const l=[{icon:e.jsx(G,{color:s}),title:"Health Camps",description:"Regular health camps in underserved areas providing free check-ups and health education"},{icon:e.jsx(Y,{color:s}),title:"Rural Outreach",description:"Community health programmes focusing on preventive care and health awareness"},{icon:e.jsx(K,{color:s}),title:"Health Education",description:"Workshops and sessions on hygiene, nutrition, disease prevention, and wellness"},{icon:e.jsx(Z,{color:s}),title:"Ethical Training",description:"Focus on compassionate care, professional ethics, and patient-centered values"}];return e.jsx(O,{title:"Social Commitment",bgColor:"#FFF",innerHeading:"Service-Oriented Education",image:q,paragraphs:["As part of the ASRAM educational society, the nursing school actively participates in health camps, rural outreach, and community health programmes—aligning education with service to society.","The focus on holistic development includes instilling ethics, empathy, and a service-oriented mindset among nursing students, preparing them to serve diverse communities with compassion and dedication."],children:e.jsx("div",{className:`\r
          grid \r
          grid-cols-1 \r
          sm:grid-cols-2 \r
          lg:grid-cols-2 \r
          xl:grid-cols-4\r
          gap-[20px]\r
          w-full\r
        `,children:l.map((c,a)=>e.jsx(b,{...c,variant:"socialCommitment",cardBg:o,cardBorder:x,iconBg:r},a))})})}const _="/AsramWebsite-FE/assets/nursing/doctor_1.png",U="/AsramWebsite-FE/assets/nursing/doctor_2.png",J="/AsramWebsite-FE/assets/nursing/doctor_3.png",v="/AsramWebsite-FE/assets/nursing/experience.svg",N="/AsramWebsite-FE/assets/nursing/weekcal.svg",F="/AsramWebsite-FE/assets/nursing/timeperiod.svg";function he({heading:s="Faculty Spotlight",facultyData:o,iconConfig:x={color:"#223F7F",width:"18",height:"18",strokeWidth:"2"},primaryButtonConfig:r={text:"Book Appointment",className:"flex-1 h-[48.7px] rounded-[9.7px] text-[14px] font-medium bg-[#008C8C] text-white hover:bg-[#007A7A]"},secondaryButtonConfig:l={text:"View Profile",className:"w-[120.2px] h-[48.7px] rounded-[9.7px] text-[14px] font-medium bg-white border border-[#D1D5DB] text-gray-700 hover:bg-gray-50"},roleConfig:c={color:t.color.dark,fontSize:"text-[16px] md:text-[18px]",fontWeight:"font-normal"},ctaConfig:a={bg:t.color.primary,color:"#FFFFFF",textSize:"text-[15px]",className:"rounded-[10px]",width:"200px",height:"48px"},spacingConfig:i={paddingClass:"px-[24px] py-[26px]",headerGap:"gap-[14px]",nameMb:"mb-[10px]",roleMb:"mb-[10px]",qualificationMt:"mt-[6px]",detailsMt:"mt-[6px]",detailsGap:"gap-[10px]",buttonsMt:"mt-[20px]",buttonsPt:"pt-[20px]",borderClass:"border-t border-[#E5E5E5]"},cardBorder:d="border-[2px] border-[#D0D7E2]"}){const p=o||[{img:_,name:"Dr. Rajesh Kumar",role:"Cardiologist",qualification:"MBBS, MD, DM (Cardiology)",details:[{icon:e.jsx("img",{src:v,className:"w-[18px] h-[18px]"}),text:"20+ Years Experience"},{icon:e.jsx("img",{src:N,className:"w-[18px] h-[18px]"}),text:"Mon - Fri"},{icon:e.jsx("img",{src:F,className:"w-[18px] h-[18px]"}),text:"9:00 AM - 5:00 PM"}],badge:"Leadership"},{img:U,name:"Dr. Priya Sharma",role:"Neurologist",qualification:"MBBS, MD, DM (Neurology)",details:[{icon:e.jsx("img",{src:v,className:"w-[18px] h-[18px]"}),text:"15+ Years Experience"},{icon:e.jsx("img",{src:N,className:"w-[18px] h-[18px]"}),text:"Mon - Sat"},{icon:e.jsx("img",{src:F,className:"w-[18px] h-[18px]"}),text:"10:00 AM - 6:00 PM"}],badge:"Leadership"},{img:J,name:"Dr. Amit Patel",role:"Orthopedic Surgeon",qualification:"MBBS, MS (Orthopedics)",details:[{icon:e.jsx("img",{src:v,className:"w-[18px] h-[18px]"}),text:"18+ Years Experience"},{icon:e.jsx("img",{src:N,className:"w-[18px] h-[18px]"}),text:"Tue - Sat"},{icon:e.jsx("img",{src:F,className:"w-[18px] h-[18px]"}),text:"11:00 AM - 7:00 PM"}],badge:"Leadership"}];return e.jsx(u,{bg:t.bg.section,paddingClass:"py-[40px] md:py-[80px]",children:e.jsxs("div",{className:"flex flex-col gap-[50px]",children:[e.jsx("h2",{className:`
            ${t.font.family}
            ${t.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `,style:{color:t.color.text.secondary},children:s}),e.jsx("div",{className:`\r
            grid \r
            grid-cols-1 \r
            sm:grid-cols-2 \r
            lg:grid-cols-3\r
            gap-[32px] md:gap-[40px]\r
            w-full\r
          `,children:p.map((n,f)=>e.jsxs("div",{className:`
                w-full
                bg-white rounded-[20px]
                ${d}
                flex flex-col
                relative
                overflow-hidden
              `,children:[e.jsxs("div",{className:"w-full h-[260px] sm:h-[280px] md:h-[300px] bg-gray-200 rounded-t-[10px]",children:[e.jsx("img",{loading:"lazy",decoding:"async",src:n.img,alt:n.name,className:`\r
                    w-full h-full\r
                    object-cover rounded-t-[10px]\r
                  `}),n.badge&&e.jsx("span",{className:`\r
                        absolute top-[16px] right-[16px] \r
                        px-[12px] py-[6px] \r
                        rounded-[4px] \r
                        text-[12px] font-medium \r
                        uppercase tracking-wider\r
                        bg-[#223F7F] text-white\r
                    `,children:n.badge})]}),e.jsxs("div",{className:`${i.paddingClass} flex flex-col ${i.headerGap}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`
                      ${t.font.family}
                      ${t.font.weight.semibold}
                      text-[18px] md:text-[20px]
                      ${i.nameMb}
                      leading-[26px] md:leading-[28px]
                    `,style:{color:t.color.text.secondary},children:n.name}),e.jsx("p",{className:`
                      ${t.font.family}
                      ${c.fontSize}
                      ${c.fontWeight}
                      ${i.roleMb}
                      leading-[24px]
                    `,style:{color:c.color},children:n.role}),n.qualification&&e.jsx("p",{className:`
                        ${t.font.family}
                        text-[14px] leading-[20px]
                        ${i.qualificationMt}
                      `,style:{color:t.color.dark},children:n.qualification})]}),e.jsx("div",{className:`flex flex-col ${i.detailsGap} ${i.detailsMt}`,children:n.details&&n.details.map((g,h)=>e.jsxs("div",{className:"flex items-center gap-[10px]",children:[g.icon,e.jsx("span",{className:`${t.font.family} text-[14px] leading-[20px]`,style:{color:t.color.text.muted},children:g.text})]},h))}),e.jsxs("div",{className:`flex flex-row gap-[12px] ${i.buttonsMt} ${i.buttonsPt} ${i.borderClass}`,children:[e.jsx("button",{className:`
                      transition-colors
                      flex items-center justify-center
                      whitespace-nowrap
                      ${r.className}
                    `,children:e.jsxs("div",{className:"flex items-center gap-2",children:[r.icon,r.text]})}),e.jsx("button",{className:`
                      transition-colors
                      flex items-center justify-center
                      whitespace-nowrap
                      ${l.className}
                    `,children:l.text})]})]})]},f))}),e.jsx("div",{className:"flex justify-center mt-[10px]",children:e.jsx(I,{bg:a.bg,color:a.color,textSize:a.textSize,className:a.className,width:a.width,height:a.height,fontWeight:a.fontWeight,children:"Meet All Faculty"})})]})})}const Q="/AsramWebsite-FE/assets/icons/CheckMarkIcon.svg",X=e.jsx("img",{src:Q,className:"w-[14px] h-[14px] shrink-0",alt:""});function ee({title:s="Why Choose ASRAM Nursing?",columns:o,CheckIcon:x}){const l=o||[{title:"Educational Excellence",items:["Integration with comprehensive multispecialty hospital","Robust infrastructure across the 10-acre campus","Recognized affiliations and regulatory approvals"]},{title:"Student Success",items:["Clear pathways from undergraduate to postgraduate","Student-centered environment with strong mentoring","Practical orientation ensuring job readiness"]}],c=x||X;return e.jsx("div",{className:"w-full mt-[50px] mb-[80px]",children:e.jsx("div",{className:"w-full flex flex-col items-center",children:e.jsxs("div",{className:`\r
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
            `,style:{color:"#223F7F"},children:s}),e.jsx("div",{className:`\r
              grid \r
              grid-cols-1 \r
              md:grid-cols-2 \r
              gap-x-[31.6px]\r
              gap-y-[31.6px]\r
              w-full\r
              max-w-[1120px]\r
            `,children:l.map((a,i)=>e.jsxs("div",{className:"flex flex-col gap-[15.8px]",children:[e.jsx("h3",{className:`
                    ${t.font.family}
                    ${t.font.weight.semibold}
                    text-[18px] md:text-[20px]
                    leading-[26px]
                  `,style:{color:"#223F7F"},children:a.title}),e.jsx("ul",{className:"flex flex-col gap-[10px]",children:a.items.map((d,m)=>e.jsxs("li",{className:"flex items-center gap-[10px]",children:[c,e.jsx("p",{className:`
                          ${t.font.family}
                          text-[14px] sm:text-[15px]
                          leading-[22px]
                          text-[#191919BF]
                        `,children:d})]},m))})]},i))})]})})})}const te="/AsramWebsite-FE/assets/icons/IconHospitalIntegration.svg",se="/AsramWebsite-FE/assets/icons/IconRobustInfra.svg",ae="/AsramWebsite-FE/assets/icons/IconRecognizedAffiliations.svg",ie="/AsramWebsite-FE/assets/icons/IconClearPathways.svg",ne="/AsramWebsite-FE/assets/icons/IconStudentCentered.svg",re="/AsramWebsite-FE/assets/icons/IconOrientation.svg";function ue({heading:s="Key Strengths",data:o,iconConfig:x={},cardConfig:r={},whyChooseConfig:l={},bgColor:c="bg-[#EEF2F7]",paddingClass:a="py-[80px]",showWhyChoose:i=!0}){const m=o||[{icon:e.jsx("img",{src:te,className:"w-[28px] h-[28px]",alt:""}),title:"Hospital Integration",description:"Comprehensive multispecialty hospital providing real-time clinical exposure and practical training"},{icon:e.jsx("img",{src:se,className:"w-[28px] h-[28px]",alt:""}),title:"Robust Infrastructure",description:"State-of-the-art labs, simulation centers, library, hostels, and sports facilities"},{icon:e.jsx("img",{src:ae,className:"w-[28px] h-[28px]",alt:""}),title:"Recognized Affiliations",description:"INC approval and NTRUHS affiliation lending credibility and national recognition"},{icon:e.jsx("img",{src:ie,className:"w-[28px] h-[28px]",alt:""}),title:"Clear Pathways",description:"Structured progression from undergraduate to postgraduate levels within the institution"},{icon:e.jsx("img",{src:ne,className:"w-[28px] h-[28px]",alt:""}),title:"Student-Centered Environment",description:"Strong mentoring, favorable faculty ratio, and personalized attention for holistic growth"},{icon:e.jsx("img",{src:re,className:"w-[28px] h-[28px]",alt:""}),title:"Practical Orientation",description:"Emphasis on hands-on training, simulation, and clinical rotations over theoretical learning alone"}];return e.jsxs(u,{bg:c,paddingClass:a,children:[e.jsxs("div",{className:"flex flex-col gap-[50px]",children:[e.jsx("h2",{className:`
            ${t.font.family}
            ${t.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `,style:{color:t.color.text.secondary},children:s}),e.jsx("div",{className:`\r
            grid \r
            grid-cols-1 \r
            sm:grid-cols-2 \r
            lg:grid-cols-3\r
            gap-[20px]\r
            w-full\r
          `,children:m.map((p,n)=>e.jsx(b,{variant:"keystrength",icon:p.icon,title:p.title,description:p.description,iconBg:x.bg,iconContainerClassName:x.className,cardBg:r.bg,cardBorder:r.border,borderColor:r.borderColor},n))})]}),i&&e.jsx(ee,{title:l?.title,columns:l?.columns,CheckIcon:l?.CheckIcon})]})}export{pe as A,he as F,b as I,ue as K,de as S,me as V,ge as a};
