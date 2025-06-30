import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3 }
    );

    // Animations for each app showcase
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader
          title="Highlights of What I've Built & Accomplished "
          sub="🚀 Projects That Showcase My Work"
        />

        <div className="showcaselayout mt-12">
          {/*LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <a href="https://eclair-3wrs6wrh3-princedoriyas-projects.vercel.app/">
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="eclairai" />
              </div>
              <div className="text-content">
                <h2>
                  Made a SAAS website that Transform PDFs into concise summaries{" "}
                </h2>
                <p className="text-white-50 md:text-xl">
                  A website build with Next.js, Open AI, Neon Db, Motion &
                  tailwindCSS for a fast, user-friendly experience
                </p>
              </div>
            </a>
          </div>
          {/*RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <a href="https://project-chat-twvc.onrender.com">
                <div className="image-wrapper bg-[#ffefdb]">
                  <img src="/images/project2.png" alt="Baatcheet" />
                </div>
                <h2>BaatCheet (Chatting-website)</h2>
              </a>
            </div>

            <div className="project" ref={project3Ref}>
              <a href="https://project-ecommerce-web01.vercel.app/">
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project3.png" alt="ecommerce" />
                </div>
                <h2>Electronics e-commerce website</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
