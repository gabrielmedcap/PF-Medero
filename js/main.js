const nav = document.querySelector("#nav");
const casos = document.querySelector("#casos");
const abrir = document.querySelector("#btn-menu");
const cerrar = document.querySelector("#btn-cerrar");

abrir.addEventListener("click", () => {
    nav.classList.toggle("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

abrir.addEventListener("click", () => {
    casos.classList.toggle("visible");
})

cerrar.addEventListener("click", () => {
    casos.classList.remove("visible");
})