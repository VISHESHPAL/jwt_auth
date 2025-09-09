import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

const  Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await api.get("/users/logout");
    setUser(null);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">JWT Auth App</h1>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hi, {user.name}</span>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <a href="/login" className="bg-blue-500 px-3 py-1 rounded">Login</a>
        )}
      </div>
    </nav>
  );
}


export default Navbar