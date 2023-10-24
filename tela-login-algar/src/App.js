
import React, { useState } from "react";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import { Button, TextField } from "@material-ui/core";
import "./style.css";
import logo from "./clip-path-group.svg";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Por favor, preencha todos os campos.");
    } else {
      // Lógica de login aqui (envio de dados para o servidor, autenticação, etc.)
      // Se ocorrer um erro durante o login, você pode definir setError com uma mensagem de erro adequada.
      // Caso contrário, redirecione ou atualize a página para a área de autenticação.
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Sua Logo" />

        <div className="form-container">
          <form onSubmit={handleLogin}>
            {error && <div className="error-message">{error}</div>}
            <TextField
              fullWidth
              variant="outlined"
              label="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: <PersonIcon style={{ marginRight: "8px" }} />
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: <LockIcon style={{ marginRight: "8px" }} />
              }}
            />
            <Button variant="contained" color="primary" type="submit">
              Entrar
            </Button>
            <a href="#">Esqueci a senha</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
