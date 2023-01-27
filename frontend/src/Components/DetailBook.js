import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bookService from "../services/bookService";
import detailbookCss from "../assets/detailbookCss.css";

function Detailbook() {
    const [book, setBook] = useState({});
    const { id } = useParams();

    const getBookById = async () => {
        try {
            const result = await bookService.getBookById(id);
            setBook(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBookById();
    }, [id]);

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
                        <li className="lii">{book.description}</li>
                        <li className="lii">{book.isbn}</li>
                        <li className="lii">{book.acteur}</li>
                        <li className="lii">{book.editeur}</li>
                        <li className="lii">{book.date_edition}</li>
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
