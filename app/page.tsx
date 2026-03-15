export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9ecef] via-[#f5e3e9] to-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        {/* Badge */}
        <p className="mb-6 inline-block rounded-full border border-[#edd6dc] bg-white px-4 py-2 text-sm text-[#9c7b85] shadow-sm">
          BeautyBot AI Marketing for Beauty Businesses
        </p>

        {/* Headline */}
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-[#8c5a67] sm:text-5xl md:text-6xl">
          AI Marketing That Brings Your Beauty Business More Clients
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#7a646c] sm:text-lg">
          BeautyBot creates captions, promotions, campaigns and client replies so your
          salon, clinic or beauty brand can attract more bookings without spending hours on marketing.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
            className="rounded-xl bg-[#e98aa4] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df6f8d]"
          >
            Start Free Trial
          </a>

          <a
            href="/login"
            className="rounded-xl border border-[#edd6dc] bg-white px-6 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9]"
          >
            Login
          </a>
        </div>

        {/* WHY SECTION */}
        <div className="mt-24 mb-20 text-center">
          <h2 className="text-3xl font-semibold text-[#8c5a67]">
            Stop Guessing What To Post
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f5860]">
            Most beauty professionals struggle with marketing. BeautyBot generates
            proven content and promotions designed to bring more clients to your
            beauty business.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">
              Get More Clients
            </h2>

            <p className="mt-3 leading-7 text-[#6f5860]">
              Launch beauty promotions with instant strategy, marketing angles,
              and offers designed to drive bookings.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">
              Never Run Out Of Content
            </h2>

            <p className="mt-3 leading-7 text-[#6f5860]">
              Generate captions, hooks and weekly content ideas tailored for
              salons, lash artists, clinics and beauty brands.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">
              Reply To Clients Instantly
            </h2>

            <p className="mt-3 leading-7 text-[#6f5860]">
              AI writes warm, polished responses to enquiries so you convert
              more leads into bookings.
            </p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-[#8c5a67]">
            How BeautyBot Works
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-[#8c5a67]">
                1. Enter Your Business
              </h3>
              <p className="mt-2 text-[#6f5860]">
                Tell BeautyBot your beauty business type and services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#8c5a67]">
                2. Generate Marketing
              </h3>
              <p className="mt-2 text-[#6f5860]">
                Instantly create campaigns, captions and promotions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#8c5a67]">
                3. Get More Bookings
              </h3>
              <p className="mt-2 text-[#6f5860]">
                Post the content and attract more clients automatically.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-[#8c5a67]">
            Ready To Grow Your Beauty Business?
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/signup"
              className="rounded-xl bg-[#e98aa4] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df6f8d]"
            >
              Start Free Trial
            </a>

            <a
              href="/login"
              className="rounded-xl border border-[#edd6dc] bg-white px-7 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9]"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}