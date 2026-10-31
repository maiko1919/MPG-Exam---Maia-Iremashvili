
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".album-card");
  const storageKey = "spotify-pinned-cards";

  let pinnedCards = [];

  try {
    pinnedCards = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );
  } catch (error) {
    pinnedCards = [];
  }

  const pinIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 3l5 5-4 1-4 4-1 5-3-3-5 5-1-1 5-5-3-3 5-1 4-4 2-3z"/>
    </svg>
  `;

  cards.forEach((card, index) => {
    const imageWrap = card.querySelector(".album-card__image-wrap");

    if (!imageWrap) return;

    const title = card.querySelector(".album-card__title");
    const cardId = title
      ? `${title.textContent.trim()}-${index}`
      : `card-${index}`;

    const button = document.createElement("button");

    button.type = "button";
    button.className = "album-card__pin";
    button.innerHTML = pinIcon;

    function updatePin() {
      const active = pinnedCards.includes(cardId);

      button.classList.toggle("album-card__pin--active", active);
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute(
        "aria-label",
        active ? "Unpin card" : "Pin card"
      );
    }

    updatePin();

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (pinnedCards.includes(cardId)) {
        pinnedCards = pinnedCards.filter(id => id !== cardId);
      } else {
        pinnedCards.push(cardId);
      }

      localStorage.setItem(
        storageKey,
        JSON.stringify(pinnedCards)
      );

      updatePin();
    });

    imageWrap.appendChild(button);
  });
});
