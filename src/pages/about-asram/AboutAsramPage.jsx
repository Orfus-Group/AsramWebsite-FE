import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import { T } from "@/theme";
import TypedText from "@/components/common/TypedText";
import WhoWeAre from "./sections/WhoWeAre";
import OurCoreValues from "./sections/OurCoreValues";
import AccreditationStandards from "./sections/AccreditationStandards";
import LeadershipGovernance from "./sections/LeadershipGovernance";
import GlobalPartnerships from "./sections/GlobalPartnerships";

const HeroBg = "/AsramWebsite-FE/assets/about/aboutherobg.png";


const AboutAsramPage = () => {
    const { setHero, hideHero } = useHero();

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
            <WhoWeAre />
            <OurCoreValues />
            <AccreditationStandards />
            <LeadershipGovernance />
            <GlobalPartnerships />
        </div>
    );
};

export default AboutAsramPage;
