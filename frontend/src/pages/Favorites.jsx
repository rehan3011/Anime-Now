import "../css/Favorites.css";
import { useAnimeContext } from "../contexts/AnimeContext.jsx";
import AnimeCard from "../components/AnimeCard.jsx";


function Favorites() {
    const { favorites } = useAnimeContext();

    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorite Anime</h2>
                <div className="anime-grid">
                    {favorites.map((anime) => (
                        <AnimeCard anime={anime} key={anime.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Anime Yet!</h2>
            <p>Start adding anime to your favorites and they will appear here...</p>
        </div>
    );
}

export default Favorites;