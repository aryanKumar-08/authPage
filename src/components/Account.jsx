export default function Account() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">👤 Account Settings</h2>

        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100?img=3"
            alt="user"
            className="w-16 h-16 rounded-full border-4 border-purple-400"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-600">Marry@gmail.com</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat.
        </p>
      </div>
    </div>
  );
}
