import { Route, Routes } from "react-router-dom";
import App from "./App";
import { Logado } from "./logado";
import { PrivateRoute } from "./privateroute";

export const RoutesApplication: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/logado"
        element={
          <PrivateRoute>
            <Logado />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
