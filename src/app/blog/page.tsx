import BlogHero from "@/components/e-blog/hero";
import BlogHighlights from "@/components/e-blog/highlights";
import BlogIntro from "@/components/e-blog/Intro";
import React from "react";
import { Metadata } from "next";
import BlogCategories from "@/components/e-blog/BlogCategories";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read our latest blog posts",
};

const Blog = () => {
  return (
    <div
      className="flex overflow-clip flex-col w-full items-center min-h-screen font-roboto

  // Light Theme Styles (Default)
  bg-gradient-to-b from-[#E8E8E8] to-white 
  text-primary-dark 
  dark:from-[#00160E] dark:to-black 
  dark:text-white
"
    >
      <BlogHero />
      <BlogHighlights />
      <BlogIntro />
      <BlogCategories/>
    </div>
  );
};

export default Blog;
