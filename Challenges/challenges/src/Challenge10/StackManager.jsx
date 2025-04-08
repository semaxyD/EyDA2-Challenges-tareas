import { useDispatch, useSelector } from "react-redux";
import { push, pop } from "./redux/stackSlice";
import { useState } from "react";

const StackManager = () => {
  const stack = useSelector((state) => state.stack);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");

  return (
    <div className="mt-10">
      <h2>Pila de Libros:</h2>
      <ul>
        {stack.slice().reverse().map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Libro"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => dispatch(push(newItem))}>Agregar libro</button>
      <button onClick={() => dispatch(pop())}>Quitar libro</button>
    </div>
  );
};

export default StackManager;
