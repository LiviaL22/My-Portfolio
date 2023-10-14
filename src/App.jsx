import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/home/home';
import Footer from './components/footer/footer';

function App() {
 

  return (
    <>
     <BrowserRouter>
     <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
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