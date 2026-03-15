"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

const employees = {
  ava: {
    name: "Ava",
    role: "Campaign Strategist",
    icon: "✨",
    personality: "Elegant, strategic, luxury-focused",
    bio: "Ava is your luxury marketing strategist. She helps beauty businesses plan campaigns, promotions, launches, and irresistible offers.",
    specialties: [
      "Launch campaigns",
      "Seasonal promotions",
      "Offer strategy",
      "Beauty marketing angles",
    ],
    bestFor: [
      "Service launches",
      "Monthly promotions",
      "Slow-week offers",
      "Premium beauty positioning",
    ],
    currentlyHelpingWith:
      "Designing polished campaigns that make beauty businesses feel premium, visible, and in demand.",
    toolHref: "/campaign",
    buttonLabel: "Start Campaign Strategy",
    accent: "from-[#f3d7de] to-[#ead0d6]",
    starterPrompt:
      "Plan a luxury promotion for keratin treatments this month",
  },
  mia: {
    name: "Mia",
    role: "Caption Writer",
    icon: "💬",
    personality: "Polished, feminine, expressive",
    bio: "Mia writes polished, elegant captions for beauty businesses. She turns simple ideas into content that feels premium and conversion-ready.",
    specialties: [
      "Instagram captions",
      "Promo copy",
      "Service-focused writing",
      "Luxury beauty tone",
    ],
    bestFor: [
      "Instagram posts",
      "Promotional content",
      "Luxury tone of voice",
      "Brand-aligned captions",
    ],
    currentlyHelpingWith:
      "Writing refined captions that sound polished, on-brand, and ready to post.",
    toolHref: "/caption",
    buttonLabel: "Start Writing Captions",
    accent: "from-[#f8dfe4] to-[#ecd5dc]",
    starterPrompt:
      "Write a polished caption for a hair extensions transformation post",
  },
  skye: {
    name: "Skye",
    role: "Hook Specialist",
    icon: "🎥",
    personality: "Sharp, current, attention-grabbing",
    bio: "Skye is your hook expert. She creates short, sharp opening lines designed to stop the scroll and boost views across TikTok and Reels.",
    specialties: [
      "TikTok hooks",
      "Reel openings",
      "Scroll-stopping lines",
      "Beauty content angles",
    ],
    bestFor: [
      "Reels and TikTok",
      "Before-and-after content",
      "Attention-grabbing intros",
      "High-view beauty content",
    ],
    currentlyHelpingWith:
      "Turning beauty content ideas into strong openings that immediately grab attention.",
    toolHref: "/hooks",
    buttonLabel: "Start Hook Writing",
    accent: "from-[#f1d9df] to-[#e9d0d7]",
    starterPrompt:
      "Give me 5 scroll-stopping hooks for lash lift content",
  },
  luna: {
    name: "Luna",
    role: "Content Planner",
    icon: "📅",
    personality: "Organised, thoughtful, trend-aware",
    bio: "Luna builds structured weekly content plans that help beauty brands stay visible, organised, and consistent online.",
    specialties: [
      "Weekly planning",
      "7-day content calendars",
      "Beauty posting strategy",
      "Content structure",
    ],
    bestFor: [
      "Weekly planning",
      "Consistency",
      "Content batching",
      "Beauty content schedules",
    ],
    currentlyHelpingWith:
      "Organising your content into a clear weekly plan that keeps your brand active and visible.",
    toolHref: "/calendar",
    buttonLabel: "Start Content Planning",
    accent: "from-[#f4dce2] to-[#ead3da]",
    starterPrompt:
      "Plan a 7-day content week for brow lamination",
  },
  sienna: {
    name: "Sienna",
    role: "DM Assistant",
    icon: "📲",
    personality: "Warm, polished, client-ready",
    bio: "Sienna handles polished client-facing replies. She helps you answer enquiries, pricing questions, and booking messages with ease.",
    specialties: [
      "Client enquiries",
      "Booking replies",
      "Pricing responses",
      "Warm professional tone",
    ],
    bestFor: [
      "Instagram DMs",
      "Booking enquiries",
      "Client follow-ups",
      "Polished salon replies",
    ],
    currentlyHelpingWith:
      "Writing smooth, booking-ready replies that sound warm, professional, and on-brand.",
    toolHref: "/dm",
    buttonLabel: "Start Writing Replies",
    accent: "from-[#f6dfe5] to-[#ecd7dd]",
    starterPrompt:
      "Reply to a client asking how much hair extensions cost and if I have availability this week",
  },
} as const;

type ResponseData = any;

