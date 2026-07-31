import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Courses } from "./components/Courses";
import { Testimonials } from "./components/Testimonials";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;