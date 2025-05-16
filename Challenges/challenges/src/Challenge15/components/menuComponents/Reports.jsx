export default function Reports() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Reports</h1>
      <p className="text-gray-700 mb-4">
        En esta sección encontrarás distintos reportes generados por el sistema. Usa el menú lateral para acceder a los informes diarios y mensuales.
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Acceso a reportes diarios</li>
        <li>Visualización de reportes mensuales</li>
        <li>Descarga y exportación de datos</li>
      </ul>
    </div>
  );
}
