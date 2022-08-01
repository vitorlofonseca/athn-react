import styles from "./topbar.module.scss";
import { InputText } from "../../components/InputText";
import { useEffect } from "react";

const MIN_HEIGHT = 170;
const MAX_HEIGHT = 270;

const topBarCanChangeHeight = (topbarSizeAccordingScroll) => {
  return (
    topbarSizeAccordingScroll < MAX_HEIGHT &&
    topbarSizeAccordingScroll > MIN_HEIGHT
  );
};

/** 
 * taking out the MIN_HEIGHT of topbarSizeAccordingScroll, will result
at less 0, and at maximum 100. Dividing it by 100, the result will
be from 0 to 1, what is the proper value to opacity 
*/
const calculateOpacity = (topbarSizeAccordingScroll) => {
  const newOpacity = (topbarSizeAccordingScroll - MIN_HEIGHT) / 100;
  return newOpacity > 0.8 ? 1 : newOpacity;
};

const setTopbarToReducedMode = (
  topbar,
  topbar_background,
  welcoming,
  search_box
) => {
  topbar.style.position = "sticky";
  topbar.style.top = "0";
  topbar_background.style.height = "70px";
  welcoming.style.display = "none";
  search_box.style.display = "none";
};

const setTopbarToVariableMode = (
  topbar,
  topbar_background,
  welcoming,
  search_box
) => {
  topbar.style.position = "unset";
  welcoming.style.display = "block";
  search_box.style.display = "block";
  topbar_background.style.height = "100%";
};

const Topbar = () => {
  useEffect(() => {
    const storeScroll = () => {
      const topbar_background = document.querySelector(
        `.${styles["c-topbar__background"]}`
      );
      const topbar = document.querySelector(`.${styles["c-topbar"]}`);
      const welcoming = document.querySelector(`.${styles["c-welcoming"]}`);
      const search_box = document.querySelector(
        `.${styles["c-wrapper-search-box"]}`
      );

      const topbarSizeAccordingScroll = MAX_HEIGHT - window.scrollY;

      if (topbarSizeAccordingScroll < MIN_HEIGHT) {
        setTopbarToReducedMode(
          topbar,
          topbar_background,
          welcoming,
          search_box
        );
      } else {
        setTopbarToVariableMode(
          topbar,
          topbar_background,
          welcoming,
          search_box
        );
      }

      if (topBarCanChangeHeight(topbarSizeAccordingScroll)) {
        topbar.style.height = topbarSizeAccordingScroll + "px";

        const newOpacity = calculateOpacity(topbarSizeAccordingScroll);
        welcoming.style.opacity = newOpacity;
        search_box.style.opacity = newOpacity;
      }
    };

    document.addEventListener("scroll", storeScroll);
  }, []);

  return (
    <div className={styles["c-topbar"]}>
      <div className={styles["c-topbar__background"]}>
        <h1 className={styles["c-athn-title"]}>athn</h1>
        <div className={styles["c-welcoming"]}>
          <h3 className="body-1">Hello Carolyn</h3>
          <h6>Let's find masterpiece art?</h6>
        </div>
        <div className={styles["c-wrapper-search-box"]}>
          <InputText
            placeholder="Type to search"
            icon="magnifier"
            className={styles["c-search-box"]}
            type="text"
          ></InputText>
        </div>
      </div>
    </div>
  );
};

export { Topbar };
