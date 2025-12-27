import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";

const HeroContext = createContext();

export const useHero = () => {
    const context = useContext(HeroContext);
    if (!context) {
        throw new Error("useHero must be used within a HeroProvider");
    }
    return context;
};

export const HeroProvider = ({ children }) => {
    const { pathname } = useLocation();
    const [heroData, setHeroData] = useState({
        title: null,
        bgImage: null,
        children: null,
        isVisible: false,
        path: "",
    });

    const setHero = useCallback((data) => {
        setHeroData({
            title: null,
            bgImage: null,
            children: null,
            ...data,
            isVisible: true,
            path: pathname,
        });
    }, [pathname]);

    const hideHero = useCallback(() => {
        setHeroData({
            title: null,
            bgImage: null,
            children: null,
            isVisible: false,
            path: "",
        });
    }, []);

    const value = useMemo(
        () => ({ heroData, setHero, hideHero }),
        [heroData, setHero, hideHero]
    );

    return (
        <HeroContext.Provider value={value}>
            {children}
        </HeroContext.Provider>
    );
};
