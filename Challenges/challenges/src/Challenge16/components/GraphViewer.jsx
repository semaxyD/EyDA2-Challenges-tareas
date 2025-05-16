// src/components/GraphViewer.jsx
import { Graph } from "react-d3-graph";
import { graphData, people } from "../data/graphData";
import { useState } from "react";

const config = {
  nodeHighlightBehavior: true,
  directed: true,
  height: 500,
  width: 800,
  node: {
    color: "lightgreen",
    size: 300,
    highlightStrokeColor: "blue",
    fontSize: 12,
  },
  link: {
    highlightColor: "lightblue",
  },
  d3: {
    gravity: -250,             // Mayor repulsión entre nodos
    linkLength: 150,
    alphaTarget: 0.05,
    disableLinkForce: false,
  },
  panAndZoom: true,
  staticGraph: false,                 // ✨ Habilita el motor de fuerzas
  staticGraphWithDragAndDrop: false, // ❌ No lo necesitamos si usamos fuerzas
  focusAnimationDuration: 0.75,
};

export default function GraphViewer({ onSelectNode }) {
  const handleClickNode = (nodeId) => {
    // Buscamos detalles extra (edad, ciudad) en people si es persona
    const node = graphData.nodes.find(n => n.id === nodeId);
    const personDetails = people.find(p => p.id === nodeId);
    if (personDetails) {
      onSelectNode({ ...node, ...personDetails });
    } else {
      onSelectNode(node);
    }
  };

  return (
    <div className="border rounded-xl shadow-md p-4 bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Grafo de Personas y Ciudades</h2>
      <Graph
        id="graph-id"
        data={graphData}
        config={config}
        onClickNode={handleClickNode}
      />
    </div>
  );
}
