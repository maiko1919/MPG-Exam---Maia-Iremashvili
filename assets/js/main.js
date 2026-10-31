document.querySelectorAll(".stack").forEach((card, i) => {
	const img = card.querySelector(".card-image")?.src || card.querySelector("img")?.src;
	if (img) {
		card.style.setProperty("--img-stack", `url(${img})`);
	}
});

// Friends Activity Sidebar toggle
const activity_button = document.querySelector(".top-nav .icon-users")?.closest("a");
const close_button = document.querySelector(".slide-controls .icon-close")?.closest("a");
const activity_sidebar = document.querySelector(".activity");

if (activity_button && activity_sidebar) {
	activity_button.addEventListener("click", (e) => {
		e.preventDefault();
		activity_sidebar.classList.toggle("open");
	});
}

if (close_button && activity_sidebar) {
	close_button.addEventListener("click", (e) => {
		e.preventDefault();
		activity_sidebar.classList.remove("open");
	});
}

// Pin Button Functionality with LocalStorage persistence
document.querySelectorAll(".pin").forEach((pinBtn) => {
	pinBtn.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		pinBtn.classList.toggle("is-pinned");
		const isPinned = pinBtn.classList.contains("is-pinned");
		pinBtn.setAttribute("aria-pressed", isPinned);
		
		const cardTitle = pinBtn.closest(".album-card")?.querySelector(".album-card__title")?.innerText;
		if (cardTitle) {
			localStorage.setItem(`pin_${cardTitle}`, isPinned);
		}
	});

	const cardTitle = pinBtn.closest(".album-card")?.querySelector(".album-card__title")?.innerText;
	if (cardTitle && localStorage.getItem(`pin_${cardTitle}`) === "true") {
		pinBtn.classList.add("is-pinned");
		pinBtn.setAttribute("aria-pressed", "true");
	}
});

// Theme toggle logic
const changeTheme = document.getElementById("theme-toggle");
function toggleTheme() {
  const isLight = document.body.classList.toggle("light-mode");
  if (isLight) {
    if (changeTheme) changeTheme.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    if (changeTheme) changeTheme.classList.add("dark");
    localStorage.setItem("theme", "default");
  }
}

if (changeTheme) {
  changeTheme.addEventListener("click", toggleTheme);
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  if (changeTheme) changeTheme.classList.remove("dark");
} else {
  document.body.classList.remove("light-mode");
  if (changeTheme) changeTheme.classList.add("dark");
}

const scrollSections = document.querySelectorAll(".scrolls, .scrolls-desktop");
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			const container = entry.target.closest(".song-container");
			const img = container?.querySelector(".main-img");

			if (entry.isIntersecting) {
				img?.classList.add("visible");
				const bars = entry.target.querySelectorAll(".scroll-bar");
				let index = 0;

				function animateBars() {
					if (bars[index]) {
						bars[index].classList.add("active");
						bars[index].addEventListener(
							"animationend",
							() => {
								index++;
								if (index < bars.length) animateBars();
							},
							{ once: true },
						);
					}
				}

				if (bars.length > 0) animateBars();
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.6 },
);

scrollSections.forEach((section) => observer.observe(section));