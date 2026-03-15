"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function SignupPage() {
  const supabase = createClient();
  const router = useRouter();

  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          business_name: businessName,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("Account created. Check your email to confirm.");
    setLoading(false);
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9ecef] via-[#f5e3e9] to-[#f2dbe2] px-6 py-10">
      <div className="mx-auto max-w-md rounded-[30px] border border-[#edd6dc] bg-white p-8 shadow-sm">
        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white px-4 py-2 text-sm text-[#8c5a67]"
        >
          ← Back
        </a>

        <h1 className="text-3xl font-semibold text-[#8c5a67]">Start Free</h1>
        <p className="mt-2 text-[#7a646c]">Create your BeautyBot account.</p>

        <form onSubmit={handleSignup} className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#d98fa1] px-5 py-3 text-sm font-medium text-white"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          {message ? (
            <p className="text-sm text-[#8c5a67]">{message}</p>
          ) : null}
        </form>
      </div>
    </main>
  );
}