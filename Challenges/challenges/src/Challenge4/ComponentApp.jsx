import {React} from "react"
import { useState } from "react";
import CategoryInput from "./CategoryInput"

//este es el componente Padre
export const ComponentApp = () =>{
    const [categories, setCategories] = useState([
        'first','second'
    ]);

    const addCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };
    
    return(
        <div>
        <h1>Category List</h1>
        <CategoryInput addCategory={addCategory} />
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    )
}

export default ComponentApp