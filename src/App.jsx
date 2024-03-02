import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./page/home/home";
import Footer from "./components/footer/footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#783C8E;
    font-family: Comic Sans MS, sans-serif;
    color: #fac7f6;
  
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

/*
 const [count, setCount] = useState(0)
  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
*/
