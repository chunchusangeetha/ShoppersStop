import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      onSuccess && onSuccess(); 
    } catch (err) {
      setError("Invalid credentials. Please check your email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm flex flex-col"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <label>Email *</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 mb-3 mt-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label>Password *</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2 mb-3 mt-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`${
          loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
        } text-white rounded py-2 transition`}
      >
        {loading ? "Signing in..." : "Login"}
      </button>
    </form>
  );
}
