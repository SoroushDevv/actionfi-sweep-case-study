import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Comparison from "./components/sections/Comparison.jsx";
import Tasks from "./components/sections/Tasks.jsx";
import Funnel from "./components/sections/Funnel.jsx";
import Results from "./components/sections/Results.jsx";
import Insight from "./components/sections/Insight.jsx";
import Close from "./components/sections/Close.jsx";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/comparison.css";
import "./styles/tasks.css";
import "./styles/funnel.css";
import "./styles/results.css";
import "./styles/insight.css";
import "./styles/close.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Comparison />
        <Tasks />
        <Funnel />
        <Results />
        <Insight />
        <Close />
      </main>
      <Footer />
    </>
  );
}
