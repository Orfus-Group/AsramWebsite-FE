import React from "react";
import { T } from "@/theme";
import PageSection from "@/features/common/layout/PageContainer";

const NewsCard = ({
  image,
  title,
  height = "h-[282px]",
  showMeta = false,
  meta = [],
  overlayStrength = "from-black/70",
  className = "",
}) => (
  <div className={`relative overflow-hidden rounded-xl ${height} ${className}`}>
    <img loading="lazy" decoding="async" src={image} className="w-full h-full object-cover" alt={title} />
    <div className={`absolute inset-0 ${overlayStrength} to-transparent`}></div>

    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
      <h3 className="text-white font-semibold text-lg sm:text-xl leading-snug mb-3">{title}</h3>

      {showMeta && (
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-white/90 text-xs sm:text-sm">
          {meta.map((item) => (
            <span key={item.label} className="flex items-center gap-1">
               {/* {item.icon} */}
              {item.icon && <img loading="lazy" decoding="async" src={item.icon} className="w-4 h-4 sm:w-[16px] sm:h-[16px]" alt="" />}
              {item.label}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const NewsSection = ({
  id = "news",
  title = "News",
  description,
  featured,
  leftItems = [],
  rightItems = [],
  gallery = [],
  ctaText,
  onCta,
  bg = T.bg.programCard,
}) => {
  return (
    <PageSection bg={bg} id={id} paddingClass="py-[80px]">
      <h2
        className={`
          ${T.font.weight.bold}
          text-[28px] sm:text-[36px] lg:text-[42px]
          leading-tight
        `}
        style={{ color: T.color.text.secondary }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
            ${T.font.family}
            ${T.font.weight.medium}
            text-[16px] sm:text-[18px] lg:text-[22px]
            mt-2 mb-6 sm:mb-8 lg:mb-10
            max-w-[800px]
          `}
          style={{ color: T.color.dark }}
        >
          {description}
        </p>
      )}

      {/* Mobile / tablet */}
      <div className="block lg:hidden">
        {featured && (
          <NewsCard
            {...featured}
            height="h-[340px] sm:h-[500px]"
            overlayStrength="from-black/85"
            showMeta
          />
        )}

        {gallery.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4">
            {gallery.map((item, i) => (
              <NewsCard key={i} {...item} height="h-[180px] sm:h-[220px]" />
            ))}
          </div>
        )}
      </div>

      {/* Desktop grid */}
      <div className="hidden lg:grid grid-cols-[304.51px_1fr_304.51px] gap-4 mt-4">
        <div className="flex flex-col gap-4">
          {leftItems.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>

        {featured && (
          <NewsCard
            {...featured}
            height="h-[576px]"
            overlayStrength="from-black/85"
            showMeta
            className="rounded-xl"
          />
        )}

        <div className="flex flex-col gap-4">
          {rightItems.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>
      </div>

      {ctaText && (
        <div className="w-full flex justify-center mt-10">
          <button
            onClick={onCta}
            className={`
              w-[170px] sm:w-[182px]
              font-bold
              h-[44px] sm:h-[46px]
              text-white rounded-[9px]
            `}
            style={{ backgroundColor: T.color.secondary }}
          >
            {ctaText}
          </button>
        </div>
      )}
    </PageSection>
  );
};

export default NewsSection;

