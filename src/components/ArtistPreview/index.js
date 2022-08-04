import styles from "./artist_preview.module.scss";

const ArtistPreview = ({ artist }) => {
  return (
    <div className={styles["c-artist-preview"]}>
      <img src={artist.image} alt="Art piece"></img>
      <div className={styles["c-artist-preview__name"]}>
        <span className="body-1">{artist.name} </span>
      </div>
    </div>
  );
};

export { ArtistPreview };
