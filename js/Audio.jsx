class Audio extends HTMLElement{ 
  constructor() {
    super();
    this.innerHTML = `<audio id="netflixSound" src="Netflix-Intro-Sound-Effect.mp3"></audio>`
  }
}

customElements.define("au-dio", Audio);
