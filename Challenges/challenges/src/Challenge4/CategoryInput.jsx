import { useState } from "react";

//este es el componente hijo
const CategoryInput = ({ addCategory }) => {
    const [category, setCategory] = useState("");
  
    const handleInputChange = (event) => {
      setCategory(event.target.value);
    };
  
    const handleAddCategory = () => {
      if (category.trim() !== "") {
        addCategory(category);
        setCategory("");
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={category}
          onChange={handleInputChange}
          placeholder="Enter category"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    );
  };
  
  export default CategoryInput;