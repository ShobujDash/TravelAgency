import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HotelDetails from "./components/userComponents/HotelDetails";
import HotelList from "./components/userComponents/HotelList";
import AdminHomePage from "./pages/AdminPages/AdminHomePage";
import AboutPage from "./pages/UserPages/AboutPage";
import Login from "./pages/UserPages/Auth/LoginPage";
import ContactPage from "./pages/UserPages/ContactPage";
import GalleryPage from "./pages/UserPages/GalleryPage";
import HomePage from "./pages/UserPages/HomePage";
import MyBookingPage from "./pages/UserPages/MyBookingPage";
import MyFevouritePage from "./pages/UserPages/MyFevouritePage";
import ProfilePage from "./pages/UserPages/ProfilePage";
import ServicePage from "./pages/UserPages/ServicePage";
import AdminAddResortPage from "./pages/AdminPages/AdminAddResortPage";
import AdminAddSliderImage from "./pages/AdminPages/AdminAddSliderImage";
import AdminUserCheckoutResort from "./pages/AdminPages/AdminUserCheckout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/hotel-list" element={<HotelList />} />
        <Route path="/hotel/details" element={<HotelDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-booking" element={<MyBookingPage />} />
        <Route path="/my-fevoruite" element={<MyFevouritePage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/dashboard" element={<AdminHomePage />} />
          <Route path="/admin/add-resort" element={<AdminAddResortPage />}/>
          <Route
            path="/admin/set-silder-image"
            element={<AdminAddSliderImage />}
          />
          <Route
            path="/admin/user-checkout-resort"
            element={<AdminUserCheckoutResort />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
