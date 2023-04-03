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
    data: { label: "Finança 1" },
    style: {
      backgroundColor: "purple",
      color: "white",
    }
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "Finança 2" },
    style: {
      backgroundColor: "green",
      color: "white",
    }
  },
  {
    id: "3",
    position: { x: 50, y: 80 },
    data: { label: "Finança 3" },
    style: {
      backgroundColor: "blue",
      color: "white",
    }
  },
  {
    id: "4",
    position: { x: 50, y: 80 },
    data: { label: "Finança 4" },
    style: {
      backgroundColor: "red",
      color: "white",
    }
  }
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function FlowFinance() {
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
    <div style={{ width: "95vw", height: "100vh", backgroundColor: "#000" }}>
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
