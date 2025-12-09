import React from "react";
import { T } from "../theme";

import doctorImg from "../assets/nursing/clinicalmain.svg";
import Button from "../components/Button/Button";

export default function ClinicalPracticumSection() {
  return (
    <section className={`w-full ${T.bg.section} flex justify-center`}>
      <div
        className="
          w-[1440px] max-w-full 
          px-[120px] pt-[80px] pb-[80px]
          flex flex-col gap-[40px]
        "
      >
        {/* ------------------ TOP TITLE + PARAGRAPH ------------------ */}
        <div className="flex justify-between w-full gap-[40px]">
          {/* LEFT TITLE */}
          <h2
            className={`
              ${T.font.family}
              ${T.font.weight.bold}
              text-[36px] leading-[48px]
              w-[500px]
            `}
            style={{ color: T.color.text.secondary }}
          >
            Clinical, Practicum & <br />
            Externship Hub
          </h2>

          {/* RIGHT PARAGRAPH */}
          <p
            className={`
              ${T.font.family}
              ${T.font.weight.regular}
              text-[18px] leading-[28px]
              w-[610px]
            `}
            style={{ color: T.color.text.muted }}
          >
            Our extensive network of clinical partners provides students with
            diverse, high-quality learning experiences in top healthcare
            facilities across the region. From your first clinical rotation to
            advanced practicum placements, we support you every step of the way.
          </p>
        </div>

        {/* ------------------ LOWER SECTION ------------------ */}
        <div className="flex justify-between items-start w-full gap-[40px]">
          {/* LEFT COLUMN = CARD + BUTTON */}
          <div className="flex flex-col gap-[30px]">
            {/* WHAT YOU'LL GAIN CARD */}
            <div
              className="
                w-[576px]
                bg-white
                rounded-[9.87px]
                border
                flex flex-col
              "
              style={{
                borderColor: T.color.border,
                padding: "30px",
                gap: "20px",
                boxShadow: "0px 3px 6px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                className={`
                  ${T.font.family}
                  ${T.font.weight.semibold}
                  text-[24px] leading-[32px]
                `}
                style={{ color: T.color.text.secondary }}
              >
                What You'll Gain:
              </h3>

              <ul className="flex flex-col gap-[16px] mt-[4px]">
                {[
                  "Hands-on experience in leading hospitals and healthcare systems",
                  "Mentorship from expert preceptors and clinical faculty",
                  "Exposure to specialty areas and advanced practice settings",
                  "Professional networking opportunities with healthcare leaders",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-[12px]">
                    {/* Bullet dot */}
                    <div
                      className="w-[8px] h-[8px] rounded-full mt-[7px]"
                      style={{ backgroundColor: T.color.primary }}
                    />

                    {/* Line text */}
                    <p
                      className={`
                        ${T.font.familyMulish}
                        font-normal
                      `}
                      style={{
                        fontSize: "15.79px",
                        lineHeight: "23.7px",
                        letterSpacing: "0px",
                        width: "392px",
                        color: T.color.text.muted,
                      }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* BUTTON (outside card, aligned left, Figma width) */}
            <div className="w-[228px]">
             <Button
  bg={T.color.primary}
  color="#FFFFFF"
  font={T.font.familyMulish}
  weight={T.font.weight.regular}
  textSize="text-[15.79px]"
  leading="leading-[23.7px]"
  tracking="tracking-[0px]"
  radius="custom"
  className="rounded-[9.87px]"
  width="261.78px"
  height="47.37px"
>
  Explore Clinical Opportunities
</Button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src={doctorImg}
            alt="Clinical Hub"
            className="
              w-[576px]
              h-[384px]
              rounded-[8px]
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}
