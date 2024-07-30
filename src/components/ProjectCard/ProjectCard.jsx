"use client";

import * as React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaCss3Alt } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Typography from "../ui/Typography";

export function ProjectCard({
  imageUrl = "https://www.probuilder.com/sites/default/files/pb/project%20management.jpg",
  title = "Create Project",
  description = "Deploy your new project in one-click.",
  tags = [],
}) {
  return (
    <Card className="w-full sm:w-[350px] mx-auto">
      <CardHeader>
        {imageUrl && <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />}
        <Typography variant="h3" text={title} />
        <Typography variant="p" text={description} className="text-gray-600" />
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        {tags.length > 0 && (
          <div className="flex space-x-2 gap-5">
            {tags.map((tag, index) => (
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
  );
}
