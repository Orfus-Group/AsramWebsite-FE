import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import TypedText from "@/components/common/TypedText";

// Components
import AcademicProgramsSection from "./AcademicProgramsSection";
import VisionMissionSection from "./VisionMission";
import StudentExperience from "./StudentExperience";
import SocialCommitment from "./SocialCommitment";
import AsramNewsEvents from "../asram/AsramNewsEvents";
import FacultySpotlightSection from "./FacultySpotlight";
import KeyStrengthsSection from "./KeyStrenght";
import FeatureGridSection from "../campus-life/sections/FeatureGridSection"; // Using Medical Layout Component

// Icons & Assets
const heroBg = "/AsramWebsite-FE/assets/nursing/asramnursingbanner.png";

// Program Icons
const IconMedical = "/AsramWebsite-FE/assets/icons/MedicalIcon.svg";
const IconArtFacilities = "/AsramWebsite-FE/assets/icons/IconArtFacilities.svg";
const IconAccredited = "/AsramWebsite-FE/assets/icons/IconAccredited.svg";

// VMV Icons
const IconCareerReady = "/AsramWebsite-FE/assets/icons/IconCareerReady.svg";
const IconHeartCare = "/AsramWebsite-FE/assets/icons/IconHeartCare.svg";

// Student Experience Icons
const IconPublicHealth = "/AsramWebsite-FE/assets/icons/IconPublicHealth.svg";
const IconPracticalLearning = "/AsramWebsite-FE/assets/icons/IconPracticalLearning.svg";
const IconExtraCurricular = "/AsramWebsite-FE/assets/icons/IconExtraCurricular.svg";
const IconAmenities = "/AsramWebsite-FE/assets/icons/IconAmenities.svg";

// Research Icons (Imported components as used in ResearchSection)
import HeartCareIcon from "@/assets/icons/HeartCareIcon";
import {
  IconAiHealth as AiHealthIcon,
  IconNcd as NcdIcon,
  IconPublicHealth as PublicHealthIconComponent
} from "@/assets/icons";
import { ClinicalPracticeIcon, PrecisionHealthIcon } from "./ResearchIcons";
import { BookIcon } from "../campus-life/components/CampusIcons";


// Faculty Images (Default)
const faculty1 = "/AsramWebsite-FE/assets/nursing/doctor_1.png";
const faculty2 = "/AsramWebsite-FE/assets/nursing/doctor_2.png";
const faculty3 = "/AsramWebsite-FE/assets/nursing/doctor_3.png";

// Faculty Icons
const expIcon = "/AsramWebsite-FE/assets/nursing/experience.svg";
const calendarIcon = "/AsramWebsite-FE/assets/nursing/weekcal.svg";
const timeIcon = "/AsramWebsite-FE/assets/nursing/timeperiod.svg";

// Key Strengths Icons
const IconHospitalIntegration = "/AsramWebsite-FE/assets/icons/IconHospitalIntegration.svg";
const IconRobustInfra = "/AsramWebsite-FE/assets/icons/IconRobustInfra.svg";
const IconRecognizedAffiliations = "/AsramWebsite-FE/assets/icons/IconRecognizedAffiliations.svg";
const IconClearPathways = "/AsramWebsite-FE/assets/icons/IconClearPathways.svg";
const IconStudentCentered = "/AsramWebsite-FE/assets/icons/IconStudentCentered.svg";
const IconOrientation = "/AsramWebsite-FE/assets/icons/IconOrientation.svg";

