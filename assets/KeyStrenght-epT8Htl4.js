import{j as t}from"./animations-DcqeVXJS.js";import"./vendor-x-yVq9gV.js";import{T as e,P as g}from"./index-IyVwl3JO.js";import{I as h}from"./SocialCommitment-DzA5B-3I.js";const u="/AsramWebsite-FE/assets/icons/CheckMarkIcon.svg",f=t.jsx("img",{src:u,className:"w-[14px] h-[14px] shrink-0",alt:""});function b({title:r="Why Choose ASRAM Nursing?",columns:o,CheckIcon:n}){const s=o||[{title:"Educational Excellence",items:["Integration with comprehensive multispecialty hospital","Robust infrastructure across the 10-acre campus","Recognized affiliations and regulatory approvals"]},{title:"Student Success",items:["Clear pathways from undergraduate to postgraduate","Student-centered environment with strong mentoring","Practical orientation ensuring job readiness"]}],l=n||f;return t.jsx("div",{className:"w-full mt-[50px] mb-[80px]",children:t.jsx("div",{className:"w-full flex flex-col items-center",children:t.jsxs("div",{className:`\r
            w-full\r
            rounded-[10px]\r
            flex flex-col items-center\r
            bg-[#FFF]\r
            px-[24px] md:px-[40px]\r
            py-[30px] md:py-[40px]\r
          `,children:[t.jsx("h2",{className:`
              ${e.font.family}
              ${e.font.weight.bold}
              text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px]
              leading-[30px] md:leading-[34px] lg:leading-[36px]
              text-center
              mb-[32px]
            `,style:{color:"#223F7F"},children:r}),t.jsx("div",{className:`\r
              grid \r
              grid-cols-1 \r
              md:grid-cols-2 \r
              gap-x-[31.6px]\r
              gap-y-[31.6px]\r
              w-full\r
              max-w-[1120px]\r
            `,children:s.map((a,c)=>t.jsxs("div",{className:"flex flex-col gap-[15.8px]",children:[t.jsx("h3",{className:`
                    ${e.font.family}
                    ${e.font.weight.semibold}
                    text-[18px] md:text-[20px]
                    leading-[26px]
                  `,style:{color:"#223F7F"},children:a.title}),t.jsx("ul",{className:"flex flex-col gap-[10px]",children:a.items.map((p,x)=>t.jsxs("li",{className:"flex items-start gap-[10px]",children:[t.jsx("div",{className:"mt-[2.5px] shrink-0",children:l}),t.jsx("p",{className:`
                          ${e.font.family}
                          text-[14px] sm:text-[15px]
                          leading-[22px]
                          text-[#191919BF]
                        `,children:p})]},x))})]},c))})]})})})}const j="/AsramWebsite-FE/assets/icons/IconHospitalIntegration.svg",I="/AsramWebsite-FE/assets/icons/IconRobustInfra.svg",v="/AsramWebsite-FE/assets/icons/IconRecognizedAffiliations.svg",N="/AsramWebsite-FE/assets/icons/IconClearPathways.svg",y="/AsramWebsite-FE/assets/icons/IconStudentCentered.svg",w="/AsramWebsite-FE/assets/icons/IconOrientation.svg";function A({heading:r="Key Strengths",data:o,iconConfig:n={},cardConfig:i={},whyChooseConfig:s={},bgColor:l="bg-[#EEF2F7]",paddingClass:a="py-[80px]",showWhyChoose:c=!0}){const x=o||[{icon:t.jsx("img",{src:j,className:"w-[28px] h-[28px]",alt:""}),title:"Hospital Integration",description:"Comprehensive multispecialty hospital providing real-time clinical exposure and practical training"},{icon:t.jsx("img",{src:I,className:"w-[28px] h-[28px]",alt:""}),title:"Robust Infrastructure",description:"State-of-the-art labs, simulation centers, library, hostels, and sports facilities"},{icon:t.jsx("img",{src:v,className:"w-[28px] h-[28px]",alt:""}),title:"Recognized Affiliations",description:"INC approval and NTRUHS affiliation lending credibility and national recognition"},{icon:t.jsx("img",{src:N,className:"w-[28px] h-[28px]",alt:""}),title:"Clear Pathways",description:"Structured progression from undergraduate to postgraduate levels within the institution"},{icon:t.jsx("img",{src:y,className:"w-[28px] h-[28px]",alt:""}),title:"Student-Centered Environment",description:"Strong mentoring, favorable faculty ratio, and personalized attention for holistic growth"},{icon:t.jsx("img",{src:w,className:"w-[28px] h-[28px]",alt:""}),title:"Practical Orientation",description:"Emphasis on hands-on training, simulation, and clinical rotations over theoretical learning alone"}];return t.jsxs(g,{bg:l,paddingClass:a,children:[t.jsxs("div",{className:"flex flex-col gap-[50px]",children:[t.jsx("h2",{className:`
            ${e.font.family}
            ${e.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `,style:{color:e.color.text.secondary},children:r}),t.jsx("div",{className:`\r
            grid \r
            grid-cols-1 \r
            sm:grid-cols-2 \r
            lg:grid-cols-3\r
            gap-[20px]\r
            w-full\r
          `,children:x.map((d,m)=>t.jsx(h,{variant:"keystrength",icon:d.icon,title:d.title,description:d.description,iconBg:n.bg,iconContainerClassName:n.className,cardBg:i.bg,cardBorder:i.border,borderColor:i.borderColor},m))})]}),c&&t.jsx(b,{title:s?.title,columns:s?.columns,CheckIcon:s?.CheckIcon})]})}export{A as default};
