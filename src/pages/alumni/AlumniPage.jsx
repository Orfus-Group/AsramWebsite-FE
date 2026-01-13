import React, { useLayoutEffect } from "react";
import { useHero } from "@/context/HeroContext";
import { T } from "@/theme";
import AlumniAssociation from "./sections/AlumniAssociation";
import AlumniStats from "./sections/AlumniStats";
import AlumniBenefits from "./sections/AlumniBenefits";
import NotableAlumni from "./sections/NotableAlumni";
import AlumniStories from "./sections/AlumniStories";
import GetInvolved from "./sections/GetInvolved";
import AlumniRegistrationCTA from "./sections/AlumniRegistrationCTA";

const HeroBg = "/AsramWebsite-FE/assets/alumni/alumniherobg.png";
const AlumniPage = () => {
    const { setHero, hideHero } = useHero();


    useLayoutEffect(() => {
        setHero({
             title: (
                            <span className={`${T.font.family} font-normal text-[32px] md:text-[60px] leading-[40px] md:leading-[54px]`}>
                                <span className="font-bold">ASRAM Alumni</span>
                            </span>
                        ),
            bgImage: HeroBg,
           isVisible: true,
                       children: (
                           <div className="max-w-[600px] text-white">
                               <p className={`${T.font.family} font-medium text-[16px] md:text-[22px] leading-[1.36] mb-8 text-white`}>
                                  Join thousands of healthcare professionals who started their journey at ASRAM. Our alumni are making a difference in hospitals, clinics, and communities worldwide.
                               </p>
                           </div>
                       )
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <div className="w-full flex justify-center bg-white font-montserrat">
            <div className="w-full max-w-[1920px] flex flex-col">
                <AlumniAssociation />
                <AlumniStats />
                <AlumniBenefits />
                <NotableAlumni />
                <AlumniStories />
                <GetInvolved />
                <AlumniRegistrationCTA />
            </div>
        </div>
    );
};

export default AlumniPage;

