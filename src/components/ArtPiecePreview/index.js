import styles from "./art_piece_preview.module.scss";

const ArtPiecePreview = ({ piece }) => {
  return (
    <div className={styles["c-art-piece-preview"]}>
      <img src={piece.image} alt="Art piece"></img>
      <div className={styles["c-art-creation"]}>
        <div className={styles["c-art-name"] + " body-1"}>{piece.name} </div>
        <div className={styles["c-art-artist"] + " caption"}>
          &nbsp;by {piece.artist}
        </div>
      </div>
      <div className={styles["c-art-data"] + " caption"}>
        Date: {piece.year}
      </div>
      <div className={styles["c-art-data"] + " caption"}>
        Dimensions: {piece.height} × {piece.width}
      </div>
      <div className={styles["c-art-data"] + " caption"}>
        From {piece.city}, {piece.country}
      </div>
    </div>
  );
};

export { ArtPiecePreview };
