/* import video from './Video.jsx';

let imgVideo = document.getElementById('Blade');
const fondo = document.getElementById("fondo");
const miModal = document.getElementById("miModal");


// Cuando se hace clic en la imagen, muestra el modal
imgVideo.addEventListener("click", function () {
    const modal = new bootstrap.Modal(miModal);
    modal.show();

    //mimodal.InnerHTML = video();
});


// Cuando se hace clic en el fondo o en el botón de cerrar, oculta el modal
fondo.addEventListener("click", function () {
    fondo.style.display = "none";
    miModal.style.display = "none";
});

document.getElementById("cerrarModal").addEventListener("click", function () {
    fondo.style.display = "none";
    miModal.style.display = "none";
});
 */


const netflix = document.getElementById('netflix');
const audio = document.getElementById('netflixSound');


function playSound(sound){
    audio.play();
}