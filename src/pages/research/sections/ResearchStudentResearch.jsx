import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import { IconArrowRight } from "@/assets/icons";
import AnimatedStatValue from "@/features/common/ui/AnimatedStatValue";

const programs = [
  {
    title: "ICMR-STS Program",
    desc: "Short-term studentship for MBBS students with ₹10,000 stipend and ICMR certificate.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9501 14.1172L18.6093 23.4547C18.6279 23.5646 18.6124 23.6776 18.5651 23.7786C18.5177 23.8795 18.4406 23.9636 18.3442 24.0195C18.2477 24.0755 18.1365 24.1007 18.0253 24.0917C17.9142 24.0828 17.8084 24.0401 17.7222 23.9694L13.8015 21.0267C13.6122 20.8852 13.3823 20.8088 13.146 20.8088C12.9097 20.8088 12.6798 20.8852 12.4905 21.0267L8.56324 23.9683C8.47707 24.0389 8.37143 24.0815 8.26042 24.0905C8.1494 24.0994 8.03829 24.0743 7.94191 24.0185C7.84552 23.9627 7.76844 23.8788 7.72096 23.7781C7.67348 23.6774 7.65784 23.5645 7.67615 23.4547L9.33424 14.1172" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.1421 15.3335C16.7712 15.3335 19.7132 12.3916 19.7132 8.76246C19.7132 5.13337 16.7712 2.19141 13.1421 2.19141C9.51301 2.19141 6.57104 5.13337 6.57104 8.76246C6.57104 12.3916 9.51301 15.3335 13.1421 15.3335Z" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ) // Badge
  },
  {
    title: "UG Dissertation Research",
    desc: "Mandatory research projects for final year students with faculty mentorship.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1421 7.66602V22.9985" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.28561 19.7128C2.99515 19.7128 2.71658 19.5974 2.5112 19.392C2.30581 19.1866 2.19043 18.9081 2.19043 18.6176V4.38033C2.19043 4.08987 2.30581 3.81131 2.5112 3.60593C2.71658 3.40054 2.99515 3.28516 3.28561 3.28516H8.76149C9.92332 3.28516 11.0376 3.74669 11.8591 4.56823C12.6807 5.38978 13.1422 6.50403 13.1422 7.66586C13.1422 6.50403 13.6037 5.38978 14.4253 4.56823C15.2468 3.74669 16.3611 3.28516 17.5229 3.28516H22.9988C23.2892 3.28516 23.5678 3.40054 23.7732 3.60593C23.9786 3.81131 24.0939 4.08987 24.0939 4.38033V18.6176C24.0939 18.9081 23.9786 19.1866 23.7732 19.392C23.5678 19.5974 23.2892 19.7128 22.9988 19.7128H16.4277C15.5563 19.7128 14.7207 20.059 14.1045 20.6751C13.4883 21.2913 13.1422 22.1269 13.1422 22.9983C13.1422 22.1269 12.796 21.2913 12.1799 20.6751C11.5637 20.059 10.728 19.7128 9.85666 19.7128H3.28561Z" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ) // Book/Open
  },
  {
    title: "PG Thesis Support",
    desc: "Comprehensive support for MD/MS/MSc thesis with funding up to ₹50,000.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.4582 11.9606C23.6542 11.8741 23.8206 11.732 23.9367 11.5519C24.0528 11.3718 24.1135 11.1616 24.1113 10.9473C24.1091 10.733 24.044 10.5241 23.9242 10.3464C23.8045 10.1688 23.6352 10.0301 23.4374 9.9477L14.0506 5.67213C13.7653 5.54197 13.4553 5.47461 13.1416 5.47461C12.828 5.47461 12.518 5.54197 12.2326 5.67213L2.84698 9.94332C2.652 10.0287 2.48613 10.1691 2.36966 10.3472C2.25319 10.5254 2.19116 10.7336 2.19116 10.9465C2.19116 11.1594 2.25319 11.3676 2.36966 11.5458C2.48613 11.7239 2.652 11.8643 2.84698 11.9497L12.2326 16.2296C12.518 16.3598 12.828 16.4272 13.1416 16.4272C13.4553 16.4272 13.7653 16.3598 14.0506 16.2296L23.4582 11.9606Z" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24.0935 10.9512V17.5222" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.5708 13.6895V17.5226C6.5708 18.3939 7.26311 19.2296 8.49542 19.8458C9.72773 20.4619 11.3991 20.8081 13.1419 20.8081C14.8846 20.8081 16.556 20.4619 17.7883 19.8458C19.0206 19.2296 19.7129 18.3939 19.7129 17.5226V13.6895" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ) // Graduation Cap
  },
  {
    title: "Research Mentorship Program",
    desc: "One-on-one pairing with experienced faculty for research guidance.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5229 22.9988V20.8084C17.5229 19.6466 17.0614 18.5324 16.2398 17.7108C15.4183 16.8893 14.304 16.4277 13.1422 16.4277H6.57113C5.4093 16.4277 4.29505 16.8893 3.47351 17.7108C2.65197 18.5324 2.19043 19.6466 2.19043 20.8084V22.9988" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.5225 3.42578C18.4619 3.66932 19.2938 4.21788 19.8877 4.98538C20.4816 5.75288 20.8038 6.69586 20.8038 7.6663C20.8038 8.63675 20.4816 9.57973 19.8877 10.3472C19.2938 11.1147 18.4619 11.6633 17.5225 11.9068" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24.0936 22.999V20.8086C24.0929 19.838 23.7699 18.8951 23.1752 18.128C22.5805 17.3609 21.7479 16.813 20.8081 16.5703" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.85653 12.0466C12.2759 12.0466 14.2372 10.0853 14.2372 7.66586C14.2372 5.24646 12.2759 3.28516 9.85653 3.28516C7.43714 3.28516 5.47583 5.24646 5.47583 7.66586C5.47583 10.0853 7.43714 12.0466 9.85653 12.0466Z" stroke="white" stroke-width="2.19035" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    ) // People/Mentorship
  }
];

