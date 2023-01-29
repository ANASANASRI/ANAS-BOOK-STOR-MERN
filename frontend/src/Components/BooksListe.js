import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import booksService from "../services/bookService";
import categoryService from "../services/categoryService";
import tablescss from "../assets/table.css";

function BooksListe() {

    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);

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

return (
    <div class="container">
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
                {books.map((elem, i) => {
                    const category = categories.find(category => category._id === elem.category);
                    return (
                        <tr key={elem._id}>
                            <td>{i}</td>
                            <td>{elem.nom}</td>
                            <td>{elem.acteur}</td>
                            <td>{category ? category.name : 'unknown'}</td>
                            <td>
                                <Link to={`/books/${elem._id}`}>More Détail</Link>
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
