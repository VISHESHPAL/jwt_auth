import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <p className="mt-2">Email: {user?.email}</p>
    </div>
  );
};

export default Home;
