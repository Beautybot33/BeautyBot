import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

const employees = [
  {
    name: "Ava",
    role: "Campaign Strategist",
    description:
      "Design powerful beauty promotions, launches, and offer angles for your business.",
    href: "/team/ava",
    icon: "✨",
  },
  {
    name: "Mia",
    role: "Caption Writer",
    description:
      "Craft polished captions for posts, promos, and premium beauty services.",
    href: "/team/mia",
    icon: "💬",
  },
  {
    name: "Skye",
    role: "Hook Specialist",
    description:
      "Create scroll-stopping hooks for Reels and TikTok content that grabs attention fast.",
    href: "/team/skye",
    icon: "🎥",
  },
  {
    name: "Luna",
    role: "Content Planner",
    description:
      "Plan weekly content that attracts, converts, and builds your beauty brand.",
    href: "/team/luna",
    icon: "📅",
  },
  {
    name: "Sienna",
    role: "DM Assistant",
    description:
      "Reply instantly to enquiries with warm, polished, booking-ready responses.",
    href: "/team/sienna",
    icon: "📲",
  },
]

const tools = [
  {
    title: "Caption Generator",
    description:
      "Create engaging captions for your social media posts with AI-powered suggestions tailored to your brand.",
    href: "/caption",
    icon: "✍️",
  },
  {
    title: "Campaign Generator",
    description:
      "Design complete marketing campaigns with strategic messaging and visual concepts for maximum impact.",
    href: "/campaign",
    icon: "📣",
  },
  {
    title: "Content Planner",
    description:
      "Build weekly beauty content plans to stay consistent, visible, and on brand.",
    href: "/calendar",
    icon: "📅",
  },
  {
    title: "Client Reply Assistant",
    description:
      "Craft professional, personalized responses to client inquiries with intelligent AI assistance.",
    href: "/dm",
    icon: "💌",
  },
]

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Command Center", href: "/command" },
  { label: "Client Profile", href: "/profile" },
  { label: "Saved Results", href: "/saved" },
  { label: "AI Employees", href: "#employees" },
  { label: "Tools", href: "#tools" },
  { label: "Campaigns", href: "/campaign" },
  { label: "Captions", href: "/caption" },
]

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-[#edd6dc] bg-[#fff7f9]/90 px-6 py-8 shadow-[6px_0_24px_rgba(140,90,103,0.04)] lg:flex">
          <div className="mb-10 flex items-center gap-3">
            <img
              src="/beautybot-logo.jpg"
              alt="BeautyBot"
              className="h-12 w-12 rounded-full border border-[#edd6dc] object-cover"
            />

            <div>
              <p className="text-lg font-semibold tracking-tight text-[#8c5a67]">
                BeautyBot
              </p>
              <p className="text-sm text-[#9c7b85]">
                AI Beauty Marketing System
              </p>
            </div>
          </div>

          <nav className="space-y-2">
            {sidebarLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-[#7e6670] transition hover:bg-[#f4d9e0] hover:text-[#8c5a67]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 rounded-[26px] border border-[#edd6dc] bg-white p-5 shadow-sm">
            <p className="mb-2 text-sm font-semibold text-[#8c5a67]">
              AI Team Status
            </p>
            <p className="text-sm leading-7 text-[#7a646c]">
              5 premium AI employees ready to support campaigns, content, client
              replies, and full campaign generation.
            </p>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-[#edd6dc] bg-[#fff7f9]/80 px-6 py-5 backdrop-blur md:px-8">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[#9c7b85]">BeautyBot Dashboard</p>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#8c5a67]">
                  Your AI Beauty Team
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-3">
<a
  href="/command"
  className="inline-flex items-center justify-center rounded-xl bg-[#e98aa4] px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[#df6f8d]"
>
  <span className="text-white">Launch Command Center</span>
</a>

                <a
                  href="#employees"
                  className="rounded-xl border border-[#edd6dc] bg-white px-5 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9]"
                >
                  View Employees
                </a>

             

                <form action="/auth/logout" method="post">
                  <button className="rounded-xl bg-[#e98aa4] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#df6f8d]">
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
            <section className="mb-10 rounded-[34px] border border-[#edd6dc] bg-white p-10 shadow-[0_30px_80px_rgba(140,90,103,0.15)] md:p-12">
              <p className="mb-4 inline-block rounded-full border border-[#edd6dc] bg-white px-4 py-1 text-sm text-[#9c7b85] shadow-sm">
                Beauty AI System
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#8c5a67] md:text-6xl">
                Meet Your AI Beauty Team
              </h2>

              <p className="mt-5 max-w-4xl text-lg leading-8 text-[#7a646c]">
                Hire your own AI marketing team. Each employee specialises in helping
                beauty businesses grow through content, campaigns, promotions,
                and client conversations.
              </p>
            </section>

            <section id="employees" className="mb-14">
              <div className="mb-6">
                <h2 className="text-3xl font-semibold tracking-tight text-[#8c5a67]">
                  AI Employees
                </h2>
                <p className="mt-2 text-[#8d727a]">
                  Choose the employee best suited to the task you want handled.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {employees.map((employee) => (
                  <div
                    key={employee.name}
                    className="rounded-[30px] border border-[#edd6dc] bg-white p-6 shadow-[0_10px_24px_rgba(140,90,103,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(140,90,103,0.18)]"
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f4d9e0] to-[#efd0d9] text-2xl shadow-sm">
                        {employee.icon}
                      </div>

                      <div>
                        <p className="text-lg font-semibold text-[#8c5a67]">
                          {employee.name}
                        </p>
                        <p className="text-sm text-[#9c7b85]">{employee.role}</p>
                      </div>
                    </div>

                    <div className="mb-4 rounded-2xl border border-[#f0dce1] bg-white px-4 py-3 text-sm text-[#8d727a]">
                      AI Module: {employee.role}
                    </div>

                    <p className="mb-6 leading-7 text-[#6f5860]">
                      {employee.description}
                    </p>

<a
  href={employee.href}
  className="inline-flex items-center justify-center rounded-xl bg-[#e98aa4] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#df6f8d]"
>
  <span className="text-white">Open Employee →</span>
</a>
                  </div>
                ))}
              </div>
            </section>

            <section id="tools">
              <div className="mb-6">
                <h2 className="text-3xl font-semibold tracking-tight text-[#8c5a67]">
                  BeautyBot Tools
                </h2>
                <p className="mt-2 text-[#8d727a]">
                  Your core AI tools for beauty marketing and client communication.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {tools.map((tool) => (
                  <a
                    key={tool.title}
                    href={tool.href}
                    className="rounded-[30px] border border-[#edd6dc] bg-[#fff7f9] p-6 shadow-[0_10px_24px_rgba(140,90,103,0.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(140,90,103,0.09)]"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4d9e0] text-2xl shadow-sm">
                      {tool.icon}
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-[#8c5a67]">
                      {tool.title}
                    </h3>

                    <p className="leading-7 text-[#6f5860]">{tool.description}</p>

                    <div className="mt-5 text-sm font-medium text-[#b36f81]">
                      Open tool →
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}