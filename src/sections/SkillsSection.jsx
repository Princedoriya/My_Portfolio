import { useState } from "react";
import TitleHeader from "../components/TitleHeader";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Next.js", level: 60, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "MongoDB", level: 78, category: "backend" },
  { name: "SQL", level: 65, category: "backend" },
  { name: "Git/GitHub", level: 72 , category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Figma", level: 55, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="pt-24 pb-14 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-10 mt-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  isActive
                    ? "px-5 py-2 rounded-full transition-colors duration-300 capitalize bg-primary text-primary-foreground"
                    : "px-5 py-2 rounded-full transition-colors duration-300 capitalize bg-secondary/70 text-foreground hover:bg-secondary"
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-500 h-2 rounded-full origin-left transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
