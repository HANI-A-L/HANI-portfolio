export function smoothScrollTo(target) {
  const element = document.querySelector(target);

  if (!element) return;

  const navbar = document.querySelector(".navbar");

  const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;

  const targetPosition =
    element.getBoundingClientRect().top + window.scrollY - navbarHeight - 15;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}
