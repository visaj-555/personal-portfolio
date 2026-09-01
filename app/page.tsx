import { Hero } from "@/sections/Hero";
import { Credibility } from "@/sections/Credibility";
import { About } from "@/sections/About";
import { Expertise } from "@/sections/Expertise";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Philosophy } from "@/sections/Philosophy";
import { Exploring } from "@/sections/Exploring";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Credibility />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Philosophy />
      <Exploring />
      <Education />
      <Contact />
    </>
  );
}
