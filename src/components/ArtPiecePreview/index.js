import styles from "./art_piece_preview.module.scss";

const ArtPiecePreview = () => {
  return (
    <div className={styles["c-art-piece-preview"]}>
      <img
        src="https://www.artnews.com/wp-content/uploads/2021/02/SK-C-5.jpg?w=1200"
        alt="Art piece"
      ></img>
      <div className={styles["c-art-name"]}>
        <span className="body-1">The night watch </span>
        <span className="caption">by Rembrandt</span>
      </div>
      <div className={styles["c-art-data"] + " caption"}>Date: 1642</div>
      <div className={styles["c-art-data"] + " caption"}>
        Dimensions: 363cm × 437cm
      </div>
      <div className={styles["c-art-data"] + " caption"}>
        From Rijksmuseum, Netherlands
      </div>
    </div>
  );
};

export { ArtPiecePreview };
