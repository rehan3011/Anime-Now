import { createContext, useContext, useState, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const localData = localStorage.getItem("anime-favorites");
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem("anime-favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (anime) => {
        setFavorites(prev => {
            // Avoid duplicates
            if (prev.some(item => item.id === anime.id)) return prev;
            return [...prev, anime];
        });
    };

    const removeFromFavorites = (animeId) => {
        setFavorites(prev => prev.filter(anime => anime.id !== animeId));
    };

    const isFavorite = (animeId) => {
        return favorites.some(anime => anime.id === animeId);
    };

    return (
        <AnimeContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </AnimeContext.Provider>
    );
};
