import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { HotelContextProvider } from "./context/HotelContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <HotelContextProvider>
          <App />
        </HotelContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
