import styles from "./art_piece_preview.module.scss";
import { FavoritesButton } from "../../components/FavoriteButton";

const ArtPiecePreview = ({ piece }) => {
  return (
    <div className={styles["c-art-piece-preview"]}>
      <img src={piece.image} alt="Art piece"></img>
      <div className={styles["l-art-heading"]}>
        <div className={styles["c-art-name"] + " body-1"}>{piece.name} </div>
        <FavoritesButton enabled={piece.favorite} />
      </div>
      <div className={styles["c-art-data"] + " caption"}>
        Artist: {piece.artist}
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
