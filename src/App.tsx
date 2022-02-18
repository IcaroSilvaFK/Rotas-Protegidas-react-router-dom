import React from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div>hello world</div>
      <button onClick={() => navigate("/logado")}>Clique aqui</button>
    </div>
  );
}

export default App;
