import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import { T } from "@/theme";
import DonateStats from "./sections/DonateStats";
import DonationAreas from "./sections/DonationAreas";
import DonationForm from "./sections/DonationForm";
import TaxBenefits from "./sections/TaxBenefits";

const HeroBg = "/AsramWebsite-FE/assets/donate/donateherobg.png";

const DonatePage = () => {
    const { setHero, hideHero } = useHero();

    useLayoutEffect(() => {
        setHero({
            title: (
                <span className={`${T.font.family} font-normal text-[28px] md:text-[40px] leading-[1.35]`}>
                    <span className="font-bold">ASRAM Donations</span>
                </span>
            ),
            bgImage: HeroBg,
            isVisible: true,
            children: (
                <div className="max-w-[570px] text-white">
                    <p className={`${T.font.family} font-medium text-[16px] md:text-[22px] leading-[1.36] mb-8 text-white`}>
                        Your generosity helps ASRAM provide world-class medical education, support deserving students, advance critical research, and expand access to quality healthcare training. Every contribution makes a lasting impact on healthcare delivery in India and beyond.
                    </p>
                </div>
            )
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <div className="w-full bg-white">
            <DonateStats />
            <DonationAreas />
            <DonationForm />
            <TaxBenefits />
        </div>
    );
};

export default DonatePage;
