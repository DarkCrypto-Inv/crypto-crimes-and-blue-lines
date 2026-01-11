(function () {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
