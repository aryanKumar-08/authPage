import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const handleRegister = () => {
    
        navigate("/account"); 
     };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100">
      <div className="backdrop-blur-xl bg-white/60 rounded-3xl shadow-xl p-8 w-full max-w-md mx-4">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-3 text-center">Create Your Account</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">Join PopX to manage everything better.</p>

        {["Full Name", "Phone number", "Email address", "Password", "Company name"].map((label, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-blue-700">{label}*</label>
            <input
              type="text"
              placeholder={`Enter ${label.toLowerCase()}`}
              className="mt-1 p-3 w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
          </div>
        ))}

        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-700 mb-2">Are you an Agency?*</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="agency" className="mr-2" /> Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="agency" className="mr-2" /> No
            </label>
          </div>
        </div>

        <button onClick={handleRegister}  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all">
          Create Account
        </button>
      </div>
    </div>
  );
}
