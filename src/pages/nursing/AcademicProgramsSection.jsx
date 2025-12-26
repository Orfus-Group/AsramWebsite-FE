
import PageSection from "@/features/common/layout/PageContainer";   // ✅ FIXED
import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";
import MedicalIcon from "@/assets/icons/MedicalIcon";
import { AccreditedIcon, ArtFacilitiesIcon } from "../academics/WhyChooseNursingSchool";

export default function AcademicProgramsSection() {
  const programs = [
    {
      icon: (
        <MedicalIcon
          size={28}
          className="text-white"
        />
      ),
      title: "B.Sc Nursing",
      years: "4 Years Full-Time",
      seats: "~100 Seats",
      description:
        "Flagship undergraduate programme integrating theoretical lectures, practical labs, simulation, and clinical postings. Prepares students for both patient care and professional advancement.",
    },
    {
      icon: (<ArtFacilitiesIcon />),
      title: "General Nursing",
      years: "3 Years Full-Time",
      seats: "~60 Seats",
      description:
        "Diploma level programme providing comprehensive training in nursing fundamentals and midwifery practices, preparing students for immediate clinical roles.",
    },
    {
      icon: (<AccreditedIcon />),
      title: "M.Sc Nursing",
      years: "3 Years Full-Time",
      seats: "~60 Seats",
      description:
        "Specialization tracks include Medical-Surgical Nursing, Obstetrics & Gynaecological Nursing, Paediatric Nursing, Community Health Nursing, and Psychiatric Nursing.",
    },
  ];

  return (
    <PageSection bg={T.bg.white} paddingClass="py-[80px]">

      {/* ========================= HEADING ========================= */}
      <h2
        className={`
    ${T.font.family}
    ${T.font.weight.bold}
    text-[#223F7F]

    /* MOBILE – strong but compact */
    text-[28px] leading-[28px] tracking-[-0.2px]

    /* TABLET */
    sm:text-[28px] sm:leading-[34px]

    /* DESKTOP – unchanged */
    md:text-[36px] md:leading-[48px]

    mb-[28px] sm:mb-[36px] md:mb-[52px]
  `}
      >
        Academic Programs
      </h2>


      {/* ========================= CARDS GRID ========================= */}
      <div
        className="
          grid 
          grid-cols-1
          gap-[24px]
          
          sm:grid-cols-2
          md:gap-[26px]

          lg:grid-cols-3
          lg:gap-[30px]
          
          w-full
        "
      >
        {programs.map((p, i) => (
          <InfoCard
            key={i}
            {...p}
            variant="program"
            className="w-full max-w-none"
          />
        ))}
      </div>

    </PageSection>
  );
}