// Red Check Icon (Teal Version for Nursing)
const IconCheckTeal = () => (
  <svg width="11.83" height="17" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.21201 10.7801C2.21201 10.6587 2.18868 10.5981 2.14201 10.5981L1.82001 10.7521C1.82001 10.6867 1.78268 10.6401 1.70801 10.6121L1.59601 10.5981C1.52134 10.5981 1.42801 10.6307 1.31601 10.6961C1.29734 10.6494 1.27401 10.6027 1.24601 10.5561C1.21801 10.5094 1.19468 10.4674 1.17601 10.4301C1.05468 10.1967 0.933344 9.94006 0.812011 9.66006C0.700011 9.37073 0.592677 9.0954 0.490011 8.83406C0.396677 8.57273 0.322011 8.3674 0.266011 8.21806C0.228677 8.09673 0.186677 7.91473 0.140011 7.67206C0.0933441 7.4294 0.0466774 7.1214 1.0781e-05 6.74806C0.102677 6.8134 0.182011 6.84606 0.238011 6.84606C0.303344 6.84606 0.364011 6.74806 0.420011 6.55206C0.448011 6.5894 0.499344 6.60806 0.574011 6.60806C0.630011 6.60806 0.672011 6.5894 0.700011 6.55206L0.924011 6.21606L1.17601 6.30006H1.19001C1.20868 6.30006 1.22734 6.29073 1.24601 6.27206C1.26468 6.2534 1.29268 6.23473 1.33001 6.21606C1.40468 6.1694 1.46068 6.14606 1.49801 6.14606L1.54001 6.16006C1.77334 6.27206 1.92268 6.4774 1.98801 6.77606C2.15601 7.4854 2.32401 7.84006 2.49201 7.84006C2.66001 7.84006 2.85601 7.66273 3.08001 7.30806C3.19201 7.13073 3.30401 6.9254 3.41601 6.69206C3.53734 6.45873 3.65868 6.1974 3.78001 5.90806C3.79868 6.02006 3.81734 6.07606 3.83601 6.07606C3.88268 6.07606 3.96201 5.9594 4.07401 5.72606C4.19534 5.49273 4.38668 5.17073 4.64801 4.76006C4.79734 4.50806 4.98401 4.2234 5.20801 3.90606C5.44134 3.58873 5.68868 3.26206 5.95001 2.92606C6.21134 2.59006 6.46334 2.27273 6.70601 1.97406C6.95801 1.6754 7.18201 1.41873 7.37801 1.20406C7.57401 0.989395 7.71868 0.849395 7.81201 0.784062C8.16668 0.541395 8.44668 0.308062 8.65201 0.0840621C8.64268 0.149395 8.62868 0.210062 8.61001 0.266062C8.60068 0.312729 8.59601 0.345395 8.59601 0.364062C8.59601 0.401395 8.61468 0.420062 8.65201 0.420062L9.04401 0.224062V0.280062C9.04401 0.354729 9.06268 0.392062 9.10001 0.392062C9.12801 0.392062 9.18401 0.350062 9.26801 0.266062C9.35201 0.182062 9.39868 0.121396 9.40801 0.0840621L9.38001 0.280062L9.85601 6.23465e-05L9.74401 0.252062C9.89334 0.149395 10.0007 0.0980619 10.066 0.0980619C10.1033 0.0980619 10.1313 0.121395 10.15 0.168062C10.1687 0.205395 10.178 0.242729 10.178 0.280062C10.178 0.336062 10.1547 0.401395 10.108 0.476062C10.0613 0.550729 10.0007 0.639396 9.92601 0.742062C9.87001 0.816729 9.77668 0.928729 9.64601 1.07806C9.52468 1.21806 9.33801 1.42806 9.08601 1.70806C8.83401 1.97873 8.49801 2.35673 8.07801 2.84206C7.96601 2.9634 7.79334 3.17806 7.56001 3.48606C7.32668 3.78473 7.06068 4.13473 6.76201 4.53606C6.47268 4.92806 6.18334 5.32473 5.89401 5.72606C5.60468 6.1274 5.34801 6.4914 5.12401 6.81806C4.90001 7.1354 4.74134 7.3734 4.64801 7.53206L3.78001 9.00206C3.59334 9.3194 3.43934 9.58073 3.31801 9.78606C3.19668 9.98206 3.10334 10.1174 3.03801 10.1921C2.89801 10.3601 2.74401 10.5094 2.57601 10.6401L2.45001 10.5701L2.33801 10.6401L2.21201 10.7801Z" fill="#008C8C" />
  </svg>
);






