import React, { useLayoutEffect } from 'react';
import { useHero } from '@/context/HeroContext';
import TypedText from '@/components/common/TypedText';


// Sections
import CampusOverview from './sections/CampusOverview';
import FeatureGridSection from './sections/FeatureGridSection';
import StudentLifeCommunity from './sections/StudentLifeCommunity';
import HostelAccommodation from './sections/HostelAccommodation';
import ClubsActivities from './sections/ClubsActivities';
import SportsWellbeing from './sections/SportsWellbeing';
import CampusEventsSection from '@/pages/news/sections/CampusEventsSection';
import SafetyDiscipline from './sections/SafetyDiscipline';
import EventsWorkshops from './sections/EventsWorkshops';
import CampusGallery from './sections/CampusGallery';

// Assets
const HeroBg = "/AsramWebsite-FE/assets/campuslife/campuslifeherobg.png";
import StudentVoices from '../academics/StudentVoices';

const CampusLifePage = () => {
    const { setHero, hideHero } = useHero();

    useLayoutEffect(() => {
        setHero({
            title: (
                <TypedText
                    text="Campus Life"
                    className="font-montserrat font-bold text-[32px] md:text-[60px] leading-[54px] text-white"
                />
            ),
            bgImage: HeroBg,
            isVisible: true,
            children: (
                <div className="max-w-[700px]">
                    <p className="font-montserrat font-medium text-[16px] md:text-[22px] leading-[30px] text-white/90 mb-8">
                        A well-structured campus environment that supports academic focus, personal growth, and student well-being.                    </p>
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
                        Explore Programs
                    </button> */}
                </div>
            )
        });
        return () => hideHero();
    }, [setHero, hideHero]);

    return (
        <div className="w-full">
            <CampusOverview />
            <FeatureGridSection />
            <StudentLifeCommunity />
            <HostelAccommodation />
            <ClubsActivities />
            <SportsWellbeing />
            {/* Reusing News Events Section */}
            <CampusEventsSection />
            <SafetyDiscipline />
            <EventsWorkshops />
            <CampusGallery />
            <StudentVoices />
        </div>
    );
};

export default CampusLifePage;
