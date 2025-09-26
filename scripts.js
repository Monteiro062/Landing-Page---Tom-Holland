
document.addEventListener("DOMContentLoaded", () => {
  initScrollButton();
});

function initScrollButton() {
  const button = document.getElementById("scrollDown"); // pega o botão
  const target = document.getElementById("sobre");      // pega a seção alvo

  if (!button || !target) return; // segurança caso não exista

  button.addEventListener("click", () => {
    target.scrollIntoView({ behavior: "smooth" }); // rolagem suave
  });
}