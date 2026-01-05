import React from "react";
import { Link } from "react-router-dom";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";

const ContentImageSection = ({
    title,
    description,
    description2,
    image,
    buttonText,
    buttonLink = "#",
    showButton = false,
    reverse = false,
    imageClassName = "",
    className = "",
    bg = "bg-white",
    gapClass = "gap-[30px] md:gap-[50px] lg:gap-[72px]",
    paddingClass = "py-[40px] md:py-[60px] lg:py-[80px]",
}) => {
    return (
        <PageSection bg={bg} paddingClass={paddingClass}>
            <div
                className={`
          w-full
          flex
          flex-col-reverse
          ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
          items-stretch
          justify-between
          ${gapClass}
          ${className}
        `}
            >
                {/* TEXT CONTENT */}
                <div className="w-full flex-1 flex flex-col h-full items-start gap-[20px]">
                    <h2
                        className={`
              font-bold
              text-[#223F7F]
              text-[28px] leading-[36px]
              sm:text-[30px] sm:leading-[38px]
              md:text-[32px] md:leading-[39px]
              font-montserrat
            `}
                    >
                        {title}
                    </h2>

                    <div className="flex flex-col gap-[20px]">
                        <p
                            className={`
                text-[16px] leading-[26px]
                md:text-[18px] md:leading-[29px]
                text-[#191919BF]
                text-justify
                font-montserrat
              `}
                        >
                            {description}
                        </p>
                        {description2 && (
                            <p
                                className={`
                  text-[16px] leading-[26px]
                  md:text-[18px] md:leading-[29px]
                  text-[#191919BF]
                  text-justify
                  font-montserrat
                `}
                            >
                                {description2}
                            </p>
                        )}
                    </div>

                    {showButton && buttonText && (
                        <Link
                            to={buttonLink}
                            className={`
                w-full
                sm:w-[260px]
                md:w-[301px]
                h-[46px]
                flex items-center justify-center
                rounded-[8px]
                text-white
                font-medium
                text-[15px]
                md:text-[18px]
                bg-[#223F7F]
                hover:bg-[#1a3163]
                transition-colors
                font-montserrat
              `}
                        >
                            {buttonText}
                        </Link>
                    )}
                </div>

                {/* IMAGE */}
                <div
                    className={`
            w-full
            lg:flex-1
            rounded-[12px]
            overflow-hidden
            bg-gray-200
            flex-shrink-0
            border border-[rgba(7,7,7,0.2)]
            shadow-[0_2px_4px_rgba(0,0,0,0.08),0_6px_6px_rgba(0,0,0,0.02)]
            ${imageClassName}
          `}
                >
                    <img
                        loading="lazy"
                        decoding="async"
                        src={image}
                        alt={title}
                        className="
              w-full
              h-full
              object-cover
              aspect-[3.5/4] md:aspect-[16/9] lg:aspect-auto
            "
                    />
                </div>
            </div>
        </PageSection>
    );
};

export default ContentImageSection;
