import {useNavigate} from "react-router-dom";
import {useState} from "react";
import booksService from "../services/booksService";
import formcss from "../assets/formcss.css"


function AddBookForm(){
    const [fnom,setFNom] = useState("")
    const [lnom,setLNom] = useState("")
    const [email,setEmail] = useState("")
const navigate=useNavigate

function submitbook(e) {
    const b={"fname":fnom,"lname":lnom,"email":email}
    booksService.addBook(b)
    navigate("/books")
}


    return(
             <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="flex flex-wrap formbold--mx-3">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="title" class="formbold-form-label"> Title </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              class="formbold-form-input"
            />
          </div>
        </div>
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="lName" class="formbold-form-label"> Last Name </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              class="formbold-form-input"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap formbold--mx-3 dated">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5 w-full">
            <label for="date" class="formbold-form-label"> Date Published</label>
            <input
              type="date"
              name="date"
              id="date"
              class="formbold-form-input"
            />
          </div>
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
