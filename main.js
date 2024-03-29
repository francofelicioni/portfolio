/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL sobreMi*/
sr.reveal(".sobreMi__img", {});
sr.reveal(".sobreMi__subtitle", { delay: 400 });
sr.reveal(".sobreMi__text", { delay: 400 });

/*SCROLL Experiencia/Portfolio*/
sr.reveal(".Experiencia__img", { interval: 200 });

/*SCROLL contacto*/
sr.reveal(".contacto__container", { interval: 200 });

/*===== DOWNLOAD CV =====*/
let downloadBtn = document.querySelector('.download-cv')
let downloadBtnFooter = document.querySelector('.download-cv-footer')

downloadBtn.addEventListener("click", () => {
    const downloadInstance = document.createElement('a');
    downloadInstance.href = "./assets/francoFelicioniCV.pdf";
    downloadInstance.target = '_blank';
    downloadInstance.download = 'Franco Felicioni CV'

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
});

downloadBtnFooter.addEventListener("click", () => {
    const downloadInstance = document.createElement('a');
    downloadInstance.href = "./assets/francoFelicioniCV.pdf";
    downloadInstance.target = '_blank';
    downloadInstance.download = 'Franco Felicioni CV'

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
});
