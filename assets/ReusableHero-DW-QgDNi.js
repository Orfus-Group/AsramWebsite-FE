import{j as e,T as s}from"./index-CszHTlp4.js";import{b as n}from"./vendor-k9dDiao6.js";const i=({bgImage:a,title:t})=>{const[l,r]=n.useState(!1);return e.jsxs("section",{className:"relative w-full overflow-hidden",children:[e.jsxs("div",{className:`\r
          relative w-full\r
          h-[300px] md:h-[400px] lg:h-[492px]\r
          overflow-hidden\r
          bg-[rgba(0,0,0,0.35)]\r
        `,children:[e.jsx("img",{src:a,alt:t,loading:"eager",fetchPriority:"high",decoding:"async",onLoad:()=>r(!0),className:`
            absolute inset-0
            w-full h-full
            object-cover
            transition-opacity duration-500
            ${l?"opacity-100":"opacity-0"}
          `}),e.jsx("div",{className:"absolute inset-0  z-[2]"})]}),e.jsx("div",{className:"absolute inset-0 flex items-end lg:items-center z-[10]",children:e.jsx("div",{className:`\r
            w-full\r
            max-w-[1440px]\r
            mx-auto\r
            px-4 sm:px-6 md:px-10 lg:px-[120px]\r
            pb-[24px] lg:pb-0\r
          `,children:e.jsx("h1",{className:`
              absolute
              top-[180px] sm:top-[240px] md:top-[300px] lg:top-[400px]
              ${s.font.family}
              ${s.font.weight.bold}
              text-white
            
              text-[28px] leading-[34px]
              sm:text-[34px] sm:leading-[42px]
              md:text-[42px] md:leading-[51px]
              tracking-normal
              text-left
              max-w-[800px]
            `,children:t})})})]})};export{i as R};
