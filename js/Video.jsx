import React from 'react';

function video() {
  return (
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/NU9NYU9O0Hw" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
    ></iframe>
  );
}

export default video;