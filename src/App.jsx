import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen overflow-hidden transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-black `}
      >
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <div className="relative">
          <p className="absolute bottom-9 w-full text-center text-[#3259a2]">
            Made with 💚 by Carl Ularte
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
