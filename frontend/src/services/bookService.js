import http from "./http-common";

async function getAllBook(){
    return await http.get(`/books`);
}

async function getBookById(id){
    return await http.get(`/books/${id}`);
}

async function deleteBookById(id){
    return await http.delete(`/books/${id}`);
}

async function addBook(book){
    return await http.post(`/books`,book);
}
async function updateBook(book){
    return await http.put(`/books/${book._id}`,book);
}


const bookService = {
getAllBook,
getBookById,
deleteBookById,
addBook,
updateBook
}

export default bookService


