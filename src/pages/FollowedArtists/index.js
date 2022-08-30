import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";
import { PageContainer } from "../../components/PageContainer";
import React, { useEffect } from "react";
import { getFollowedArtists } from "../../services/artists";
import { ArtistPreview } from "../../components/ArtistPreview";
import { Button } from "../../components/Button";

const FollowedArtists = () => {
  const [followedArtists, setFollowedArtists] = React.useState();

  const loadFollowedArtists = async () => {
    setFollowedArtists(await getFollowedArtists());
  };

  useEffect(() => {
    loadFollowedArtists();
  }, []);

  return (
    <>
      <Topbar />

      <PageContainer>
        <h5 className={styles["c-title"]}>Followed Artists</h5>

        <div className={styles["c-followed-artists"]}>
          {followedArtists &&
            followedArtists.map((artist) => (
              <ArtistPreview key={artist.id} artist={artist} />
            ))}
        </div>

        <Button
          type="primary"
          className={styles["c-search-more-artists"]}
          onClick={() => {}}
        >
          Search for more artists
        </Button>
      </PageContainer>
    </>
  );
};

export { FollowedArtists };
