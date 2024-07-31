import { SkillContainer } from '@/helper/SkillContainer';
import React from 'react';
import Typography from './ui/Typography';

const Skill = () => {
  return (
    <div className='mb-20'>
      <Typography variant='h3' text='Skills' className='mb-4'/>
       <div className='grid grid-cols-3'>
       <SkillContainer 
         title="Apps" 
         content={[
           "Browser apps, websites, mobile and cross-platform desktop app development.",
           "From SSG, SSR to SPAs, I have extensive experience optimizing for all rendering methods."
         ]}
       />
       <SkillContainer 
         title="Design" 
         content={[
           "UI/UX design with a focus on creating user-friendly and aesthetically pleasing interfaces.",
           "Proficient in tools like Figma, Adobe XD, and Sketch."
         ]}
       />
       <SkillContainer 
         title="DevOps" 
         content={[
           "Experience with CI/CD pipelines, containerization, and cloud deployments.",
           "Skilled in using tools like Docker, Kubernetes, and Jenkins."
         ]}
       />
       </div>
    </div>
  );
}

export default Skill;