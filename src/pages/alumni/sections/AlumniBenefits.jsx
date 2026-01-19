import React from "react";

const benefits = [
  {
    title: "Career Services",
    desc: "Access exclusive job postings, career counseling, and professional development workshops.",
    points: [
      "Job board with healthcare opportunities",
      "Resume review and career guidance",
      "Networking events and job fairs",
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V20" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19.999 6H3.99902C2.89445 6 1.99902 6.89543 1.99902 8V18C1.99902 19.1046 2.89445 20 3.99902 20H19.999C21.1036 20 21.999 19.1046 21.999 18V8C21.999 6.89543 21.1036 6 19.999 6Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    ,
  },
  {
    title: "Continuing Education",
    desc: "Stay updated with the latest medical knowledge through our continuing education programs.",
    points: [
      "20% discount on ASRAM workshops",
      "Free access to online courses",
      "Priority registration for conferences",
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.99902 18C2.73381 18 2.47945 17.8946 2.29192 17.7071C2.10438 17.5196 1.99902 17.2652 1.99902 17V4C1.99902 3.73478 2.10438 3.48043 2.29192 3.29289C2.47945 3.10536 2.73381 3 2.99902 3H7.99902C9.05989 3 10.0773 3.42143 10.8275 4.17157C11.5776 4.92172 11.999 5.93913 11.999 7C11.999 5.93913 12.4205 4.92172 13.1706 4.17157C13.9207 3.42143 14.9382 3 15.999 3H20.999C21.2642 3 21.5186 3.10536 21.7061 3.29289C21.8937 3.48043 21.999 3.73478 21.999 4V17C21.999 17.2652 21.8937 17.5196 21.7061 17.7071C21.5186 17.8946 21.2642 18 20.999 18H14.999C14.2034 18 13.4403 18.3161 12.8777 18.8787C12.3151 19.4413 11.999 20.2044 11.999 21C11.999 20.2044 11.683 19.4413 11.1203 18.8787C10.5577 18.3161 9.79467 18 8.99902 18H2.99902Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    ,
  },
  {
    title: "Networking Opportunities",
    desc: "Connect with fellow alumni across the globe through our exclusive network.",
    points: [
      "Alumni directory and online platform",
      "Regional chapter meetings",
      "Special interest groups by specialty",
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.999 21V19C15.999 17.9391 15.5776 16.9217 14.8275 16.1716C14.0773 15.4214 13.0599 15 11.999 15H5.99902C4.93816 15 3.92074 15.4214 3.1706 16.1716C2.42045 16.9217 1.99902 17.9391 1.99902 19V21" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 3.125C16.8578 3.34737 17.6174 3.84826 18.1597 4.54906C18.702 5.24986 18.9962 6.11089 18.9962 6.997C18.9962 7.88311 18.702 8.74414 18.1597 9.44494C17.6174 10.1457 16.8578 10.6466 16 10.869" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22 20.995V18.995C21.9993 18.1087 21.7044 17.2478 21.1614 16.5473C20.6184 15.8469 19.8581 15.3466 19 15.125" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.99805 11C11.2072 11 12.998 9.20914 12.998 7C12.998 4.79086 11.2072 3 8.99805 3C6.78891 3 4.99805 4.79086 4.99805 7C4.99805 9.20914 6.78891 11 8.99805 11Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    ,
  },
  {
    title: "Exclusive Events",
    desc: "Participate in alumni-only events, reunions, and celebrations throughout the year.",
    points: [
      "Annual homecoming celebration",
      "Class reunion support",
      "Guest lectures and panels",
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2.00781V6.00781" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 2.00781V6.00781" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.999 4H4.99902C3.89445 4 2.99902 4.89543 2.99902 6V20C2.99902 21.1046 3.89445 22 4.99902 22H18.999C20.1036 22 20.999 21.1046 20.999 20V6C20.999 4.89543 20.1036 4 18.999 4Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.99902 9.99219H20.999" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    ,
  },
  {
    title: "Recognition Programs",
    desc: "We celebrate the achievements of our alumni through various recognition initiatives.",
    points: [
      "Distinguished Alumni Awards",
      "Young Achiever Recognition",
      "Lifetime Service Awards",
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4758 12.8906L16.9908 21.4166C17.0077 21.517 16.9937 21.6202 16.9504 21.7124C16.9071 21.8046 16.8368 21.8813 16.7487 21.9324C16.6606 21.9835 16.5591 22.0065 16.4576 21.9983C16.3561 21.9902 16.2595 21.9512 16.1808 21.8866L12.6008 19.1996C12.428 19.0705 12.218 19.0007 12.0023 19.0007C11.7865 19.0007 11.5766 19.0705 11.4038 19.1996L7.81777 21.8856C7.73909 21.9501 7.64264 21.989 7.54127 21.9972C7.4399 22.0054 7.33845 21.9825 7.25044 21.9315C7.16243 21.8805 7.09205 21.804 7.04869 21.712C7.00534 21.62 6.99106 21.5169 7.00777 21.4166L8.52177 12.8906" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.999 14.0078C15.3127 14.0078 17.999 11.3215 17.999 8.00781C17.999 4.6941 15.3127 2.00781 11.999 2.00781C8.68531 2.00781 5.99902 4.6941 5.99902 8.00781C5.99902 11.3215 8.68531 14.0078 11.999 14.0078Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    ,
  },
  {
    title: "Campus Privileges",
    desc: "Enjoy special access to campus facilities and resources as a valued alumnus.",
    points: [
      "Library access and resources",
      "Discounted hospital services",
      "Sports and recreation facilities",
    ],
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.99902 9.50053C1.99904 8.38773 2.33662 7.30111 2.96716 6.38419C3.5977 5.46727 4.49154 4.76319 5.53063 4.36493C6.56972 3.96667 7.70518 3.89297 8.78704 4.15357C9.86889 4.41417 10.8462 4.99681 11.59 5.82453C11.6424 5.88054 11.7057 5.9252 11.7761 5.95573C11.8465 5.98626 11.9223 6.00201 11.999 6.00201C12.0757 6.00201 12.1516 5.98626 12.2219 5.95573C12.2923 5.9252 12.3556 5.88054 12.408 5.82453C13.1495 4.99143 14.127 4.4039 15.2107 4.14013C16.2943 3.87636 17.4325 3.94887 18.4739 4.34801C19.5153 4.74715 20.4104 5.45398 21.0401 6.37443C21.6699 7.29488 22.0043 8.38529 21.999 9.50053C21.999 11.7905 20.499 13.5005 18.999 15.0005L13.507 20.3135C13.3207 20.5275 13.091 20.6994 12.8331 20.8178C12.5752 20.9362 12.2951 20.9984 12.0113 21.0002C11.7276 21.002 11.4467 20.9434 11.1873 20.8283C10.9279 20.7131 10.6961 20.5442 10.507 20.3325L4.99902 15.0005C3.49902 13.5005 1.99902 11.8005 1.99902 9.50053Z" stroke="#223F7F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    ,
  },
];

const AlumniBenefits = () => {
  return (
    <section className="w-full bg-[#FFF] py-[80px] font-montserrat">
      <div className="max-w-[1440px] mx-auto px-[120px]">

        {/* Heading */}
        <h2 className="text-[40px] font-bold text-[#223f7f] mb-[40px]">
          Exclusive Alumni Benefits
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="w-full min-h-[296px] bg-[#eef2f7] rounded-[7.5px] p-[30px] flex flex-col gap-[12px] hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div
                className="
                  w-[48px]
                  h-[48px]
                  flex
                  items-center
                  justify-center
                  rounded-[6.9px]
                  bg-white
                  text-[#223F7F]
                  shrink-0
                "
              >
                <div className="w-[24px] h-[24px] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[20px] leading-[1.2] font-bold text-[#223f7f]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-[1.43] text-[#3a3a3a]">
                {item.desc}
              </p>

              {/* Bullet points */}
              <ul className="pl-[16px] flex flex-col gap-[12px]">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-[14px] leading-[1.43] text-[#6b6b6b] list-disc"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AlumniBenefits;
