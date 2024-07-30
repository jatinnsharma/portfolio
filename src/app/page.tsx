import { AboutMe } from "@/components/AboutMe";
import { Articles } from "@/components/Articles";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="custom-container">    
      <Navbar/>
      {/* <HeroSection/> */}
      {/* <AboutMe /> */}
      <Projects />
      {/* <Articles /> */}
      {/* <Footer /> */}
    </main>
  );
}
