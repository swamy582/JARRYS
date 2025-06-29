import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../Styles/Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username || !email || !password || !phone) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    try {
      const res = await fetch("https://jarrys-5.onrender.com/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, email, password, phone }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/login");
      } else {
        setError(data.error || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an account</h2>
        {error && <p className="error-message">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={handleSignup}>Sign up</button>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="redirect-link">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
