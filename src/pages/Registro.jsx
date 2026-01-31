import { useState } from "react";
import Popup from "../components/Pop_ups";

export default function Registro() {
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimentoDate = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimentoDate.getFullYear();
    const mes = hoje.getMonth() - nascimentoDate.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimentoDate.getDate())) {
      idade--;
    }
    return idade;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !nascimento || !senha) {
      setPopupMessage("Preencha todos os campos.");
      return;
    }

    const idade = calcularIdade(nascimento);
    if (idade < 18) {
      setPopupMessage("Somente maiores de 18 anos podem se registrar.");
      return;
    }

    setPopupMessage(`Usuário registrado com sucesso! Email: ${email}`);
    // aqui você poderia salvar no backend ou localStorage
  }

  return (
    <div className="container-lg mt-5" style={{ maxWidth: 400 }}>
      <h1>Registro de Usuário</h1>
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

        <div className="br-input mb-3">
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input
            id="nascimento"
            type="date"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
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
          Registrar
        </button>
      </form>

      {/* Pop-up de aviso */}
      <Popup message={popupMessage} onClose={() => setPopupMessage("")} />
    </div>
  );
}