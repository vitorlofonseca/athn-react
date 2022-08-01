import React from "react";
import styles from "./home.module.scss";
import { ArtPiecePreview } from "../../components/ArtPiecePreview";
import { ArtistPreview } from "../../components/ArtistPreview";
import { Topbar } from "../../components/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar></Topbar>

      <div className={styles["l-page"]}>
        <div className={styles["l-curation-section"]}>
          <h5>Our curation for you</h5>

          <div className={styles["l-curation-pieces"]}>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
          </div>
        </div>

        <div className={styles["l-best-seller-artists-section"]}>
          <h5>Best-seller artists</h5>

          <div className={styles["l-best-seller-artists"]}>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
            <ArtistPreview></ArtistPreview>
          </div>
        </div>

        <div className={styles["l-best-auctions-section"]}>
          <h5>Auctions</h5>

          <div className={styles["l-best-auctions-pieces"]}>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
            <ArtPiecePreview></ArtPiecePreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
