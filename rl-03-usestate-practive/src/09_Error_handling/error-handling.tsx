import { useState } from "react";
import "./error-handling.css";
import "../style.css";

const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "password123";

const ErrorHandlingLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      setError("");
      setSuccess(true);
    } else {
      setError("Incorrect username or password.");
      setSuccess(false);
    }
  };

  return (
    <section className="section-box">
      <h3>Login Form with Error Handling</h3>
      <p>Build a login form that displays an error message when the user enters incorrect credentials using useState.</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Login successful!</p>}
    </section>
  );
};

export default ErrorHandlingLogin;
