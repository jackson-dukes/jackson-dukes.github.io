const STORAGE_KEY = "jackson-dukes-theme";
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".theme-toggle-icon");
const toggleText = document.querySelector(".theme-toggle-text");
const themeMeta = document.querySelector('meta[name="theme-color"]');

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  const isDark = theme === "dark";

  toggle?.setAttribute("aria-pressed", String(isDark));

  if (toggleIcon) {
    toggleIcon.textContent = isDark ? "☀" : "☾";
  }

  if (toggleText) {
    toggleText.textContent = isDark ? "Light" : "Dark";
  }

  if (themeMeta) {
    themeMeta.setAttribute("content", isDark ? "#020617" : "#f7f8fb");
  }
};

applyTheme(getPreferredTheme());

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
