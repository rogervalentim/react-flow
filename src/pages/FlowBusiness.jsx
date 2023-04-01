import React, { useState, useCallback } from "react";

import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "input",
    data: { label: "Negócio 1" },
    style: {
      backgroundColor: "black",
      color: "white",
      border: "3px solid blue"
    }
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "Negócio 2" },
    style: {
      backgroundColor: "black",
      color: "white",
      border: "3px solid red"
    }
  },
  {
    id: "3",
    position: { x: 50, y: 80 },
    data: { label: "Negócio 3" },
    style: {
      backgroundColor: "black",
      color: "white",
      border: "3px solid white"
    }
  },
  {
    id: "4",
    position: { x: 50, y: 80 },
    data: { label: "Negócio 4" },
    style: {
      backgroundColor: "black",
      color: "white",
      border: "3px solid purple"
    }
  }
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function FlowBusiness() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "90vw", height: "100vh", backgroundColor: "#000" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
