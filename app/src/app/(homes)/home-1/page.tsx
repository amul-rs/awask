import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "Awask | Digital Marketing, SEO & Web Development Agency",
  description: "Awask is a premier digital marketing agency specializing in SEO, high-performance web development, and AI-driven automation solutions to scale your business.",
  keywords: ["Digital Marketing", "SEO Agency", "Web Development", "Next.js Development", "Business Automation", "AI Solutions"],
};


const Home = () => {
  return (
    <HomeMain />
  );
};

export default Home;
