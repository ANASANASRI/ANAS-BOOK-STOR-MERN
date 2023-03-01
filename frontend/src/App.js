import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import BooksListe from './Components/BooksListe';
import AdmBooksList from './Components/AdmBooksList';
import AddBookForm from './Components/AddBookForm';
import DetailBook from './Components/DetailBook';
import EditeBook from './Components/EditeBook';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/books' element={<BooksListe/>}/>
      <Route path='/books/:id' element={<DetailBook/>}/>

      <Route path='/addBook' element={<AddBookForm/>}/>
      <Route path='/books/edit/:id' element={<EditeBook/>}/>
      <Route path='/adm' element={<AdmBooksList/>}/>

    </Routes>
    </>
  );
}

export default App;
