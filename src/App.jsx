import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Courses } from "./components/Courses";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;