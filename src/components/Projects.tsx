"use client";

import React from "react";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCss3Alt,
} from "react-icons/fa";
import Typography from "./ui/Typography";

const projectData = [
  {
    title: "My Awesome Project",
    description: "This is a description of my awesome project.",
    tags: [
      { label: "React", icon: FaReact },
      { label: "Node.js", icon: FaNodeJs },
      { label: "Database", icon: FaDatabase },
      { label: "GitHub", icon: FaGithub },
      { label: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Another Project",
    description: "Description for another project.",
    tags: [
      { label: "React", icon: FaReact },
      { label: "JavaScript", icon: FaNodeJs },
    ],
  },
  {
    title: "Third Project",
    description: "Description for the third project.",
    tags: [
      { label: "Database", icon: FaDatabase },
      { label: "GitHub", icon: FaGithub },
    ],
  },
  // Add more projects as needed
];

export const Projects: React.FC = () => {
  return (
    <section>
      <div className="mb-8">
        <Typography variant="h2" text="All Creative Works." />
        <Typography variant="p" text="Here's some of my projects that I have worked on." className="text-zinc-500" />
        <Typography variant="p" text="Explore more" className="text-green-500" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              // imageUrl={project.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
