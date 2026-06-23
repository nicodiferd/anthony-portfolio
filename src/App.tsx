import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Capabilities } from "@/components/sections/Capabilities";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Projects />
        <Capabilities />
        <Education />
        <Contact />
      </main>
    </>
  );
}
