import React, { useState, useEffect, useRef } from 'react';
import ModelViewer from './model-viewer';

const ProjectItem = ({ project }) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const modelElement = useRef(null); 

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
  <h2 className='project-title'>  {project.title}</h2>
    <p className="project-card-tech">{project.technologies.join(' - ')}</p>



<div className="project-item" style={{ 
  display: 'flex', 
  justifyContent: 'space-between',
  position: 'relative'  
}}>  




<div className='project-card' style={{ backgroundColor: '#242424', color: "white", }}>
  

  
  <div className="project-card-header">
    <p className="project-card-title">{project.description}</p>
  </div>

  <div className="card-body">
    <div className="card-technologies">
        <h5>Challenges</h5>
        <p>{project.challenges}</p>
      </div>
    <div className="card-info">
      <div className="card-solutions">
        <h5>Solution</h5>
        <p>{project.solution}</p>
      </div>
    </div>
  </div>


  <div className="project-card-footer">
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link project-link">Check out the project</a>
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link code-link">Check out the code</a>
  </div>
</div>

{/* row 2 */}
 
<div className="project-item" style={{ width: '100%', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
    <ModelViewer modelUrl={project.model} />
    {isVideoPlaying && (
       <div style={{ position: 'absolute', top: 10, left: 0, width: '100%', maxHeight: '100%', overflow: 'hidden' }}> 
        <video id="project-video" width="96%" height="396" controls>
          <source src={project.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}
        {!isVideoPlaying && (
        <button className= "video-button" onClick={handleVideoPlay}><i className="fas fa-play"></i> Play</button>
        )}
        {isVideoPlaying && (
        <button className= "video-button" onClick={handleVideoStop}><i className="fas fa-stop"></i> Stop</button>
      )}
      </div>
  </div>
  </>
  );
};


export default ProjectItem;