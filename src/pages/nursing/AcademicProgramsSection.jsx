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
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px]">

        {/* Heading */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[36px]
            leading-[48px]
            text-[#223F7F]
            tracking-[0px]
            mb-[52px]
          `}
        >
          Academic Programs
        </h2>

        {/* Responsive Cards */}
        <div
          className="
            grid 
            grid-cols-1          /* Mobile */
            sm:grid-cols-2       /* Tablets */
            lg:grid-cols-3       /* Desktop - EXACT original layout */
            gap-[28.95px]
            justify-between
          "
        >
          {programs.map((p, i) => (
            <InfoCard key={i} {...p} variant="program" />
          ))}
        </div>
      </div>
    </section>
  );
}
