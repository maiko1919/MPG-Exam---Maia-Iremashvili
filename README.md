# 🎵 Spotify UI Layout Clone — MPG Examination Project

A **modern, high-fidelity Spotify-inspired user interface** built with a focus on **scalable architecture, responsive patterns, and professional front-end workflows**.

This project demonstrates the power of **SCSS modular architecture** and **Semantic HTML** within a **collaborative team development environment**.

🔗 **Live Demo:** [Open demo page](https://pritulapavel.github.io/MPG-Exam/)  
🎨 The design for this project is available on Figma: [Open Design in Figma](https://www.figma.com/design/K0iHmiSiMJuKxr5duOKvIC/CareerPath-Mentoring-task?node-id=1-323&t=35CZZs2a1AoqnHdG-0)
👩‍💻 The Workflow file for managing tasks and fixes between team members: [Open file in google sheet](https://docs.google.com/spreadsheets/d/1wMH_dYq1dPgVQjJyiAfwWoSGGpkVa_W-45_PLzcczfQ/edit?gid=0#gid=0)

---

# 🚀 Project Overview

This project is a deep dive into recreating **complex UI patterns used in modern streaming platforms** like Spotify.

### Key Goals

- 📱 **Responsive Multi-View Support**  
  Seamless experience across **Mobile, Tablet, and Desktop** including a **3-column desktop layout**

- 🎨 **Advanced Styling Architecture**  
  Implementation of the **7-1 SCSS pattern** for maintainable and scalable styling

- ⚡ **Dynamic UI Interactions**  
  Built with **Vanilla JavaScript** to manage UI states, animations, and color effects

---

# 🛠 Tech Stack

| Category          | Technology                     |
| ----------------- | ------------------------------ |
| **Structure**     | HTML5 (Semantic Markup)        |
| **Styling**       | SCSS (Sass), CSS Grid, Flexbox |
| **Logic**         | Vanilla JavaScript (ES6+)      |
| **Collaboration** | Git, GitHub, Google Sheets     |

---

# 👥 Team & Workflow

This project was developed by **Team MPG** using a **feature-branch Git workflow** to maintain stability and clean integration.

| Member                   | Primary Responsibilities                                                              |
| ------------------------ | ------------------------------------------------------------------------------------- |
| **Pavle Pritula (Lead)** | Aside sections (Left/Right), Home (v1/v2), Search, Library Grid, Artist & Album pages |
| **Mariam Tchelidze**     | Header, Discover Page (Scrolling sections), Song/Podcast views, Profile page          |
| **Giorgi Kravchenko**    | Player section, Library List view, Album/Playlist logic, Now Playing HTML components  |

📋 **Workflow Documentation:**  
View the detailed **Task Management Sheet** _(add link)_

---

# 📂 Project Structure

We follow a **modular directory architecture** to ensure scalability and maintainability.

```plaintext
project
├── assets
│   ├── img              # Optimized covers and icons
│   └── styles
│       ├── abstracts    # _variables.scss, _mixins.scss
│       ├── base         # _reset.scss, _typography.scss
│       ├── components   # _card.scss, _buttons.scss, _player.scss
│       ├── layout       # _header.scss, _sidebar.scss, _grid.scss
│       └── styles.scss  # Main SCSS entry point
│
├── index.html
└── script.js
```

---

# ✨ Key Features & Technical Implementation

## 1️⃣ Modular SCSS Architecture

The project follows a **Mobile-First approach** with reusable breakpoint mixins.

```scss
@include tablet {
  /* Tablet-specific adjustments */
}

@include laptop {
  /* Desktop 3-column layout */
}
```

Benefits:

- Scalable styling structure
- Easier collaboration
- Cleaner component isolation

---

## 2️⃣ Dynamic Card Stack Effect

To replicate Spotify’s **card stacking UI effect**, we combined **CSS pseudo-elements** with **JavaScript-driven variables**.

**Implementation**

- `::before` and `::after` create depth layers
- JavaScript dynamically extracts **image sources**
- CSS custom properties generate background effects

Result: A **layered visual card stack** similar to Spotify’s UI.

---

## 3️⃣ Responsive Layout Grid

The layout adapts across three major breakpoints.

| Device     | Layout                                   |
| ---------- | ---------------------------------------- |
| 📱 Mobile  | Single-column scrolling layout           |
| 📱 Tablet  | Dual-section layout with floating player |
| 💻 Desktop | Full **3-column architecture**           |

```
Sidebar | Main Content | Activity Feed
```

---

# ⚙️ Setup & Development

## 1️⃣ Installation

Clone the repository:

```bash
git clone https://github.com/pritulapavel/MPG-Exam.git
cd MPG-Exam
```

---

## 2️⃣ Development Workflow

### Create Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### Commit Changes

```bash
git commit -m "feat: add responsive player controls"
```

### Sync Before Push

```bash
git pull origin main
```

This helps prevent **merge conflicts** and keeps the repository stable.

---

# 🔮 Future Roadmap

Planned improvements for future versions:

- [ ] 🎧 Integration with the **Spotify Web API**
- [ ] 🔊 Real-time audio playback using the **Web Audio API**
- [x] 🌙 **Dark / Light mode** theme switcher
- [ ] 🎬 Advanced animations using **Framer Motion or GSAP**

---

# 📜 License & Acknowledgements

**License:**  
This project was created for **educational purposes only**.

**Acknowledgements:**  
UI design inspired by **Spotify**.  
This project is **not affiliated with Spotify AB**.

---

⭐ If you found this project interesting, consider **starring the repository**.
