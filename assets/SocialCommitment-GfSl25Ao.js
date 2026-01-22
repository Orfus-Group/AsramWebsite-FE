import{j as e}from"./animations-DcqeVXJS.js";import{T as t,P as w}from"./index-DChSeORM.js";import"./vendor-x-yVq9gV.js";function b({icon:s,title:n,description:o,ctafontweight:p,years:r,seats:c,variant:a="program",buttonText:x,onClick:d,className:l="",iconBg:i,cardBg:g,badgeBg:j,badgeClassName:m,iconContainerClassName:u,cardBorder:y,borderColor:F,titleClassName:k="",titleColor:N,borderRadius:C}){const $=a==="program",v={program:{wrapper:`
      w-full             
      h-full
      flex flex-col items-start justify-start
      rounded-[12px]
      ${l}
      `,wrapperStyle:{backgroundColor:g||"#EEF2F7",border:"1px solid rgba(7, 7, 7, 0.2)",padding:"30px",gap:"20px",borderRadius:"12px"},title:`
        ${t.font.family}
        ${t.font.weight.semibold}
        text-[22px] md:text-[24px] leading-[1.3]
        text-left
      `,paragraph:`
        w-full
        ${t.font.family} text-[16px] leading-[24px] text-left
      `},vmv:{wrapper:`
    w-full                 /* allow responsive width */
    h-full
    flex flex-col items-start justify-start
    rounded-[12px]
    ${l}
  `,wrapperStyle:{backgroundColor:g||"#FFFFFF",border:"1px solid rgba(7, 7, 7, 0.2)",padding:"30px",gap:"20px"},title:`
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
  `,wrapperStyle:{backgroundColor:"#FFF",padding:"30px",gap:"12px",borderBottom:`4px solid ${F||"#008C8C"}`,borderTop:"none",borderLeft:"none",borderRight:"none",borderRadius:"12px",boxShadow:"0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)"},title:`
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
            ${l}
            `,wrapperStyle:{backgroundColor:g||"#FFFFFF",borderRadius:"12px",padding:"20px",gap:"12px",border:y||"none",boxShadow:"0px 8px 16px 0px rgba(0, 140, 140, 0.04), 0px 0px 4px 0px rgba(0, 140, 140, 0.04), 0px 0px 4px 0px rgba(0, 140, 140, 0.08)"},title:`
    ${t.font.family}
    ${t.font.weight.semibold}
    text-[22px] leading-[1.2]
    text-left
    w-full
    ${k}
  `,paragraph:`
    ${t.font.family}
    font-normal
    text-[18px] leading-[1.44]
    text-left
    w-full
  `}},h=v[a]||v.program,L=()=>{const f=typeof s!="string";return a==="research"?e.jsx("div",{className:"w-[40px] h-[40px] flex items-center justify-center shrink-0",children:f?s:e.jsx("img",{loading:"lazy",decoding:"async",src:s,alt:"",className:"w-[38px] h-[38px] object-contain"})}):a==="keystrength"?e.jsx("div",{className:`
                        flex items-center justify-center shrink-0
                        ${u||"w-[55.26px] h-[55.26px] rounded-[9.87px]"}
                    `,style:{backgroundColor:i||t.color.primary},children:f?s:e.jsx("img",{loading:"lazy",decoding:"async",src:s,alt:"",className:"w-[28px] h-[28px] object-contain"})}):a==="whychoose"?e.jsx("div",{className:"flex items-center justify-center shrink-0",style:{width:"55.26px",height:"55.26px",borderRadius:"16.18px",backgroundColor:"#223F7F1A"},children:f?s:e.jsx("img",{loading:"lazy",decoding:"async",src:s,alt:"",className:"w-[28px] h-[28px] object-contain"})}):e.jsx("div",{className:`
          flex items-center justify-center
          rounded-[9.9px]
          shrink-0
          ${u||"w-[55.3px] h-[55.3px]"}
        `,style:{backgroundColor:i||t.color.primary},children:f?s:e.jsx("img",{loading:"lazy",decoding:"async",src:s,alt:"",className:"w-[28px] h-[28px] object-contain"})})};return e.jsxs("div",{className:h.wrapper,style:{...h.wrapperStyle,...g?{backgroundColor:g}:{},...y?{border:y,boxShadow:"none"}:{},...C?{borderRadius:C}:{}},children:[L(),e.jsx("h4",{className:h.title,style:{color:N||t.color.text.secondary},children:n}),$&&e.jsx("div",{className:"flex items-center gap-[10px]",children:e.jsx("span",{className:`
              flex items-center justify-center
              rounded-[4px]
              ${p}
              font-montserrat text-[14px] leading-[1.43]
              ${m||"h-[30px] px-[12px]"}
            `,style:{backgroundColor:j||t.color.primary,color:"#FFFFFF"},children:r})}),e.jsx("p",{className:h.paragraph,style:{color:a==="whychoose"?"rgba(25, 25, 25, 0.75)":a==="research"?"#191919BF":"#6B7280"},children:o}),x&&e.jsxs("button",{onClick:d,className:"mt-4 flex items-center gap-2 text-[#008C8C] font-semibold text-[14px] hover:underline",children:[x," ",e.jsx("span",{children:"→"})]})]})}const S="/AsramWebsite-FE/assets/icons/MedicalIcon.svg",E="/AsramWebsite-FE/assets/icons/IconArtFacilities.svg",A="/AsramWebsite-FE/assets/icons/IconAccredited.svg";function J({programs:s,iconBg:n,cardBg:o,ctafontweight:p,badgeBg:r,badgeClassName:c,titleColor:a,iconFilter:x}){const l=s||[{icon:e.jsx("img",{src:S,className:"w-[28px] h-[28px] invert brightness-0",alt:""}),title:"B.Sc Nursing",years:"4 Years Full-Time",seats:"~100 Seats",description:"Flagship undergraduate programme integrating theoretical lectures, practical labs, simulation, and clinical postings. Prepares students for both patient care and professional advancement."},{icon:e.jsx("img",{src:E,className:"w-[28px] h-[28px]",alt:""}),title:"General Nursing",years:"3 Years Full-Time",seats:"~60 Seats",description:"Diploma level programme providing comprehensive training in nursing fundamentals and midwifery practices, preparing students for immediate clinical roles."},{icon:e.jsx("img",{src:A,className:"w-[28px] h-[28px]",alt:""}),title:"M.Sc Nursing",years:"3 Years Full-Time",seats:"~60 Seats",description:"Specialization tracks include Medical-Surgical Nursing, Obstetrics & Gynaecological Nursing, Paediatric Nursing, Community Health Nursing, and Psychiatric Nursing."}];return e.jsxs(w,{bg:t.bg.white,paddingClass:"py-[80px]",children:[e.jsx("h2",{className:`
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
        `,children:l.map((i,g)=>e.jsx(b,{...i,variant:"program",ctafontweight:p,className:"w-full max-w-none",iconBg:n,cardBg:o,badgeBg:r,badgeClassName:c||"h-[36px] px-[20px]"},g))})]})}const I="/AsramWebsite-FE/assets/nursing/studentexp.png",W="/AsramWebsite-FE/assets/icons/IconPublicHealth.svg",M="/AsramWebsite-FE/assets/icons/IconPracticalLearning.svg",P="/AsramWebsite-FE/assets/icons/IconExtraCurricular.svg",R="/AsramWebsite-FE/assets/icons/IconAmenities.svg";function Q({data:s,iconBg:n,cardBg:o,iconContainerClassName:p,titleColor:r,cardBorder:c,titleClassName:a="min-h-[54px]",imageSrc:x=I,heading:d="Student Experience",subHeading:l="Comprehensive Learning Environment",description:i=["At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development.","At ASRAM School of Nursing, we prioritize creating an environment where students can thrive academically, professionally, and personally. Our approach combines rigorous academics with practical exposure and holistic development."]}){const j=s||[{icon:e.jsx("img",{src:W,className:"w-[24px] h-[24px]",alt:""}),title:"Favorable Faculty Ratio",desc:"+56 faculty for ~377 students ensures personalized attention and mentoring"},{icon:e.jsx("img",{src:M,className:"w-[24px] h-[24px]",alt:""}),title:"Practical Learning",desc:"Simulation, skills labs, clinical rotations, case discussions, and hands-on training"},{icon:e.jsx("img",{src:P,className:"w-[24px] h-[24px]",alt:""}),title:"Extra-Curricular Activities",desc:"Workshops, seminars, case-presentations, academic clubs, and competitive events"},{icon:e.jsx("img",{src:R,className:"w-[24px] h-[24px]",alt:""}),title:"Modern Amenities",desc:"Hostels, transport, WiFi connectivity, campus safety, and comprehensive support"}];return e.jsxs(w,{bg:"bg-[#FFF]",paddingClass:"py-[60px] md:py-[80px]",children:[e.jsx("div",{className:"flex flex-col gap-[8px] w-full mb-[32px] md:mb-[40px]",children:e.jsx("h2",{className:"font-montserrat font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-[38px] md:leading-[44px] lg:leading-[48px] text-[#223F7F]",children:d})}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-[30px] lg:gap-[40px] items-start mb-[60px] w-full mx-auto",children:[e.jsx("div",{className:"w-full lg:flex-1",children:e.jsx("img",{src:x,alt:d,className:"w-full h-auto lg:h-[361px] block object-cover rounded-[8px]"})}),e.jsxs("div",{className:"w-full lg:flex-1 flex flex-col items-start justify-between lg:h-[361px]",children:[e.jsx("h4",{className:"font-montserrat font-semibold text-[24px] md:text-[28px] lg:text-[28px] leading-[32px] md:leading-[38px] lg:leading-[42px] text-[#223F7F] max-w-full m-0 whitespace-normal lg:whitespace-nowrap",children:l}),e.jsx("div",{className:"flex flex-col gap-[20px] w-full",children:Array.isArray(i)?i.map((m,u)=>e.jsx("p",{className:"font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[26px] text-justify text-[#191919BF] m-0",children:m},u)):e.jsx("p",{className:"font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[26px] text-justify text-[#191919BF] m-0",children:i})})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] xl:gap-x-[20px] xl:gap-y-[20px] w-full justify-items-center xl:justify-items-stretch",children:j.map((m,u)=>e.jsx(b,{icon:m.icon,title:m.title,description:m.desc,variant:"studentExperience",iconBg:n,cardBg:o,iconContainerClassName:p,titleColor:r,cardBorder:c,titleClassName:a,borderRadius:"8px",className:"min-h-[270px]"},u))})]})}const V="/AsramWebsite-FE/assets/icons/IconCareerReady.svg",T="/AsramWebsite-FE/assets/icons/IconHeartCare.svg",H="/AsramWebsite-FE/assets/icons/IconAccredited.svg";function U({data:s,iconBg:n,cardBg:o,iconContainerClassName:p}){const c=s||[{icon:e.jsx("img",{src:V,className:"w-[28px] h-[28px]",alt:""}),title:"Vision",description:"To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands."},{icon:e.jsx("img",{src:T,className:"w-[28px] h-[28px]",alt:""}),title:"Mission",description:"To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands."},{icon:e.jsx("img",{src:H,className:"w-[28px] h-[28px]",alt:""}),title:"Values",description:"Compassion, excellence, integrity, service, innovation—students are trained not only in technical proficiency but also in ethical and patient-centered care."}];return e.jsxs(w,{bg:"bg-[#EEF2F7]",paddingClass:"py-[80px]",children:[e.jsx("h2",{className:`\r
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
          gap-[30px]\r
\r
          w-full\r
        `,children:c.map((a,x)=>e.jsx(b,{...a,variant:"vmv",className:"w-full max-w-none h-full",iconBg:n,cardBg:o,iconContainerClassName:p,cardBorder:"none"},x))})]})}function B({title:s,innerHeading:n,image:o,paragraphs:p=[],children:r,bg:c="bg-white",bgColor:a}){return e.jsxs(w,{bg:c,bgColor:a,paddingClass:"py-[80px]",children:[s&&e.jsx("h2",{className:`
          ${t.font.family}
          ${t.font.weight.bold}
          text-[32px] md:text-[36px]
          leading-[42px] md:leading-[48px]
          mb-[40px]
        `,style:{color:t.color.secondary},children:s}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-[47px] w-full",children:[e.jsx("div",{className:"w-full",children:e.jsx("img",{loading:"lazy",decoding:"async",src:o,alt:s,className:"w-full h-auto block object-cover rounded-[10px]"})}),e.jsxs("div",{className:"w-full flex flex-col gap-[24px]",children:[n&&e.jsx("h3",{className:`
              ${t.font.family}
              ${t.font.weight.semibold}
              text-[24px] md:text-[28px]
              leading-[32px] md:leading-[38px]
              max-w-[520px]
            `,style:{color:t.color.secondary},children:n}),e.jsx("div",{className:"flex flex-col gap-[16px]",children:p.map((x,d)=>e.jsx("p",{className:`
                  ${t.font.family}
                  text-[16px] md:text-[17px]
                  leading-[24px] md:leading-[26px]
                `,style:{color:"#191919BF"},children:x},d))})]})]}),e.jsx("div",{className:"mt-[40px]",children:r})]})}const z="/AsramWebsite-FE/assets/nursing/socialcommitment.png",O=({color:s="white"})=>e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{className:"transition-all duration-700",d:"M2.30261 10.9375C2.30264 9.65632 2.69129 8.40528 3.41724 7.34962C4.14319 6.29395 5.17229 5.48333 6.36861 5.02481C7.56493 4.56628 8.8722 4.48144 10.1178 4.78147C11.3633 5.0815 12.4886 5.7523 13.3449 6.70527C13.4052 6.76976 13.4781 6.82117 13.5591 6.85632C13.6401 6.89147 13.7275 6.90961 13.8158 6.90961C13.9041 6.90961 13.9914 6.89147 14.0724 6.85632C14.1534 6.82117 14.2263 6.76976 14.2867 6.70527C15.1403 5.74611 16.2658 5.06967 17.5134 4.76599C18.761 4.46232 20.0714 4.5458 21.2704 5.00533C22.4694 5.46486 23.4999 6.27865 24.2249 7.33838C24.95 8.39811 25.335 9.65351 25.3289 10.9375C25.3289 13.574 23.602 15.5428 21.8750 17.2697L15.5520 23.3867C15.3374 23.6331 15.0729 23.8310 14.7760 23.9673C14.4791 24.1036 14.1566 24.1752 13.8299 24.1772C13.5032 24.1793 13.1798 24.1118 12.8812 23.9793C12.5826 23.8468 12.3156 23.6522 12.0980 23.4086L5.75656 17.2697C4.02959 15.5428 2.30261 13.5855 2.30261 10.9375Z",stroke:s,strokeWidth:"2.30263",strokeLinecap:"round",strokeLinejoin:"round"})}),Z=({color:s="white"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"-1 -1 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 3.12695C16.8578 3.34932 17.6174 3.85022 18.1597 4.55102C18.702 5.25181 18.9962 6.11284 18.9962 6.99895C18.9962 7.88506 18.702 8.74609 18.1597 9.44689C17.6174 10.1477 16.8578 10.6486 16 10.871",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M22 21.0009V19.0009C21.9993 18.1146 21.7044 17.2536 21.1614 16.5532C20.6184 15.8527 19.8581 15.3524 19 15.1309",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Y=({color:s="white"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M17.4168 3.16644V6.33311",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.91681 3.16644V6.33311",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.91663 4.74969H6.33329C5.49344 4.74969 4.68799 5.08332 4.09412 5.67719C3.50026 6.27106 3.16663 7.07651 3.16663 7.91636V14.2497C3.16663 16.7693 4.16752 19.1856 5.94911 20.9672C7.73071 22.7488 10.1471 23.7497 12.6666 23.7497C15.1862 23.7497 17.6025 22.7488 19.3841 20.9672C21.1657 19.1856 22.1666 16.7693 22.1666 14.2497V7.91636C22.1666 7.07651 21.833 6.27106 21.2391 5.67719C20.6453 5.08332 19.8398 4.74969 19 4.74969H17.4166",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12.6666 23.7499C12.6666 26.2695 13.6675 28.6859 15.4491 30.4675C17.2306 32.249 19.647 33.2499 22.1666 33.2499C24.6861 33.2499 27.1025 32.249 28.8841 30.4675C30.6657 28.6859 31.6666 26.2695 31.6666 23.7499V18.9999",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M31.6667 18.9998C33.4156 18.9998 34.8334 17.582 34.8334 15.8331C34.8334 14.0842 33.4156 12.6664 31.6667 12.6664C29.9178 12.6664 28.5001 14.0842 28.5001 15.8331C28.5001 17.582 29.9178 18.9998 31.6667 18.9998Z",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),D=({color:s="white"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M10.8717 2.7766C10.914 2.55022 11.0341 2.34576 11.2113 2.19862C11.3885 2.05149 11.6115 1.97095 11.8418 1.97095C12.0721 1.97095 12.2951 2.05149 12.4723 2.19862C12.6494 2.34576 12.7696 2.55022 12.8119 2.7766L13.849 8.26147C13.9227 8.65142 14.1122 9.0101 14.3928 9.29071C14.6734 9.57133 15.0321 9.76083 15.422 9.83449L20.9069 10.8717C21.1333 10.9139 21.3378 11.0341 21.4849 11.2112C21.632 11.3884 21.7126 11.6114 21.7126 11.8417C21.7126 12.072 21.632 12.2951 21.4849 12.4722C21.3378 12.6494 21.1333 12.7695 20.9069 12.8118L15.422 13.849C15.0321 13.9226 14.6734 14.1121 14.3928 14.3927C14.1122 14.6734 13.9227 15.032 13.849 15.422L12.8119 20.9069C12.7696 21.1332 12.6494 21.3377 12.4723 21.4848C12.2951 21.632 12.0721 21.7125 11.8418 21.7125C11.6115 21.7125 11.3885 21.632 11.2113 21.4848C11.0341 21.3377 10.914 21.1332 10.8717 20.9069L9.83455 15.422C9.76089 15.032 9.57138 14.6734 9.29077 14.3927C9.01016 14.1121 8.65147 13.9226 8.26152 13.849L2.77665 12.8118C2.55028 12.7695 2.34581 12.6494 2.19868 12.4722C2.05154 12.2951 1.971 12.072 1.971 11.8417C1.971 11.6114 2.05154 11.3884 2.19868 11.2112C2.34581 11.0341 2.55028 10.9139 2.77665 10.8717L8.26152 9.83449C8.65147 9.76083 9.01016 9.57133 9.29077 9.29071C9.57138 9.0101 9.76089 8.65142 9.83455 8.26147L10.8717 2.7766Z",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M19.7367 1.97302V5.92039",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M21.7104 3.94678H17.763",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3.94725 21.7098C5.03729 21.7098 5.92094 20.8262 5.92094 19.7361C5.92094 18.6461 5.03729 17.7625 3.94725 17.7625C2.85722 17.7625 1.97357 18.6461 1.97357 19.7361C1.97357 20.8262 2.85722 21.7098 3.94725 21.7098Z",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});function X({iconColor:s="white",cardBg:n,cardBorder:o,iconBg:p,data:r,description:c}){const x=[{icon:e.jsx(O,{color:s}),title:"Health Camps",description:"Regular health camps in underserved areas providing free check-ups and health education"},{icon:e.jsx(Z,{color:s}),title:"Rural Outreach",description:"Community health programmes focusing on preventive care and health awareness"},{icon:e.jsx(Y,{color:s}),title:"Health Education",description:"Workshops and sessions on hygiene, nutrition, disease prevention, and wellness"},{icon:e.jsx(D,{color:s}),title:"Ethical Training",description:"Focus on compassionate care, professional ethics, and patient-centered values"}].map((l,i)=>r&&r[i]?{...l,...r[i]}:l),d=["As part of the ASRAM educational society, the nursing school actively participates in health camps, rural outreach, and community health programmes—aligning education with service to society. Students engage directly with communities to understand real-world healthcare needs.","The focus on holistic development includes instilling ethics, empathy, and a service-oriented mindset among nursing students, preparing them to serve diverse communities with compassion and dedication."];return e.jsx(B,{title:"Social Commitment",bgColor:"#FFF",innerHeading:"Service-Oriented Education",image:z,paragraphs:c||d,children:e.jsx("div",{className:`\r
          grid \r
          grid-cols-1 \r
          sm:grid-cols-2 \r
          lg:grid-cols-2 \r
          xl:grid-cols-4\r
          gap-[20px]\r
          w-full\r
        `,children:x.map((l,i)=>e.jsx(b,{...l,variant:"socialCommitment",cardBg:n,cardBorder:o,iconBg:p},i))})})}export{J as A,b as I,Q as S,U as V,X as a};
