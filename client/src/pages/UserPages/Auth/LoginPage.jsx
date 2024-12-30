import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import OAuth from "@/components/OAuth";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

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
      setBtnLoader(true);
    } catch (loginError) {
      console.error("লগইন ত্রুটি:", loginError);
      toast.error("কিছু ভুল হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setBtnLoader(false);
    }
  };

  // register handler
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      setBtnLoader(true);
    } catch (error) {
      toast.error("Something Went Wrong...");
      setBtnLoader(false);
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
              {btnLoader ? "loding skeleton" : "Login"}
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
              {btnLoader ? "Loading Skeleton" : "Register"}
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
