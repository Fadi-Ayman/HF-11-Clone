import { Metadata } from "next";
import HomeClient from "./_sections/HomeClient";

export const metadata: Metadata = {
  title: "Home",
};

function Home() {
  return <HomeClient />
}

export default Home;
