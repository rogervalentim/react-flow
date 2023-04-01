import { BrowserRouter, Route, Routes } from "react-router-dom";

import FlowBusiness from "./pages/FlowBusiness";
import FlowFinance from "./pages/FlowFinance";
import FlowProject from "./pages/FlowProject";
import Dashboard from "./components/Dashboard";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/negocios" element={<FlowBusiness />} />
          <Route path="/projetos" element={<FlowProject />} />
          <Route path="/finanças" element={<FlowFinance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
