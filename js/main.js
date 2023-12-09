const nav = document.querySelector("#nav");
const abrir = document.querySelector("#btn-menu");
const cerrar = document.querySelector("#btn-cerrar");

abrir.addEventListener("click", () => {
    nav.classList.toggle("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})