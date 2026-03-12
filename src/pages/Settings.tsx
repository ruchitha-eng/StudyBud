import { motion } from "framer-motion";
import ChangePassword from "../components/ChangePassword";
import { useNavigate } from "react-router-dom";

const Settings = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove login token
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="max-w-md mx-auto mt-8 space-y-6">
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
  <p className="text-muted-foreground mb-6">
    Manage your account settings and security.
  </p>
  <ChangePassword />

  <button
    onClick={handleLogout}
    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md mt-8"
  >
    Sign Out
  </button>

</div>
  );
};

export default Settings;