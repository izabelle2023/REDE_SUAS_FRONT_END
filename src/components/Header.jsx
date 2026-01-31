import govLogo from "../img/gov.png";
import redeSusLogo from "../img/rede_sus.png";

export default function Header({ autenticado }) {
  return (
    <header className="govbr-header">
      <div className="govbr-logo">
        <img
          src={autenticado ? redeSusLogo : govLogo}
          alt="Logo"
          style={{ height: "40px" }}
        />
      </div>
      <nav className="govbr-nav">
        {!autenticado && (
          <>
            <a href="/">Acesso</a>
            <a href="/registro">Registro</a>
          </>
        )}
        {autenticado && (
          <span style={{ fontWeight: "600", color: "#005ea5" }}>Painel</span>
        )}
      </nav>
    </header>
  );
}