import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";

export const metadata: Metadata = {
  title: "Awask | Digital Marketing, SEO & Web Development Agency",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
