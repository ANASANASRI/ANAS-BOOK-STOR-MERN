import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import booksService from "../services/bookService";
import categoryService from "../services/categoryService";
import "../assets/formcss.css";

function AddBookForm() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [acteur, setActeur] = useState("");
  const [editeur, setEditeur] = useState("");
  const [date_edition, setDateEdition] = useState("");
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const fetchedCategories = await categoryService.getAllCategories([]);
        setCategories(prevCategories => [...prevCategories, fetchedCategories.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategories();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const book = {
      nom: nom,
      description: description,
      isbn: isbn,
      acteur: acteur,
      editeur: editeur,
      date_edition: date_edition,
      category: category
    };
    booksService.addBook(book);
    navigate("/books");
  }

    function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form onSubmit={handleSubmit} className="formbold-form">
          <div className="formbold-mb-5">
            <label htmlFor="nom" className="formbold-form-label">
              Titre
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              placeholder="Enter le titre"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="description" className="formbold-form-label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter la description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="formbold-form-input"
            ></textarea>
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="isbn" className="formbold-form-label">
              ISBN
            </label>
            <input
              type="text"
              name="isbn"
              id="isbn"
              placeholder="Enter ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="acteur" className="formbold-form-label">
              Acteur
            </label>
            <input
              type="text"
              name="acteur"
              id="acteur"
              placeholder="Enter acteur nom"
              value={acteur}
              onChange={(e) => setActeur(e.target.value)}
              className="formbold-form-input"
            />
          </div>

          <div className="formbold-mb-5">
            <label htmlFor="acteur" className="formbold-form-label">
              Editeur
            </label>
            <input
              type="text"
              name="editeur"
              id="editeur"
              placeholder="Enter editeur nom"
              value={editeur}
              onChange={(e) => setEditeur(e.target.value)}
              className="formbold-form-input"
            />
          </div>

          <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5">
              <label htmlFor="dateEdition" className="formbold-form-label">
                Date Edition
              </label>
              <input
                type="date"
                name="dateEdition"
                id="dateEdition"
                className="formbold-form-input"
                value={date_edition}
                onChange={(e) => setDateEdition(e.target.value)}
              />
            </div>
          </div>

            <div class="w-full sm:w-half formbold-px-3">
              <div class="formbold-mb-5">
                <label for="category" class="formbold-form-label">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  class="formbold-form-input"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                ))}
                </select>
              </div>
            </div>          
          
      <div>
        <button class="formbold-btn">Submit</button>
      </div>

    </form>
  </div>
</div>
        );
}
export default AddBookForm
