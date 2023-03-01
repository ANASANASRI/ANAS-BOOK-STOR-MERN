import { useState,useEffect } from "react"

import { Link } from "react-router-dom";
import booksService from "../services/bookService";
import categoryService from "../services/categoryService";
import "../assets/table.css";

function BooksListe() {

    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

const getAllBooks = async () => {
    try {
        const result = await booksService.getAllBook();
        setBooks(result.data);
        result.data.forEach(elem => getCategoryById(elem.category));
    } catch (error) {
        console.log(error);
    }
}

const getCategoryById = async (id) => {
    try {
        const result = await categoryService.getCategoryById(id);
        setCategories(prevCategories => [...prevCategories, result.data]);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getAllBooks();
}, []);

useEffect(() => {
    // Filter books based on selected category and search keyword
    let filtered = books;
    if (selectedCategory !== "") {
        filtered = filtered.filter(book => book.category === selectedCategory);
    }
    if (searchKeyword !== "") {
        filtered = filtered.filter(book => book.nom.toLowerCase().includes(searchKeyword.toLowerCase()));
    }
    setFilteredBooks(filtered);
}, [books, selectedCategory, searchKeyword]);

const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
}

const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
}

async function DelBook(id) {
    await booksService.deleteBookById(id);
    getAllBooks()
}

return (
    <div class="container">
        <div>
            <label htmlFor="category">Category:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All</option>
                {categories.map(category => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                ))}
            </select>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" value={searchKeyword} onChange={handleSearchInputChange} />
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Auteur</th>
                    <th>Categorie</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredBooks.map((elem, i) => {
                    const category = categories.find(category => category._id === elem.category);
                    return (
                        <tr key={elem._id}>
                            <td>{i}</td>
                            <td>{elem.nom}</td>
                            <td>{elem.acteur}</td>
                            <td>{category ? category.name : 'unknown'}</td>
                            <td>
                                <button onClick={()=>DelBook(elem._id)}>Supp</button>
                                <Link to={`/Books/edit/${elem._id}`} >Edit</Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)
}

export default BooksListe;
