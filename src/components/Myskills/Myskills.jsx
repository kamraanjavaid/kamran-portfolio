import React from "react";
import {
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAuth0,
  SiAwsamplify,
  SiAmazonrds,
  SiTailwindcss,
  SiRedux,
  SiGithub,
  SiGit,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { VscSymbolNamespace } from "react-icons/vsc";
import "./Myskills.css";

const skillCategories = [
  {
    category: "Core Stack",
    subtitle: "Technologies used in most projects",
    layout: "large",
    skills: [
      { name: "React", image: "/icons/reactjs.png", type: "image" },
      { name: "Next.js", image: "/icons/nextjs.png", type: "image" },
      { name: "TypeScript", image: "/icons/ts.png", type: "image" },
      { name: "NestJS", icon: SiNestjs, type: "icon", color: "#E0234E" },
      { name: "Express.js", icon: SiExpress, type: "icon", color: "#68A063" },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        type: "icon",
        color: "#4169E1",
      },
      { name: "MongoDB", icon: SiMongodb, type: "icon", color: "#47A248" },
    ],
  },
  {
    category: "Platform & Infra",
    subtitle: "Deployment, hosting & cloud services",
    skills: [
      {
        name: "AWS Amplify",
        icon: SiAwsamplify,
        type: "icon",
        color: "#FF9900",
      },
      { name: "Amazon RDS", icon: SiAmazonrds, type: "icon", color: "#527FFF" },
      { name: "Vercel", icon: SiVercel, type: "icon", color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, type: "icon", color: "#00C7B7" },
      {
        name: "CI/CD",
        icon: VscSymbolNamespace,
        type: "icon",
        color: "#2088FF",
      },
    ],
  },
  {
    category: "UI & Workflow",
    subtitle: "Productivity & styling ecosystem",
    skills: [
      { name: "HTML5", image: "/icons/html5.png", type: "image" },
      { name: "CSS3", image: "/icons/css3.png", type: "image" },
      { name: "JavaScript", image: "/icons/js.png", type: "image" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        type: "icon",
        color: "#06B6D4",
      },
      { name: "Redux", icon: SiRedux, type: "icon", color: "#764ABC" },
      { name: "Auth0", icon: SiAuth0, type: "icon", color: "#EB5424" },
      { name: "Git", icon: SiGit, type: "icon", color: "#F05032" },
      { name: "GitHub", icon: SiGithub, type: "icon", color: "#ffffff" },
    ],
  },
];

const Myskills = () => {
  return (
    <div className="myskills">
      <div className="skills-title">
        <h1>Skills & Technologies</h1>
        <p>
          Full-stack JavaScript focused on React, Next.js, and modern
          cloud-native backends.
        </p>
        <div className="title-underline" />
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <div className="skill-category" key={catIndex}>
            <div className="category-header">
              <h2>{category.category}</h2>
              {category.subtitle && <span>{category.subtitle}</span>}
            </div>
            <div className="category-skills">
              {category.skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon-wrapper">
                    {skill.type === "image" ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="skill-image"
                      />
                    ) : (
                      <skill.icon
                        className="skill-icon"
                        style={{ color: skill.color }}
                      />
                    )}
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myskills;
