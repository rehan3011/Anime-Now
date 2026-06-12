# 🎬 AniTrack — Anime Explorer & Tracker

Hey there! This is a web application I built to search, explore, and catalog anime. It’s powered by the open-source **Jikan API** (which connects to MyAnimeList data). 

I built this project to sharpen my React fundamentals and explore clean styling and state management patterns without relying on heavy third-party libraries.

---

## 💡 Why I Built This (Motivation)

When starting this project, my goal was to build a clean, production-like interface while keeping dependencies to a minimum. Instead of installing packages for everything, I wanted to write vanilla implementations to show a deep understanding of core web concepts:
1.  **State Management without Redux**: I used React's built-in **Context API** to handle global state.
2.  **Modern CSS over Tailwind**: I chose pure CSS to build the layout, using CSS grid, flexbox, and custom variables for the dark/light mode engine.
3.  **Real-world API Integration**: Handled standard network states (loading indicators, error handling, empty lists) when fetching data from a public API.

---

## 🌟 Key Features

*   **Top Anime Feed**: On load, the homepage calls the Jikan API to pull down and render the current top-trending anime globally.
*   **Search**: A quick-response search bar allows users to find specific titles.
*   **Favorites & Persistence**: Users can bookmark anime by clicking the heart icon. Favorites are saved in the browser's `localStorage` so they persist even if the tab is closed or refreshed.
*   **Dynamic Theme Toggling**: A navbar button toggles between Light and Dark mode. It honors the user's OS preference (`prefers-color-scheme`) by default and saves their chosen theme selection locally.

---

## 🧠 Architectural & Coding Choices

Here’s a breakdown of how the code is organized and why I structured it this way:

### 1. Separate Contexts for Separate Concerns
Instead of putting all global state in one massive provider, I split them into two modular contexts:
*   [ThemeContext.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/contexts/ThemeContext.jsx): Listens to the system's preferred theme, modifies the HTML `data-theme` attribute, and updates `localStorage`.
*   [AnimeContext.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/contexts/AnimeContext.jsx): Handles the array of favorite anime cards, exposing simple utility methods like `isFavorite()`, `addToFavorites()`, and `removeFromFavorites()`.

### 2. Clean Styling & CSS Variable Theme Engine
In [index.css](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/index.css), I set up colors, shadows, and fonts as custom CSS variables inside `:root`. 
When the theme changes to light, the app updates the `data-theme` attribute on the root document element, triggering the light theme variable overrides.
Every styling detail, from the responsive card grid to the glassmorphic navbar background and smooth button press scale transitions, was written from scratch.

### 3. API Sanitization & Safety
The API calls are decoupled from the UI in [api.js](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/services/api.js). Instead of passing raw, nested API payloads straight to React components, the service sanitizes the data first, returning clean objects with only the properties the UI expects (`id`, `title`, `url`, `date`). 
In [Home.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/pages/Home.jsx), the async requests are wrapped in standard try-catch blocks with discrete loading/error states to ensure a graceful fallback if the public API goes down or hits a rate limit.

---

## 📁 Code Organization

*   **`src/services/`**: Houses [api.js](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/services/api.js) which communicates with Jikan API v4.
*   **`src/contexts/`**: Contains Context Providers for theme and bookmarks management.
*   **`src/components/`**: Modular, reusable UI chunks like [NavBar.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/components/NavBar.jsx) and [AnimeCard.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/components/AnimeCard.jsx).
*   **`src/pages/`**: Higher-level views page views mapping to app routes ([Home.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/pages/Home.jsx) and [Favorites.jsx](file:///c:/Users/rehan/Desktop/react%20practice/frontend/src/pages/Favorites.jsx)).
*   **`src/css/`**: Styled code files keeping component styles isolated.

---

## ⚡ How to Run Locally

To spin up the development environment, navigate into the `frontend` folder and run:

```bash
# Install package dependencies
npm install

# Start the Vite development server
npm run dev
```

The application will launch on `http://localhost:5173/`.

---

## 🔮 What I'd Build Next (Roadmap)

If I were to continue developing this project, these are the features I'd add:
1.  **Detailed Page (`/anime/:id`)**: Introduce routing to individual show pages, fetching trailer links, synopsis, studio credits, and character profiles.
2.  **Debouncing Search Queries**: Introduce custom debouncing to the search input so it searches automatically as you type, but without hitting API limits.
3.  **Pagination/Infinite Scroll**: Jikan returns paginated results, so implementing a "Load More" button or an Intersection Observer would improve discoverability.
