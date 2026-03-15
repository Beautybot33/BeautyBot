export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9ecef] via-[#f5e3e9] to-[#f2dbe2] text-[#5c3942]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center">
          <p className="mb-4 inline-block rounded-full border border-[#edd6dc] bg-white px-4 py-2 text-sm text-[#9c7b85] shadow-sm">
            BeautyBot — AI Marketing for Beauty Businesses
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-[#8c5a67] md:text-7xl">
            Your AI Beauty Marketing Team
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#7a646c]">
            Generate campaigns, captions, hooks, content plans, and client replies
            in seconds with BeautyBot.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/signup"
              className="rounded-xl bg-[#d98fa1] px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-[#c97f92]"
            >
              Start Free
            </a>

            <a
              href="/login"
              className="rounded-xl border border-[#edd6dc] bg-white px-6 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9]"
            >
              Login
            </a>

            <a
              href="/dashboard"
              className="rounded-xl border border-[#edd6dc] bg-white px-6 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9]"
            >
              View App
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">Campaigns</h2>
            <p className="mt-3 leading-7 text-[#6f5860]">
              Launch beauty promotions with instant strategy, angles, and offers.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">Content</h2>
            <p className="mt-3 leading-7 text-[#6f5860]">
              Generate captions, hooks, and weekly content ideas tailored to your brand.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">Client Replies</h2>
            <p className="mt-3 leading-7 text-[#6f5860]">
              Reply to enquiries with warm, polished, booking-ready responses.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}