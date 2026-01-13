import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projects.json';
import projectFeatures from '../data/projectFeatures.json';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs.tsx';

const Projects = () => {
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);
  const sortedFeatures = [...projectFeatures].sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="projects-header">
        <div
          className="glitch font-bold text-3xl md:text-4xl"
          data-text="Projects">
          Side Projects
        </div>
      </div>

      {/* First Projects Section */}
      <Tabs defaultValue={sortedProjects[0].id.toString()} className="w-full  px-2 md:px-4">
        {/* Tab Navigation */}
        <div className="overflow-x-auto md:overflow-visible pb-2 md:flex md:justify-center">
          <TabsList className="!flex !justify-start md:!flex-wrap md:!justify-center gap-2 mt-4 mb-8 bg-transparent md:max-w-4xl">
            {sortedProjects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id.toString()}
                className="px-3 py-2 rounded-lg bg-[#151515] text-gray-200 font-semibold text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
              >
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tab Content - Each Project */}
        {sortedProjects.map((project) => (
          <TabsContent key={project.id} value={project.id.toString()} className="min-h-[600px] md:min-h-[700px]">
            <ProjectItem project={project} />
          </TabsContent>
          
        ))}
   
      </Tabs>

      {/* Divider */}
      <div className="projects-header">
     <div
          className="glitch font-bold text-3xl md:text-4xl"
          data-text="Projects">
          Main Project
        </div>
        </div>
  

      {/* Second Projects Section - Features */}
      <Tabs defaultValue={sortedFeatures[0].id.toString()} className="w-full  mt-12 px-2 md:px-4">
        {/* Tab Navigation */}
        <div className="overflow-x-auto md:overflow-visible pb-2 md:flex md:justify-center">
          <TabsList className="!flex !justify-start md:!flex-wrap md:!justify-center gap-2 mt-4 mb-8 bg-transparent md:max-w-4xl">
            {sortedFeatures.map((feature, index) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id.toString()}
                className={`px-3 py-2 rounded-lg font-semibold text-xs sm:text-sm whitespace-nowrap flex-shrink-0 ${
                  index === 0 
                    ? 'bg-[#b5b5b5] text-gray-700' 
                    : 'bg-[#151515] text-gray-200'
                }`}
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tab Content - Each Feature */}
        {sortedFeatures.map((feature) => (
          <TabsContent key={feature.id} value={feature.id.toString()} className="min-h-[600px] md:min-h-[700px]">
            <ProjectItem 
              project={feature} 
              hideButtons={true} 
              customFooterMessage="Live demo and code preview available upon request"
            />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default Projects;