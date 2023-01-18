import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import booksService from "../services/booksService";
import tablescss from "../assets/table.css";

function BooksListe() {

    const [books,setBooks]=useState([]);

    const getAllBooks =async () =>{

        try {
            const result =await booksService.getAllBooks()
            setBooks(result.data)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getAllBooks()
    },[]);


async function DelBooks(id) {
    await booksService.deleteBooksById(id);
    getAllBooks()
}

    return(
<div class="container">
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>TITLE</th>
				<th>writer</th>
				<th>Published</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
			<tr>
				<td>Cell 1</td>
				<td>Cell 2</td>
				<td>Cell 3</td>
				<td>Cell 4</td>
				<td>Cell 5</td>
			</tr>
		</tbody>
	</table>
</div>
    )}

export default BooksListe;




{/* <thead>
			<tr>
				<th>ID</th>
				<th>TITLE</th>
				<th>writer</th>
				<th>Published</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>

            {books.map((elem,i)=>{
                    return <tr key={i} >
                        <td>{i}</td>
                        <td>{elem.fname}</td>
                        <td>{elem.lname}</td>
                        <td>{elem.email}</td>
                        <td>
                            <button onClick={()=>DelBooks(elem._id)}>Supp</button>
                            <Link to={`/books/${elem._id}`} >Edit</Link>
                            </td>
                    </tr>
                })}

		</tbody> */}