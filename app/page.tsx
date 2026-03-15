export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9ecef] via-[#f5e3e9] to-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        {/* Badge */}
        <p className="mb-6 inline-block rounded-full border border-[#edd6dc] bg-white px-4 py-2 text-sm text-[#9c7b85] shadow-sm">
          BeautyBot — AI Marketing for Beauty Businesses
        </p>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-[#8c5a67] sm:text-5xl md:text-6xl">
          AI Marketing That Helps Beauty Businesses Get More Bookings
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#7a646c] sm:text-lg">
          BeautyBot helps salons, clinics, lash artists and beauty brands create
          captions, promotions, campaigns and client replies in seconds — so you
          can grow your business without spending hours on marketing.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
            className="rounded-xl bg-[#e98aa4] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df6f8d]"
          >
            Start 7-Day Free Trial
          </a>

          <a
            href="/login"
            className="rounded-xl border border-[#edd6dc] bg-white px-6 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9]"
          >
            Login
          </a>
        </div>

        {/* DEMO PREVIEW SECTION */}
        <div className="mx-auto mt-20 max-w-3xl rounded-[32px] border border-[#edd6dc] bg-white p-6 text-left shadow-sm sm:p-8">
          <div className="text-center">
            <p className="mb-3 inline-block rounded-full border border-[#edd6dc] bg-[#fff7f9] px-4 py-1 text-sm text-[#9c7b85]">
              See BeautyBot In Action
            </p>

            <h2 className="text-2xl font-semibold text-[#8c5a67] sm:text-3xl">
              Example AI Marketing Output
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6f5860] sm:text-base">
              Here’s an example of the kind of content BeautyBot can generate for
              beauty businesses in seconds.
            </p>
          </div>

          <div className="mt-8 rounded-[24px] border border-[#f0dce1] bg-[#fff9fb] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#b07c89]">
              Example: Keratin Treatment Promotion
            </p>

            <div className="mt-4 space-y-5 text-[#6f5860]">
              <div>
                <h3 className="text-base font-semibold text-[#8c5a67]">
                  Caption
                </h3>
                <p className="mt-2 text-sm leading-7 sm:text-base">
                  ✨ Say goodbye to frizz and hello to smooth, glossy hair. Our
                  luxury keratin treatment is designed to leave your hair softer,
                  shinier and easier to manage. Perfect for anyone wanting a sleek,
                  polished finish with less styling stress. Book your appointment
                  this week and give your hair the glow-up it deserves. 💖
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#8c5a67]">
                  Promo Idea
                </h3>
                <p className="mt-2 text-sm leading-7 sm:text-base">
                  Run a limited-time “Smooth Hair Week” offer with a bonus
                  take-home treatment or special discount for first-time keratin
                  bookings.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#8c5a67]">
                  Client Reply Example
                </h3>
                <p className="mt-2 text-sm leading-7 sm:text-base">
                  Hi lovely! Yes, we do offer keratin treatments. They’re perfect
                  for reducing frizz and making the hair feel smoother and more
                  manageable. If you’d like, I can help you book an appointment
                  this week 💕
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mx-auto max-w-xl text-sm leading-7 text-[#6f5860] sm:text-base">
              Start your 7-day free trial to unlock unlimited captions,
              promotions, campaigns and client replies for your beauty business.
            </p>

            <a
              href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
              className="mt-5 inline-block rounded-xl bg-[#e98aa4] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df6f8d]"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        {/* WHY SECTION */}
        <div className="mt-24 mb-20 text-center">
          <h2 className="text-3xl font-semibold text-[#8c5a67]">
            Stop Guessing What To Post
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f5860]">
            Most beauty businesses know they need better marketing, but don’t have
            time to constantly write captions, plan offers or reply perfectly to
            every enquiry. BeautyBot helps you create marketing faster and convert
            more interest into bookings.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">
              Get More Clients
            </h2>

            <p className="mt-3 leading-7 text-[#6f5860]">
              Create stronger promotions, better offers and booking-focused
              marketing that helps bring more clients into your business.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">
              Never Run Out Of Content
            </h2>

            <p className="mt-3 leading-7 text-[#6f5860]">
              Generate captions, hooks, content ideas and campaign angles tailored
              for salons, clinics, lash artists and beauty brands.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#8c5a67]">
              Reply To Clients Faster
            </h2>

            <p className="mt-3 leading-7 text-[#6f5860]">
              Write warm, polished client replies in seconds so you can turn more
              enquiries into real appointments.
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
                1. Tell BeautyBot About Your Business
              </h3>
              <p className="mt-2 text-[#6f5860]">
                Add your beauty business type, services and goals so your content
                feels relevant and on-brand.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#8c5a67]">
                2. Generate Marketing In Seconds
              </h3>
              <p className="mt-2 text-[#6f5860]">
                Instantly create captions, campaigns, promotions and replies with
                the support of your AI beauty marketing team.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#8c5a67]">
                3. Turn More Interest Into Bookings
              </h3>
              <p className="mt-2 text-[#6f5860]">
                Use the content across Instagram, TikTok and client messages to
                market your business more consistently and professionally.
              </p>
            </div>
          </div>
        </div>

        {/* PRICING / OFFER */}
        <div className="mt-24 rounded-[32px] border border-[#edd6dc] bg-white p-8 shadow-sm sm:p-10">
          <p className="mb-3 inline-block rounded-full border border-[#edd6dc] bg-[#fff7f9] px-4 py-1 text-sm text-[#9c7b85]">
            Simple Pricing
          </p>

          <h2 className="text-3xl font-semibold text-[#8c5a67]">
            Start Free, Then $29.95 Per Month
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f5860]">
            Get 7 days free to explore BeautyBot, then continue with full access
            for just $29.95 per month.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-[24px] border border-[#f0dce1] bg-[#fff9fb] p-6 text-left">
            <ul className="space-y-3 text-sm leading-7 text-[#6f5860] sm:text-base">
              <li>✨ AI captions for beauty content</li>
              <li>✨ Promotions and campaign ideas</li>
              <li>✨ Client reply assistance</li>
              <li>✨ Content planning support</li>
              <li>✨ Built for salons, clinics and beauty brands</li>
            </ul>
          </div>

          <a
            href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
            className="mt-8 inline-block rounded-xl bg-[#e98aa4] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df6f8d]"
          >
            Start 7-Day Free Trial
          </a>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-[#8c5a67]">
            Ready To Grow Your Beauty Business?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f5860]">
            Join BeautyBot and start creating better beauty marketing in seconds.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
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