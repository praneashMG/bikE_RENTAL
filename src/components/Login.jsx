import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username_or_email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost/image_upload_project/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form).toString(),
      });

      const data = await res.json();

      if (data.success) {
        setMsg("");
        onLoginSuccess && onLoginSuccess({ username: data.user.username });
        navigate("/dashboard");
      } else {
        setMsg(data.error || "Invalid username/email or password.");
      }
    } catch {
      setMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg"
        aria-label="Login form"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Login</h2>
        <label htmlFor="username_or_email" className="block font-semibold mb-1 text-gray-700">
          Username or Email
        </label>
        <input
          id="username_or_email"
          name="username_or_email"
          type="text"
          value={form.username_or_email}
          onChange={handleChange}
          required
          placeholder="Enter username or email"
          className="border border-gray-300 rounded-lg p-3 w-full mb-6 focus:ring-2 focus:ring-blue-500 outline-none transition"
          autoComplete="username"
        />
        <label htmlFor="password" className="block font-semibold mb-1 text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="Enter password"
          className="border border-gray-300 rounded-lg p-3 w-full mb-6 focus:ring-2 focus:ring-blue-500 outline-none transition"
          autoComplete="current-password"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white transition ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {msg && (
          <p
            className={`mt-4 text-center font-medium ${
              msg.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
            }`}
            role="alert"
          >
            {msg}
          </p>
        )}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
