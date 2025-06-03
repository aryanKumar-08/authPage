import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-xl text-center max-w-md w-full mx-4">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-4">👋 Welcome to PopX</h1>
        <p className="text-gray-600 mb-8">
          Simplify your workflow and manage your presence with ease.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full mb-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full py-3 rounded-xl bg-purple-200 hover:bg-purple-300 text-purple-800 font-semibold transition-all"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
