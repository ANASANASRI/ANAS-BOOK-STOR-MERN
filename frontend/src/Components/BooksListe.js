import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import booksService from "../services/bookService";
import tablescss from "../assets/table.css";

function BooksListe() {

    const [books,setBooks]=useState([]);

    const getAllBooks =async () =>{

        try {
            const result =await booksService.getAllBook()
            setBooks(result.data)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getAllBooks()
    },[]);

    return(
<div class="container">
	<table>
		<thead>
			<tr>
				<th>Id</th>
				<th>Nom</th>
				<th>Auteur</th>
				<th>Date Edition</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>

            {books.map((elem,i)=>{
                    return <tr key={i} >
                        <td>{i}</td>
                        <td>{elem.nom}</td>
                        <td>{elem.acteur}</td>
                        <td>{elem.date_edition}</td>
                        <td><Link to={`/books/${elem._id}`} >More Détail</Link></td>
                    </tr>
                })}

		</tbody>
	</table>
</div>
    )}

export default BooksListe;
