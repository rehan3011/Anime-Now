import "../css/AnimeCard.css";
import { useAnimeContext } from "../contexts/AnimeContext.jsx";


function AnimeCard({ anime }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useAnimeContext();
    const favorite = isFavorite(anime.id);

    const onFavoriteClick = (e) => {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(anime.id);
        } else {
            addToFavorites(anime);
        }
    };

    return (
        <div className="anime-card">
            <div className="anime-poster">
                <img src={anime.url} alt={anime.title} />
                <div className="anime-overlay">
                    <button 
                        className={`favorite-btn ${favorite ? "active" : ""}`} 
                        onClick={onFavoriteClick}
                        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {favorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            <div className="anime-info">
                <h3>{anime.title}</h3>
                <p>{anime.date}</p>
            </div>
        </div>
    );
}

export default AnimeCard;