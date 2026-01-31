import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Popup from "./Pop_ups";

export default function Sidebar({ autenticado, setAutenticado }) {
  const navigate = useNavigate();
  const [popupMessage, setPopupMessage] = useState("");

  function encerrarSessao() {
    setAutenticado(false);
    setPopupMessage("Sessão encerrada com sucesso!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <aside className="br-sidebar">
      <ul>
        {!autenticado && (
          <>
            <li><Link className="govbr-link" to="/">Acesso</Link></li>
            <li><Link className="govbr-link" to="/registro">Registro</Link></li>
          </>
        )}
        {autenticado && (
          <li>
            <button className="govbr-link" onClick={encerrarSessao}>
              Encerrar Sessão
            </button>
          </li>
        )}
      </ul>
      <Popup message={popupMessage} onClose={() => setPopupMessage("")} />
    </aside>
  );
}