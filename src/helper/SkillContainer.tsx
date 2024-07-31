import Typography from "@/components/ui/Typography";
import React from "react";

// Define the props type
interface SkillContainerProps {
  title: string;
  content: string[];
}

export const SkillContainer: React.FC<SkillContainerProps> = ({ title, content }) => {
  return (
    <div className="border border-zinc-800 w-[15vw] p-4">
      <Typography variant="h4" text={title} className="mb-4" />
      {content.map((text, index) => (
        <Typography key={index} variant="p" text={text}  className="mb-4"/>
      ))}
    </div>
  );
};
