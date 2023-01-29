import { useParams } from "react-router-dom";
import { useState,useEffect } from "react"
import bookService from "../services/bookService";
import detailbookCss from "../assets/detailbookCss.css";
import categoryService from "../services/categoryService";

function Detailbook() {
    const [book, setBook] = useState({});
    const [categories, setCategories] = useState([]);

    const { id } = useParams();

    const getBookById = async () => {
        try {
            const result = await bookService.getBookById(id);
            setBook(result.data);
            getCategoryById(result.data.category);
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
        getBookById();
    }, [id]);
                    
    const category = categories.find(category => category._id === book.category);

    if (!book) return null;
    return (
        <div className="flip-card-container">
            <div className="flip-card">
                <div className="card-front">
                    <figure>
                        <div className="img-bg"></div>
                        <img src={book.image} alt={book.nom} />
                        <figcaption>{book.nom}</figcaption>
                    </figure>
                    <ul className="ull">
                        <li className="lii">DESCRIPTION:<br/>{book.description}</li>
                        <li className="lii">ISBN:<br/>{book.isbn}</li>
                        <li className="lii">ACTEUR:<br/>{book.acteur}</li>
                        <li className="lii">EDITEUR:<br/>{book.editeur}</li>
                        <li className="lii">DATE EDITION:<br/>{book.date_edition}</li>
                        <li className="lii">CATEGORIE:<br/>{category ? category.name : ""}</li>
                    </ul>
                </div>
                <div className="card-back">
                    <figure>
                        <div className="img-bg"></div>
                        <img src={book.image} alt={book.nom} />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Detailbook;