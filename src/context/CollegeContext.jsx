import React, { createContext, useContext, useState, useEffect } from "react";

const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
    // Initialize state from sessionStorage or default to "nursing"
    const [activeCollege, setActiveCollege] = useState(() => {
        try {
            const stored = sessionStorage.getItem("activeCollege");
            return stored ? JSON.parse(stored) : "nursing";
        } catch (error) {
            console.error("Error reading from sessionStorage", error);
            return "nursing";
        }
    });

    // Update sessionStorage whenever activeCollege changes
    useEffect(() => {
        try {
            sessionStorage.setItem("activeCollege", JSON.stringify(activeCollege));
        } catch (error) {
            console.error("Error writing to sessionStorage", error);
        }
    }, [activeCollege]);

    return (
        <CollegeContext.Provider value={{ activeCollege, setActiveCollege }}>
            {children}
        </CollegeContext.Provider>
    );
};

export const useCollegeContext = () => {
    const context = useContext(CollegeContext);
    if (!context) {
        throw new Error("useCollegeContext must be used within a CollegeProvider");
    }
    return context;
};
