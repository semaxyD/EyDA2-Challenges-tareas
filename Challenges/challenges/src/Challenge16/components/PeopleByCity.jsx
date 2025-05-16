import { people, cities } from "../data/graphData";
import { useState } from "react";

export default function PeopleByCity() {
  const [selectedCity, setSelectedCity] = useState("");

  const filteredPeople = people.filter((p) => p.city === selectedCity);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold mb-2 text-gray-700">Filtrar personas por ciudad</h2>
      <select
        className="border p-2 rounded text-gray-700"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="">Selecciona una ciudad</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      {selectedCity && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-600">Personas en {selectedCity}:</h3>
          <ul className="list-disc list-inside">
            {filteredPeople.map((p) => (
              <li key={p.id}>
                {p.id} (Edad: {p.age})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
