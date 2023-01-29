import http from "./http-common";


async function getAllCategories(){
    return await http.get(`/categories`);
}

async function getCategoryById(id){
    return await http.get(`/categories/${id}`);
}

async function deleteCategoryById(id){
    return await http.delete(`/categories/${id}`);
}

async function addCategory(category){
    return await http.post(`/categories`,category);
}
async function updateCategory(category){
    return await http.put(`/categories/${category._id}`,category);
}


const categoryService = {
getAllCategories,
getCategoryById,
deleteCategoryById,
addCategory,
updateCategory
}

export default categoryService


