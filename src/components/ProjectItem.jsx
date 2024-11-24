import React, { useState, useEffect, useRef } from 'react';
import ModelViewer from './model-viewer';

const ProjectItem = ({ project }) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const modelElement = useRef(null); 
  const [isInView, setInView] = useState(false);
  const projectRef = useRef();

  useEffect(() => {
    const currentRef = projectRef.current;
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setInView(true); // Trigger model loading
        } else {
            setInView(false); // Unload model if it's out of view
        }
    }, { threshold: 0.1 });

    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
}, []);

  const handleClick = () => {
    if (modelElement.current) {
      modelElement.current.style.setProperty('--camera-orbit', '0deg 75deg 105%');
    }
  };

  const handleVideoPlay = () => {
    handleClick();
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
<h2 className="project-title text-2xl mt-10 md:text-3xl lg:text-4xl font-semibold">
    {project.title}
</h2>
<p className="project-card-tech text-sm md:text-base lg:text-lg text-gray-600">
    {project.technologies.join(' - ').toUpperCase()}
</p>


<div className="project-item" style={{ 
  display: 'flex', 
  justifyContent: 'space-between',
  position: 'relative'  
}}>  

  <div className="project-card bg-gray-900 text-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
    <div className="p-2">
      <div className="mb-4">
        <p className="text-xl font-bold text-white mb-2">{project.title}</p>
        <p className="text-gray-300 text-base">{project.description}</p>
      </div>
      
      <div className="space-y-4 border-t border-gray-700 pt-2">
        <div className="card-challenges">
          <h5 className="text-md uppercase font-semibold text-gray-200 mb-2">Challenges</h5>
          <p className="text-gray-300 text-base">{project.challenges}</p>
        </div>
        
        <div className="card-solutions">
          <h5 className="text-md uppercase font-semibold text-gray-200 mb-2">Solution</h5>
          <p className="text-gray-300 text-base">{project.solution}</p>
        </div>
      </div>
    </div>

    
    <div className="project-card-footer flex justify-between items-center">
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex text-center card-link code-link text-sm md:text-base duration-200"
      > 
      <i className="fab fa-github mr-2 icon"></i>
        GitHub
      </a>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center card-link project-link text-sm md:text-base duration-200"
      >
        <i className="fab fa-chrome mr-2 text-white text-3xl"></i>
        Live Project
      </a>
      </div>`
    </div>

    <div className="project-item w-full relative rounded-lg overflow-hidden">
      <div ref={projectRef}
        style={{ minHeight: '400px' }} 
      >
        {isInView ? (
          <ModelViewer modelUrl={project.model} />
        ) : (
          <div style={{ height: '100%' }}></div> 
        )}
      </div>
          {isVideoPlaying && (
            <div className="absolute top-20 left-5 md:top-6 md:left-3 w-[90%] md:w-full max-h-full overflow-hidden" >
                <video 
                    id="project-video" className="w-full md:w-[96%] max-h-[50vh] md:max-h-[396px] rounded-lg" controls>
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
          )}
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
      <div className="divider-block"></div>
      </>
      );
    };


export default ProjectItem;