export default function EmployeePage() {
  const params = useParams();
  const slug = String(params.slug || "");
  const employee = employees[slug as keyof typeof employees];

  const [input, setInput] = useState(employee?.starterPrompt ?? "");
  const [businessContext, setBusinessContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [history, setHistory] = useState<ResponseData[]>([]);

  if (!employee) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#f8eaee] to-[#f3d9df] px-6 py-10 text-[#5c3942]">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-[#e6c4cc] bg-white/85 p-8 shadow-sm">
          <h1 className="text-3xl font-semibold">Employee not found</h1>
          <a
            href="/"
            className="mt-6 inline-block rounded-full border border-[#d9b6bf] bg-white/70 px-4 py-2 text-sm text-[#7a5961]"
          >
            ← Back to team
          </a>
        </div>
      </main>
    );
  }

  function getCopyText(data: ResponseData | null) {
    if (!data) return "";

    if (data.type === "campaign") {
      return `Campaign title: ${data.title}

Offer angle: ${data.offerAngle}

Promo idea: ${data.promoIdea}

Call to action: ${data.cta}`;
    }

    if (data.type === "caption") {
      return `Hook: ${data.hook}

Caption: ${data.caption}

Hashtags: ${data.hashtags}

CTA: ${data.cta}`;
    }

    if (data.type === "hooks") {
      return `Best hook: ${data.bestHook}

Hook 1: ${data.hook1}
Hook 2: ${data.hook2}
Hook 3: ${data.hook3}
Hook 4: ${data.hook4}
Hook 5: ${data.hook5}

Why it works: ${data.whyItWorks}`;
    }

    if (data.type === "planner") {
      return `Week theme: ${data.weekTheme}

Day 1: ${data.day1}
Day 2: ${data.day2}
Day 3: ${data.day3}
Day 4: ${data.day4}
Day 5: ${data.day5}
Day 6: ${data.day6}
Day 7: ${data.day7}`;
    }

    if (data.type === "dm") {
      return `Reply: ${data.reply}

Follow up: ${data.followUp}

Booking CTA: ${data.bookingCta}`;
    }

    return data.reply || "";
  }

  function getHistoryLabel(item: ResponseData) {
    if (item.type === "campaign") return item.title;
    if (item.type === "caption") return item.hook;
    if (item.type === "hooks") return item.bestHook;
    if (item.type === "planner") return item.weekTheme;
    if (item.type === "dm") return item.reply;
    return item.reply || "Saved result";
  }

  async function copyResult() {
    const text = getCopyText(response);
    if (!text) return;
    await navigator.clipboard.writeText(text);
  }

  async function askEmployee() {
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/generate-employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employee: employee.name,
          role: employee.role,
          personality: employee.personality,
          prompt: input,
          context: businessContext,
        }),
      });

      const data = await res.json();
      setResponse(data);
      setHistory((prev) => [data, ...prev].slice(0, 10));
    } catch {
      const errorData = {
        type: "text",
        reply: "Something went wrong talking to your AI employee.",
      };
      setResponse(errorData);
      setHistory((prev) => [errorData, ...prev].slice(0, 10));
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8eaee] to-[#f3d9df] text-[#5c3942]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white/70 px-4 py-2 text-sm text-[#7a5961] shadow-sm transition hover:bg-white"
        >
          ← Back to AI Team
        </a>

        <div className="rounded-[32px] border border-[#e6c4cc] bg-white/85 p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 flex items-start gap-5">
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-br ${employee.accent} text-4xl shadow-sm`}
                >
                  {employee.icon}
                </div>

                <div className="pt-1">
                  <p className="mb-2 inline-block rounded-full border border-[#d9b6bf] bg-[#fcf6f8] px-3 py-1 text-sm text-[#7a5961]">
                    AI Employee
                  </p>
                  <h1 className="text-5xl font-semibold tracking-tight">
                    {employee.name}
                  </h1>
                  <p className="mt-2 text-xl text-[#8a6a72]">{employee.role}</p>
                  <p className="mt-3 text-sm tracking-wide text-[#9a7b83]">
                    {employee.personality}
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#ead2d8] bg-[#fcf6f8] p-6">
                <h2 className="mb-3 text-xl font-semibold">About {employee.name}</h2>
                <p className="leading-8 text-[#6b4b53]">{employee.bio}</p>
              </div>

              <div className="mt-6 rounded-[24px] border border-[#ead2d8] bg-white p-6">
                <h2 className="mb-3 text-xl font-semibold">Currently helping with</h2>
                <p className="leading-8 text-[#6b4b53]">
                  {employee.currentlyHelpingWith}
                </p>
              </div>

              <div className="mt-6 rounded-[24px] border border-[#ead2d8] bg-white p-6">
                <h2 className="mb-4 text-xl font-semibold">Ask {employee.name}</h2>

                <div className="mb-4">
                  <p className="mb-2 text-sm text-[#8a6a72]">
                    Business context (optional)
                  </p>

                  <input
                    value={businessContext}
                    onChange={(e) => setBusinessContext(e.target.value)}
                    placeholder="Example: Luxury Melbourne salon specialising in balayage, extensions, and premium feminine branding"
                    className="w-full rounded-xl border border-[#dcc0c7] bg-white px-4 py-3 text-[#5c3942] outline-none placeholder:text-[#a07d86] focus:border-[#c99ca8] focus:ring-2 focus:ring-[#efd3d9]"
                  />
                </div>

                <textarea
                  value={input}
                  onChange={(e: any) => setInput(e.target.value)}
                  rows={5}
                  className="w-full rounded-2xl border border-[#dcc0c7] bg-white px-4 py-4 text-[#5c3942] outline-none placeholder:text-[#a07d86] focus:border-[#c99ca8] focus:ring-2 focus:ring-[#efd3d9]"
                  placeholder={`Ask ${employee.name} something...`}
                />

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={askEmployee}
                    disabled={loading || !input.trim()}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#cfa0ab] px-6 py-3 font-medium text-white shadow-sm transition hover:bg-[#bb8d98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? `Asking ${employee.name}...` : `Ask ${employee.name}`}
                  </button>

                  <a
                    href={employee.toolHref}
                    className="inline-flex items-center justify-center rounded-2xl border border-[#dcc0c7] bg-[#fcf6f8] px-6 py-3 font-medium text-[#7a5961] transition hover:bg-white"
                  >
                    Or open tool →
                  </a>
                </div>
              </div>

              {(loading || response) && (
                <div className="mt-6 rounded-[24px] border border-[#ead2d8] bg-white p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold">
                      {employee.name}'s response
                    </h2>

                    {!loading && response && (
                      <button
                        onClick={copyResult}
                        className="rounded-xl bg-[#e8cdd3] px-4 py-2 text-sm text-[#5c3942] transition hover:bg-[#dfbfc7]"
                      >
                        📋 Copy result
                      </button>
                    )}
                  </div>

                  {loading ? (
                    <p className="text-[#8a6a72]">{employee.name} is thinking...</p>
                  ) : response?.type === "campaign" ? (
                    <div className="space-y-4 text-[#6b4b53]">
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Campaign title</p>
                        <p>{response.title}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Offer angle</p>
                        <p>{response.offerAngle}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Promo idea</p>
                        <p>{response.promoIdea}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Call to action</p>
                        <p>{response.cta}</p>
                      </div>
                    </div>
                  ) : response?.type === "caption" ? (
                    <div className="space-y-4 text-[#6b4b53]">
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Hook</p>
                        <p>{response.hook}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Caption</p>
                        <p>{response.caption}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Hashtags</p>
                        <p>{response.hashtags}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">CTA</p>
                        <p>{response.cta}</p>
                      </div>
                    </div>
                  ) : response?.type === "hooks" ? (
                    <div className="space-y-4 text-[#6b4b53]">
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Best hook</p>
                        <p>{response.bestHook}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Hook 1</p>
                        <p>{response.hook1}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Hook 2</p>
                        <p>{response.hook2}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Hook 3</p>
                        <p>{response.hook3}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Hook 4</p>
                        <p>{response.hook4}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Hook 5</p>
                        <p>{response.hook5}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Why it works</p>
                        <p>{response.whyItWorks}</p>
                      </div>
                    </div>
                  ) : response?.type === "planner" ? (
                    <div className="space-y-4 text-[#6b4b53]">
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Week theme</p>
                        <p>{response.weekTheme}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Day 1</p>
                        <p>{response.day1}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Day 2</p>
                        <p>{response.day2}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Day 3</p>
                        <p>{response.day3}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Day 4</p>
                        <p>{response.day4}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Day 5</p>
                        <p>{response.day5}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Day 6</p>
                        <p>{response.day6}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Day 7</p>
                        <p>{response.day7}</p>
                      </div>
                    </div>
                  ) : response?.type === "dm" ? (
                    <div className="space-y-4 text-[#6b4b53]">
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Reply</p>
                        <p>{response.reply}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Follow up</p>
                        <p>{response.followUp}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#8c5a67]">Booking CTA</p>
                        <p>{response.bookingCta}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap leading-8 text-[#6b4b53]">
                      {response?.reply || "No response returned."}
                    </p>
                  )}
                </div>
              )}

              {history.length > 0 && (
                <div className="mt-6 rounded-[24px] border border-[#ead2d8] bg-white p-6">
                  <h3 className="mb-4 text-xl font-semibold">Recent Results</h3>

                  <div className="space-y-3">
                    {history.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-[#f0dce1] bg-[#fcf6f8] px-4 py-3 text-sm text-[#6b4b53]"
                      >
                        {getHistoryLabel(item)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-[24px] border border-[#ead2d8] bg-white p-6">
                <h2 className="mb-3 text-xl font-semibold">Specialties</h2>
                <ul className="space-y-3 text-[#6b4b53]">
                  {employee.specialties.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-[#c38f9b]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] border border-[#ead2d8] bg-white p-6">
                <h2 className="mb-3 text-xl font-semibold">Best for</h2>
                <ul className="space-y-3 text-[#6b4b53]">
                  {employee.bestFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-[#c38f9b]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}