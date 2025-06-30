import { Briefcase, Code, FileChartColumnIncreasingIcon, User } from "lucide-react";
import { useEffect, useState } from "react";

export const AboutSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="about"
      className={`section-padding pt-[20px] pb-[50px] relative bg-gradient-to-tr from-black via-gray-900 to-black overflow-hidden transition-all duration-700 ease-out ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Heading */}
        <h2
          className={`text-3xl md:text-4xl font-extrabold mb-12 text-center tracking-wide transition-all duration-700 ease-out delay-100 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          About <span className="text-cyan-600">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 text-white text-opacity-90 transition-all duration-700 ease-out delay-200 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-semibold drop-shadow-md">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="leading-relaxed tracking-wide text-lg">
              I’m a B.Tech student in Electronics and Communication Engineering with a strong interest in 
              full-stack development. Proficient in software development and application design, with effective communication skills.
              
            </p>
            <p className="leading-relaxed tracking-wide text-lg">
              I thrive on solving problems through code, enjoy exploring new tools and frameworks. 
              Actively seeking an internship opportunity as a Software Development Engineer to apply and enhance technical skills while contributing to team success.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center sm:justify-start">
              {/* Get In Touch Button */}
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition-all duration-300 text-white font-semibold shadow-md hover:shadow-cyan-400/50 focus:outline-none focus:ring-4 focus:ring-cyan-400"
              >
                <span>Get In Touch</span>
                
              </a>

              {/* Download CV Button */}
              <a
                href="https://drive.google.com/file/d/1r-ePNB-es1lnT37XiSdj43Jxz65F06hd/view?usp=drivesdk"
                className="inline-flex px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold shadow-md hover:shadow-cyan-400/50 focus:outline-none focus:ring-4 focus:ring-cyan-400"
              >
                <span>Download CV</span>
                <img
                  src="/images/arrow-down.svg"
                  alt="arrow"
                  className="w-5 h-5 pl-2 animate-bounce"
                />
              </a>
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="grid gap-8">
            {[
              {
                icon: <User className="h-6 w-6 text-white drop-shadow" />,
                title: "BTech : [Nov 2022 – June 2026]",
                desc:
                  "Indian Institute of Information Technology Nagpur",
              },
              {
                icon: <FileChartColumnIncreasingIcon className="h-6 w-6 text-white drop-shadow" />,
                title: "RSCIT (Diploma) : [Jan 2021 - April 2021]",
                desc:
                  "Rajasthan State Certificate in Information Technology Government recognized IT literacy program.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-white drop-shadow" />,
                title: "MSME : [Dec 2023 - Jan 2024]",
                desc:
                  "Gained hands-on experience in programming, application development.",
              },
            ].map(({ icon, title, desc }, index) => (
              <div
                key={title}
                className={`p-6 rounded-xl bg-black border border-gray-800 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-600 cursor-pointer ${
                  animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: `${0.3 + index * 0.15}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gray-900 drop-shadow-lg">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white tracking-wide">
                      {title}
                    </h4>
                    <p className="text-white text-opacity-70 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
