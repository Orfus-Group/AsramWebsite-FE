import{j as e}from"./animations-DcqeVXJS.js";import{e as F}from"./vendor-x-yVq9gV.js";import{P as v,T as s}from"./index-7QN7Hon0.js";import{B as A}from"./button-DNoK8OjX.js";const S="/AsramWebsite-FE/assets/nursing/doctor_1.png",E="/AsramWebsite-FE/assets/nursing/doctor_2.png",W="/AsramWebsite-FE/assets/nursing/doctor_3.png",c="/AsramWebsite-FE/assets/nursing/experience.svg",n="/AsramWebsite-FE/assets/nursing/weekcal.svg",d="/AsramWebsite-FE/assets/nursing/timeperiod.svg";function R({heading:u="Faculty Spotlight",facultyData:f,footerStats:p,showCta:b=!0,iconConfig:D={color:"#223F7F",width:"18",height:"18",strokeWidth:"2"},primaryButtonConfig:r={text:"Book Appointment",className:"flex-1 h-[48.7px] rounded-[9.7px] text-[14px] font-medium bg-[#008C8C] text-white hover:bg-[#007A7A]"},secondaryButtonConfig:m={text:"View Profile",className:"w-[120.2px] h-[48.7px] rounded-[9.7px] text-[14px] font-medium bg-white border border-[#D1D5DB] text-gray-700 hover:bg-gray-50"},roleConfig:x={color:s.color.dark,fontSize:"text-[16px] md:text-[18px]",fontWeight:"font-normal"},collegeConfig:i={color:"#4A5565",fontSize:"text-[16px]",lineHeight:"leading-[23.5px]",fontWeight:"font-normal"},ctaConfig:a={bg:"#223F7F",color:"#FFFFFF",textSize:"text-[15px]",className:"rounded-[10px]",width:"200px",height:"48px"},spacingConfig:l={paddingClass:"px-[24px] py-[26px]",headerGap:"gap-[14px]",nameMb:"mb-[10px]",roleMb:"mb-[10px]",qualificationMt:"mt-[6px]",detailsMt:"mt-[6px]",detailsGap:"gap-[10px]",buttonsMt:"mt-[20px]",buttonsPt:"pt-[20px]",borderClass:"border-t border-[#E5E5E5]"},cardBorder:j="border-[2px] border-[#D0D7E2]",borderRadius:N="rounded-[20px]",imageHeight:y="h-[260px] sm:h-[280px] md:h-[300px]",gridGap:w="gap-5"}){const h=F(),M=f||[{id:"dr-rajesh-kumar",img:S,name:"Dr. Rajesh Kumar",role:"Cardiologist",college:"ASRAM Medical College",qualification:"MBBS, MD, DM (Cardiology)",details:[{icon:e.jsx("img",{src:c,className:"w-[18px] h-[18px]"}),text:"20+ Years Experience"},{icon:e.jsx("img",{src:n,className:"w-[18px] h-[18px]"}),text:"Mon - Fri"},{icon:e.jsx("img",{src:d,className:"w-[18px] h-[18px]"}),text:"9:00 AM - 5:00 PM"}],badge:"Leadership"},{id:"dr-priya-sharma",img:E,name:"Dr. Priya Sharma",role:"Neurologist",college:"ASRAM Medical College",qualification:"MBBS, MD, DM (Neurology)",details:[{icon:e.jsx("img",{src:c,className:"w-[18px] h-[18px]"}),text:"15+ Years Experience"},{icon:e.jsx("img",{src:n,className:"w-[18px] h-[18px]"}),text:"Mon - Sat"},{icon:e.jsx("img",{src:d,className:"w-[18px] h-[18px]"}),text:"10:00 AM - 6:00 PM"}],badge:"Leadership"},{id:"dr-amit-patel",img:W,name:"Dr. Amit Patel",role:"Orthopedic Surgeon",college:"ASRAM Medical College",qualification:"MBBS, MS (Orthopedics)",details:[{icon:e.jsx("img",{src:c,className:"w-[18px] h-[18px]"}),text:"18+ Years Experience"},{icon:e.jsx("img",{src:n,className:"w-[18px] h-[18px]"}),text:"Tue - Sat"},{icon:e.jsx("img",{src:d,className:"w-[18px] h-[18px]"}),text:"11:00 AM - 7:00 PM"}],badge:"Leadership"}];return e.jsx(v,{bg:s.bg.section,paddingClass:"py-[40px] md:py-[80px]",children:e.jsxs("div",{className:"flex flex-col gap-[50px]",children:[e.jsx("h2",{className:`
            ${s.font.family}
            ${s.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `,style:{color:s.color.text.secondary},children:u}),e.jsx("div",{className:`
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            ${w}
            w-full
          `,children:M.map((t,o)=>e.jsxs("div",{className:`
                w-full
                bg-white ${N}
                ${j}
                flex flex-col
                relative
                overflow-hidden
              `,children:[e.jsxs("div",{className:`w-full ${y} bg-gray-200 rounded-t-[10px]`,children:[e.jsx("img",{loading:"lazy",decoding:"async",src:t.img,alt:t.name,className:`\r
                    w-full h-full\r
                    object-cover rounded-t-[10px]\r
                  `}),t.badge&&e.jsx("span",{className:`\r
                        absolute top-[16px] right-[16px] \r
                        px-[12px] py-[6px] \r
                        rounded-[4px] \r
                        text-[12px] font-medium \r
                        uppercase tracking-wider\r
                        bg-[#223F7F] text-white\r
                    `,children:t.badge})]}),e.jsxs("div",{className:`${l.paddingClass} flex flex-col ${l.headerGap}`,children:[e.jsxs("div",{children:[e.jsx("h3",{className:`
                      ${s.font.family}
                      ${s.font.weight.semibold}
                      text-[18px] md:text-[20px]
                      ${l.nameMb}
                      leading-[26px] md:leading-[28px]
                    `,style:{color:s.color.text.secondary},children:t.name}),e.jsx("p",{className:`
                      ${s.font.family}
                      ${x.fontSize}
                      ${x.fontWeight}
                      ${l.roleMb}
                      leading-[24px]
                    `,style:{color:x.color},children:t.role}),t.college&&e.jsx("p",{className:`
                        ${s.font.family}
                        ${i.fontSize}
                        ${i.lineHeight}
                        ${i.fontWeight}
                      `,style:{color:i.color},children:t.college}),t.qualification&&e.jsx("p",{className:`
                        ${s.font.family}
                        text-[14px] leading-[20px]
                        ${l.qualificationMt}
                      `,style:{color:s.color.dark},children:t.qualification})]}),e.jsx("div",{className:`flex flex-col ${l.detailsGap} ${l.detailsMt}`,children:t.details&&t.details.map((g,$)=>e.jsxs("div",{className:"flex items-center gap-[10px]",children:[g.icon,e.jsx("span",{className:`${s.font.family} text-[14px] leading-[20px]`,style:{color:s.color.text.muted},children:g.text})]},$))}),e.jsxs("div",{className:`flex flex-row gap-[12px] ${l.buttonsMt} ${l.buttonsPt} ${l.borderClass}`,children:[e.jsx("button",{className:`
                      transition-colors
                      flex items-center justify-center
                      whitespace-nowrap
                      ${r.className}
                    `,children:e.jsxs("div",{className:"flex items-center gap-2",children:[r.icon,r.text]})}),e.jsx("button",{onClick:()=>h(`/faculty/${t.id}`),className:`
                      transition-colors
                      flex items-center justify-center
                      whitespace-nowrap
                      ${m.className}
                    `,children:m.text})]})]})]},o))}),p&&e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 w-full",children:p.map((t,o)=>e.jsxs("div",{className:"bg-white rounded-[12px] p-[30px] text-center flex flex-col items-center justify-center border-[0.9px] border-[#07070733] h-full gap-[12px]",children:[e.jsx("h4",{className:`${s.font.family} text-[32px] font-semibold text-[#223F7F] leading-[39px]`,children:t.value}),e.jsx("p",{className:`${s.font.family} text-[22px] font-medium text-[#223F7F] leading-[27px]`,children:t.label}),e.jsx("p",{className:`${s.font.family} text-[18px] font-normal text-[#191919BF] leading-[26px]`,children:t.desc})]},o))}),b&&e.jsx("div",{className:"flex justify-center mt-[10px]",children:e.jsx(A,{onClick:()=>h("/faculty"),bg:a.bg,color:a.color,textSize:a.textSize,className:a.className,width:a.width,height:a.height,fontWeight:a.fontWeight,children:"Meet All Faculty"})})]})})}export{R as F};
