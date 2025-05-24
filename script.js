particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fa69b5",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "grab" } },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } }
    }
  },
  retina_detect: true
});
const toggleBtn = document.getElementById("toggleBtn");
const maisTexto = document.getElementById("maisTexto");

toggleBtn.addEventListener("click", () => {
  if (maisTexto.style.display === "none") {
    maisTexto.style.display = "inline";
    toggleBtn.textContent = "Mostrar menos";
  } else {
    maisTexto.style.display = "none";
    toggleBtn.textContent = "Leia mais";
  }
});
