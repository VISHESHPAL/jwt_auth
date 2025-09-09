import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/signup", formData);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border w-full p-2 mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border w-full p-2 mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border w-full p-2 mb-3"
        />
        <button type="submit" className="bg-green-500 text-white w-full py-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
