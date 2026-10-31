// Home page (index.html) scripts

document.querySelectorAll(".album-card").forEach((card) => {
	const cover = card.querySelector(".album-card__cover");
	const wrap = card.querySelector(".album-card__image-wrap");
	const pin = card.querySelector(".pin");

	// 1. Stack effect: take the cover's src and expose it to CSS as --img-stack,
	//    the ::before / ::after layers behind the cover use it as their background
	if (cover && wrap) {
		wrap.style.setProperty("--img-stack", `url("${cover.src}")`);
	}

	// 2. Pin button: toggle pinned state on click
	if (pin) {
		pin.addEventListener("click", () => {
			const isPinned = pin.classList.toggle("is-pinned");
			pin.setAttribute("aria-pressed", isPinned);
		});
	}
});