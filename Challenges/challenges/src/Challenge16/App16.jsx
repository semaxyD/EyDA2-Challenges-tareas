import { useState } from "react";
import GraphViewer from "./components/GraphViewer";
import PeopleByCity from "./components/PeopleByCity";
import InfoPanel from "./components/InfoPanel";

export default function App16() {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-4">Challenge 16 - Grafo Social</h1>
      <GraphViewer onSelectNode={setSelectedNode} />
      <InfoPanel node={selectedNode} />
      <PeopleByCity />
    </div>
  );
}
