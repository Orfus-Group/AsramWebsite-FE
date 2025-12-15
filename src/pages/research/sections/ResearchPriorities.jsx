import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";

const BaseIcon = ({
  size = 24,
  viewBox = "-1 -1 26 26", // ⭐ padding added
  children,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {children}
  </svg>
);




export const AiHealthIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
}) => (
  <BaseIcon size={size} viewBox="-1 -1 26 26">
    <path
      d="M12 18V5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M15 13C14.1348 12.7471 13.3748 12.2206 12.834 11.4995C12.2932 10.7784 12.0005 9.90141 12 9C11.9995 9.90141 11.7068 10.7784 11.166 11.4995C10.6252 12.2206 9.8652 12.7471 9 13"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M17.598 6.50013C17.8281 6.10162 17.9635 5.65551 17.9936 5.19633C18.0237 4.73714 17.9478 4.27718 17.7717 3.85203C17.5956 3.42687 17.324 3.04793 16.9781 2.74451C16.6321 2.44109 16.221 2.22133 15.7765 2.10223C15.332 1.98312 14.866 1.96787 14.4147 2.05765C13.9634 2.14743 13.5387 2.33983 13.1737 2.61998C12.8086 2.90012 12.5129 3.2605 12.3093 3.67322C12.1058 4.08595 12 4.53996 12 5.00013C12 4.53996 11.8942 4.08595 11.6907 3.67322C11.4871 3.2605 11.1914 2.90012 10.8263 2.61998C10.4613 2.33983 10.0366 2.14743 9.5853 2.05765C9.13396 1.96787 8.66803 1.98312 8.22353 2.10223C7.77904 2.22133 7.3679 2.44109 7.02193 2.74451C6.67596 3.04793 6.40442 3.42687 6.22833 3.85203C6.05224 4.27718 5.97632 4.73714 6.00643 5.19633C6.03655 5.65551 6.17189 6.10162 6.402 6.50013"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M17.9971 5.125C18.5849 5.27614 19.1306 5.55905 19.5928 5.95231C20.0551 6.34557 20.4218 6.83887 20.6652 7.39485C20.9086 7.95082 21.0223 8.55489 20.9977 9.16131C20.9731 9.76773 20.8108 10.3606 20.5231 10.895"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M18 18.0011C18.8805 18.0011 19.7364 17.7105 20.4349 17.1745C21.1335 16.6384 21.6356 15.8869 21.8635 15.0364C22.0914 14.1859 22.0323 13.284 21.6954 12.4705C21.3585 11.657 20.7625 10.9774 20 10.5371"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M19.967 17.4824C20.0371 18.0247 19.9953 18.5755 19.8441 19.1009C19.693 19.6264 19.4357 20.1153 19.0882 20.5374C18.7407 20.9595 18.3104 21.3059 17.8238 21.5552C17.3372 21.8045 16.8046 21.9514 16.259 21.9868C15.7134 22.0222 15.1664 21.9453 14.6516 21.761C14.1369 21.5767 13.6654 21.2889 13.2662 20.9152C12.8671 20.5415 12.5488 20.09 12.331 19.5885C12.1132 19.087 12.0006 18.5462 12 17.9994C11.9994 18.5462 11.8867 19.087 11.669 19.5885C11.4512 20.09 11.1329 20.5415 10.7338 20.9152C10.3346 21.2889 9.86313 21.5767 9.34838 21.761C8.83364 21.9453 8.28657 22.0222 7.74097 21.9868C7.19537 21.9514 6.66283 21.8045 6.17622 21.5552C5.68961 21.3059 5.25927 20.9595 4.91178 20.5374C4.56429 20.1153 4.30703 19.6264 4.15589 19.1009C4.00474 18.5755 3.96291 18.0247 4.033 17.4824"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M6.00007 18.0011C5.11957 18.0011 4.26368 17.7105 3.56514 17.1745C2.8666 16.6384 2.36444 15.8869 2.13655 15.0364C1.90865 14.1859 1.96775 13.284 2.30469 12.4705C2.64162 11.657 3.23755 10.9774 4.00007 10.5371"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M6.00317 5.125C5.41537 5.27614 4.86968 5.55905 4.4074 5.95231C3.94513 6.34557 3.57841 6.83887 3.33502 7.39485C3.09162 7.95082 2.97793 8.55489 3.00256 9.16131C3.02719 9.76773 3.18949 10.3606 3.47717 10.895"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);





export const NcdIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
}) => (
  <BaseIcon size={size}>
    <path
      d="M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);





export const PublicHealthIcon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
}) => (
  <BaseIcon size={size}>
    <path
      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M16 3.12695C16.8578 3.34932 17.6174 3.85022 18.1597 4.55102C18.702 5.25181 18.9962 6.11284 18.9962 6.99895C18.9962 7.88506 18.702 8.74609 18.1597 9.44689C17.6174 10.1477 16.8578 10.6486 16 10.871"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M22 21.0009V19.0009C21.9993 18.1146 21.7044 17.2536 21.1614 16.5532C20.6184 15.8527 19.8581 15.3524 19 15.1309"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);






