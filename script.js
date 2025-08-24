// --- LÓGICA PARA BOTÃO "LEIA MAIS" (JÁ ESTAVA BOM!) ---
const toggleBtn = document.getElementById("toggleBtn");
const maisTexto = document.getElementById("maisTexto");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        if (maisTexto.style.display === "none" || maisTexto.style.display === "") {
            maisTexto.style.display = "inline";
            toggleBtn.textContent = "Mostrar menos";
        } else {
            maisTexto.style.display = "none";
            toggleBtn.textContent = "Leia mais";
        }
    });
}


// --- NOVA LÓGICA PARA ANIMAÇÃO DE SCROLL ---
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Se o elemento está visível na tela
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Opcional: para a animação não repetir, des-observe o elemento
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // A animação começa quando 15% do elemento está visível
});

// "Observa" cada elemento que tem a classe .reveal
revealElements.forEach(element => {
    revealObserver.observe(element);
});