const NursingPage = () => {
  const { setHero, hideHero } = useHero();

  useLayoutEffect(() => {
    setHero({
      title: (
        <TypedText
          text="Excellence in Nursing Education"
          className="font-montserrat font-bold text-[24px] sm:text-[32px] md:text-[40px] leading-[1.36] text-white"
        />
      ),
      bgImage: heroBg,
      children: (
        <>
          <div className="max-w-[520px]">
            <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[1.36] text-white mb-6">
              ASRAM School of Nursing prepares skilled, ethical, and globally competent nurses through accredited programs and real-world clinical exposure.
            </p>
          </div>
        </>
      ),
      className: "!py-12 md:!pt-[263.5px] !lg:pl-[120px] !lg:pr-[120px]",
      alignmentClass: "items-center md:items-start",
    });
    return () => hideHero();
  }, [setHero, hideHero]);

  // ================= DATA =================

  const nursingPrograms = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_704_1114)">
            <path d="M21.4198 10.9224C21.5988 10.8434 21.7507 10.7136 21.8567 10.5492C21.9627 10.3847 22.0181 10.1927 22.0161 9.99709C22.0141 9.80144 21.9547 9.61068 21.8453 9.44844C21.736 9.2862 21.5814 9.15961 21.4008 9.08436L12.8298 5.18036C12.5692 5.06151 12.2862 5 11.9998 5C11.7134 5 11.4304 5.06151 11.1698 5.18036L2.5998 9.08036C2.42177 9.15833 2.27031 9.28649 2.16396 9.44917C2.05761 9.61185 2.00098 9.802 2.00098 9.99636C2.00098 10.1907 2.05761 10.3809 2.16396 10.5435C2.27031 10.7062 2.42177 10.8344 2.5998 10.9124L11.1698 14.8204C11.4304 14.9392 11.7134 15.0007 11.9998 15.0007C12.2862 15.0007 12.5692 14.9392 12.8298 14.8204L21.4198 10.9224Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.001 10V16" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.00098 12.5V16C6.00098 16.7956 6.63312 17.5587 7.75834 18.1213C8.88355 18.6839 10.4097 19 12.001 19C13.5923 19 15.1184 18.6839 16.2436 18.1213C17.3688 17.5587 18.001 16.7956 18.001 16V12.5" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_704_1114">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

      ),
      title: "B.Sc Nursing",
      years: "4 Years Full-Time",
      seats: "~100 Seats",
      description:
        "Flagship undergraduate programme integrating theoretical lectures, practical labs, simulation, and clinical postings. Prepares students for both patient care and professional advancement.",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 7V21" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.00098 18C2.73576 18 2.48141 17.8946 2.29387 17.7071C2.10633 17.5196 2.00098 17.2652 2.00098 17V4C2.00098 3.73478 2.10633 3.48043 2.29387 3.29289C2.48141 3.10536 2.73576 3 3.00098 3H8.00098C9.06184 3 10.0793 3.42143 10.8294 4.17157C11.5795 4.92172 12.001 5.93913 12.001 7C12.001 5.93913 12.4224 4.92172 13.1725 4.17157C13.9227 3.42143 14.9401 3 16.001 3H21.001C21.2662 3 21.5205 3.10536 21.7081 3.29289C21.8956 3.48043 22.001 3.73478 22.001 4V17C22.001 17.2652 21.8956 17.5196 21.7081 17.7071C21.5205 17.8946 21.2662 18 21.001 18H15.001C14.2053 18 13.4423 18.3161 12.8797 18.8787C12.317 19.4413 12.001 20.2044 12.001 21C12.001 20.2044 11.6849 19.4413 11.1223 18.8787C10.5597 18.3161 9.79663 18 9.00098 18H3.00098Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "General Nursing",
      years: "3 Years Full-Time",
      seats: "~60 Seats",
      description:
        "Diploma level programme providing comprehensive training in nursing fundamentals and midwifery practices, preparing students for immediate clinical roles.",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4777 12.8906L16.9927 21.4166C17.0097 21.517 16.9956 21.6202 16.9524 21.7124C16.9091 21.8046 16.8387 21.8813 16.7507 21.9324C16.6626 21.9835 16.561 22.0065 16.4595 21.9983C16.358 21.9902 16.2615 21.9512 16.1827 21.8866L12.6027 19.1996C12.4299 19.0705 12.22 19.0007 12.0042 19.0007C11.7885 19.0007 11.5786 19.0705 11.4057 19.1996L7.81973 21.8856C7.74105 21.9501 7.64459 21.989 7.54322 21.9972C7.44186 22.0054 7.3404 21.9825 7.25239 21.9315C7.16438 21.8805 7.094 21.804 7.05065 21.712C7.00729 21.62 6.99302 21.5169 7.00973 21.4166L8.52373 12.8906" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.001 14C15.3147 14 18.001 11.3137 18.001 8C18.001 4.68629 15.3147 2 12.001 2C8.68727 2 6.00098 4.68629 6.00098 8C6.00098 11.3137 8.68727 14 12.001 14Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "M.Sc Nursing",
      years: "3 Years Full-Time",
      seats: "~60 Seats",
      description:
        "Specialization tracks include Medical-Surgical Nursing, Obstetrics & Gynaecological Nursing, Paediatric Nursing, Community Health Nursing, and Psychiatric Nursing.",
    },
  ];

  const nursingVisionMission = [
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 22C17.5238 22 22.001 17.5228 22.001 12C22.001 6.47715 17.5238 2 12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 17.5228 6.47813 22 12.001 22Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.001 18C15.3147 18 18.001 15.3137 18.001 12C18.001 8.68629 15.3147 6 12.001 6C8.68727 6 6.00098 8.68629 6.00098 12C6.00098 15.3137 8.68727 18 12.001 18Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Vision",
      description:
        "To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands.",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.00098 9.50053C2.001 8.38773 2.33857 7.30111 2.96911 6.38419C3.59965 5.46727 4.49349 4.76319 5.53259 4.36493C6.57168 3.96667 7.70713 3.89297 8.78899 4.15357C9.87084 4.41417 10.8482 4.99681 11.592 5.82453C11.6444 5.88054 11.7077 5.9252 11.7781 5.95573C11.8484 5.98626 11.9243 6.00201 12.001 6.00201C12.0777 6.00201 12.1535 5.98626 12.2239 5.95573C12.2943 5.9252 12.3576 5.88054 12.41 5.82453C13.1514 4.99143 14.129 4.4039 15.2126 4.14013C16.2962 3.87636 17.4345 3.94887 18.4759 4.34801C19.5172 4.74715 20.4124 5.45398 21.0421 6.37443C21.6718 7.29488 22.0063 8.38529 22.001 9.50053C22.001 11.7905 20.501 13.5005 19.001 15.0005L13.509 20.3135C13.3226 20.5275 13.0929 20.6994 12.835 20.8178C12.5771 20.9362 12.297 20.9984 12.0133 21.0002C11.7295 21.002 11.4486 20.9434 11.1893 20.8283C10.9299 20.7131 10.698 20.5442 10.509 20.3325L5.00098 15.0005C3.50098 13.5005 2.00098 11.8005 2.00098 9.50053Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Mission",
      description:
        "To evolve into a premier institution of nursing education that cultivates skilled, ethical, compassionate nursing professionals capable of meeting national and global health care demands.",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4777 12.8906L16.9927 21.4166C17.0097 21.517 16.9956 21.6202 16.9524 21.7124C16.9091 21.8046 16.8387 21.8813 16.7507 21.9324C16.6626 21.9835 16.561 22.0065 16.4595 21.9983C16.358 21.9902 16.2615 21.9512 16.1827 21.8866L12.6027 19.1996C12.4299 19.0705 12.22 19.0007 12.0042 19.0007C11.7885 19.0007 11.5786 19.0705 11.4057 19.1996L7.81973 21.8856C7.74105 21.9501 7.64459 21.989 7.54322 21.9972C7.44186 22.0054 7.3404 21.9825 7.25239 21.9315C7.16438 21.8805 7.094 21.804 7.05065 21.712C7.00729 21.62 6.99302 21.5169 7.00973 21.4166L8.52373 12.8906" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.001 14C15.3147 14 18.001 11.3137 18.001 8C18.001 4.68629 15.3147 2 12.001 2C8.68727 2 6.00098 4.68629 6.00098 8C6.00098 11.3137 8.68727 14 12.001 14Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Values",
      description:
        "Compassion, excellence, integrity, service, innovation – students are trained not only in technical proficiency but also in ethical and patient-centered care.",
    },
  ];

  // Icons for Student Experience
  const StudentIconRatio = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
  const StudentIconLearning = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );
  const StudentIconActivities = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  );
  const StudentIconAmenities = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  );

  const nursingStudentExperience = [
    {
      icon: <StudentIconRatio color="#008C8C" />,
      title: "Favorable Faculty Ratio",
      desc: "~5:1 faculty to student ratio ensures personalized attention and mentoring",
    },
    {
      icon: <StudentIconLearning color="#008C8C" />,
      title: "Practical Learning Experience",
      desc: "Simulation, skills labs, clinical rotations, case discussions, and hands-on training",
    },
    {
      icon: <StudentIconActivities color="#008C8C" />,
      title: "Extra-Curricular Activities",
      desc: "Workshops, seminars, case-presentations, academic clubs, and competitive events",
    },
    {
      icon: <StudentIconAmenities color="#008C8C" />,
      title: "Modern Amenities in a place",
      desc: "Hostels, transport, WiFi connectivity, campus safety, and comprehensive support",
    },
  ];

  const nursingResearchData = [
    {
      icon: (<HeartCareIcon size={26} color="#008C8C" strokeWidth={2.8} />),
      title: "Cardiovascular Health",
      description:
        "Investigating novel interventions to improve outcomes for patients with heart disease.",
    },
    {
      icon: <AiHealthIcon size={26} color="#008C8C" strokeWidth={2.8} />,
      title: "Mental Health & Wellness",
      description:
        "Advancing evidence-based approaches to mental health care and substance use disorders.",
    },
    {
      icon: (<PublicHealthIconComponent size={26} strokeWidth={2.8} color="#008C8C" />),
      title: "Health Equity",
      description:
        "Addressing disparities and promoting health equity in underserved communities.",
    },
    {
      icon: (<NcdIcon size={26} strokeWidth={2.8} color="#008C8C" />),
      title: "Chronic Disease Management",
      description:
        "Developing innovative strategies for managing diabetes, cancer, and other chronic conditions.",
    },
    {
      icon: <ClinicalPracticeIcon size={26} color="#008C8C" strokeWidth={2.8} />,
      title: "Clinical Practice Innovation",
      description:
        "Transforming care delivery through technology and evidence-based practice improvements.",
    },
    {
      icon: (<PrecisionHealthIcon size={26} color="#008C8C" strokeWidth={2.8} />),
      title: "Precision Health",
      description:
        "Utilizing genomics and personalized medicine to optimize patient outcomes.",
    },
  ];

  // Icons for Faculty Data
  const IconGradCap = (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V12" />
    </svg>
  );
  const IconBook = (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
  const IconMedal = (props) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.4776 12.89L17 22L12 19L7 22L8.52239 12.89" />
    </svg>
  );

  const nursingFacultyData = [
    {
      img: faculty1,
      name: "Dr. Sanjay Malhotra",
      role: "Principal",
      college: "ASRAM Medical College",
      qualification: null, // Moved to details
      details: [
        { icon: <IconGradCap />, text: "MBBS, MD, FICP" },
        { icon: <IconBook />, text: "Medical Education & Administration" },
        { icon: <IconMedal />, text: "28+ years Experience" }
      ],
      badge: null
    },
    {
      img: faculty2,
      name: "Dr. Priya Sharma",
      role: "Professor & Dean",
      college: "Department of Pathology",
      qualification: null,
      details: [
        { icon: <IconGradCap />, text: "MD (Pathology), PhD" },
        { icon: <IconBook />, text: "Hematopathology" },
        { icon: <IconMedal />, text: "22+ years Experience" }
      ],
      badge: null
    },
    {
      img: faculty3,
      name: "Mrs. Deepa Thomas",
      role: "Professor & Principal",
      college: "College of Nursing",
      qualification: null,
      details: [
        { icon: <IconGradCap />, text: "MSc (Nursing), PhD" },
        { icon: <IconBook />, text: "Medical-Surgical Nursing" },
        { icon: <IconMedal />, text: "20+ years Experience" }
      ],
      badge: null
    },
  ];

  // Icons for Key Strengths
  const StrengthIconHospital = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
  const StrengthIconInfra = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="9" y2="22.01" />
      <line x1="15" y1="22" x2="15" y2="22.01" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
  const StrengthIconAffiliation = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
  const StrengthIconPathways = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
  const StrengthIconStudent = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <circle cx="19" cy="11" r="2" />
      <path d="M23 21v-2a2 2 0 0 0-2-2" />
    </svg>
  );
  const StrengthIconOrientation = ({ color = "#223F7F", ...props }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );

  const nursingKeyStrengths = [
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7V11" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 21V18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18V21" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 9H10" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.001 11H20.001C20.5314 11 21.0401 11.2107 21.4152 11.5858C21.7903 11.9609 22.001 12.4696 22.001 13V19C22.001 19.5304 21.7903 20.0391 21.4152 20.4142C21.0401 20.7893 20.5314 21 20.001 21H4.00098C3.47054 21 2.96184 20.7893 2.58676 20.4142C2.21169 20.0391 2.00098 19.5304 2.00098 19V10C2.00098 9.46957 2.21169 8.96086 2.58676 8.58579C2.96184 8.21071 3.47054 8 4.00098 8H6.00098" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18.001 21V5C18.001 4.46957 17.7903 3.96086 17.4152 3.58579C17.0401 3.21071 16.5314 3 16.001 3H8.00098C7.47054 3 6.96184 3.21071 6.58676 3.58579C6.21169 3.96086 6.00098 4.46957 6.00098 5V21" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Hospital Integration",
      description:
        "Comprehensive multispecialty hospital providing real-time clinical exposure and practical training",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12H14" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 8H14" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 21V18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18V21" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.00098 10H4.00098C3.47054 10 2.96184 10.2107 2.58676 10.5858C2.21169 10.9609 2.00098 11.4696 2.00098 12V19C2.00098 19.5304 2.21169 20.0391 2.58676 20.4142C2.96184 20.7893 3.47054 21 4.00098 21H20.001C20.5314 21 21.0401 20.7893 21.4152 20.4142C21.7903 20.0391 22.001 19.5304 22.001 19V9C22.001 8.46957 21.7903 7.96086 21.4152 7.58579C21.0401 7.21071 20.5314 7 20.001 7H18.001" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.00098 21V5C6.00098 4.46957 6.21169 3.96086 6.58676 3.58579C6.96184 3.21071 7.47054 3 8.00098 3H16.001C16.5314 3 17.0401 3.21071 17.4152 3.58579C17.7903 3.96086 18.001 4.46957 18.001 5V21" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Robust Infrastructure",
      description:
        "State-of-the-art labs, simulation centers, library, hostels, and sports facilities",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4777 12.8906L16.9927 21.4166C17.0097 21.517 16.9956 21.6202 16.9524 21.7124C16.9091 21.8046 16.8387 21.8813 16.7507 21.9324C16.6626 21.9835 16.561 22.0065 16.4595 21.9983C16.358 21.9902 16.2615 21.9512 16.1827 21.8866L12.6027 19.1996C12.4299 19.0705 12.22 19.0007 12.0042 19.0007C11.7885 19.0007 11.5786 19.0705 11.4057 19.1996L7.81973 21.8856C7.74105 21.9501 7.64459 21.989 7.54322 21.9972C7.44186 22.0054 7.3404 21.9825 7.25239 21.9315C7.16438 21.8805 7.094 21.804 7.05065 21.712C7.00729 21.62 6.99302 21.5169 7.00973 21.4166L8.52373 12.8906" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.001 14C15.3147 14 18.001 11.3137 18.001 8C18.001 4.68629 15.3147 2 12.001 2C8.68727 2 6.00098 4.68629 6.00098 8C6.00098 11.3137 8.68727 14 12.001 14Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Recognized Affiliations",
      description:
        "INC approval and NTRUHS affiliation lending credibility and national recognition",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H22V13" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22.001 7L13.501 15.5L8.50098 10.5L2.00098 17" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Clear Pathways",
      description:
        "Structured progression from undergraduate to postgraduate levels within the institution",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.001 21V19C16.001 17.9391 15.5795 16.9217 14.8294 16.1716C14.0793 15.4214 13.0618 15 12.001 15H6.00098C4.94011 15 3.92269 15.4214 3.17255 16.1716C2.4224 16.9217 2.00098 17.9391 2.00098 19V21" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 3.125C16.8578 3.34737 17.6174 3.84826 18.1597 4.54906C18.702 5.24986 18.9962 6.11089 18.9962 6.997C18.9962 7.88311 18.702 8.74414 18.1597 9.44494C17.6174 10.1457 16.8578 10.6466 16 10.869" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 20.995V18.995C21.9993 18.1087 21.7044 17.2478 21.1614 16.5473C20.6184 15.8469 19.8581 15.3466 19 15.125" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.00098 11C11.2101 11 13.001 9.20914 13.001 7C13.001 4.79086 11.2101 3 9.00098 3C6.79184 3 5.00098 4.79086 5.00098 7C5.00098 9.20914 6.79184 11 9.00098 11Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Student-Centered Environment",
      description:
        "Strong mentoring, favorable faculty ratio, and personalized attention for holistic growth",
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5258 2.29489C11.5696 2.20635 11.6373 2.13183 11.7213 2.07972C11.8052 2.02761 11.902 2 12.0008 2C12.0996 2 12.1964 2.02761 12.2804 2.07972C12.3643 2.13183 12.432 2.20635 12.4758 2.29489L14.7858 6.97389C14.938 7.28186 15.1626 7.5483 15.4404 7.75035C15.7183 7.95239 16.041 8.08401 16.3808 8.13389L21.5468 8.88989C21.6447 8.90408 21.7367 8.94537 21.8123 9.00909C21.888 9.07282 21.9443 9.15644 21.9748 9.2505C22.0054 9.34456 22.0091 9.4453 21.9854 9.54133C21.9617 9.63736 21.9116 9.72485 21.8408 9.79389L18.1048 13.4319C17.8584 13.672 17.6741 13.9684 17.5677 14.2955C17.4612 14.6227 17.4359 14.9708 17.4938 15.3099L18.3758 20.4499C18.3931 20.5477 18.3825 20.6485 18.3453 20.7406C18.3081 20.8327 18.2458 20.9125 18.1654 20.9709C18.085 21.0293 17.9898 21.0639 17.8907 21.0708C17.7916 21.0777 17.6925 21.0566 17.6048 21.0099L12.9868 18.5819C12.6825 18.4221 12.344 18.3386 12.0003 18.3386C11.6566 18.3386 11.3181 18.4221 11.0138 18.5819L6.39682 21.0099C6.30915 21.0563 6.21022 21.0772 6.11127 21.0701C6.01233 21.0631 5.91734 21.0285 5.83712 20.9701C5.75689 20.9118 5.69466 20.8321 5.65748 20.7401C5.6203 20.6482 5.60968 20.5476 5.62682 20.4499L6.50782 15.3109C6.56602 14.9716 6.54081 14.6233 6.43436 14.2959C6.32792 13.9686 6.14343 13.672 5.89682 13.4319L2.16082 9.79489C2.08942 9.72593 2.03882 9.63829 2.01479 9.54197C1.99075 9.44565 1.99426 9.34451 2.0249 9.25008C2.05554 9.15566 2.11209 9.07174 2.1881 9.00788C2.26411 8.94402 2.35653 8.90279 2.45482 8.88889L7.61982 8.13389C7.96008 8.08439 8.28321 7.95295 8.56141 7.75088C8.8396 7.54881 9.06453 7.28216 9.21682 6.97389L11.5258 2.29489Z" stroke="#008C8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      title: "Practical Orientation",
      description:
        "Emphasis on hands-on training, simulation, and clinical rotations over theoretical learning alone",
    },
  ];

  const nursingWhyChooseConfig = {
    title: "Why Choose ASRAM School of Nursing",
    CheckIcon: <IconCheckTeal />,
    columns: [
      {
        title: "Educational Excellence",
        items: [
          "Integration with comprehensive multispecialty hospital",
          "Robust infrastructure across 10-acre campus",
          "Recognized affiliations and regulatory approvals"
        ]
      },
      {
        title: "Student Success",
        items: [
          "Clear pathways from undergraduate to postgraduate",
          "Student-centered environment with strong mentoring",
          "Practical orientation ensuring job readiness"
        ]
      }
    ]
  };

  return (
    <>
      <AcademicProgramsSection
        ctafontweight="font-regular"
        programs={nursingPrograms}
        cardBg="#EEF2F7"
        iconBg="#FFFFFF"
        badgeBg="#223F7F"
        badgeClassName="h-[36px] px-[20px]"
      />
      <VisionMissionSection
        data={nursingVisionMission}
        cardBg="#FFFFFF"
        iconBg="#008C8C1A" // 10% Teal
        iconContainerClassName="w-[48px] h-[48px]"
      />
      <StudentExperience
        data={nursingStudentExperience}
        cardBg="#eef2f7"
        iconBg="#FFFFFF"
        iconContainerClassName="w-[48px] h-[48px] overflow-hidden"
        titleColor="#223f7f"
        titleClassName=""
        heading="Student Experience"
        subHeading="Comprehensive Learning Environment"
        description={[
          "At ASRAM School of Nursing, we prioritize creating a supportive and structured learning environment where students can grow academically, professionally, and personally through guided instruction and continuous mentorship. The campus culture encourages discipline, collaboration, and confidence in clinical decision-making.",
          "Our approach combines rigorous academics with simulation-based training, supervised clinical exposure, and holistic development practices. This ensures graduates are compassionate, competent, and well-prepared to meet the demands of modern nursing practice."
        ]}
      />
      <FeatureGridSection
        heading="Research"
        items={nursingResearchData}
        bgColor="bg-[#EEF2F7]"
        buttonText="Explore Our Research"
        onButtonClick={() => navigate('/nursing-research')} // Update onButtonClick
        gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        gap="gap-[20px]"
        cardProps={{
          padding: "p-[20px]",
          borderRadius: "rounded-[12px]",
          gap: "mb-[20px]",
          iconContainerClassName: "mb-[20px] p-[11px] w-[48px] h-[48px] rounded-[8px] bg-[#008C8C1A]"
        }}
      />
      <SocialCommitment
        iconColor="#008C8C"
        cardBg="#EEF2F7"
        cardBorder="1px solid rgba(7, 7, 7, 0.2)"
        iconBg="#008C8C1A" // 10% Teal
      />
      <AsramNewsEvents />
      <FacultySpotlightSection
        heading="Faculty"
        facultyData={nursingFacultyData}
        borderRadius="rounded-[9.69px]"
        imageHeight="h-[310.17px]"
        gridGap="gap-[20px]"
        iconConfig={{
          color: "#191919",
          width: "18",
          height: "18",
          strokeWidth: "2"
        }}
        primaryButtonConfig={{
          text: "Email",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          ),
          className: "flex-1 h-[48px] rounded-[10px] text-[14px] font-medium bg-[#EEF2F7] text-[#191919] hover:bg-gray-200 border border-transparent"
        }}
        secondaryButtonConfig={{
          text: "View Profile",
          className: "w-[120px] h-[48px] rounded-[10px] text-[14px] font-medium bg-[#223F7F] text-white hover:bg-[#1a3163]"
        }}
        roleConfig={{
          color: "#223F7F",
          fontSize: "text-[16px] md:text-[18px]",
          fontWeight: "font-normal"
        }}
        collegeConfig={{
          color: "#4A5565",
          fontSize: "text-[16px]",
          lineHeight: "leading-[23.5px]",
          fontWeight: "font-normal"
        }}
        spacingConfig={{
          paddingClass: "p-[27.13px]",
          headerGap: "gap-[10.85px]",
          nameMb: "mb-[10.85px]",
          roleMb: "mb-[10.85px]",
          qualificationMt: "mt-0",
          detailsMt: "mt-0",
          detailsGap: "gap-[9.04px]",
          buttonsMt: "mt-[20px]",
          buttonsPt: "pt-0",
          borderClass: ""
        }}
        cardBorder="border-[0.9px] border-[#07070733]"
      />
      <KeyStrengthsSection
        heading="Key Strengths"
        data={nursingKeyStrengths}
        iconConfig={{
          bg: "#008C8C1A", // 10% Teal
          className: "w-[48px] h-[48px] rounded-[12px] flex items-center justify-center"
        }}
        cardConfig={{
          borderColor: "#223F7F", // Reverted back to Medical Blue
          bg: "#FFFFFF"
        }}
        bgColor="bg-[#EEF2F7]"
        showWhyChoose={true}
        whyChooseConfig={nursingWhyChooseConfig}
      />
    </>
  );
};

export default NursingPage;
