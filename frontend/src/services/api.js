const BASE_URL = "https://api.jikan.moe/v4";

export const getTopAnime = async () => {
    const response = await fetch(`${BASE_URL}/top/anime`);
    const data = await response.json();
    return data.data.map(anime => ({
        id: anime.mal_id,
        title: anime.title,
        url: anime.images?.jpg?.image_url,
        date: anime.aired?.prop?.from?.year || anime.year || "N/A"
    }));
}

export const searchAnime = async (query) => {
    const response = await fetch(`${BASE_URL}/anime?q=${encodeURIComponent(query)}&limit=10`);
    const data = await response.json();
    return data.data.map(anime => ({
        id: anime.mal_id,
        title: anime.title,
        url: anime.images?.jpg?.image_url,
        date: anime.aired?.prop?.from?.year || anime.year || "N/A"
    }));
}
