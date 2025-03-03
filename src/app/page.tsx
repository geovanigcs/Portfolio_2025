import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Tape } from "./components/Tape";
import { Testimonials } from "./components/Testimonials";


export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
    </div>
  );
}
