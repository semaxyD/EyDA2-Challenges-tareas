export default function MonthlyReport() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-4 text-orange-600">Monthly Report</h1>
      <p className="text-gray-700 mb-4">
        Resumen completo del mes en curso. Consulta las tendencias, los resultados acumulados y compara con meses anteriores.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800">Total de ventas</h2>
          <p className="text-sm text-gray-600">$12,430</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800">Nuevos usuarios</h2>
          <p className="text-sm text-gray-600">542</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800">Tickets resueltos</h2>
          <p className="text-sm text-gray-600">214</p>
        </div>
      </div>
    </div>
  );
}
