import { useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import { BinaryTree } from '../utils/BinaryTree';

// Importamos el módulo CSS
import styles from './BinaryTreeVisualizer.module.scss';

function convertToTreeData(node) {
  if (!node) return null;
  const children = [];
  if (node.left) children.push(convertToTreeData(node.left));
  if (node.right) children.push(convertToTreeData(node.right));
  return { name: node.name, children };
}

export default function BinaryTreeVisualizer() {
  const binaryTreeRef = useRef(new BinaryTree()); 
  const [root, setRoot] = useState(null);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [traversals, setTraversals] = useState({
    inorder: [],
    preorder: [],
    postorder: [],
  });

  const handleInsert = () => {
    const value = parseInt(input);
    if (!isNaN(value)) {
      binaryTreeRef.current.insert(value); 
      setRoot({ ...binaryTreeRef.current.root }); 
    }
    setInput('');
  };

  const handleSearch = () => {
    const value = parseInt(search);
    if (!isNaN(value)) {
      const found = binaryTreeRef.current.contains(value); 
      alert(found ? `Valor ${value} encontrado` : `Valor ${value} no encontrado`);
    }
    setSearch('');
  };

  const printTraversals = () => {
    const tree = binaryTreeRef.current; 
    setTraversals({
      inorder: tree.inorder(),
      preorder: tree.preorder(),
      postorder: tree.postorder(),
    });

    console.log('Inorder:', tree.inorder());
    console.log('Preorder:', tree.preorder());
    console.log('Postorder:', tree.postorder());
  };

  const treeData = convertToTreeData(binaryTreeRef.current.root); 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Visualizador de Árbol Binario</h1>

      <div className={styles['input-group']}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Insertar valor"
          className={styles.input}
        />
        <button onClick={handleInsert} className={styles.insertBtn}>
          Insertar
        </button>
      </div>

      <div className={styles['input-group']}>
        <input
          type="number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar valor"
          className={styles.input}
        />
        <button onClick={handleSearch} className={styles.searchBtn}>
          Buscar
        </button>
      </div>

      <div className={styles.traversalsSection}>
        <button onClick={printTraversals} className={styles.traversalsBtn}>
          Mostrar recorridos por consola
        </button>
        {traversals.inorder.length > 0 && (
          <div className={styles.traversals}>
            <h2>Recorridos</h2>
            <p><strong>Inorder:</strong> {traversals.inorder.join(', ')}</p>
            <p><strong>Preorder:</strong> {traversals.preorder.join(', ')}</p>
            <p><strong>Postorder:</strong> {traversals.postorder.join(', ')}</p>
          </div>
        )}
      </div>

      <div className={styles['tree-container']}>
        {treeData ? (
          <Tree data={treeData} orientation="vertical" />
        ) : (
          <p className={styles.placeholder}>Inserta valores para ver el árbol</p>
        )}
      </div>
    </div>
  );
}
