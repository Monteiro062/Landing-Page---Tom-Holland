document.addEventListener("DOMContentLoaded", () => {
  // ===== ANIMAÇÃO DE SCROLL COM INTERSECTION OBSERVER =====
  const animatedElements = document.querySelectorAll('.sobre img, .sobre-text');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Opcional: para a animação não repetir
      }
    });
  }, {
    threshold: 0.5 // A animação começa quando 50% do elemento está visível
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });


  // ===== EFEITO PARALLAX NO HERO =====
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      // Ajuste o valor 0.5 para controlar a intensidade do parallax
      hero.style.backgroundPositionY = offset * 0.5 + "px";
    });
  }

});

