import iconNursing from "../../assets/nursing/bscnursing.svg";
import iconGeneral from "../../assets/nursing/generalnursing.svg";
import iconMSc from "../../assets/nursing/mscnursing.svg";
import { T } from "../../theme";
import InfoCard from "../infoCard";

export default function AcademicProgramsSection() {
  const programs = [
    {
      icon: iconNursing,
      title: "B.Sc Nursing",
      years: "4 Years Full-Time",
      seats: "~100 Seats",
      description:
        "Flagship undergraduate programme integrating theoretical lectures, practical labs, simulation, and clinical postings. Prepares students for both patient care and professional advancement.",
    },
    {
      icon: iconGeneral,
      title: "General Nursing",
      years: "3 Years Full-Time",
      seats: "~60 Seats",
      description:
        "Diploma level programme providing comprehensive training in nursing fundamentals and midwifery practices, preparing students for immediate clinical roles.",
    },
    {
      icon: iconMSc,
      title: "M.Sc Nursing",
      years: "3 Years Full-Time",
      seats: "~60 Seats",
      description:
        "Specialization tracks include Medical-Surgical Nursing, Obstetrics & Gynaecological Nursing, Paediatric Nursing, Community Health Nursing, and Psychiatric Nursing.",
    },
  ];

  return (
    <section className={`relative ${T.bg.white} py-[84px]`}>
      <div className="w-[1440px] max-w-full mx-auto px-[100px]">

        {/* Heading */}
      <h2
  className={`
    ${T.font.family}
    ${T.font.weight.bold}
    text-[36px]            /* Figma exact */
    leading-[48px]         /* Figma exact */
    text-[#223F7F]         /* Figma color */
    tracking-[0px]         /* Figma exact */
    mb-[52px]
  `}
>
  Academic Programs
</h2>

        {/* Program Cards */}
        <div className="flex justify-between gap-[28.95px]">
          {programs.map((p, i) => (
            <InfoCard key={i} {...p} variant="program" />
          ))}
        </div>
      </div>
    </section>
  );
}
