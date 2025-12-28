import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Key, LogIn, Loader2 } from "lucide-react";
import "./Login.scss";
import SubHeader from "../Utils/SubHeader";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const API = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAuthError("");

    try {
      const response = await axios.post(`${API}/login/adm`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        // Short delay for visual feedback of the loading state
        setTimeout(() => {
          setIsSubmitting(false);
          navigate("/");
        }, 1000);
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      setIsSubmitting(false);
      setAuthError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <SubHeader
          title="Welcome Back"
          content="Please enter your credentials to access your account."
        />

       
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email Address</label>
            <div>
              <Mail size={18} />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="field">
            <label>Password</label>
            <div>
              <Key size={18} />
              <input
                type="password"
                name="password"
                required
                minLength="6"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
              />
            </div>
          </div>

          {authError && <p>{authError}</p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2
                size={24}
                style={{ animation: "spin 1s linear infinite" }}
              />
            ) : (
              <>
                <LogIn size={20} />
                <span>Authorize</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
