export default function Settings() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">Settings</h1>
      <p className="text-gray-700 mb-4">
        Configura la aplicación según tus preferencias. Puedes modificar temas, notificaciones, y mucho más.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800">Tema</h2>
          <p className="text-sm text-gray-600">Claro / Oscuro</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800">Notificaciones</h2>
          <p className="text-sm text-gray-600">Email, Push, etc.</p>
        </div>
      </div>
    </div>
  );
}