const ResearchStudentResearch = () => {
  return (
    <PageSection bgColor="#D8DFEF" paddingClass="py-[80px]">
      <h2 className={`${T.font.family} font-bold text-[40px] text-[#223F7F] mb-10`}>
        Student Research
      </h2>

      {/* Row 1: Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-10">
        {programs.map((item, index) => (
          <div key={index} className="bg-white rounded-[12px] p-[24px] md:p-[30px] flex flex-col items-start h-full shadow-sm hover:shadow-md transition-shadow">
            <div className="w-[48px] h-[48px] bg-[#008C8C] rounded-[8px] flex items-center justify-center mb-5 shrink-0">
              {item.icon}
            </div>

            <h3 className={`${T.font.family} font-medium text-[18px] text-[#223F7F] mb-3 leading-snug`}>
              {item.title}
            </h3>

            <p className={`${T.font.family} text-[14px] font-regular text-[#191919BF] leading-[20px]`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Row 2: Student Research Forum Banner */}
      <div className="bg-white rounded-[12px] px-[24px] md:px-[37.5px] pt-[24px] md:pt-[37.5px] pb-[20px] md:pb-[30px] mb-[40px] ">

        {/* TITLE (full width, unchanged) */}
        <h3 className={`${T.font.family} font-semibold text-[24px] text-[#223F7F] mb-3`}>
          ASRAM Student Research Forum
        </h3>

        {/* DESCRIPTION + BUTTON ROW (THIS IS THE FIX) */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-[32px] mb-[20px]">
          <p
            className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] flex-1`}
          >
            Join 250+ active members in our vibrant research community. Participate in
            monthly journal clubs, quarterly workshops, and annual symposiums.
          </p>

          <button
            className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[18px] transition-colors shrink-0"
          >
            Join Forum
          </button>
        </div>

        {/* STATS (unchanged sizes & layout) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-30">
          <div>
            <AnimatedStatValue
              value="250+"
              className={`${T.font.family} font-semibold text-[22px] text-[#191919] mb-1`}
            />
            <p className="text-[14px] font-regular text-[#191919]">
              Active Members
            </p>
          </div>

          <div>
            <AnimatedStatValue
              value="12+"
              className={`${T.font.family} font-semibold text-[22px] text-[#191919] mb-1`}
            />
            <p className="text-[14px] font-regular text-[#191919]">
              Annual Workshops
            </p>
          </div>

          <div>
            <h4 className={`${T.font.family} font-bold text-[24px] text-[#333] mb-1`}>
              Monthly
            </h4>
            <p className="text-[14px] font-regular text-[#191919]">
              Journal Clubs
            </p>
          </div>

        </div>


        {/* Stats in Banner */}

      </div>

      {/* Footer Button */}
      <div className="flex justify-center">
        <button className="bg-[#008C8C] hover:bg-[#007A7A] text-white px-8 py-3 rounded-[6px] font-medium text-[18px] flex items-center gap-2 transition-colors">
          Explore Student Research Opportunities
          <span><IconArrowRight
            size={21}
            stroke="white"
            strokeWidth={1.7}
          /></span>
        </button>
      </div>

    </PageSection>
  );
};

export default ResearchStudentResearch;
