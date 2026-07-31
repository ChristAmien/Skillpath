import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Benefits />
      </main>
    </div>
  );
}

export default App;