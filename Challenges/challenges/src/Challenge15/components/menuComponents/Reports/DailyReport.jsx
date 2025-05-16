export default function DailyReport() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-4 text-rose-600">Daily Report</h1>
      <p className="text-gray-700 mb-4">
        Aquí tienes un resumen de las actividades realizadas hoy. Puedes ver el rendimiento diario, métricas clave y novedades importantes.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800">Visitas del día</h2>
          <p className="text-sm text-gray-600">1,245</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800">Ventas realizadas</h2>
          <p className="text-sm text-gray-600">83</p>
        </div>
      </div>
    </div>
  );
}
