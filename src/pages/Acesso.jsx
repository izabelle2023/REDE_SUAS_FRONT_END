import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Popup from "../components/Pop_ups";

export default function Acesso({ setAutenticado }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email && senha) {
      setAutenticado(true);
      setPopupMessage("Login realizado com sucesso!");
      // redireciona após breve delay para mostrar o pop-up
      setTimeout(() => navigate("/painel"), 1000);
    } else {
      setPopupMessage("Preencha e-mail e senha.");
    }
  }

  return (
    <div className="container-lg mt-5" style={{ maxWidth: 400 }}>
      <h1>Acesso ao Sistema</h1>
      <form className="br-form" onSubmit={handleSubmit}>
        <div className="br-input mb-3">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="br-input mb-4">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button className="br-button primary w-100" type="submit">
          Acessar
        </button>
      </form>

      {/* Pop-up de aviso */}
      <Popup message={popupMessage} onClose={() => setPopupMessage("")} />
    </div>
  );
}