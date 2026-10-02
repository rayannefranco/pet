document.addEventListener("DOMContentLoaded", () => {
  const checkoutButtons = document.querySelectorAll("[data-checkout]");

  checkoutButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const checkoutUrl = button.dataset.checkoutUrl;

      if (!checkoutUrl) {
        event.preventDefault();
        alert("Checkout ainda não configurado. Substitua o link no arquivo js/script.js ou adicione data-checkout-url ao botão.");
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});