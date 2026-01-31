import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Acesso from "./pages/Acesso";
import Registro from "./pages/Registro";
import Painel from "./pages/Painel";
import { useState } from "react";
import "./styles/overrides.css"; // seu CSS govbr

function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <Router>
      <Header />
      <div className="br-main">
        <Sidebar autenticado={autenticado} setAutenticado={setAutenticado} />
        <div className="br-content">
          <Routes>
            <Route path="/" element={<Acesso setAutenticado={setAutenticado} />} />
            <Route path="/registro" element={<Registro />} />
            {autenticado && <Route path="/painel" element={<Painel />} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;