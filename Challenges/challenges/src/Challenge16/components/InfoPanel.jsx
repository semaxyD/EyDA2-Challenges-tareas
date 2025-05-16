export default function InfoPanel({ node }) {
  if (!node) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-2 text-gray-700">Detalles del nodo</h2>
        <p className="text-gray-500">Haz clic en un nodo para ver detalles aquí.</p>
      </div>
    );
  }

  // Diferenciar si es persona o ciudad por color o tamaño
  const isPerson = node.color === "#34d399";

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Detalles del nodo</h2>
      <p>
        <strong>Nombre:</strong> {node.id}
      </p>
      {isPerson ? (
        <>
          <p><strong>Tipo:</strong> Persona</p>
          <p><strong>Edad:</strong> {node.age ?? 'Desconocida'}</p>
          <p><strong>Ciudad:</strong> {node.city ?? 'Desconocida'}</p>
        </>
      ) : (
        <p><strong>Tipo:</strong> Ciudad</p>
      )}
    </div>
  );
}
