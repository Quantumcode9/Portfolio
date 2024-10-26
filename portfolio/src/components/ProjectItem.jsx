import React, { useState, useEffect, useRef } from 'react';
import ModelViewer from './model-viewer';

const ProjectItem = ({ project }) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const modelElement = useRef(null); 
  const [isInView, setInView] = useState(false);
  const projectRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (projectRef.current) observer.observe(projectRef.current);
    return () => projectRef.current && observer.unobserve(projectRef.current);
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
<h2 className="project-title text-2xl md:text-3xl lg:text-4xl font-semibold">
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




<div className="project-card bg-gray-900 text-white rounded-lg shadow-lg p-6 space-y-4">

    <p className="project-card-title text-custom text-light">{project.description}</p>
    <hr/>

  <div className="card-body space-y-4 text-gray-300">
    <div className="card-technologies">
      <h5 className="text-lg uppercase font-semibold text-white">Challenges</h5>
      <p className="text-base">{project.challenges}</p>
    </div>
    <div className="card-info">
      <div className="card-solutions">
        <h5 className="text-lg uppercase font-semibold text-white">Solution</h5>
        <p className="text-base">{project.solution}</p>
      </div>
    </div>
  </div>

  <div className="project-card-footer flex justify-between">
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link code-link text-blue-400 hover:underline">
      Check out the code
    </a>
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link project-link text-blue-400 hover:underline">
      Check out the project
    </a>
  </div>
</div>

{/* row 2 */}

<div className="project-item w-full relative rounded-lg overflow-hidden">
    <ModelViewer modelUrl={project.model} />
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