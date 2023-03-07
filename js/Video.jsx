class Video extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<iframe 
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/NU9NYU9O0Hw" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
    ></iframe>`
  }
}

customElements.define('vi-deo', Video);
