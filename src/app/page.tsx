import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Tape } from "./components/Tape";
import { Designer } from "./components/Designer";


export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Designer />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
