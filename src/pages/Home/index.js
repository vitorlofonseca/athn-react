import React, { useEffect } from "react";
import styles from "./home.module.scss";
import { ArtPiecePreview } from "../../components/ArtPiecePreview";
import { ArtistPreview } from "../../components/ArtistPreview";
import { Topbar } from "../../components/Topbar";
import { getCuratedArts, getAuctions } from "../../services/arts";
import { getBestSellers } from "../../services/artists";

const Home = () => {
  const [curatedArts, setCuratedArts] = React.useState([]);
  const [auctions, setAuctions] = React.useState([]);
  const [bestSellerArtists, setBestSellerArtists] = React.useState([]);

  const loadCuratedArts = async () => {
    setCuratedArts(await getCuratedArts());
  };

  const loadAuctions = async () => {
    setAuctions(await getAuctions());
  };

  const loadBestSellerArtists = async () => {
    setBestSellerArtists(await getBestSellers());
  };

  useEffect(() => {
    loadCuratedArts();
    loadAuctions();
    loadBestSellerArtists();
  }, []);

  return (
    <div>
      <Topbar></Topbar>

      <div className={styles["l-page"]}>
        <div className={styles["l-curation-section"]}>
          <h5>Our curation for you</h5>

          <div className={styles["l-curation-pieces"]}>
            {curatedArts.map((art) => (
              <ArtPiecePreview key={art.id} piece={art}></ArtPiecePreview>
            ))}
          </div>
        </div>

        <div className={styles["l-best-seller-artists-section"]}>
          <h5>Best-seller artists</h5>

          <div className={styles["l-best-seller-artists"]}>
            {bestSellerArtists.map((artist) => (
              <ArtistPreview key={artist.id} artist={artist}></ArtistPreview>
            ))}
          </div>
        </div>

        <div className={styles["l-best-auctions-section"]}>
          <h5>Auctions</h5>

          <div className={styles["l-best-auctions-pieces"]}>
            {auctions.map((art) => (
              <ArtPiecePreview key={art.id} piece={art}></ArtPiecePreview>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
