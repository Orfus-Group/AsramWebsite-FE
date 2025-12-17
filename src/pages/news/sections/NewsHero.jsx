import React from "react";
import NewsHerobg from "@/assets/news/newsherobanner.svg";
import ReusableHero from "@/features/common/layout/ReusableHero";

const NewsHero = () => {
  return <ReusableHero title="News & Updates" bgImage={NewsHerobg} />;
};

export default NewsHero;
