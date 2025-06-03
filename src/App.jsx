import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
