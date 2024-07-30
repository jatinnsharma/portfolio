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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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

const a = {
  title: "My Awesome Project",
  description: "This is a description of my awesome project.",
  tags: [
    { label: "React", icon: FaReact },
    { label: "Node.js", icon: FaNodeJs },
    { label: "Database", icon: FaDatabase },
    // { label: "GitHub", icon: FaGithub },
    // { label: "CSS3", icon: FaCss3Alt },
  ],
}
const imageUrl = "https://www.probuilder.com/sites/default/files/pb/project%20management.jpg"
const title = "Create Project"
const description = "Deploy your new project in one-click."
// const tags = []

export const Projects: React.FC = () => {
  return (
    <section>
     
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      </div> */}
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-6 justify-center w-[40%]">
        <div className="mb-8">
        <Typography variant="h2" text="All Creative Works." />
        <Typography variant="p" text="Here's some of my projects that I have worked on." className="text-zinc-500" />
        <Typography variant="p" text="Explore more" className="text-green-500" />
      </div >

          <Card>
            <CardHeader>
              {imageUrl && <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />}
              <Typography variant="h3" text={title} />
              <Typography variant="p" text={description} className="text-gray-600" />
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
              {a.tags.length > 0 && (
                <div className="flex space-x-2 gap-5">
                  {a.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag.icon && <tag.icon className="mr-1 h-4 w-4" />}
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
        <div className=" flex flex-col gap-6 w-[40%] ">
          <Card>
            <CardHeader>
              {imageUrl && <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />}
              <Typography variant="h3" text={title} />
              <Typography variant="p" text={description} className="text-gray-600" />
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
              {a.tags.length > 0 && (
                <div className="flex space-x-2 gap-5">
                  {a.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag.icon && <tag.icon className="mr-1 h-4 w-4" />}
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              {imageUrl && <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />}
              <Typography variant="h3" text={title} />
              <Typography variant="p" text={description} className="text-gray-600" />
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
              {a.tags.length > 0 && (
                <div className="flex space-x-2 gap-5">
                  {a.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag.icon && <tag.icon className="mr-1 h-4 w-4" />}
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>






    </section>
  );
};
