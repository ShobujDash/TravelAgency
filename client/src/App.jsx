import { Route, Routes } from "react-router-dom";
import Login from "./pages/UserPages/Auth/LoginPage";
import HomePage from "./pages/UserPages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
