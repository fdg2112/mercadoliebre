import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./router/Router";
import { UserProvider } from "./context/UserProvider"; // ✅ cambiá esto

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </StrictMode>
);
