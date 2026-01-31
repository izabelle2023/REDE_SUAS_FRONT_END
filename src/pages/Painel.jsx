import { useState } from "react";
import Popup from "../components/Pop_ups";

export default function Painel() {
  const [popupMessage, setPopupMessage] = useState("");

  // Lista fictícia de usuários
  const usuarios = [
    { email: "joao@gmail.com", nascimento: "1990-01-01" },
    { email: "maria@gmail.com", nascimento: "1985-05-10" },
    { email: "ana@gmail.com", nascimento: "2000-07-20" }
  ];

  return (
    <div className="container-lg mt-5">
      <h1>Painel de Usuários</h1>

      <table className="table table-striped mt-4" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>E-mail</th>
            <th>Data de Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((u, i) => (
              <tr key={i}>
                <td>{u.email}</td>
                <td>{u.nascimento}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">Nenhum usuário cadastrado.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pop-up de aviso */}
      <Popup message={popupMessage} onClose={() => setPopupMessage("")} />
    </div>
  );
}