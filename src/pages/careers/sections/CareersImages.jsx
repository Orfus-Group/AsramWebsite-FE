import React from "react";


const careersectionone = "/AsramWebsite-FE/assets/careers/careerssectionone.png";
const careersectiontwo = "/AsramWebsite-FE/assets/careers/careerssectiontwo.png";

const CareersImages = () => {

    return (
        <section className="py-10 md:py-16 bg-white w-full">
            <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    <div className="w-full h-[322px] overflow-hidden rounded-[7.5px]">
                        <img
                            src={careersectionone}
                            alt="Medical Tools"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-full h-[322px] overflow-hidden rounded-[7.5px]">
                        <img
                            src={careersectiontwo}
                            alt="Surgical Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersImages;
