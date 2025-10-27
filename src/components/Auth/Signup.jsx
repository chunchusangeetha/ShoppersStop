import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

export default function Signup({ onSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCred.user, { displayName: username });
      setError("");
      onSuccess && onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm flex flex-col"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <p className="text-gray-600 mb-6 text-center text-lg">
        Create an account for faster checkout and easy order tracking.
      </p>
      <label>UserName *</label>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="border p-2 mb-3 mt-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
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
        {loading ? "Creating..." : "Sign Up"}
      </button>
    </form>
  );
}
