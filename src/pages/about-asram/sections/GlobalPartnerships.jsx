import React from "react";
import PageSection from "@/features/common/layout/PageContainer";
import { T } from "@/theme";
import PartnershipImg from "@/assets/about/globalpartnership.png";

const Icons = {
  // Top List Icons
  Globe: (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4651 19.184C15.2815 19.184 19.186 15.2796 19.186 10.4631C19.186 5.64668 15.2815 1.74219 10.4651 1.74219C5.64863 1.74219 1.74414 5.64668 1.74414 10.4631C1.74414 15.2796 5.64863 19.184 10.4651 19.184Z" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.4649 1.74219C8.2256 4.09348 6.97656 7.21609 6.97656 10.4631C6.97656 13.7101 8.2256 16.8328 10.4649 19.184C12.7043 16.8328 13.9533 13.7101 13.9533 10.4631C13.9533 7.21609 12.7043 4.09348 10.4649 1.74219Z" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1.74414 10.4688H19.186" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  ),
  Shield: (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.59326 14.8252L11.3374 16.5694C11.5092 16.7412 11.7132 16.8775 11.9376 16.9704C12.1621 17.0634 12.4026 17.1113 12.6456 17.1113C12.8885 17.1113 13.1291 17.0634 13.3535 16.9704C13.578 16.8775 13.7819 16.7412 13.9537 16.5694C14.1255 16.3976 14.2618 16.1937 14.3548 15.9692C14.4477 15.7448 14.4956 15.5042 14.4956 15.2613C14.4956 15.0183 14.4477 14.7778 14.3548 14.5533C14.2618 14.3289 14.1255 14.1249 13.9537 13.9531" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.2095 12.2107L14.3897 14.3909C14.7367 14.7378 15.2072 14.9327 15.6978 14.9327C16.1885 14.9327 16.659 14.7378 17.006 14.3909C17.3529 14.0439 17.5478 13.5734 17.5478 13.0827C17.5478 12.5921 17.3529 12.1215 17.006 11.7746L13.6223 8.39088C13.1317 7.90094 12.4667 7.62574 11.7734 7.62574C11.0801 7.62574 10.4151 7.90094 9.92459 8.39088L9.15715 9.15832C8.81021 9.50526 8.33966 9.70017 7.84901 9.70017C7.35836 9.70017 6.88781 9.50526 6.54087 9.15832C6.19393 8.81138 5.99902 8.34083 5.99902 7.85019C5.99902 7.35954 6.19393 6.88899 6.54087 6.54205L8.99145 4.09146C9.78701 3.29799 10.8245 2.79253 11.9397 2.6551C13.0549 2.51768 14.184 2.75614 15.1484 3.33274L15.5583 3.57693C15.9296 3.80105 16.3711 3.87878 16.7967 3.79495L18.3141 3.48972" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.314 2.61719L19.1861 12.2102H17.4419" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.61623 2.61719L1.74414 12.2102L7.41274 17.8788C7.75969 18.2258 8.23024 18.4207 8.72088 18.4207C9.21153 18.4207 9.68208 18.2258 10.029 17.8788C10.376 17.5319 10.5709 17.0613 10.5709 16.5707C10.5709 16.08 10.376 15.6095 10.029 15.2625" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.61621 3.48828H9.59296" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  ),
  TrendUp: (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9536 6.10156H19.1862V11.3341" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.186 6.10156L11.7732 13.5144L7.41275 9.15389L1.74414 14.8225" stroke="#223F7F" stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  ),
  // Card Icons
  GradCap: (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.1337 15.8737C31.3939 15.7589 31.6147 15.5703 31.7688 15.3313C31.9229 15.0922 32.0034 14.8132 32.0005 14.5288C31.9975 14.2445 31.9112 13.9672 31.7523 13.7314C31.5933 13.4956 31.3686 13.3116 31.1061 13.2022L18.6483 7.52777C18.2695 7.35502 17.8581 7.26562 17.4419 7.26562C17.0256 7.26562 16.6142 7.35502 16.2355 7.52777L3.77907 13.1964C3.5203 13.3097 3.30017 13.496 3.14559 13.7324C2.99101 13.9689 2.90869 14.2453 2.90869 14.5278C2.90869 14.8103 2.99101 15.0866 3.14559 15.3231C3.30017 15.5596 3.5203 15.7458 3.77907 15.8592L16.2355 21.5394C16.6142 21.7121 17.0256 21.8015 17.4419 21.8015C17.8581 21.8015 18.2695 21.7121 18.6483 21.5394L31.1337 15.8737Z" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M31.9766 14.5352V23.2561" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.7207 18.1719V23.2591C8.7207 24.4156 9.63951 25.5247 11.275 26.3424C12.9105 27.1601 15.1287 27.6195 17.4416 27.6195C19.7546 27.6195 21.9728 27.1601 23.6083 26.3424C25.2438 25.5247 26.1626 24.4156 26.1626 23.2591V18.1719" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  ),
  Building: (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5347 17.4414H20.3486" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.5347 11.6289H20.3486" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20.3486 30.5213V26.1609C20.3486 25.3899 20.0424 24.6505 19.4972 24.1053C18.952 23.5602 18.2126 23.2539 17.4416 23.2539C16.6707 23.2539 15.9313 23.5602 15.3861 24.1053C14.8409 24.6505 14.5347 25.3899 14.5347 26.1609V30.5213" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.72118 14.5323H5.8142C5.04323 14.5323 4.30382 14.8386 3.75866 15.3838C3.2135 15.9289 2.90723 16.6683 2.90723 17.4393V27.6137C2.90723 28.3847 3.2135 29.1241 3.75866 29.6693C4.30382 30.2144 5.04323 30.5207 5.8142 30.5207H29.07C29.841 30.5207 30.5804 30.2144 31.1256 29.6693C31.6707 29.1241 31.977 28.3847 31.977 27.6137V13.0789C31.977 12.3079 31.6707 11.5685 31.1256 11.0233C30.5804 10.4781 29.841 10.1719 29.07 10.1719H26.163" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.7207 30.5222V7.26635C8.7207 6.49537 9.02697 5.75597 9.57214 5.21081C10.1173 4.66564 10.8567 4.35938 11.6277 4.35938H23.2556C24.0266 4.35938 24.766 4.66564 25.3111 5.21081C25.8563 5.75597 26.1626 6.49537 26.1626 7.26635V30.5222" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  ),
  Lightbulb: (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.8021 20.3481C22.0928 18.8946 22.8195 17.8772 23.9823 16.7144C25.4358 15.4062 26.1626 13.5167 26.1626 11.6272C26.1626 9.31425 25.2438 7.09604 23.6083 5.46055C21.9728 3.82506 19.7546 2.90625 17.4416 2.90625C15.1287 2.90625 12.9105 3.82506 11.275 5.46055C9.63951 7.09604 8.7207 9.31425 8.7207 11.6272C8.7207 13.0807 9.0114 14.8249 10.9009 16.7144C11.9184 17.7318 12.7905 18.8946 13.0812 20.3481" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13.0815 26.1641H21.8025" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.5347 31.9766H20.3486" stroke="#223F7F" stroke-width="1.85804" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  ),
};

const topList = [
  {
    title: "50+ Partner Institutions",
    desc: "Collaborating with top medical schools and research centers worldwide",
    icon: Icons.Globe
  },
  {
    title: "Student Exchange Programs",
    desc: "Enabling international learning experiences and cultural exchange",
    icon: Icons.Shield
  },
  {
    title: "Joint Research Initiatives",
    desc: "Collaborative studies addressing global health challenges",
    icon: Icons.TrendUp
  }
];

const cards = [
  {
    title: "Academic Partners",
    icon: Icons.GradCap,
    desc: "Leading universities and medical schools sharing expertise",
    list: ["Joint degree programs", "Faculty exchange", "Curriculum development"]
  },
  {
    title: "Healthcare Organizations",
    icon: Icons.Building,
    desc: "Hospitals and health systems advancing clinical excellence",
    list: ["Clinical training sites", "Best practice sharing", "Quality improvement"]
  },
  {
    title: "Research Institutions",
    icon: Icons.Lightbulb,
    desc: "Centers of excellence driving medical innovation",
    list: ["Collaborative research", "Resource sharing", "Technology transfer"]
  },
];

const GlobalPartnerships = () => {
  return (
    <PageSection bg="bg-white" paddingClass="py-[60px] md:py-[80px]">
      {/* Heading */}
      <h1 className={`${T.font.family} font-bold text-[28px] md:text-[42px] text-[#223F7F] mb-[40px]`}>
        Global Partnerships
      </h1>

      {/* Image + Content */}
      <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] mb-[30px] lg:mb-[40px] items-stretch w-full">
        {/* Image */}
        <div className="w-full lg:flex-1 flex-shrink-0">
          <img
            src={PartnershipImg}
            alt="International Collaboration"
            className="w-full h-auto block"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:flex-1 flex flex-col justify-start gap-[30px]">
          <div>
            <h2 className={`${T.font.family} font-semibold text-[22px] text-[#223F7F] mb-4`}>
              International Collaboration
            </h2>

            <p className={`${T.font.family} font-regular text-[18px] text-[#191919BF] leading-[26px] mb-5 lg:mb-0`}>
              ASRAM maintains strategic partnerships with prestigious medical institutions across six continents, fostering knowledge exchange, joint research initiatives, and collaborative educational programs.
            </p>
          </div>

          <div className="flex flex-col gap-[12px]">
            {topList.map((item, idx) => (
              <div key={idx} className="flex gap-[16px]">
                <div className="flex-shrink-0 text-[#223F7F] mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className={`${T.font.family} font-bold text-[16px] text-[#223F7F] mb-1`}>
                    {item.title}
                  </h4>
                  <p className={`${T.font.family} text-[14px] text-[#4B5563] leading-[1.4]`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#EEF2F7] p-[24px] rounded-[10px] border border-[rgba(7,7,7,0.2)] flex flex-col items-start h-full"
          >
            <div className="w-[49px] h-[49px] bg-white rounded-[11.15px] flex items-center justify-center mb-[16px] border border-[rgba(0,0,0,0.05)]">
              {card.icon}
            </div>

            <h4 className={`${T.font.family} font-medium text-[20px] text-[#223F7F] mb-[8px]`}>
              {card.title}
            </h4>

            <p className={`${T.font.family} text-[18px] text-[#191919] leading-[26px] mb-[20px]`}>
              {card.desc}
            </p>

            <ul className="space-y-[8px] mt-auto">
              {card.list.map((li, i) => (
                <li key={i} className={`${T.font.family} font-regular leading-[20px] text-[14px] text-[#6B6B6B] flex items-center gap-2`}>
                  <span className="w-[4px] h-[4px] bg-[#9CA3AF] rounded-full" />
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default GlobalPartnerships;
