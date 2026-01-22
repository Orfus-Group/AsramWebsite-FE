import{j as e,u as g,a as u,m as j}from"./animations-DcqeVXJS.js";import{L as d,r as x}from"./vendor-x-yVq9gV.js";import{C as c}from"./ContentImageSection-SEWiQdTm.js";import{P as o,T as s,u as C}from"./index-IyVwl3JO.js";import{I as k}from"./InfoCardGrid-Juj1Y-f6.js";import{B as f}from"./button-Bl41KNEk.js";import{A as w}from"./AsramNewsEvents-B8V3y2Ki.js";import{A as p}from"./AnimatedStatValue-dDanrfJe.js";import{T as l}from"./TypedText-DaP74K0N.js";const b="/AsramWebsite-FE/assets/asram/reputationbuilt.png",F=()=>e.jsx(c,{title:"A Reputation Built on Quality",description:"ASRAM School of Nursing is widely respected for its high-quality teaching, strong clinical training, and excellent student outcomes. Our programs continue to earn strong recognition for academic standards and hands-on learning.",description2:"ASRAM School of Nursing is widely respected for its high-quality teaching, strong clinical training, and excellent student outcomes.",image:b,buttonText:"Explore Our Achievements",buttonLink:"#",showButton:!0,reverse:!0}),v=({size:t=22,stroke:r="#191919",strokeWidth:n=2,className:i=""})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i,children:[e.jsx("path",{d:"M2.75 11H18.7917",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12.8333 4.58342L19.2499 11.0001L12.8333 17.4167",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),y="/AsramWebsite-FE/assets/icons/MedicalIcon.svg",N="/AsramWebsite-FE/assets/icons/HeartCareIcon.svg",A="/AsramWebsite-FE/assets/icons/IconParamedical.svg",M=[{id:1,icon:y,name:"ASRAM Medical College",tagline:"Shaping Future Doctors",description:"Recognized medical college with strong academics, clinical training, and research.",cta:"Visit Medical College"},{id:2,icon:N,name:"ASRAM College of Nursing",tagline:"Precision-Driven Cancer Care",description:"B.Sc Nursing & GNM programs with hands-on skill labs and hospital training.",cta:"Visit Nursing College Website"},{id:3,icon:A,name:"ASRAM Paramedical Institute",tagline:"Technical Excellence in Healthcare",description:"Professional programs in allied health sciences supporting modern medical systems.",cta:"Visit Paramedical Website"}],L={1:"#C0392B",2:"#008C8C",3:"#A66E00"},H={1:"rgba(192,57,43,0.10)",2:"rgba(0,140,140,0.10)",3:"rgba(166,110,0,0.10)"},E={1:"#C0392B1A",2:"#008C8C1A",3:"#A66E001A"},S=()=>e.jsxs(o,{bg:"bg-[#EEF2F7]",paddingClass:"py-[40px] md:py-[60px] lg:py-[80px]",children:[e.jsx("div",{className:"absolute top-[-60px] lg:top-[-90px] right-8 lg:right-[92px] opacity-30 select-none pointer-events-none"}),e.jsxs("div",{className:"w-full",children:[e.jsx("h2",{className:`
            ${s.font.weight.bold} 
            text-[#223F7F]
            text-[28px] sm:text-[34px] lg:text-[42px]
            leading-[36px] sm:leading-[44px] lg:leading-[52px]
            mb-[6px]
          `,children:"Our Institutions"}),e.jsx("p",{className:`
            ${s.font.weight.medium} 
            text-[#6B6B6B]
            text-[18px] sm:text-[20px] lg:text-[22px]
            leading-[28px] sm:leading-[30px] lg:leading-[32px]
            mt-[2px] mb-[30px] lg:mb-[45px]
          `,children:"Three Institutions. One Vision for Future Healthcare Leaders."}),e.jsx("div",{className:`\r
            grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            md:grid-cols-3\r
            gap-[26px]\r
            items-stretch\r
          `,children:M.map(t=>e.jsx("div",{className:`\r
                group \r
                h-full\r
                min-h-[399px]\r
                bg-white \r
                rounded-[8px] \r
                border border-[#E1E6EF] \r
                p-[30px]\r
                flex flex-col\r
              `,children:e.jsxs("div",{className:"flex flex-col gap-[26px] h-full",children:[e.jsx("div",{className:`\r
                  w-[64px] h-[64px] \r
                  rounded-[12px] flex items-center justify-center \r
                  flex-shrink-0\r
                `,style:{backgroundColor:H[t.id]},children:e.jsx("img",{src:t.icon,className:"w-[32px] h-[32px]",alt:""})}),e.jsx("div",{className:"flex items-start",children:e.jsxs("h6",{className:`
                    ${s.font.weight.semibold} 
                    text-[#191919]
                    text-[20px] sm:text-[18px] md:text-[16px] lg:text-[17px] xl:text-[17px] min-[1440px]:text-[21px]
                    leading-[28px] sm:leading-[32px]
                    relative pb-[8px]
                    w-full
                  `,children:[t.name,e.jsx("span",{className:"absolute left-0 bottom-0 w-[70px] sm:w-[84px] border-b-[2.5px]",style:{borderColor:L[t.id]}})]})}),e.jsx("div",{className:"flex items-center -mt-[14px]",children:e.jsx("p",{className:`
                    ${s.font.weight.medium}
                    text-[#223F7F]
                    text-[16px] sm:text-[18px] md:text-[14px] lg:text-[15px] xl:text-[16px] min-[1400px]:text-[18px]
                    leading-[26px] sm:leading-[28px]
                  `,children:t.tagline})}),e.jsx("div",{className:"",children:e.jsx("p",{className:`
                    ${s.font.weight.normal}
                    text-[#191919]
                    text-[16px] sm:text-[18px] md:text-[14px] lg:text-[15px] xl:text-[16px] min-[1400px]:text-[18px]
                    leading-[24px] sm:leading-[26px]
                  `,children:t.description})}),e.jsxs(d,{to:t.id===1?"/medical":t.id===2?"/nursing":t.id===3?"/paramedical":"#",className:`\r
                  mt-auto\r
                  w-full\r
                  h-[46px]\r
                  rounded-[6px]\r
                  py-[12px] px-[15px] pr-[5px]\r
                  flex items-center justify-center\r
                  gap-[6px] lg:gap-[8px]\r
                  text-center\r
                `,style:{backgroundColor:E[t.id]},children:[e.jsx("span",{className:`
                    ${s.font.weight.medium}
                    text-[13px] xs:text-[14px] md:text-[10px] lg:text-[12px] xl:text-[13.5px] min-[1400px]:text-[18px]
                    text-[#191919]
                    leading-tight
                    whitespace-nowrap
                    text-center
                  `,children:t.cta}),e.jsx("div",{className:"flex-shrink-0 flex items-center",children:e.jsx(v,{size:18,className:`\r
                      w-[18px] h-[18px]\r
                      sm:w-[18px] sm:h-[18px]\r
                      md:w-[14px] md:h-[14px]\r
                      lg:w-[15px] lg:h-[15px]\r
                      xl:w-[17px] xl:h-[17px]\r
                      min-[1400px]:w-[22px] min-[1400px]:h-[22px]\r
                      flex-shrink-0\r
                    `,stroke:"#191919",strokeWidth:2})})]})]})},t.id))})]})]}),W=({size:t=17,stroke:r="#223F7F",strokeWidth:n=1.38889,className:i=""})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:i,children:[e.jsx("path",{d:"M2.75 11H18.7917",stroke:r,"stroke-width":n,"stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M12.8333 4.58342L19.2499 11.0001L12.8333 17.4167",stroke:r,"stroke-width":n,"stroke-linecap":"round","stroke-linejoin":"round"})]}),I="/AsramWebsite-FE/assets/icons/HeartCareIcon.svg",B="/AsramWebsite-FE/assets/icons/IconHospital.svg",V=[{id:1,icon:B,name:"ASRAM Multispecialty Hospital",tagline:"Trusted Healthcare for All",description:"A 1300-bed NABH-accredited hospital offering complete medical, surgical, emergency care.",underline:"#223F7F",ctatext:"Visit Hospital Website",iconBg:"rgba(34, 63, 127, 0.10)",buttonBg:"rgba(34, 63, 127, 0.10)",taglineColor:"#223F7F",link:"/healthcare"},{id:2,icon:I,name:"ASRAM Cancer Care",tagline:"Empowering Compassionate Nurses",description:"Advanced oncology services with modern radiotherapy and comprehensive cancer care.",ctatext:"Visit Cancer Care Website",underline:"#6A1B9A",iconBg:"rgba(106, 27, 154, 0.10)",buttonBg:"rgba(106, 27, 154, 0.10)",taglineColor:"#223F7F",link:"#"}],R="rgba(26, 24, 24, 0.10)",$=()=>e.jsxs(o,{bg:"transparent",paddingClass:"py-[40px] md:py-[60px] lg:py-[80px]",children:[e.jsx("h1",{className:`\r
          font-bold text-[#223F7F]\r
          text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px]\r
          leading-[36px] sm:leading-[44px] lg:leading-[52px]\r
          mb-[6px]\r
        `,children:"Our Healthcare Services"}),e.jsx("h6",{className:`\r
          font-medium text-[#6B6B6B]\r
          text-[18px] sm:text-[20px] lg:text-[22px]\r
          leading-[28px] sm:leading-[30px] lg:leading-[32px]\r
          mb-[30px] lg:mb-[40px]\r
        `,children:"World-Class Care Backed by Cutting-Edge Technology."}),e.jsx("div",{className:`\r
          grid \r
          grid-cols-1\r
          md:grid-cols-2\r
          gap-[30px] md:gap-[40px]\r
        `,children:V.map(t=>e.jsxs("div",{className:`\r
              bg-[#EEF2F7] \r
              rounded-[8px]\r
              flex flex-col\r
              px-[24px] sm:px-[28px] pt-[24px] pb-[28px]\r
              shadow-[0px_12px_28px_rgba(15,23,42,0.06)]\r
              border border-[#B8C2D1]\r
            `,style:{borderColor:R,width:"100%"},children:[e.jsx("div",{className:`\r
                w-[64px] h-[64px] \r
                rounded-[12px]\r
                flex items-center justify-center \r
                mb-[30px]\r
              `,style:{backgroundColor:t.iconBg,color:t.underline},children:e.jsx("div",{className:"w-[32px] h-[32px] transition-colors duration-300",style:{backgroundColor:"currentColor",maskImage:`url(${t.icon})`,maskSize:"contain",maskRepeat:"no-repeat",maskPosition:"center",WebkitMaskImage:`url(${t.icon})`,WebkitMaskSize:"contain",WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center"}})}),e.jsxs("h6",{className:`\r
                font-semibold text-[#191919]\r
                text-[20px] sm:text-[22px]\r
                leading-[26px] sm:leading-[27px]\r
                mb-[14px] relative pb-[8px]\r
              `,children:[t.name,e.jsx("span",{className:"absolute left-0 bottom-0 border-b-[2.5px]",style:{width:"84px",borderColor:t.underline}})]}),e.jsx("p",{className:`\r
                font-mwedium \r
                text-[16px] sm:text-[18px]\r
                leading-[22px] sm:leading-[24px]\r
                mb-[16px]\r
              `,style:{color:t.taglineColor},children:t.tagline}),e.jsx("p",{className:`\r
                font-normal text-[#191919]\r
                text-[15px] sm:text-[16px]\r
                leading-[23px] sm:leading-[24px]\r
                mb-[24px]\r
              `,children:t.description}),e.jsxs(d,{to:t.link,className:`\r
                flex items-center justify-center gap-[6px]\r
                rounded-[6px]\r
                h-[46px]\r
                w-full\r
              `,style:{backgroundColor:t.buttonBg},children:[e.jsx("span",{className:`\r
                  font-medium text-[16px] sm:text-[18px]\r
                  text-[#191919]\r
                `,children:t.ctatext}),e.jsx("div",{children:e.jsx(W,{size:18,className:"sm:w-[20px] sm:h-[20px]",stroke:"#191919",strokeWidth:2})})]})]},t.id))})]}),P=()=>e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M13.8154 8.05859V24.177",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M3.45307 20.7229C3.14773 20.7229 2.85488 20.6016 2.63897 20.3857C2.42306 20.1697 2.30176 19.8769 2.30176 19.5715V4.60444C2.30176 4.29909 2.42306 4.00625 2.63897 3.79034C2.85488 3.57442 3.14773 3.45313 3.45307 3.45312H9.20965C10.431 3.45313 11.6024 3.93832 12.4661 4.80198C13.3297 5.66563 13.8149 6.837 13.8149 8.05839C13.8149 6.837 14.3001 5.66563 15.1638 4.80198C16.0274 3.93832 17.1988 3.45313 18.4202 3.45312H24.1768C24.4821 3.45313 24.7749 3.57442 24.9909 3.79034C25.2068 4.00625 25.3281 4.29909 25.3281 4.60444V19.5715C25.3281 19.8769 25.2068 20.1697 24.9909 20.3857C24.7749 20.6016 24.4821 20.7229 24.1768 20.7229H17.2689C16.3528 20.7229 15.4743 21.0868 14.8266 21.7345C14.1788 22.3822 13.8149 23.2608 13.8149 24.1768C13.8149 23.2608 13.451 22.3822 12.8033 21.7345C12.1555 21.0868 11.277 20.7229 10.361 20.7229H3.45307Z",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"})]}),T=()=>e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M18.4202 24.1774V21.8748C18.4202 20.6534 17.935 19.482 17.0713 18.6184C16.2077 17.7547 15.0363 17.2695 13.8149 17.2695H6.90702C5.68563 17.2695 4.51426 17.7547 3.65061 18.6184C2.78695 19.482 2.30176 20.6534 2.30176 21.8748V24.1774",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.4209 3.59961C19.4084 3.85563 20.283 4.43231 20.9074 5.23916C21.5317 6.046 21.8705 7.03731 21.8705 8.0575C21.8705 9.0777 21.5317 10.069 20.9074 10.8759C20.283 11.6827 19.4084 12.2594 18.4209 12.5154",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M25.3289 24.1781V21.8755C25.3282 20.8551 24.9886 19.8639 24.3634 19.0575C23.7383 18.251 22.863 17.675 21.875 17.4199",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M10.3621 12.6637C12.9055 12.6637 14.9674 10.6018 14.9674 8.05839C14.9674 5.51497 12.9055 3.45312 10.3621 3.45312C7.81868 3.45312 5.75684 5.51497 5.75684 8.05839C5.75684 10.6018 7.81868 12.6637 10.3621 12.6637Z",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"})]}),D=()=>e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M13.8164 11.5117H13.8281",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M13.8164 16.1191H13.8281",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M13.8164 6.90625H13.8281",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.4219 11.5117H18.4335",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.4219 16.1191H18.4335",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M18.4219 6.90625H18.4335",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M9.21094 11.5117H9.2226",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M9.21094 16.1191H9.2226",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M9.21094 6.90625H9.2226",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M10.3623 25.3279V21.874C10.3623 21.5686 10.4836 21.2758 10.6995 21.0599C10.9154 20.844 11.2083 20.7227 11.5136 20.7227H16.1189C16.4242 20.7227 16.7171 20.844 16.933 21.0599C17.1489 21.2758 17.2702 21.5686 17.2702 21.874V25.3279",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M20.7239 2.30273H6.9081C5.63639 2.30273 4.60547 3.33366 4.60547 4.60537V23.0264C4.60547 24.2981 5.63639 25.329 6.9081 25.329H20.7239C21.9956 25.329 23.0265 24.2981 23.0265 23.0264V4.60537C23.0265 3.33366 21.9956 2.30273 20.7239 2.30273Z",stroke:"#223F7F","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),z=()=>e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M18.4219 8.05859H25.3298V14.9665",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M25.3281 8.05859L15.5419 17.8448L9.78531 12.0882L2.30176 19.5718",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"})]}),O=()=>e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M13.8149 25.329C20.1735 25.329 25.3281 20.1744 25.3281 13.8159C25.3281 7.45735 20.1735 2.30273 13.8149 2.30273C7.45637 2.30273 2.30176 7.45735 2.30176 13.8159C2.30176 20.1744 7.45637 25.329 13.8149 25.329Z",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M13.8152 2.30273C10.8589 5.40686 9.20996 9.52924 9.20996 13.8159C9.20996 18.1025 10.8589 22.2249 13.8152 25.329C16.7715 22.2249 18.4205 18.1025 18.4205 13.8159C18.4205 9.52924 16.7715 5.40686 13.8152 2.30273Z",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M2.30176 13.8145H25.3281",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"})]}),Z=()=>e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M22.3517 16.5932C24.1777 14.7672 25.329 13.2383 25.329 10.9356C25.329 9.65445 24.9404 8.40341 24.2144 7.34775C23.4885 6.29209 22.4594 5.48146 21.2631 5.02294C20.0667 4.56442 18.7595 4.47957 17.5139 4.7796C16.2683 5.07964 15.1431 5.75043 14.2868 6.7034M22.3517 16.5932C22.1247 16.8203 21.8551 17.0005 21.5584 17.1234C21.2616 17.2463 20.9436 17.3096 20.6225 17.3096C20.3013 17.3096 19.9833 17.2463 19.6866 17.1234C19.3899 17.0005 19.1203 16.8203 18.8932 16.5932C19.1391 16.8155 19.3372 17.0855 19.4754 17.3868C19.6137 17.688 19.6893 18.0142 19.6977 18.3456C19.706 18.677 19.6469 19.0066 19.5239 19.3144C19.4009 19.6222 19.2166 19.9018 18.9822 20.1362C18.7478 20.3706 18.4682 20.5548 18.1604 20.6778C17.8526 20.8008 17.523 20.86 17.1916 20.8516C16.8603 20.8433 16.534 20.7677 16.2328 20.6294C15.9316 20.4911 15.6616 20.293 15.4392 20.0472C15.6665 20.2735 15.8469 20.5425 15.9702 20.8387C16.0934 21.1348 16.1571 21.4524 16.1575 21.7732C16.1579 22.094 16.0951 22.4117 15.9727 22.7082C15.8502 23.0047 15.6705 23.2741 15.4439 23.5011C15.2251 23.7199 14.9644 23.8924 14.6775 24.0083C14.3906 24.1242 14.0832 24.181 13.7738 24.1754C13.4644 24.1698 13.1593 24.1019 12.8768 23.9758C12.5942 23.8496 12.3399 23.6678 12.1292 23.4412L5.75668 17.2679C4.02971 15.5409 2.30273 13.5837 2.30273 10.9356C2.30299 9.65455 2.69181 8.40367 3.41785 7.34819C4.14389 6.29271 5.173 5.48226 6.36927 5.02388C7.56554 4.56551 8.87271 4.48075 10.1182 4.78082C11.3636 5.08089 12.4887 5.75166 13.345 6.70455C13.473 6.82352 13.6414 6.88955 13.8161 6.88934C13.9909 6.88913 14.1591 6.82268 14.2868 6.7034M22.3517 16.5932C22.7834 16.1614 23.0259 15.5758 23.0259 14.9652C23.0259 14.3547 22.7834 13.7691 22.3517 13.3373L20.1861 11.1705C19.9285 10.9127 19.6225 10.7082 19.2858 10.5687C18.9491 10.4292 18.5882 10.3574 18.2237 10.3574C17.8592 10.3574 17.4983 10.4292 17.1616 10.5687C16.8249 10.7082 16.519 10.9127 16.2613 11.1705L14.2925 13.1393C13.8607 13.5709 13.2752 13.8134 12.6646 13.8134C12.054 13.8134 11.4684 13.5709 11.0366 13.1393C10.6049 12.7074 10.3624 12.1219 10.3624 11.5113C10.3624 10.9007 10.6049 10.3151 11.0366 9.88334L14.2868 6.7034",stroke:"#223F7F","stroke-width":"2.30263","stroke-linecap":"round","stroke-linejoin":"round"})});function G(){const t=[{icon:e.jsx(P,{}),title:"Academic Excellence",description:"Rigorous curriculum aligned with international standards and best practices."},{icon:e.jsx(T,{}),title:"Expert Faculty",description:"Learn from experienced professionals and renowned medical practitioners."},{icon:e.jsx(D,{}),title:"World-Class Infrastructure",description:"State-of-the-art facilities, laboratories, and teaching hospitals."},{icon:e.jsx(z,{}),title:"Career Opportunities",description:"Strong placement record with excellent career support and guidance."},{icon:e.jsx(O,{}),title:"Global Recognition",description:"Degrees recognized internationally, opening doors to global opportunities."},{icon:e.jsx(Z,{}),title:"Holistic Development",description:"Focus on overall personality development beyond academics."}];return e.jsxs(o,{bg:s.bg.sectionCard,paddingClass:"py-[40px] md:py-[60px] lg:py-[80px]",children:[e.jsx("h2",{className:`
          
          ${s.font.weight.bold}
          text-[26px] leading-[34px]
          sm:text-[30px] sm:leading-[40px]
          md:text-[32px] md:leading-[44px]
          lg:text-[36px] lg:leading-[48px]
          mb-[20px] md:mb-[30px]
        `,style:{color:s.color.text.secondary},children:"Why Choose ASRAM"}),e.jsx(k,{items:t,gridClassName:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full mb-[40px]",cardClassName:"bg-white rounded-[8px] p-[30px] border border-[rgba(7,7,7,0.2)] h-full flex flex-col items-start transition-shadow",iconContainerClassName:"w-[55.3px] h-[55.3px] bg-[rgba(34,63,127,0.1)] rounded-[16.2px] flex items-center justify-center text-[#223F7F] mb-[12px] flex-shrink-0",titleClassName:"text-[#223F7F] font-bold text-[20px] leading-[1.2] mb-[12px] font-montserrat",descriptionClassName:"text-[rgba(25,25,25,0.75)] text-[18px] leading-[1.44] font-montserrat flex-1"}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx(f,{bg:s.color.secondary,color:s.color.background.white,font:s.font.family,weight:s.font.weight.medium,textSize:"text-[18px]",leading:"leading-[23.7px]",width:"201.47px",height:"47.37px",radius:"md",children:"Apply Now"})})]})}const q=({src:t,alt:r,className:n="",containerClassName:i=""})=>{const a=x.useRef(null),{scrollYProgress:h}=g({target:a,offset:["start end","end start"]}),m=u(h,[0,1],["-10%","10%"]);return e.jsx("div",{ref:a,className:`overflow-hidden relative ${i}`,children:e.jsx(j.img,{style:{y:m,scale:1.1},src:t,alt:r,className:`w-full h-full object-cover ${n}`,loading:"lazy",decoding:"async"})})},Q="/AsramWebsite-FE/assets/icons/IconQuote.svg",_=({title:t,image:r,quote:n})=>e.jsxs(o,{bg:"bg-white",paddingClass:"py-[40px] md:py-[60px] lg:py-[80px]",children:[e.jsx("h2",{className:`\r
          font-bold\r
          text-[28px] leading-[34px]\r
          sm:text-[34px] sm:leading-[42px]\r
          md:text-[38px] md:leading-[48px]\r
          lg:text-[42px] lg:leading-[52px]\r
          text-[#223F7F]\r
          mb-[30px] md:mb-[40px]\r
        `,children:t}),e.jsxs("div",{className:`\r
          flex flex-col\r
          lg:flex-row\r
          items-start\r
          lg:items-center\r
          gap-[30px]\r
          md:gap-[80px]\r
          w-full\r
        `,children:[e.jsx("div",{className:`\r
            w-full\r
            lg:w-[600px]\r
            lg:h-[411.5px]\r
            flex-shrink-0\r
            rounded-[12px]\r
            overflow-hidden\r
            bg-gray-200\r
            aspect-[3/2]\r
            lg:aspect-auto\r
            relative\r
          `,children:e.jsx(q,{src:r,alt:"Inside ASRAM",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:`\r
            w-full\r
            flex-1\r
            flex flex-col\r
            items-start\r
            justify-center\r
            h-full\r
          `,children:[e.jsx("img",{src:Q,className:"w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]",alt:""}),e.jsx("h5",{className:`\r
              mt-[24px]\r
              text-[18px]\r
              sm:text-[20px]\r
              md:text-[22px]\r
              lg:text-[24px]\r
              font-medium\r
              text-[#191919]\r
              leading-[1.4]\r
              text-left\r
            `,children:n})]})]})]}),Y=({title:t,description1:r,image:n,buttonLink:i})=>e.jsx(c,{title:t,description:r,image:n,buttonText:"Explore Research",buttonLink:i||"/research",showButton:!0,reverse:!1,gapClass:"gap-[30px] md:gap-[50px] lg:gap-[106px]"}),J="/AsramWebsite-FE/assets/asram/lab1.png",K="/AsramWebsite-FE/assets/asram/lab2.png",U="/AsramWebsite-FE/assets/asram/lab3.png",X=()=>{const t=[{title:"Advanced Diagnostic Laboratory",image:J},{title:"Clinical Skills Simulation Center",image:K},{title:"Practical Training Facility",image:U}],r=[{value:"15+",label:"Specialized Laboratories"},{value:"20+ hrs",label:"Weekly Practical Training"},{value:"1:10",label:"Faculty to Student Ratio"}];return e.jsxs(o,{bg:"bg-white",sectionClassName:"py-[60px] md:py-[80px]",children:[e.jsx("h2",{className:`
            ${s.font.family}
            ${s.font.weight.bold}
            text-[28px] md:text-[42px]
            text-[#223F7F]
            mb-[40px]
          `,children:"Laboratories & Practical Training"}),e.jsxs("div",{className:"flex flex-col gap-[40px]",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-[24px]",children:t.map((n,i)=>e.jsxs("div",{className:"flex flex-col rounded-[12px] overflow-hidden border border-[#E0E0E0]",children:[e.jsx("div",{className:"h-[256px] w-full overflow-hidden",children:e.jsx("img",{src:n.image,alt:n.title,className:"w-full h-full object-cover transition-transform duration-500"})}),e.jsx("div",{className:"h-[68px] flex items-center justify-center bg-white border-t border-[#E0E0E0]",children:e.jsx("span",{className:`
                  ${s.font.family}
                  ${s.font.weight.medium}
                  text-[18px]
                  text-[#191919]
                  leading-[28px]
                  text-center
                `,children:n.title})})]},i))}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-[24px]",children:r.map((n,i)=>e.jsxs("div",{className:`\r
              bg-[#EEF2F7]\r
              rounded-[8px]\r
              p-[24px]\r
              flex flex-col justify-center\r
              border-l-[4px] border-[#223F7F]\r
              h-[100px]\r
            `,children:[e.jsx(p,{value:n.value,className:`
                ${s.font.family}
                ${s.font.weight.bold}
                text-[24px]
                text-[#223F7F]
                leading-[32px]
                mb-[8px]
              `}),e.jsx("p",{className:`
                ${s.font.family}
                font-regular
                text-[18px]
                text-[#191919]
                leading-[26px]
              `,children:n.label})]},i))})]})]})},ee="/AsramWebsite-FE/assets/asram/clinicalexposure.png",te=()=>{const t=[{icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 7V11",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14 21V18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18V21",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14 9H10",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M18 11H20C20.5304 11 21.0391 11.2107 21.4142 11.5858C21.7893 11.9609 22 12.4696 22 13V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8H6",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M18 21V5C18 4.46957 17.7893 3.96086 17.4142 3.58579C17.0391 3.21071 16.5304 3 16 3H8C7.46957 3 6.96086 3.21071 6.58579 3.58579C6.21071 3.96086 6 4.46957 6 5V21",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),title:"Hospital Partnerships",description:"Tie-ups with 12+ multi-specialty hospitals for comprehensive clinical training"},{icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M11 2V4",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5 2V4",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V9C2 10.5913 2.63214 12.1174 3.75736 13.2426C4.88258 14.3679 6.4087 15 8 15C9.5913 15 11.1174 14.3679 12.2426 13.2426C13.3679 12.1174 14 10.5913 14 9V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3H11",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M8 15C8 16.5913 8.63214 18.1174 9.75736 19.2426C10.8826 20.3679 12.4087 21 14 21C15.5913 21 17.1174 20.3679 18.2426 19.2426C19.3679 18.1174 20 16.5913 20 15V12",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M20 12C21.1046 12 22 11.1046 22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10C18 11.1046 18.8954 12 20 12Z",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),title:"Supervised Practice",description:"Guided patient interaction under qualified healthcare professionals"},{icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 14L11 16L15 12",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),title:"Clinical Rotations",description:"Structured rotations across multiple departments and specializations"},{icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 3.12891C16.8578 3.35128 17.6174 3.85217 18.1597 4.55297C18.702 5.25377 18.9962 6.1148 18.9962 7.00091C18.9962 7.88702 18.702 8.74805 18.1597 9.44884C17.6174 10.1496 16.8578 10.6505 16 10.8729",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M22 20.9989V18.9989C21.9993 18.1126 21.7044 17.2517 21.1614 16.5512C20.6184 15.8508 19.8581 15.3505 19 15.1289",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",stroke:"#223F7F",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),title:"Professional Mentorship",description:"Direct guidance from experienced clinical practitioners and specialists"}],r=[{value:"600+",label:"Clinical Hours per Student"},{value:"12+",label:"Partner Hospitals"},{value:"100%",label:"Supervised Training"}];return e.jsxs(o,{bg:"bg-[#EEF2F7]",sectionClassName:"py-[60px] md:py-[80px]",children:[e.jsx("h1",{className:`
            ${s.font.family}
            ${s.font.weight.bold}
            text-[28px] md:text-[42px]
            text-[#223F7F]
            mb-[40px]
          `,children:"Clinical Exposure & Hospital Access"}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-[40px] items-stretch",children:[e.jsx("div",{className:"flex-1 flex flex-col justify-start gap-[20px]",children:t.map((n,i)=>e.jsxs("div",{className:"flex gap-[20px] items-start",children:[e.jsx("div",{className:`\r
                flex-shrink-0\r
                w-[48px] h-[48px]\r
                bg-[#DCE4F2]\r
                text-[#223F7F]\r
                rounded-[8px]\r
                flex items-center justify-center\r
              `,children:n.icon}),e.jsxs("div",{className:"flex flex-col gap-[4px]",children:[e.jsx("h3",{className:`
                  ${s.font.family}
                  ${s.font.weight.medium}
                  text-[18px] md:text-[18px]
                  text-[#223F7F]
                `,children:n.title}),e.jsx("p",{className:`
                  ${s.font.family}
                  text-[14px] md:text-[15px]
                  leading-[1.5]
                  text-[#191919BF]
                `,children:n.description})]})]},i))}),e.jsx("div",{className:"w-full lg:w-[580px] flex-shrink-0",children:e.jsx("img",{src:ee,alt:"Clinical Exposure",className:"w-full h-full min-h-[300px] lg:min-h-[355px] object-cover rounded-[12px] shadow-sm"})})]}),e.jsx("div",{style:{border:"solid 1px rgba(7, 7, 7, 0.2)"},className:"bg-[#FFF] rounded-[12px] p-[20px]   mt-[60px]",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-[30px] items-center text-center",children:r.map((n,i)=>e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(p,{value:n.value,className:`
      font-montserrat
        font-semibold
        text-[32px]
        mb-[10px]
        leading-[39px]
        text-[#223F7F]
      `}),e.jsx("p",{className:`${s.font.family} text-[18px] text-[#191919BF] font-regular leading-[26px]`,children:n.label})]},i))})})]})},se="/AsramWebsite-FE/assets/asram/insideasram.png",ne="/AsramWebsite-FE/assets/asram/researchinnov.png",re="/AsramWebsite-FE/assets/asram/asramherobanner.png",me=()=>{const{setHero:t,hideHero:r}=C();return x.useLayoutEffect(()=>(t({title:e.jsxs(e.Fragment,{children:[e.jsx(l,{text:"DISCOVER",className:"font-regular"})," ",e.jsx(l,{text:"ASRAM",className:"font-bold",delay:.5})]}),bgImage:re,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:`\r
              text-[16px] sm:text-[18px] leading-[1.5]\r
              md:text-[18px] md:leading-[1.6]\r
              lg:text-[22px]\r
              mb-6 opacity-90 font-medium\r
              max-w-[320px] sm:max-w-[500px]\r
            `,children:"At Asram, we prepare you to thrive in the ever-evolving world of health sciences."}),e.jsx("button",{className:`\r
                bg-[#191919]\r
                hover:bg-[#27272a] \r
                text-white \r
                px-6 py-2 md:px-8 md:py-3\r
                rounded-[8px] \r
                text-[16px] md:text-[22px] font-medium \r
                transition-all duration-300\r
                premium-shadow-hover\r
            `,children:"Explore Programs"})]})}),()=>r()),[t,r]),e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx(S,{}),e.jsx($,{}),e.jsx(G,{}),e.jsx(_,{title:"Inside ASRAM",image:se,quote:"At ASRAM, education meets service through clinics, health camps, and meaningful community impact."}),e.jsx(w,{}),e.jsx(Y,{title:"Research & Innovation",description1:`\r
        ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration. Students and faculty work together to develop new ideas, strengthen healthcare practices ASRAM drives research and innovation through collaborative projects, clinical studies, and evidence-based exploration.\r
        `,image:ne,buttonLink:"/nursing-research"}),e.jsx(te,{}),e.jsx(X,{})]})};export{me as A};
