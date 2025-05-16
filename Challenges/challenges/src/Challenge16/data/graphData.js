export const people = [
  { id: "Alice", age: 30, city: "Santiago" },
  { id: "Bob", age: 25, city: "Valparaíso" },
  { id: "Charlie", age: 35, city: "Santiago" },
  { id: "Diana", age: 28, city: "Valparaíso" },
  { id: "Elias", age: 40, city: "Concepción" },
  { id: "Fernanda", age: 22, city: "Concepción" },
  { id: "Gonzalo", age: 31, city: "Santiago" },
  { id: "Héctor", age: 29, city: "Valparaíso" },
  { id: "Ignacia", age: 33, city: "Concepción" },
  { id: "Javiera", age: 26, city: "Santiago" },
];

export const cities = ["Santiago", "Valparaíso", "Concepción"];

export const graphData = {
  nodes: [
    ...people.map((p) => ({
      id: p.id,
      color: "#34d399", // verde para personas
      size: 400,
    })),
    ...cities.map((c) => ({
      id: c,
      color: "#3b82f6", // azul para ciudades
      size: 800,
    })),
  ],
  links: people.map((p) => ({
    source: p.id,
    target: p.city,
  })),
};
