import React from 'react';
import { DiJavascript1, DiHtml5, DiCss3, DiPython, DiJava, DiMysql, DiPostgresql, DiReact, DiNodejs, DiNpm } from 'react-icons/di';
import { SiTensorflow, SiPandas, SiNumpy, SiFlask } from 'react-icons/si';

const skills = [
  { name: 'JS', icon: <DiJavascript1 size="3em" color="#f7df1e" /> },
  { name: 'HTML', icon: <DiHtml5 size="3em" color="#e34f26" /> },
  { name: 'CSS', icon: <DiCss3 size="3em" color="#1572b6" /> },
  { name: 'Python', icon: <DiPython size="3em" color="#306998" /> },
  { name: 'Java', icon: <DiJava size="3em" color="#b07219" /> },
  { name: 'Postgres', icon: <DiPostgresql size="3em" color="#336791" /> },
  { name: 'MySQL', icon: <DiMysql size="3em" color="#4479a1" /> },
  { name: 'React', icon: <DiReact size="3em" color="#61dafb" /> },
  { name: 'Node.js', icon: <DiNodejs size="3em" color="#339933" /> },
  { name: 'Express', icon: <DiNpm size="3em" color="#cb3837" /> },
  { name: 'Flask', icon: <SiFlask size="3em" color="#000000" /> },
  { name: 'TF', icon: <SiTensorflow size="3em" color="#ff6f00" /> },
  { name: 'Pandas', icon: <SiPandas size="3em" color="#150458" /> },
  { name: 'NumPy', icon: <SiNumpy size="3em" color="#013243" /> },
];

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="flex items-center justify-center mb-2">
      {skill.icon}
    </div>
    <div className="text-center text-lg font-semibold">
      {skill.name}
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="skills-container">
    {skills.map((skill, index) => (
      <SkillCard key={index} skill={skill} />
    ))}
  </div>
);

export default SkillsSection;
