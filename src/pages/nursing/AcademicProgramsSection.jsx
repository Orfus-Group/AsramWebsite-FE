
import PageSection from "@/features/common/layout/PageContainer";   // ✅ FIXED
import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";

const IconMedical = "/AsramWebsite-FE/assets/icons/MedicalIcon.svg";
const IconArtFacilities = "/AsramWebsite-FE/assets/icons/IconArtFacilities.svg";
const IconAccredited = "/AsramWebsite-FE/assets/icons/IconAccredited.svg";

export default function AcademicProgramsSection({
  programs,
  iconBg,
  cardBg,
  ctafontweight,
  badgeBg,
  badgeClassName,
  titleColor,
  iconFilter // To control icon color (invert brightness-0 for white, none for colored)
}) {
  const defaultPrograms = [
    {
      icon: (
        <img
          src={IconMedical}
          className="w-[28px] h-[28px] invert brightness-0"
          alt=""
        />
      ),
      title: "B.Sc Nursing",
      years: "4 Years Full-Time",
      seats: "~100 Seats",
      description:
        "Flagship undergraduate programme integrating theoretical lectures, practical labs, simulation, and clinical postings. Prepares students for both patient care and professional advancement.",
    },
    {
      icon: (<img src={IconArtFacilities} className="w-[28px] h-[28px]" alt="" />),
      title: "General Nursing",
      years: "3 Years Full-Time",
      seats: "~60 Seats",
      description:
        "Diploma level programme providing comprehensive training in nursing fundamentals and midwifery practices, preparing students for immediate clinical roles.",
    },
    {
      icon: (<img src={IconAccredited} className="w-[28px] h-[28px]" alt="" />),
      title: "M.Sc Nursing",
      years: "3 Years Full-Time",
      seats: "~60 Seats",
      description:
        "Specialization tracks include Medical-Surgical Nursing, Obstetrics & Gynaecological Nursing, Paediatric Nursing, Community Health Nursing, and Psychiatric Nursing.",
    },
  ];

  const data = programs || defaultPrograms;

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
        {data.map((p, i) => (
          <InfoCard
            key={i}
            {...p}
            variant="program"
            ctafontweight={ctafontweight}
            className="w-full max-w-none"
            iconBg={iconBg}
            cardBg={cardBg}
            badgeBg={badgeBg}
            badgeClassName={badgeClassName || "h-[36px] px-[20px]"}
          />
        ))}
      </div>

    </PageSection>
  );
}
