import { Route, Routes } from "react-router-dom";
import Login from "./pages/UserPages/Auth/LoginPage";
import HomePage from "./pages/UserPages/HomePage";
import { AdminSidebar } from "./components/adminComponents/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminSidebar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
