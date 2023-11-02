import Card from "./components/card";
import TitleBar from "./components/title-bar";
export default function Home({ LeftMenu, styles }) {
  return (
    <>
      <TitleBar />
      <div className={styles.pageLayout}>
        <LeftMenu />
        <div className={styles.cardContainer}>
          <Card name="John Doe" age={30} />
          <Card name="Jane Doe" age={28} />
          <Card name="Alice Smith" age={35} />
          <Card name="Bob Johnson" age={40} />
          <Card name="Charlie Brown" age={50} />
        </div>
      </div>
    </>
  );
}