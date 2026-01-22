import{j as e}from"./animations-DcqeVXJS.js";import"./vendor-x-yVq9gV.js";import{T as s,P as t}from"./index-IyVwl3JO.js";const n="/AsramWebsite-FE/assets/icons/IconLeftQuote.svg",i=[{text:"ASRAM has given me not just excellent medical education, but also lifelong friendships and experiences that have shaped who I am today.",name:"Priya Sharma",program:"MBBS, 3rd Year"},{text:"The campus culture is incredible. From sports to cultural events, there's always something happening. The faculty support is outstanding.",name:"Rahul Verma",program:"B.Sc. Nursing, Final Year"},{text:"Living in the hostel has been amazing. The facilities are great, and I've learned so much from my peers. It truly feels like home.",name:"Anjali Patel",program:"Paramedical, 2nd Year"}];function m({theme:a}){const r=a?.secondary||s.color.secondary;return e.jsx(t,{bg:s.bg.white,sectionClassName:"py-[80px]",children:e.jsxs("div",{className:"flex flex-col gap-[40px]",children:[e.jsx("h2",{className:`
            ${s.font.family}
            ${s.font.weight.bold}
            text-[42px]
            leading-[42px]
          `,style:{color:r},children:"Student Voices"}),e.jsx("div",{className:`\r
            grid\r
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3\r
            gap-5\r
            w-full\r
          `,children:i.map((l,o)=>e.jsxs("div",{className:`\r
                rounded-[8px]\r
                p-[30px]\r
                flex flex-col\r
                h-full\r
              `,style:{backgroundColor:"#F7F9FC",border:"0.99px solid #E5E5E5"},children:[e.jsx("img",{src:n,className:"w-[39.47px] h-[39.47px] mb-[20px]",alt:"",style:a?.iconFilter?{filter:a.iconFilter}:{}}),e.jsxs("p",{className:`
                  ${s.font.family}
                  text-[18px]
                  leading-[26px]
                  mb-[30px]
                `,style:{color:"#191919BF"},children:['"',l.text,'"']}),e.jsxs("div",{className:"mt-auto",children:[e.jsx("div",{className:"w-full h-[0.99px] mb-[20px]",style:{backgroundColor:"#E5E5E5"}}),e.jsxs("div",{className:"flex flex-col gap-[4px]",children:[e.jsx("p",{className:`
                      ${s.font.family}
                      ${s.font.weight.medium}
                      text-[20px] 
                      leading-[22px]
                    `,style:{color:r},children:l.name}),e.jsx("p",{className:`
                      ${s.font.family}
                      text-[14px]
                      font-regular
                      leading-[20px]
                    `,style:{color:s.color.dark+"BF"},children:l.program})]})]})]},o))})]})})}export{m as S};
