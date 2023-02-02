import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import BooksListe from './Components/BooksListe';
import AddBookForm from './Components/AddBookForm';
import DetailBook from './Components/DetailBook';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/books' element={<BooksListe/>}/>
      <Route path='/add' element={<AddBookForm/>}/>
      <Route path='/books/:id' element={<DetailBook/>}/>
    </Routes>
    </>
  );
}

export default App;
