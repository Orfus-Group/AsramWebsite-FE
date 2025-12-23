import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import { T } from "@/theme";
import WhoWeAre from "./sections/WhoWeAre";
import OurCoreValues from "./sections/OurCoreValues";
import AccreditationStandards from "./sections/AccreditationStandards";
import LeadershipGovernance from "./sections/LeadershipGovernance";
import GlobalPartnerships from "./sections/GlobalPartnerships";
import { motion } from "framer-motion";
import HeroBg from "@/assets/about/aboutherobg.png";


// Animation variants for sections
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const MotionSection = ({ children }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
    >
        {children}
    </motion.div>
);

const AboutAsramPage = () => {
    const { setHero } = useHero();

    useLayoutEffect(() => {
        setHero({
            title: (
                <span className={`${T.font.family} font-normal text-[32px] md:text-[60px] leading-[40px] md:leading-[54px]`}>
                    About <span className="font-bold">ASRAM</span>
                </span>
            ),
            bgImage: HeroBg,
            isVisible: true,
            children: (
                <div className="max-w-[520px] text-white">
                    <p className={`${T.font.family} font-medium text-[16px] md:text-[22px] leading-[1.36] mb-8 text-white`}>
                        A premier academic and healthcare institution integrating medical education, research, and advanced clinical care since 2000.
                    </p>
                    <button
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
                    </button>
                </div>
            )
        });
    }, [setHero]);

    return (
        <div className="w-full bg-white">
            <MotionSection>
                <WhoWeAre />
            </MotionSection>

            <MotionSection>
                <OurCoreValues />
            </MotionSection>

            <MotionSection>
                <AccreditationStandards />
            </MotionSection>

            <MotionSection>
                <LeadershipGovernance />
            </MotionSection>

            <MotionSection>
                <GlobalPartnerships />
            </MotionSection>
        </div>
    );
};

export default AboutAsramPage;
