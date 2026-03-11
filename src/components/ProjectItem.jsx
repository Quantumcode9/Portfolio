import React, { useState, useEffect } from 'react';

const ProjectItem = ({ project, hideButtons = false, customFooterMessage = '' }) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  // Check if buttons should be shown (defaults to true if not specified in project data)
  const showGithub = project.showGithubButton !== false;
  const showLive = project.showLiveButton !== false;
  const hasAnyButton = showGithub || showLive;

  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };
  
  const handleVideoStop = () => {
    setVideoPlaying(false);
  };

  useEffect(() => {
    if (isVideoPlaying) {
      const videoElement = document.getElementById('project-video');
      videoElement.play();
    }
  }, [isVideoPlaying]);

  return (
<>

{/* row 1 */}
<h2 className="project-title text-xl  md:text-2xl lg:text-3xl font-semibold mt-16 mb-1">
    {project.title}
</h2>
<p className="project-card-tech text-xs md:text-sm lg:text-base text-[#f1aeb5] mb-4 tracking-wider">
    {project.technologies.join(' · ').toUpperCase()}
</p>


<div className="project-item grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">  

  <div className="project-card text-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl  xl:max-w-2xl">
    <div className="p-2">
      <div className="mb-4 min-h-[100px]">
        <p className="text-xl font-bold text-white mb-2">{project.title}</p>
        <p className="text-gray-300 text-base">{project.description}</p>
      </div>
      
      <div className="space-y-2 border-t border-[#3E3E3E] pt-4">
        <div className="card-challenges">
          <h5 className="text-md uppercase font-semibold text-gray-200 mb-2">Challenges</h5>
          <p className="text-gray-300 text-base">{project.challenges}</p>
        </div>
        
        <div className="card-solutions ">
          <h5 className="text-md uppercase font-semibold text-gray-200 mb-2">Solution</h5>
          <p className="text-gray-300 text-base">{project.solution}</p>
        </div>
      </div>
    </div>

    
    {hideButtons && customFooterMessage ? (
      <div className="project-card-footer mx-auto flex justify-center items-center">
        <p className="text-gray-400 text-sm md:text-base italic">
          {customFooterMessage}
        </p>
      </div>
    ) : !hideButtons && hasAnyButton ? (
      <div className={`project-card-footer flex items-center ${showGithub && showLive ? 'justify-between' : 'justify-center'}`}>
        {showGithub && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex text-center card-link code-link text-sm md:text-base duration-200"
          > 
          <i className="fab fa-github mr-2 icon"></i>
            GitHub
          </a>
        )}
        {showLive && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center card-link project-link text-sm md:text-base duration-200"
          >
            <i className="fab fa-chrome mr-2 text-white text-3xl"></i>
            Live Project
          </a>
        )}
      </div>
    ) : null}
    </div>

    <div className="project-media-container w-full relative rounded-lg overflow-hidden">
      <div className="aspect-video w-full">
        {!isVideoPlaying && (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        {isVideoPlaying && (
          <div className="w-full h-full">
            <video 
              id="project-video" 
              className="w-full h-full rounded-lg" 
              controls>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      {!isVideoPlaying && project.videoUrl && (
        <button className="video-button" onClick={handleVideoPlay}>
          <i className="fas fa-play"></i> Play
        </button>
      )}
      {isVideoPlaying && (
        <button className="video-button" onClick={handleVideoStop}>
          <i className="fas fa-stop"></i> Stop
        </button>
      )}
    </div>
</div>
     
      </>
      );
    };


export default ProjectItem;