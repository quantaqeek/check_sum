import Experience from "@/components/landingpage/Experience";
import Hero from "@/components/landingpage/Hero";
import Inspiration from "@/components/landingpage/Inspiration";
import Intro from "@/components/landingpage/Intro";
import Motivation from "@/components/landingpage/Motivation";
import Projects from "@/components/landingpage/Projects";
import Showcase from "@/components/landingpage/Showcase";


export default function Home() {
  return (
    <div className="flex flex-col w-full items-center min-h-screen font-roboto">
      <main className="flex flex-col w-full">
        <Hero/>
        <Intro/>
        <Projects/>
        <Showcase/>
        <Experience/>
        <Motivation/>
        <Inspiration/>
      </main>
  
    </div>
  );
}
