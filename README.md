# 🎵 Spotify UI Layout Clone — MPG Examination Project

A **modern, high-fidelity Spotify-inspired user interface** built with a focus on **scalable architecture, responsive patterns, and professional front-end workflows**.

This project demonstrates the power of **SCSS modular architecture** and **Semantic HTML** within a **collaborative team development environment**.

🔗 **Live Demo:** [Open demo page](https://pritulapavel.github.io/MPG-Exam/)[cite: 10]  
🎨 The design for this project is available on Figma: [Open Design in Figma](https://www.figma.com/design/K0iHmiSiMJuKxr5duOKvIC/CareerPath-Mentoring-task?node-id=1-323&t=35CZZs2a1AoqnHdG-0)[cite: 10]
👩‍💻 The Workflow file for managing tasks and fixes between team members: [Open file in google sheet](https://docs.google.com/spreadsheets/d/1wMH_dYq1dPgVQjJyiAfwWoSGGpkVa_W-45_PLzcczfQ/edit?gid=0#gid=0)[cite: 10]

---

# 🚀 Project Overview

This project is a deep dive into recreating **complex UI patterns used in modern streaming platforms** like Spotify.

### Key Goals

- 📱 **Responsive Multi-View Support**  
  Seamless experience across **Mobile, Tablet, and Desktop** including a **3-column desktop layout**

- 🎨 **Advanced Styling Architecture**  
  Implementation of the **7-1 SCSS pattern** for maintainable and scalable styling[cite: 10]

- ⚡ **Dynamic UI Interactions**  
  Built with **Vanilla JavaScript** to manage UI states, animations, and color effects[cite: 10]

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

This project was developed by **Team MPG** using a **feature-branch Git workflow** to maintain stability and clean integration[cite: 10].

| Member                   | Primary Responsibilities                                                              |
| ------------------------ | ------------------------------------------------------------------------------------- |
| **Pavle Pritula (Lead)** | Aside sections (Left/Right), Home (v1/v2), Search, Library Grid, Artist & Album pages[cite: 10] |
| **Mariam Tchelidze**     | Header, Discover Page (Scrolling sections), Song/Podcast views, Profile page[cite: 10] |
| **Giorgi Kravchenko**    | Player section, Library List view, Album/Playlist logic, Now Playing HTML components[cite: 10] |

---

# 📂 Project Structure

We follow a **modular directory architecture** to ensure scalability and maintainability[cite: 10].

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