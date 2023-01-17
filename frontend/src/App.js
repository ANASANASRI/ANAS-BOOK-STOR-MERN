import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
