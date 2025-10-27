import { useNavigate, Link } from "react-router-dom";
import Login from "../components/Auth/Login";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSuccess = () => navigate("/products");

  return (
    <div className="flex flex-col items-center justify-center  min-h-[calc(100vh-200px)] pt-20">
      <Login onSuccess={handleSuccess} />

      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
