import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OAuth from "@/components/OAuth";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthContext";
import { loginUser, registerUser } from "@/services/AuthApiService";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, isLoggedIn } = useAuthContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [btnLoader, setBtnLoader] = useState(false);
  const [addActiveClass, setAddActiveClass] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  // login handeler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      setBtnLoader(true); // Show loader

      const data = await loginUser(formData); // Call login service
      if (data?.success) {
        toast.success(data?.message);

        // Save login state and user information
        sessionStorage.setItem("isLoggedIn", "1");
        setUser(data?.user);

        // Reset form
        setFormData({
          email: "",
          password: "",
        });

        // Navigate based on user role
        if (data?.user?.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast.error(data?.message); // Show error message from response
      }
    } catch (loginError) {
      console.error("Login Error:", loginError); // Log error for debugging
      toast.error(
        loginError?.response?.data?.message ||
          "Something went wrong. Please try again."
      ); // Specific error or fallback message
    } finally {
      setBtnLoader(false); // Ensure the loader is stopped
    }
  };

  // register handler
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      setBtnLoader(true); // Show loader
      const data = await registerUser(formData); // Use the service function here

      if (data?.success) {
        toast.success(data?.message);

        // Save login state and user information
        sessionStorage.setItem("isLoggedIn", "1");
        setUser(data?.user);

        // Reset form and stop loader
        setFormData({
          email: "",
          password: "",
          name: "",
        });
        setBtnLoader(false);

        // Navigate based on user role
        if (data?.user?.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast.error(data?.message); // Show error message from response
        setBtnLoader(false); // Stop loader
      }
    } catch (error) {
      console.error("Error during registration:", error); // Log error for debugging
      toast.error(error?.response?.data?.message || "Something went wrong..."); // Specific error or fallback message
      setBtnLoader(false); // Stop loader
    }
  };

  return (
    <div className="body">
      <div className={`container ${addActiveClass ? "active" : ""}`}>
        {/* <!-- sign in  --> */}
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit} action="">
            <h1>Login</h1>
            <div className="input-box">
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                value={formData.password}
                onChange={handleChange}
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                required
              />
              <i
                className={`bx ${
                  passwordVisible ? "bxs-low-vision" : "bxs-lock-open-alt"
                }`}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="forgot-link">
              <a href="">Forgot password?</a>
            </div>
            <button type="submit" className="btn">
              {btnLoader ? (
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Please wait
                </Button>
              ) : (
                "Login"
              )}
            </button>

            <p>or login with social platforms</p>
            <OAuth />
          </form>
        </div>

        {/* <!-- sing up --> */}
        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit} action="">
            <h1>Registration</h1>
            <div className="input-box">
              <input
                value={formData.name}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Username"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                value={formData.password}
                onChange={handleChange}
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                required
              />
              <i
                className={`bx ${
                  passwordVisible ? "bxs-low-vision" : "bxs-lock-open-alt"
                }`}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="forgot-link">
              <a href="">Forgot password?</a>
            </div>
            <button type="submit" className="btn">
              {btnLoader ? (
                <Button disabled>
                  <Loader2 className="animate-spin" />
                  Please wait
                </Button>
              ) : (
                "Register"
              )}
            </button>
            <p>or register with social platforms</p>
            <OAuth />
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome</h1>
            <p>Don't have an account?</p>
            <button
              onClick={() => setAddActiveClass(true)}
              className="btn register-btn"
            >
              Register
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button
              onClick={() => setAddActiveClass(false)}
              className="btn login-btn"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
