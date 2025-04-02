import React, { useState, useEffect } from "react";
import DoublyLinkedList from "../DoublyLinkedList";

const DoublyLinkedListPage = () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append("Página 1");
    doublyLinkedList.append("Página 2");
    doublyLinkedList.append("Página 3");

  // Estado para el nodo actual
  const [currentNode, setCurrentNode] = useState(doublyLinkedList.head);

  // Efecto para depuración
  useEffect(() => {
    console.log("Página actual:", currentNode ? currentNode.value : "No hay página");
  }, [currentNode]);

  // Función para avanzar
  const handleForward = () => {
    if (currentNode?.next) {
      setCurrentNode(currentNode.next);
    }
  };

  // Función para retroceder
  const handleBack = () => {
    if (currentNode?.prev) {
      setCurrentNode(currentNode.prev);
    }
  };

  return (
    <div>
      <h2>{currentNode ? currentNode.value : "No hay páginas"}</h2>
      <button onClick={handleBack} disabled={!currentNode?.prev}>Anterior</button>
      <button onClick={handleForward} disabled={!currentNode?.next}>Siguiente</button>
    </div>
  );
};

export default DoublyLinkedListPage;
