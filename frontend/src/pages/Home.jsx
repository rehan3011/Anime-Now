import AnimeCard from "../components/AnimeCard.jsx";
import { useEffect, useState } from "react";
import "../css/Home.css"
import { searchAnime, getTopAnime } from "../services/api.js";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [animes, setAnimes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTopAnime = async () => {
            try {
                const topAnime = await getTopAnime()
                setAnimes(topAnime)
            } catch (err) {
                setError("Failed to load top anime")
            }
            finally {
                setLoading(false)
            }
        }

        loadTopAnime();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResults = await searchAnime(searchQuery);
            setAnimes(searchResults);
            setError(null);
        } catch (err) {
            console.error(err);
            setError("Failed to search anime...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    placeholder="Search For Anime"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="anime-grid">
                    {animes.map(
                        (anime) => (
                            <AnimeCard anime={anime} key={anime.id} />
                        )
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;