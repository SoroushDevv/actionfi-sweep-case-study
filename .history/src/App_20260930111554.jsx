import Header from "./components/layout/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import Comparison from "./components/sections/Comparison.jsx";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/comparison.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Comparison />
      </main>
    </>
  );
}