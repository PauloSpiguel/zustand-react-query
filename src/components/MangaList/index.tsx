import { useState } from "react";
import { RiStarLine, RiStarFill } from "react-icons/ri";

import Loading from "components/Loading";
import useFetchTopMangas from "services/api/useFetchTopMangas";
import { useFavoriteMangas } from "store/useFavoriteMangas";

import { FavoriteButton, MangaContainer, MangaWrapper } from "./styles";
import { useCallback } from "react";

export default function MangaList() {
  const [showOnlyFavorite, setShowOnlyFavorite] = useState(false);

  const { data, isLoading } = useFetchTopMangas();
  const { favorites, toggleFavorite } = useFavoriteMangas();

  const toggleShowFavorites = useCallback(() => {
    setShowOnlyFavorite(!showOnlyFavorite);
  }, [showOnlyFavorite]);

  return (
    <MangaWrapper>
      <button onClick={toggleShowFavorites}>
        {showOnlyFavorite ? (
          <span>Show all mangas</span>
        ) : (
          <span>Show only favorites mangas</span>
        )}
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <MangaContainer>
          {data?.top
            .filter(
              (manga) => !showOnlyFavorite || favorites.includes(manga.mal_id)
            )
            .map((manga) => (
              <li key={manga.mal_id}>
                <img src={manga.image_url} alt={manga.title} />
                <div>
                  <span>{manga.title}</span>
                  <FavoriteButton onClick={() => toggleFavorite(manga.mal_id)}>
                    {favorites.includes(manga.mal_id) ? (
                      <RiStarFill />
                    ) : (
                      <RiStarLine />
                    )}
                  </FavoriteButton>
                </div>
              </li>
            ))}
        </MangaContainer>
      )}
    </MangaWrapper>
  );
}