const ClinicalTrialsIcon = ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
  <BaseIcon size={size}>
<path d="M14 2V8C13.9998 8.33548 14.0841 8.66561 14.245 8.96L19.755 19.04C19.9216 19.3446 20.0061 19.6874 20.0001 20.0345C19.9941 20.3817 19.8979 20.7213 19.7208 21.02C19.5437 21.3187 19.2919 21.5661 18.9902 21.7379C18.6885 21.9098 18.3472 22.0001 18 22H5.99997C5.65275 22.0001 5.31149 21.9098 5.00976 21.7379C4.70804 21.5661 4.45625 21.3187 4.27916 21.02C4.10208 20.7213 4.0058 20.3817 3.99981 20.0345C3.99382 19.6874 4.07831 19.3446 4.24497 19.04L9.75497 8.96C9.91587 8.66561 10.0001 8.33548 9.99997 8V2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.45312 15H17.5471" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 2H15.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

  </BaseIcon>
);




const GenomicsIcon = ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
  <BaseIcon size={size}>
<path d="M10 16L11.5 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8L12.5 6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.9999 2C13.2019 3.998 12.4819 5.995 12.1929 7.993" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 10.5L17.5 11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9999 6.00038L14.1089 3.10938" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 15C8.667 9 15.333 15 22 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 9L20.891 9.891" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.10913 14.1094L4.00013 15.0004" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 12.5L7.5 13.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 18L9.891 20.891" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 21.9989C10.798 20.0009 11.518 18.0039 11.807 16.0059" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

  </BaseIcon>
);




const PatientSafetyIcon = ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
  <BaseIcon size={size}>
<path d="M15.477 12.8887L16.992 21.4147C17.009 21.5151 16.9949 21.6183 16.9516 21.7104C16.9084 21.8026 16.838 21.8794 16.7499 21.9305C16.6619 21.9816 16.5603 22.0046 16.4588 21.9964C16.3573 21.9882 16.2607 21.9492 16.182 21.8847L12.602 19.1977C12.4292 19.0686 12.2192 18.9988 12.0035 18.9988C11.7878 18.9988 11.5778 19.0686 11.405 19.1977L7.819 21.8837C7.74032 21.9481 7.64386 21.987 7.54249 21.9952C7.44112 22.0034 7.33967 21.9805 7.25166 21.9295C7.16365 21.8786 7.09327 21.802 7.04991 21.71C7.00656 21.618 6.99228 21.515 7.009 21.4147L8.523 12.8887" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

  </BaseIcon>
);




const priorities = [
  {
    title: "Artificial Intelligence & Digital Health",
    desc: "AI-powered diagnostics, predictive analytics, telemedicine platforms, and wearable health technology.",
    icon: <AiHealthIcon color="white" />
  },
  {
    title: "Non-Communicable Diseases",
    desc: "Research on diabetes, hypertension, cardiovascular diseases, and cancer prevention and management.",
    icon: <NcdIcon color="white" />
  },
  {
    title: "Public Health & Epidemiology",
    desc: "Community-based studies, screening programs, and health policy impact assessment.",
    icon: <PublicHealthIcon color="white" />
  },
  {
    title: "Clinical Trials & Translational Research",
    desc: "Evidence-based medicine, pharmaceutical trials, and medical device testing.",
    icon: <ClinicalTrialsIcon color="white" />
  },
  {
    title: "Genomics & Precision Medicine",
    desc: "Genetic markers, personalized therapy development, and population genomics studies.",
    icon: <GenomicsIcon color="white" />
  },
  {
    title: "Healthcare Quality & Patient Safety",
    desc: "Hospital accreditation, patient outcome research, and quality improvement initiatives.",
    icon: <PatientSafetyIcon color="white" />
  }
];


const ResearchPriorities = () => {
    return (
        <PageSection bgColor="#d8dfef" paddingClass="py-[80px]">
            <div className="flex flex-col items-start mb-10">
                <h2 className={`${T.font.family} font-bold text-[42px] text-[#223f7f]`}>
                    Research Priorities
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {priorities.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start bg-white p-[30px] rounded-[12px] shadow-sm hover:shadow-md transition-shadow h-full"
                    >
                        {/* Icon Box */}
                        <div className="w-[50px] h-[50px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 shrink-0">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3 className={`${T.font.family} font-bold text-[22px] text-[#223f7f] mb-3 leading-tight`}>
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className={`${T.font.family} max-w-[344px] text-[18px] leading-[1.44]`} style={{ color: "rgba(25, 25, 25, 0.75)" }}>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-12">
                <button className="bg-[#008c8c] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[10px] font-regular text-[18px] flex items-center gap-2 transition-colors">
                    Explore Research Areas in Detail
                    <IconArrowRight
                        size={19}
                        stroke="white"
                        strokeWidth={2}
                    />

                </button>
            </div>
        </PageSection>
    );
};

export default ResearchPriorities;
