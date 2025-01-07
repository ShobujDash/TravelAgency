import { Route, Routes } from "react-router-dom";
import Login from "./pages/UserPages/Auth/LoginPage";
import HomePage from "./pages/UserPages/HomePage";
import { AdminSidebar } from "./components/adminComponents/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/UserPages/ProfilePage";
import MyFevouritePage from "./pages/UserPages/MyFevouritePage";
import MyBookingPage from "./pages/UserPages/MyBookingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-booking" element={<MyBookingPage />} />
        <Route path="/my-fevoruite" element={<MyFevouritePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminSidebar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
