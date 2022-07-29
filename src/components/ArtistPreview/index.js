import styles from "./artist_preview.module.scss";

const ArtistPreview = () => {
  return (
    <div className={styles["c-artist-preview"]}>
      <img
        src="https://cartanaescola.com.br/wp-content/uploads/2019/07/Biografia-de-Romero-Britto-3.jpg"
        alt="Art piece"
      ></img>
      <div className={styles["c-artist-preview__name"]}>
        <span className="body-1">Romero Britto </span>
      </div>
    </div>
  );
};

export { ArtistPreview };
