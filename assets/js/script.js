const iconGithub = document.querySelector(".bi-github");
const iconLinkedin = document.querySelector(".bi-linkedin");
const iconEmail = document.querySelector(".bi-envelope");
const legendaGithub = document.querySelector("#legendaGithub");
const legendaLinkedin = document.querySelector("#legendaLinkedin");
const legendaEmail = document.querySelector("#legendaEmail");

iconGithub.addEventListener("mouseenter", function () {
    this.classList.add("hide");
    legendaGithub.classList.remove("hide");
});

legendaGithub.addEventListener("mouseleave", function () {
    this.classList.add("hide");
    iconGithub.classList.remove("hide");
});

iconLinkedin.addEventListener("mouseenter", function () {
    this.classList.add("hide");
    legendaLinkedin.classList.remove("hide");
});

legendaLinkedin.addEventListener("mouseleave", function () {
    this.classList.add("hide");
    iconLinkedin.classList.remove("hide");
});

iconEmail.addEventListener("mouseenter", function () {
    this.classList.add("hide");
    legendaEmail.classList.remove("hide");
});

legendaEmail.addEventListener("mouseleave", function () {
    this.classList.add("hide");
    iconEmail.classList.remove("hide");
});

function mudarTema() {
    document.body.classList.toggle("dark");
}