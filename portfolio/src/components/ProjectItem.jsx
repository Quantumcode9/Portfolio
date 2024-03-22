import React, { useState, useEffect } from 'react';
import ModelViewer from './model-viewer';

const ProjectItem = ({ project }) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);



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
    <div>
    {isVideoPlaying && (
      <div>
        <video id="project-video" width="640" height="360" controls>
          <source src={project.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )}
  </div>
  <h2>{project.title}</h2>
<div className="project-item" style={{ 
  display: 'flex', 
  justifyContent: 'space-between',
  position: 'relative'
}}>  

      <div className='card' style={{ width: '50%' }}>
      <p>{project.description}</p>
  <p>Technologies: {project.technologies.join(', ')}</p>
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
      <div style={{ width: '50%' }}>
        <ModelViewer modelUrl={project.model} />
        <button onClick={handleVideoPlay}>Play Video</button>
        <button onClick={handleVideoStop}>Stop Video</button>
        <a href={project.link}>Project Link</a>
        <a href={project.videoUrl}>Video Link</a>
      </div>
  </div>
  </>
  );
};


export default ProjectItem;