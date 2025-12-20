const observeOnce = () => {
  const items = document.querySelectorAll(
    ".hero-copy, .hero-panel, .cap-card, .api-card, .bench-card"
  );
  items.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.08}s`;
    el.classList.add("reveal");
  });
};

window.addEventListener("load", observeOnce);
