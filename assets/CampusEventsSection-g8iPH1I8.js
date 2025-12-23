import{j as n}from"./animations-Gi-_RhDr.js";import{R as l}from"./vendor-vjPoJpFl.js";import{T as i}from"./index-BvkuH19V.js";var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=l.createContext&&l.createContext(g),w=["attr","size","title"];function y(e,t){if(e==null)return{};var r=N(e,t),a,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function N(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},x.apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(a){O(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function O(e,t,r){return t=F(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e){var t=E(e,"string");return typeof t=="symbol"?t:t+""}function E(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b(e){return e&&e.map((t,r)=>l.createElement(t.tag,p({key:r},t.attr),b(t.child)))}function j(e){return t=>l.createElement(P,x({attr:p({},e.attr)},t),b(e.child))}function P(e){var t=r=>{var{attr:a,size:s,title:o}=e,v=y(e,w),d=s||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",x({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,v,{className:c,style:p(p({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&l.createElement("title",null,o),e.children)};return m!==void 0?l.createElement(m.Consumer,null,r=>t(r)):t(g)}function f(e){return j({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},child:[]}]})(e)}function h(e){return j({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(e)}const C="/AsramWebsite-FE/assets/campusevents-Bvke6-xi.png",M=()=>{const e=[{title:"Annual Cultural Fest",date:"March 15-17, 2024",location:"Main Auditorium",description:"Three days of music, dance, drama, and cultural celebrations."},{title:"Medical Symposium",date:"March 25, 2024",location:"Conference Hall",description:"International speakers discussing latest medical advancements."},{title:"Sports Week",date:"April 1-7, 2024",location:"Sports Complex",description:"Inter-departmental competitions across various sports."}];return n.jsx("section",{className:"w-full bg-white py-[60px] md:py-[80px]",children:n.jsxs("div",{className:"w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px]",children:[n.jsx("h2",{className:`
                        ${i.font.family}
                        ${i.font.weight.bold}
                        text-[28px] md:text-[42px]
                        text-[#223F7F]
                        mb-[40px]
                    `,children:"Campus Events"}),n.jsxs("div",{className:"flex flex-col lg:flex-row w-full mb-[40px] rounded-[12px] overflow-hidden border border-[rgba(7,7,7,0.2)]",children:[n.jsx("div",{className:"w-full lg:w-1/2 h-[300px] lg:h-auto lg:min-h-[430px]",children:n.jsx("img",{src:C,alt:"Featured Event",className:"w-full h-full object-cover"})}),n.jsxs("div",{className:"w-full lg:w-1/2 bg-[#EEF2F7] p-[30px] lg:p-[40px] flex flex-col justify-between items-start lg:min-h-[430px]",children:[n.jsxs("div",{className:"w-full",children:[n.jsx("span",{className:`
                                    w-[148px] h-[36px]
                                    bg-[rgba(255,255,255,0.8)]
                                    rounded-[12px] 
                                    flex justify-center items-center
                                    text-[14px] 
                                    font-regular
                                    text-[#191919] 
                                    ${i.font.family} 
                                    mb-[20px]
                                `,children:"Featured Event"}),n.jsx("h3",{className:`
                                    ${i.font.family}
                                    ${i.font.weight.semibold}
                                    text-[24px] lg:text-[32px]
                                    text-[#223F7F]
                                    leading-[1.3]
                                    mb-[16px]
                                `,children:"Annual Convocation Ceremony"}),n.jsx("p",{className:`
                                    ${i.font.family}
                                    font-regular
                                    text-[18px]
                                    leading-[1.6]
                                    text-[#4A5565]
                                    mb-[20px] lg:mb-[30px]
                                `,children:"Join us for the prestigious annual convocation ceremony where we celebrate the achievements of our graduating students and welcome distinguished guests."})]}),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex flex-col gap-[12px] mb-[20px]",children:[n.jsxs("div",{className:"flex items-center gap-[10px] text-[#4A5565]",children:[n.jsx(f,{className:"w-[20px] h-[20px]"}),n.jsx("span",{className:`${i.font.family} font-regular text-[#191919BF] text-[14px]`,children:"February 28, 2024"})]}),n.jsxs("div",{className:"flex items-center gap-[10px] text-[#4A5565]",children:[n.jsx(h,{className:"w-[20px] h-[20px]"}),n.jsx("span",{className:`${i.font.family} font-regular text-[#191919BF] text-[14px]`,children:"Main Campus Grounds"})]})]}),n.jsx("button",{className:`
                                    w-fit h-[47.3px]
                                    bg-[#223F7F]
                                    font-montserrat
                                    text-white
                                    rounded-[9.9px]
                                    pt-[10.9px] pb-[12.5px] px-[23.5px]
                                    text-center
                                    font-regular
                                    text-[15.8px]
                                    leading-[24px]
                                    hover:bg-[#1a3163]
                                    transition-colors
                                    block
                                    whitespace-nowrap
                                `,children:"Register Now"})]})]})]}),n.jsxs("div",{className:"w-full bg-[#EEF2F7] rounded-[12px] p-[30px] border border-[rgba(7,7,7,0.2)]",children:[n.jsx("h4",{className:`
                            ${i.font.family}
                            ${i.font.weight.semibold}
                            text-[28px] lg:text-[32px]
                            text-[#223F7F]
                            text-center
                            mb-[40px]
                        `,children:"Upcoming Events"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-[20px]",children:e.map((t,r)=>n.jsxs("div",{className:"bg-white rounded-[12px] p-[20px] flex flex-col items-start h-[193px] justify-center border border-[rgba(7,7,7,0.2)]",children:[n.jsx("h6",{className:`
                                        ${i.font.family}
                                        ${i.font.weight.medium}
                                        text-[22px]
                                        text-[#223F7F]
                                        mb-[14px]
                                    `,children:t.title}),n.jsxs("div",{className:"flex font-montserrat flex-col gap-[8px] mb-[14px]",children:[n.jsxs("div",{className:"flex font-regular items-center gap-[8px] text-[#191919BF] text-[14px]",children:[n.jsx(f,{className:"w-[18px] h-[18px]"}),n.jsx("span",{className:"",children:t.date})]}),n.jsxs("div",{className:"flex font-regular items-center gap-[8px] text-[#191919BF] text-[14px]",children:[n.jsx(h,{className:"w-[18px] h-[18px]"}),n.jsx("span",{className:"",children:t.location})]})]}),n.jsx("p",{className:`
                                    ${i.font.family}
                                    text-[#191919BF]
                                    text-[15px]
                                    leading-[1.4]
                                    line-clamp-2
                                `,children:t.description})]},r))})]})]})})};export{M as C};
