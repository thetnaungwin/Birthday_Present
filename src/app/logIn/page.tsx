"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/dashboard"); // Redirect to dashboard on success
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-rose-400 to-fuchsia-600">
      {/* Floating Hearts Animation */}
      <div className="absolute w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse top-16 left-12"></div>
      <div className="absolute w-24 h-24 bg-white/30 rounded-full blur-2xl animate-pulse bottom-16 right-14 delay-200"></div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/90 p-8 rounded-2xl shadow-xl w-96 text-center backdrop-blur-md border-4 border-pink-300"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-rose-700">
          💖 Welcome, My Love! 💖
        </h2>
        <p className="text-gray-600 italic mb-4">
          Only the birthday queen can enter. ✨
        </p>

        {error && <p className="text-red-500 font-medium mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Enter Your Special Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-3 border-2 border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500 text-black"
          required
        />

        <input
          type="password"
          placeholder="Your Birthday Date 💕"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-5 border-2 border-fuchsia-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 text-black"
          required
        />

        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-rose-700 transition-all duration-300"
        >
          Enter My Magical World 🎂✨
        </button>
      </form>
    </div>
  );
}
