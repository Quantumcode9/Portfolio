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
  <h2 className='project-title'>  {project.title}</h2>
<div className="project-item" style={{ 
  display: 'flex', 
  justifyContent: 'space-between',
  position: 'relative'  
}}>  

      <div className='card' style={{ width: '50%' }}>
      <p>{project.description}</p>
  <p>Technologies: {project.technologies.join(', ')}</p>
  <p>Year: {project.year}</p>
  <p>Challenges: {project.challenges}</p>
  <p>Solutions: {project.solution}</p>
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      textDecoration: 'none',
      padding: '10px 15px',
      margin: '5px',
      borderRadius: '2px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer'
    }}
  >
    Check out the project
  </a>
    <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      textDecoration: 'none',
      padding: '10px 15px',
      margin: '5px',
      borderRadius: '2px',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer'
    }}
  >
    Check out the code
  </a>



  </div>

        <div style={{ width: '50%', position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
    <ModelViewer modelUrl={project.model} />
    {isVideoPlaying && (
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <video id="project-video" width="704" height="396" controls>
          <source src={project.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}
        <button onClick={handleVideoPlay}><i className="fas fa-play"></i> Play</button>
        <button onClick={handleVideoStop}><i className="fas fa-stop"></i> Stop</button>
      </div>
  </div>
  </>
  );
};


export default ProjectItem;