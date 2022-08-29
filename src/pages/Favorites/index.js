import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";
import { PageContainer } from "../../components/PageContainer";
import React, { useEffect } from "react";
import { getFavoriteArts } from "../../services/arts";
import { ArtPiecePreview } from "../../components/ArtPiecePreview";

const Favorites = () => {
  const [favorites, setFavorites] = React.useState();

  const loadFavoritePieces = async () => {
    setFavorites(await getFavoriteArts());
  };

  useEffect(() => {
    loadFavoritePieces();
  }, []);

  return (
    <>
      <Topbar />

      <PageContainer>
        <h5 className={styles["c-title"]}>Favorites</h5>

        <div className={styles["c-favorite-pieces"]}>
          {favorites &&
            favorites.map((art) => (
              <ArtPiecePreview key={art.id} piece={art}></ArtPiecePreview>
            ))}
        </div>
      </PageContainer>
    </>
  );
};

export { Favorites };
