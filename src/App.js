import React, {useEffect} from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
      setTimeout(() => {
          navigate("/");
      }, 3000)
  }, [])

  return (
      <>
        <Header />
        <Routes>
            <Route path="*" element={<h1>Not Found</h1>}  />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<h1>Логин форма</h1>} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
