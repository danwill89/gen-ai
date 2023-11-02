import Card from "./components/card";

export default function Home() {
  return (
    <>
      <Card name="John Doe" age={30} />
      <Card name="Jane Doe" age={28} />
      <Card name="Alice Smith" age={35} />
      <Card name="Bob Johnson" age={40} />
      <Card name="Charlie Brown" age={50} />
    </>
  );
}
