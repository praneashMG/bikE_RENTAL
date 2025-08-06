import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    if (form.password !== form.password_confirm) {
      setMsg("Passwords do not match.");
      return;
    }
    try {
      const res = await fetch("http://localhost/image_upload_project/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form).toString(),
      });
      const data = await res.json();
      if (data.success) {
        setMsg("");
        if (onLoginSuccess) onLoginSuccess({ username: form.username });
        navigate("/dashboard");
      } else {
        setMsg(data.error || "Signup failed");
      }
    } catch {
      setMsg("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
        aria-label="Sign up form"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-7">
          Create New Account
        </h2>
        <input
          name="username"
          type="text"
          required
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="password_confirm"
          type="password"
          required
          placeholder="Confirm Password"
          value={form.password_confirm}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
          type="submit"
        >Sign Up</button>
        <div className="text-center text-sm mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline">Login</a>
        </div>
        {msg && (
          <div className={`mt-5 text-center text-red-500 font-medium`} role="alert">{msg}</div>
        )}
      </form>
    </div>
  );
}
