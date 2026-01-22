import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import { T } from "@/theme";
import TypedText from "@/components/common/TypedText";
import WhoWeAre from "./sections/WhoWeAre";
import OurCoreValues from "./sections/OurCoreValues";
import AccreditationStandards from "./sections/AccreditationStandards";
import LeadershipGovernance from "./sections/LeadershipGovernance";
import GlobalPartnerships from "./sections/GlobalPartnerships";
import { useLocation } from "react-router-dom";

const HeroBg = "/AsramWebsite-FE/assets/about/aboutherobg.png";


const AboutAsramPage = () => {
    const { setHero, hideHero } = useHero();
    const location = useLocation();


    useLayoutEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }
}, [location]);


    useLayoutEffect(() => {
        setHero({
            title: (
                <span className={`${T.font.family} font-normal text-[32px] md:text-[60px] leading-[40px] md:leading-[54px]`}>
                    <TypedText text="About" className="font-normal" />{" "}
                    <TypedText text="ASRAM" className="font-bold" delay={0.3} />
                </span>
            ),
            bgImage: HeroBg,
            isVisible: true,
            children: (
                <div className="max-w-[520px] text-white">
                    <p className={`${T.font.family} font-medium text-[16px] md:text-[22px] leading-[1.36] mb-8 text-white`}>
                        A premier academic and healthcare institution integrating medical education, research, and advanced clinical care since 2000.
                    </p>
                    {/* <button
                        className="
                bg-[#191919] 
                hover:bg-[#27272a] 
                text-white 
                px-6 py-2 md:px-8 md:py-3
                rounded-[8px] 
                text-[16px] md:text-[22px] font-medium 
                transition-colors
            "
                    >
                        Know About Us
                    </button> */}
                </div>
            )
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <div className="w-full bg-white">
           <section id="who-we-are" className="scroll-mt-[60px]">
      <WhoWeAre />
    </section>

    <section id="our-core-values" className="scroll-mt-[60px]">
      <OurCoreValues />
    </section>

    <section id="accreditation-standards" className="scroll-mt-[60px]">
      <AccreditationStandards />
    </section>

    <section id="leadership-governance" className="scroll-mt-[60px]">
      <LeadershipGovernance />
    </section>

    <section id="global-partnerships" className="scroll-mt-[60px]">
      <GlobalPartnerships />
    </section>
        </div>
    );
};

export default AboutAsramPage;
