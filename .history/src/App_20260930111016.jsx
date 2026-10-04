import Header from "./components/layout/Header.jsx";
import Hero from "./components/sections/Hero.jsx";
import "./styles/header.css";
import "./styles/hero.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
