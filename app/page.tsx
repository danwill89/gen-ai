import Card from "./components/card";
import TitleBar from "./components/title-bar";
import LeftMenu from "./components/left-menu";
const JOHN_DOE_AGE = 30;
const JANE_DOE_AGE = 28;
const ALICE_SMITH_AGE = 35;
const BOB_JOHNSON_AGE = 40;
const CHARLIE_BROWN_AGE = 50;
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <TitleBar />
      <div className={styles.pageLayout}>
        <LeftMenu />
        <div className={styles.cardContainer}>
          <Card name="John Doe" age={JOHN_DOE_AGE} />
          <Card name="Jane Doe" age={JANE_DOE_AGE} />
          <Card name="Alice Smith" age={ALICE_SMITH_AGE} />
          <Card name="Bob Johnson" age={BOB_JOHNSON_AGE} />
          <Card name="Charlie Brown" age={CHARLIE_BROWN_AGE} />
        </div>
      </div>
    </>
  );
}