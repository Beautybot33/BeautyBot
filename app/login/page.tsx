"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export default function LoginPage() {

  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9ecef] via-[#f5e3e9] to-[#f2dbe2] px-6 py-16 text-[#5c3942]">
      <div className="mx-auto max-w-md rounded-[30px] border border-[#edd6dc] bg-white p-8 shadow-sm">

        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white px-4 py-2 text-sm text-[#7a5961]"
        >
          ← Back
        </a>

        <h1 className="text-3xl font-semibold text-[#8c5a67]">Login</h1>

        <p className="mt-2 text-[#7a646c]">
          Login to access your BeautyBot dashboard.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#d98fa1] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#c97f92]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

        </form>

      </div>
    </main>
  )
}