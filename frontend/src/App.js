import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Header from './Components/Header';
import BooksListe from './Components/BooksListe';
import AddBookForm from './Components/AddBookForm';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<BooksListe/>}/>
      <Route path='/add' element={<AddBookForm/>}/>
    </Routes>
    </>
  );
}

export default App;
