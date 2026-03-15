export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9ecef] via-[#f5e3e9] to-[#f2dbe2] px-6 py-16 text-[#5c3942]">
      <div className="mx-auto max-w-md rounded-[30px] border border-[#edd6dc] bg-white p-8 shadow-sm">
        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white px-4 py-2 text-sm text-[#7a5961]"
        >
          ← Back
        </a>

        <h1 className="text-3xl font-semibold text-[#8c5a67]">Start Free</h1>
        <p className="mt-2 text-[#7a646c]">
          Create your BeautyBot account.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Business name"
            className="w-full rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />
          <button className="w-full rounded-xl bg-[#d98fa1] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#c97f92]">
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
}