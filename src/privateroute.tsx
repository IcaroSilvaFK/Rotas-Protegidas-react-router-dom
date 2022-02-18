import { Route, Navigate, Routes } from "react-router-dom";
const auth = () => {
  return true;
};

export const PrivateRoute = ({ children }: any) => {
  const authorization = auth();
  return authorization ? children : <Navigate to="/" />;
};
