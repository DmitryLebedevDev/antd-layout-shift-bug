import HomeClient from "./pageClient";

export default async function Home() {
  await new Promise((ok) => {
    setTimeout(ok, 1000)
  })

  return (
    <HomeClient/>
  );
}
