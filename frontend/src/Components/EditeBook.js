import { useEffect, useState } from "react"
import { Navigate , useParams } from "react-router-dom"
import bookService from "../services/bookService"

function EditBookForm(){
    const [nom,setNom]=useState("")
    const {id}=useParams()

    async function bookById(){
    const res= await bookService.getBookById(id)
    setNom(res.data.name)
    }

    useEffect(()=>{
    bookById()
    },[]) 

    async function submitBook(e){
        e.preventDefault()
        const c={"_id":id,"name":nom}
        await bookService.updateCategory(c)
        Navigate("/categories")
        }
    return ( 
    
<div class="formbold-main-wrapper">
<div class="formbold-form-wrapper">
<form action="https://formbold.com/s/FORM_ID" method="POST" onSubmit={(e)=>submitBook(e)}>
        
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
                onChange={(e)=>setNom(e.target.value)}
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
        )
    
}

export default EditBookForm