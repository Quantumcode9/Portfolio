import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projects.json';
import projectFeatures from '../data/projectFeatures.json';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs.tsx';

const Projects = () => {
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);
  const sortedFeatures = [...projectFeatures].sort((a, b) => a.id - b.id);

  return (
    <div className="bg-[#242424] text-white py-20">

      {/* Section Header */}
      <div className="text-center mb-4 px-4">
        <div className="glitch font-light text-4xl md:text-5xl mb-4" data-text="Side Projects">
          Side Projects
        </div>
        <div className="w-16 h-px bg-[#f1aeb5] mx-auto mt-4 mb-2"></div>
      </div>

      {/* First Projects Section */}
      <Tabs defaultValue={sortedProjects[0].id.toString()} className="w-full px-2 md:px-4">
        <div className="overflow-x-auto md:overflow-visible pb-2 md:flex md:justify-center">
          <TabsList className="!flex !justify-start md:!flex-wrap md:!justify-center gap-2 mt-6 mb-8 bg-transparent md:max-w-6xl">
            {sortedProjects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id.toString()}
                className="px-3 py-2 rounded-sm bg-[#1a1a1a] text-gray-300 border border-[#3E3E3E] font-semibold text-xs sm:text-sm whitespace-nowrap flex-shrink-0 hover:border-[#f1aeb5]/20 hover:text-[#f1aeb5] transition-colors duration-200"
              >
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {sortedProjects.map((project) => (
          <TabsContent key={project.id} value={project.id.toString()} className="min-h-[600px] md:mx-8 md:min-h-[700px]">
            <ProjectItem project={project} />
          </TabsContent>
        ))}
      </Tabs>

      {/* Divider */}
      <div className="border-t border-[#3E3E3E] my-16 max-w-5xl mx-auto"></div>

      {/* Main Project Section Header */}
      <div className="text-center mb-4 px-4">
        <div className="glitch font-light text-4xl md:text-5xl mb-4" data-text="Main Project">
          Main Project
        </div>
        <div className="w-16 h-px bg-[#f1aeb5] mx-auto mt-4 mb-2"></div>
      </div>

      {/* Second Projects Section - Features */}
      <Tabs defaultValue={sortedFeatures[0].id.toString()} className="w-full px-2 md:px-4">
        <div className="overflow-x-auto md:overflow-visible pb-2 md:flex md:justify-center">
          <TabsList className="!flex !justify-start md:!flex-wrap md:!justify-center gap-2 mt-6 mb-8 bg-transparent md:max-w-6xl">
            {sortedFeatures.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id.toString()}
                className="px-3 py-2 rounded-sm bg-[#1a1a1a] text-gray-300 border border-[#3E3E3E] font-semibold text-xs sm:text-sm whitespace-nowrap flex-shrink-0 hover:border-[#f1aeb5] hover:text-[#f1aeb5] transition-colors duration-200"
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

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
    </div>
  );
};

export default Projects;