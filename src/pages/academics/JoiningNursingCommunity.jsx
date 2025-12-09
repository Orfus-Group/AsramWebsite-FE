import React from "react";
import { T } from "../../theme";

import location from "../../assets/academics/location.svg";
import phoneicon from "../../assets/academics/phoneicon.svg";
import emailicon from "../../assets/academics/emailicon.svg";
import rightarrow from "../../assets/academics/rightarrow.svg";
import Button from "../../components/ui/button";

export default function JoinOurNursingCommunity() {
  return (
    <section className={`w-full ${T.bg.white} py-[60px] ${T.font.family}`}>

      {/* MAIN GRID */}
    {/* MAIN GRID */}
<div className="max-w-[1200px] mx-auto flex flex-col">

  {/* FULL-WIDTH HEADING */}
  <h2
    className={`
      ${T.font.family}
      ${T.font.weight.bold}
      text-[42px]
      leading-[52px]
      text-[${T.color.secondary}]
    `}
  >
    Join Our Nursing Community
  </h2>

</div>


      {/* BUTTON ROW */}
      <div className="max-w-[1200px] mx-auto mt-[35px] flex justify-center gap-[18px]">

        {/* PRIMARY BUTTON */}
       <Button
  customPadding="px-[39px] py-[18px]"
  bg={T.color.primary}
  color="white"
  rounded="9.87px"
  textSize="text-[15.79px]"
  leading="leading-[23.68px]"
  gap="12px"
  height="60px"
  icon={<img src={rightarrow} className="w-[19.74px] h-[19.74px]" />}>
  
  Start Your Application
</Button>



        {/* SECONDARY BUTTON */}
      <Button
  customPadding="px-[39.47px] py-[15.79px]"
  bg={T.color.background.programCard}
  color={T.color.secondary}
  rounded="9.87px"
  textSize="text-[15.79px]"
  leading="leading-[23.68px]"
  width="219.63px"
  height="59.21px">
  
  Explore Programs
</Button>


        {/* OUTLINED BUTTON */}
  <Button
  customPadding="px-[39.47px] py-[15.79px]"
  bg={T.color.extra.dark10}
  color={T.color.dark}
  rounded="9.87px"
  borderColor={T.color.extra.dark10}
  borderWidth="2px"
  textSize="text-[15.79px]"
  leading="leading-[23.68px]"
  width="184.62px"
  height="59.21px">
  
  Visit Website
</Button>


      </div>

      {/* CONTACT CARDS GRID */}
      <div
        className="
          max-w-[1200px] mx-auto mt-[50px]
          grid grid-cols-3 gap-[23.68px]
        "
      >
        <ContactCard
          icon={location}
          title="Visit Campus"
          subtitle1="ASRAM Campus"
          subtitle2="Eluru, Andhra Pradesh"
        />

        <ContactCard
          icon={phoneicon}
          title="Call Us"
          subtitle1="Admissions Office"
          subtitle2="Contact via asram.in"
        />

        <ContactCard
          icon={emailicon}
          title="Email Us"
          subtitle1="For admission inquiries"
          subtitle2="See official website"
        />
      </div>

      {/* STATISTICS ROW */}
      <div
        className="
          max-w-[1200px] mx-auto mt-[60px]
          grid grid-cols-4 text-center
        "
      >
        <StatBlock count="20+" label="Years of Excellence" />
        <StatBlock count="190+" label="Total Seats" />
        <StatBlock count="56+" label="Expert Faculty" />
        <StatBlock count="INC" label="Approved" />
      </div>
    </section>
  );
}

/* ---------------- CONTACT CARD ---------------- */
function ContactCard({ icon, title, subtitle1, subtitle2 }) {
  return (
    <div
      className="
        w-[321px] h-[195.39px]
        flex flex-col items-center justify-center
        rounded-[9.87px]
      "
      style={{ backgroundColor: T.color.background.programCard }}
    >
      <div
        className="
          w-[55.26px] h-[55.26px] rounded-full
          flex items-center justify-center mb-[16px]
        "
        style={{ backgroundColor: T.color.primary }}
      >
        <img src={icon} className="w-[23.68px] h-[23.68px]" />
      </div>

      <h3
        className={`
          ${T.font.family}
          ${T.font.weight.semibold}
          text-[19.74px]
          leading-[29.61px]
          text-[${T.color.secondary}]
        `}
      >
        {title}
      </h3>

      <p
        className="text-[14px] leading-[20px] mt-[6px] text-center"
        style={{ color: T.color.extra.dark80 }}
      >
        {subtitle1}
        <br />
        {subtitle2}
      </p>
    </div>
  );
}

/* ---------------- STAT BLOCK ---------------- */
function StatBlock({ count, label }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`
          ${T.font.family}
          ${T.font.weight.bold}
          text-[35.53px]
          mb-[5px]
          leading-[39.47px]
          text-[${T.color.secondary}]
        `}
      >
        {count}
      </span>

      <span
        className={`
          ${T.font.family}
          ${T.font.weight.regular}
          text-[15.79px]
          leading-[23.68px]
        `}
        style={{ color: T.color.extra.dark80 }}
      >
        {label}
      </span>
    </div>
  );
}
