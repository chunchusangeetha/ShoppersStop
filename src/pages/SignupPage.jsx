import { useNavigate, Link } from "react-router-dom";
import Signup from "../components/Auth/Signup";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSuccess = () => navigate("/products");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Signup onSuccess={handleSuccess} />

      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
