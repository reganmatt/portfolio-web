import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CV from "./components/CV";

function Home() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>This is your home page content.</p>
      <div>
        <img className="Selfie" src="/techSelfie0.jpeg" alt="MattRegan" />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CV" element={<CV />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
