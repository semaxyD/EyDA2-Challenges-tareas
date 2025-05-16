import { useRef, useState } from 'react';
import Tree from 'react-d3-tree';
import { BinaryTree } from '../utils/BinaryTree';

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Visualizador de Árbol Binario</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Insertar valor"
          className="border p-2 rounded"
        />
        <button onClick={handleInsert} className="bg-blue-600 text-white px-4 py-2 rounded">
          Insertar
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar valor"
          className="border p-2 rounded"
        />
        <button onClick={handleSearch} className="bg-green-600 text-white px-4 py-2 rounded">
          Buscar
        </button>
      </div>

      <div className="mb-4">
        <button onClick={printTraversals} className="bg-purple-600 text-white px-4 py-2 rounded">
          Mostrar recorridos por consola
        </button>
        {traversals.inorder.length > 0 && (
          <div className="mb-4 bg-gray-100 p-4 rounded shadow">
            <h2 className="font-semibold mb-2 text-lg">Recorridos</h2>
            <p><strong>Inorder:</strong> {traversals.inorder.join(', ')}</p>
            <p><strong>Preorder:</strong> {traversals.preorder.join(', ')}</p>
            <p><strong>Postorder:</strong> {traversals.postorder.join(', ')}</p>
          </div>
        )}
      </div>

      <div className="w-full h-[500px] border rounded bg-white shadow">
        {treeData ? (
          <Tree data={treeData} orientation="vertical" />
        ) : (
          <p className="text-center text-gray-600 mt-20">Inserta valores para ver el árbol</p>
        )}
      </div>
    </div>
  );
}
