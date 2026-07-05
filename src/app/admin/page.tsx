"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/admin/dashboard"
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-xl shadow w-[350px]">

        <h1 className="text-2xl font-bold mb-5 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>

      </div>
    </main>
  );
}