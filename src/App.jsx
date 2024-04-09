import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./page/home/home";
import Footer from "./components/footer/footer";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import HeaderBar from "./components/headerBar/headerbar";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ darkMode }) => (darkMode ? "#000" : "#fac7f6")};
    font-family: Comic Sans MS, sans-serif;
    color: ${({ darkMode }) => (darkMode ? "#fac7f6" : "#783C8E")};
  
  
  }
`;
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <HeaderBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <GlobalStyle darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
 const [count, setCount] = useState(0)
  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
*/
