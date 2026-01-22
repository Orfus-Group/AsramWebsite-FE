import{j as e}from"./animations-DcqeVXJS.js";import{L as f}from"./vendor-x-yVq9gV.js";import{P as g}from"./index-DJznWsAu.js";const w=({title:t,description:s,description2:x,image:a,buttonText:l,buttonLink:r="#",showButton:p=!1,reverse:n=!1,imageClassName:d="",className:o="",bg:i="bg-white",gapClass:m="gap-[30px] md:gap-[50px] lg:gap-[72px]",paddingClass:c="py-[40px] md:py-[60px] lg:py-[80px]"})=>e.jsx(g,{bg:i,paddingClass:c,children:e.jsxs("div",{className:`
          w-full
          flex
          flex-col-reverse
          ${n?"lg:flex-row-reverse":"lg:flex-row"}
          items-stretch
          justify-between
          ${m}
          ${o}
        `,children:[e.jsxs("div",{className:"w-full flex-1 flex flex-col h-full items-start gap-[20px]",children:[e.jsx("h2",{className:`
              font-bold
              text-[#223F7F]
              text-[28px] leading-[36px]
              sm:text-[30px] sm:leading-[38px]
              md:text-[32px] md:leading-[39px]
              font-montserrat
            `,children:t}),e.jsxs("div",{className:"flex flex-col gap-[20px]",children:[e.jsx("p",{className:`
                text-[16px] leading-[26px]
                md:text-[18px] md:leading-[29px]
                text-[#191919BF]
                text-justify
                font-montserrat
              `,children:s}),x&&e.jsx("p",{className:`
                  text-[16px] leading-[26px]
                  md:text-[18px] md:leading-[29px]
                  text-[#191919BF]
                  text-justify
                  font-montserrat
                `,children:x})]}),p&&l&&e.jsx(f,{to:r,className:`
                w-full
                sm:w-[260px]
                md:w-[301px]
                h-[46px]
                flex items-center justify-center
                rounded-[8px]
                text-white
                font-medium
                text-[15px]
                md:text-[18px]
                bg-[#223F7F]
                hover:bg-[#1a3163]
                transition-colors
                font-montserrat
              `,children:l})]}),e.jsx("div",{className:`
            w-full
            lg:flex-1
            rounded-[12px]
            overflow-hidden
            bg-gray-200
            flex-shrink-0
            border border-[rgba(7,7,7,0.2)]
            shadow-[0_2px_4px_rgba(0,0,0,0.08),0_6px_6px_rgba(0,0,0,0.02)]
            ${d}
          `,children:e.jsx("img",{loading:"lazy",decoding:"async",src:a,alt:t,className:`\r
              w-full\r
              h-full\r
              object-cover\r
              aspect-[3.5/4] md:aspect-[16/9] lg:aspect-auto\r
            `})})]})});export{w as C};
