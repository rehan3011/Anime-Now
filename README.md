# <p align="center">🎬 AniTrack - Modern Anime Explorer & Tracker 🎬</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8.0" />
  <img src="https://img.shields.io/badge/React_Router-7.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router 7" />
  <img src="https://img.shields.io/badge/Jikan_API-v4-2E51A2?style=for-the-badge&logo=myanimelist&logoColor=white" alt="Jikan API" />
</p>

> [!NOTE]
> **This application is designed with modular React Contexts and a pure CSS theme engine.** 
> It leverages public API endpoints to present real-time anime search databases and offers full local persistence without requiring complex backend database setups.

---

## 📸 Interface Preview

<p align="center">
  <br>
  <i>Ambient Light/Dark Mode Switcher & Responsive Poster Cards Grid</i>
</p>

---

## 🌌 Overview

Hey there! **AniTrack** is a web application built to search, explore, and catalog anime. It is powered by the open-source **Jikan API** (which connects to MyAnimeList database logs). 

I built this project to sharpen my React fundamentals and explore clean styling and state management patterns without relying on heavy third-party libraries.

---

## 💡 Why I Built This (Motivation)

When starting this project, my goal was to build a clean, production-like interface while keeping dependencies to a minimum. Instead of installing packages for everything, I wanted to write vanilla implementations to show a deep understanding of core web concepts:
1.  **State Management without Redux**: I used React's built-in **Context API** to handle global state.
2.  **Modern CSS over Tailwind**: I chose pure CSS to build the layout, using CSS grid, flexbox, and custom variables for the dark/light mode engine.
3.  **Real-world API Integration**: Handled standard network states (loading indicators, error handling, empty lists) when fetching data from a public API.

---

## 🏗️ Architectural Blueprint

The codebase follows a modular organization designed to separate state logic, style properties, and presentation components:

```text
react-practice/
├── README.md               # 📖 Workspace Documentation
├── frontend/
│   ├── public/             # 📂 Favicon & Static Assets
│   ├── src/
│   │   ├── components/     # 🧱 UI Building Blocks
│   │   │   ├── AnimeCard.jsx # Card Layout & Bookmark Toggler
│   │   │   └── NavBar.jsx    # Responsive Header & Theme Switcher
│   │   ├── contexts/       # 🌐 Global State Contexts
│   │   │   ├── AnimeContext.jsx # Bookmarks & localStorage sync
│   │   │   └── ThemeContext.jsx # Color themes & system sync
│   │   ├── css/            # 🎨 Stylesheet isolation
│   │   │   ├── AnimeCard.css
│   │   │   ├── App.css
│   │   │   ├── Favorites.css
│   │   │   ├── Home.css
│   │   │   └── NavBar.css
│   │   ├── pages/          # 🖼️ Application Views (Pages)
│   │   │   ├── Favorites.jsx # Curated bookmarks list
│   │   │   └── Home.jsx      # Discover Trending Feed & Search Page
│   │   ├── services/       # 📡 API Connectors
│   │   │   └── api.js        # Decoupled Jikan API wrapper
│   │   ├── App.jsx         # ⚛️ Root Component & Route Map
│   │   ├── index.css       # 🖌️ Design System & CSS Variables
│   │   └── main.jsx        # ⚙️ App Entry Point
│   ├── package.json        # ⚙️ Node scripts & dependencies
│   └── vite.config.js      # ⚡ Vite Build configuration
```

---

## 🌟 Key Features

### 📡 Real-time Top Anime Feed
- **Global Trends:** On load, the homepage calls the Jikan API to pull down and render the current top-trending anime globally.
- **Search System:** A quick-response search bar allows users to find specific titles.

### ❤️ Favorites & Persistence
- **Curated Lists:** Users can bookmark anime by clicking the heart icon. 
- **Local Syncing:** Favorites are saved in the browser's `localStorage` so they persist even if the tab is closed or refreshed.

### 🌗 Dynamic Theme Toggling
- **System Preference Detection:** A navbar button toggles between Light and Dark mode, honoring the user's OS preference (`prefers-color-scheme`) by default.
- **Custom CSS Variables:** Transition animations smoothly shift backgrounds and text colors on theme changes.

---

## 🧠 Engineering & Design Decisions

### 1. Separate Contexts for Separate Concerns
Instead of putting all global state in one massive provider, I split them into two modular contexts:
*   [ThemeContext.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/contexts/ThemeContext.jsx): Listens to the system's preferred theme, modifies the HTML `data-theme` attribute, and updates `localStorage`.
*   [AnimeContext.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/contexts/AnimeContext.jsx): Handles the array of favorite anime cards, exposing simple utility methods like `isFavorite()`, `addToFavorites()`, and `removeFromFavorites()`.

### 2. Clean Styling & CSS Variable Theme Engine
In [index.css](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/index.css), I set up colors, shadows, and fonts as custom CSS variables inside `:root`. When the theme changes, the app updates the `data-theme` attribute on the root document element, triggering the light theme variable overrides. Every styling detail, from the responsive card grid to the glassmorphic navbar background and smooth button press scale transitions, was written from scratch.

### 3. API Sanitization & Safety
The API calls are decoupled from the UI in [api.js](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/services/api.js). Instead of passing raw, nested API payloads straight to React components, the service sanitizes the data first, returning clean objects with only the properties the UI expects (`id`, `title`, `url`, `date`). Async requests in [Home.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/pages/Home.jsx) are wrapped in try-catch blocks with loading/error states to handle network limits gracefully.

---

## 📜 Development Scripts

Run these scripts inside the `frontend` directory:

| Command | Description |
| :--- | :--- |
| `npm install` | Installs package dependencies. |
| `npm run dev` | Starts the Vite development server locally on `http://localhost:5173`. |

---

## 📡 API Reference & Mapping

The application consumes the open-source **Jikan API (v4)**:

| Action | Endpoint | Purpose |
| :--- | :--- | :--- |
| **Top Anime** | `GET https://api.jikan.moe/v4/top/anime` | Fetches trending global listing on load. |
| **Search** | `GET https://api.jikan.moe/v4/anime?q={query}&limit=10` | Runs queries dynamically up to 10 entries. |

---

## 🗺️ Future Roadmap

- [ ] **Detailed Page (`/anime/:id`):** Sub-routing to display character sheets, staff lists, and embedded video trailers.
- [ ] **Fuzzy Search & Debouncing:** Add search delays to prevent hitting API rate limits while the user types.
- [ ] **Infinite Scroll:** Implement Intersection Observer to automatically fetch and load more pages as you scroll.
- [ ] **Database Integration:** Move listings from local storage to a Firebase or Node backend for user accounts sync.

---

