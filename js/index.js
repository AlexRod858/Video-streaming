const miModal = document.querySelector(".miModal");
const netflix = document.getElementById("netflix");
const audio = document.getElementById("netflixSound");

function playSound(sound, video = false) {
    const mySound = document.getElementById(sound);
    mySound.play();

    if (video) {
      miModal.setAttribute("aria-hidden", "false"); 
    }
}
