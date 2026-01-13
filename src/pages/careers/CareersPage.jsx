import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import { T } from "@/theme";
import CareersStats from "./sections/CareersStats";
import WhyWorkAsram from "./sections/WhyWorkAsram";
import CurrentOpenings from "./sections/CurrentOpenings";
import ApplicationProcess from "./sections/ApplicationProcess";
import FacultyStories from "./sections/FacultyStories";

// Use an appropriate hero background. If a specific one isn't available, reuse a generic one or AboutBg.
// Assuming we can reuse one or use a placeholder for now.
const HeroBg = "/AsramWebsite-FE/assets/careers/asramcareershero.png";

const CareersPage = () => {
    const { setHero, hideHero } = useHero();

    useLayoutEffect(() => {
        setHero({
            title: (
                <span className={`${T.font.family} font-normal text-[32px] md:text-[60px] leading-[40px] md:leading-[54px]`}>
                    <span className="font-bold">ASRAM Careers</span>
                </span>
            ),
            bgImage: HeroBg,
            isVisible: true,
            children: (
                <div className="max-w-[600px] text-white">
                    <p className={`${T.font.family} font-medium text-[16px] md:text-[22px] leading-[1.36] mb-8 text-white`}>
                        Join India's leading healthcare education institution. We're seeking passionate educators, researchers, and healthcare professionals to shape the next generation of medical excellence.
                    </p>
                </div>
            )
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <div className="w-full bg-white">
            <CareersStats />
            <WhyWorkAsram />
            <CurrentOpenings />
            <ApplicationProcess />
            <FacultyStories />
        </div>
    );
};

export default CareersPage;
