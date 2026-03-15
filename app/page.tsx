export default function LandingPage() {
  const employees = [
    {
      name: "CaptionBot",
      role: "Your content employee",
      description:
        "Creates beauty captions for promos, client transformations, launches and engagement posts in seconds.",
    },
    {
      name: "ReplyBot",
      role: "Your client message employee",
      description:
        "Writes fast, polished replies for bookings, inquiries, objections, follow-ups and rebooking messages.",
    },
    {
      name: "CampaignBot",
      role: "Your promotions employee",
      description:
        "Builds full promo campaigns for slow days, special offers, seasonal pushes and service launches.",
    },
    {
      name: "ContentBot",
      role: "Your planning employee",
      description:
        "Generates post ideas, hooks and content plans tailored to your beauty business and audience.",
    },
    {
      name: "OfferBot",
      role: "Your sales employee",
      description:
        "Helps package services into irresistible offers that feel premium, clear and easy for clients to buy.",
    },
    {
      name: "ReviewBot",
      role: "Your reputation employee",
      description:
        "Creates thoughtful, professional replies to reviews and client feedback to strengthen your brand.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f9ecef] via-[#f5e3e9] to-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        {/* Badge */}
        <p className="mb-6 inline-block rounded-full border border-[#edd6dc] bg-white px-4 py-2 text-sm text-[#9c7b85] shadow-sm">
          BeautyBot — AI Employees for Beauty Businesses
        </p>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-[#8c5a67] sm:text-5xl md:text-6xl">
          Hire Your AI Beauty Team
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#7a646c] sm:text-lg">
          BeautyBot gives salons, clinics, lash artists and beauty brands instant
          AI employees for captions, promotions, campaigns, client replies and
          content planning — so you can grow faster without doing all the
          marketing yourself.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
            className="rounded-xl bg-[#d96b8a] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#c85d7b]"
          >
            Start 7-Day Free Trial
          </a>

          <a
            href="#ai-employees"
            className="rounded-xl border border-[#d9b8c1] bg-white px-6 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9]"
          >
            Meet Your AI Employees
          </a>

          <a
            href="/login"
            className="rounded-xl border border-[#edd6dc] bg-white px-6 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9]"
          >
            Login
          </a>
        </div>

        {/* AI EMPLOYEES */}
        <section id="ai-employees" className="mt-20">
          <div className="text-center">
            <p className="mb-3 inline-block rounded-full border border-[#edd6dc] bg-[#fff7f9] px-4 py-1 text-sm text-[#9c7b85]">
              Meet Your AI Team
            </p>

            <h2 className="text-3xl font-semibold text-[#8c5a67] sm:text-4xl">
              Different AI Employees, One Powerful BeautyBot
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#6f5860] sm:text-base">
              Instead of one generic tool, BeautyBot gives you a team of AI
              employees designed to help beauty businesses market smarter, reply
              faster and book more clients.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee) => (
              <div
                key={employee.name}
                className="rounded-[28px] border border-[#edd6dc] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="inline-block rounded-full border border-[#f0dce1] bg-[#fff7f9] px-3 py-1 text-xs font-medium tracking-wide text-[#b07c89]">
                  AI Employee
                </p>

                <h3 className="mt-4 text-xl font-semibold text-[#8c5a67]">
                  {employee.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#b07c89]">
                  {employee.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#6f5860] sm:text-base">
                  {employee.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-24 rounded-[32px] border border-[#edd6dc] bg-white p-8 shadow-sm sm:p-10">
          <p className="mb-3 inline-block rounded-full border border-[#edd6dc] bg-[#fff7f9] px-4 py-1 text-sm text-[#9c7b85]">
            How It Works
          </p>

          <h2 className="text-3xl font-semibold text-[#8c5a67] sm:text-4xl">
            Your AI beauty team works in 3 simple steps
          </h2>

          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            <div className="rounded-[24px] border border-[#f0dce1] bg-[#fff9fb] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#b07c89]">
                Step 1
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#8c5a67]">
                Pick your AI employee
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6f5860] sm:text-base">
                Choose CaptionBot, ReplyBot, CampaignBot, ContentBot and more
                depending on what your business needs today.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#f0dce1] bg-[#fff9fb] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#b07c89]">
                Step 2
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#8c5a67]">
                Enter your details
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6f5860] sm:text-base">
                Add your service, offer, audience or tone and BeautyBot gets to
                work instantly.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#f0dce1] bg-[#fff9fb] p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#b07c89]">
                Step 3
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#8c5a67]">
                Get content fast
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6f5860] sm:text-base">
                Use your outputs for posts, promotions, replies and content
                planning in seconds instead of spending hours writing.
              </p>
            </div>
          </div>
        </section>

        {/* DEMO PREVIEW SECTION */}
        <div className="mx-auto mt-24 max-w-4xl rounded-[32px] border border-[#edd6dc] bg-white p-6 text-left shadow-sm sm:p-8">
          <div className="text-center">
            <p className="mb-3 inline-block rounded-full border border-[#edd6dc] bg-[#fff7f9] px-4 py-1 text-sm text-[#9c7b85]">
              See Your AI Employees In Action
            </p>

            <h2 className="text-2xl font-semibold text-[#8c5a67] sm:text-3xl">
              See What Your AI Beauty Team Can Create
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6f5860] sm:text-base">
              Here’s an example of how different BeautyBot AI employees can help
              promote a keratin treatment in seconds.
            </p>
          </div>

          <div className="mt-8 rounded-[24px] border border-[#f0dce1] bg-[#fff9fb] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#b07c89]">
              Example: Keratin Treatment Promotion
            </p>

            <div className="mt-4 space-y-6 text-[#6f5860]">
              <div>
                <h3 className="text-base font-semibold text-[#8c5a67]">
                  CaptionBot Output
                </h3>
                <p className="mt-2 text-sm leading-7 sm:text-base">
                  ✨ Say goodbye to frizz and hello to smooth, glossy hair. Our
                  luxury keratin treatment is designed to leave your hair softer,
                  shinier and easier to manage. Perfect for anyone wanting a
                  sleek, polished finish with less styling stress. Book your
                  appointment this week and give your hair the glow-up it
                  deserves. 💖
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#8c5a67]">
                  CampaignBot Output
                </h3>
                <p className="mt-2 text-sm leading-7 sm:text-base">
                  Run a limited-time “Smooth Hair Week” offer with a bonus
                  take-home treatment or a special first-time keratin booking
                  incentive to create urgency and boost appointments.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#8c5a67]">
                  ReplyBot Output
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
              Start your 7-day free trial to unlock your AI beauty team for
              captions, promotions, campaigns, client replies and content
              planning.
            </p>

            <a
              href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
              className="mt-6 inline-block rounded-xl bg-[#d96b8a] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#c85d7b]"
            >
              Start Free Trial
            </a>
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
            to your AI beauty team for just $29.95 per month.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-[24px] border border-[#f0dce1] bg-[#fff9fb] p-6 text-left">
            <ul className="space-y-3 text-sm leading-7 text-[#6f5860] sm:text-base">
              <li>✨ Access to multiple AI employees</li>
              <li>✨ Captions, promos and campaign support</li>
              <li>✨ Fast client reply assistance</li>
              <li>✨ Content planning and idea generation</li>
              <li>✨ Built for salons, clinics, artists and beauty brands</li>
            </ul>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#8c5a67] sm:text-base">
            Less than hiring one team member. Built to help you market faster,
            reply quicker and grow smarter.
          </p>

          <a
            href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
            className="mt-8 inline-block rounded-xl bg-[#d96b8a] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#c85d7b]"
          >
            Start 7-Day Free Trial
          </a>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-[#8c5a67]">
            Ready To Hire Your AI Beauty Team?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#6f5860]">
            Join BeautyBot and give your beauty business AI employees that help
            you create faster, market better and book more.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://buy.stripe.com/8x228l9Hd4v9fC02pXfQI01"
              className="rounded-xl bg-[#d96b8a] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#c85d7b]"
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