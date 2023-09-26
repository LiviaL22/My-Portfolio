import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/home/home';
import Portfolio from './page/portfolio/portfolio';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
 

  return (
    <>
     <BrowserRouter>
     <div>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
     </Routes>
     <Footer/>
     </div>
     </BrowserRouter>
    </>
  )
}

export default App;


/*
 const [count, setCount] = useState(0)
  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
*/ 