"use client";

import { useEffect, useState } from "react";

const employees = [
  {
    key: "Ava",
    role: "Campaign Strategist",
    description: "Campaigns, launches, and premium offer ideas.",
  },
  {
    key: "Mia",
    role: "Caption Writer",
    description: "Captions, hooks, hashtags, and CTAs.",
  },
  {
    key: "Skye",
    role: "Hook Specialist",
    description: "Scroll-stopping hooks for Reels and TikTok.",
  },
  {
    key: "Luna",
    role: "Content Planner",
    description: "Weekly beauty content plans and structure.",
  },
  {
    key: "Sienna",
    role: "DM Assistant",
    description: "Warm booking replies and polished client messages.",
  },
];

const employeeMeta: Record<
  string,
  {
    personality: string;
    starterPrompt: string;
  }
> = {
  Ava: {
    personality: "Elegant, strategic, luxury-focused",
    starterPrompt: "Plan a luxury promotion for keratin treatments this month",
  },
  Mia: {
    personality: "Polished, feminine, expressive",
    starterPrompt:
      "Write a polished caption for a hair extensions transformation post",
  },
  Skye: {
    personality: "Sharp, current, attention-grabbing",
    starterPrompt: "Give me 5 scroll-stopping hooks for lash lift content",
  },
  Luna: {
    personality: "Organised, thoughtful, trend-aware",
    starterPrompt: "Plan a 7-day content week for brow lamination",
  },
  Sienna: {
    personality: "Warm, polished, client-ready",
    starterPrompt:
      "Reply to a client asking how much hair extensions cost and if I have availability this week",
  },
};

type ResponseData = any;

export default function CommandPage() {
  const [selectedEmployee, setSelectedEmployee] = useState("Ava");
  const [input, setInput] = useState(employeeMeta["Ava"].starterPrompt);
  const [businessContext, setBusinessContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [history, setHistory] = useState<ResponseData[]>([]);

  const currentEmployee = employees.find((e) => e.key === selectedEmployee)!;

  useEffect(() => {
    const savedProfile = localStorage.getItem("beautybot_profile");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);

      const profileText = `Business name: ${parsed.businessName || ""}
Location: ${parsed.location || ""}
Services: ${parsed.services || ""}
Tone: ${parsed.tone || ""}
Audience: ${parsed.audience || ""}`;

      setBusinessContext(profileText);
    }

    const savedHistory = localStorage.getItem("beautybot_command_history");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  function handleEmployeeChange(employeeName: string) {
    setSelectedEmployee(employeeName);
    setInput(employeeMeta[employeeName].starterPrompt);
    setResponse(null);
  }

  function saveHistory(updatedHistory: ResponseData[]) {
    setHistory(updatedHistory);
    localStorage.setItem(
      "beautybot_command_history",
      JSON.stringify(updatedHistory)
    );
  }

  function getCopyText(data: ResponseData | null) {
    if (!data) return "";

    if (data.type === "full_campaign") {
      return `CAMPAIGN STRATEGY

Campaign title: ${data.campaign.title}
Offer angle: ${data.campaign.offerAngle}
Promo idea: ${data.campaign.promoIdea}
Call to action: ${data.campaign.cta}

HOOKS

Best hook: ${data.hooks.bestHook}
Hook 1: ${data.hooks.hook1}
Hook 2: ${data.hooks.hook2}
Hook 3: ${data.hooks.hook3}
Hook 4: ${data.hooks.hook4}
Hook 5: ${data.hooks.hook5}
Why it works: ${data.hooks.whyItWorks}

CAPTION

Hook: ${data.caption.hook}
Caption: ${data.caption.caption}
Hashtags: ${data.caption.hashtags}
CTA: ${data.caption.cta}

CONTENT PLAN

Week theme: ${data.planner.weekTheme}
Day 1: ${data.planner.day1}
Day 2: ${data.planner.day2}
Day 3: ${data.planner.day3}
Day 4: ${data.planner.day4}
Day 5: ${data.planner.day5}
Day 6: ${data.planner.day6}
Day 7: ${data.planner.day7}`;
    }

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
    if (item.type === "full_campaign")
      return item.campaign?.title || "Full Campaign";
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

  function saveResult() {
    if (!response) return;

    const existing = localStorage.getItem("beautybot_saved_results");
    const parsed = existing ? JSON.parse(existing) : [];

    const newItem = {
      savedAt: new Date().toLocaleString(),
      content: getCopyText(response),
    };

    localStorage.setItem(
      "beautybot_saved_results",
      JSON.stringify([newItem, ...parsed].slice(0, 50))
    );

    alert("Result saved");
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
          employee: selectedEmployee,
          role: currentEmployee.role,
          personality: employeeMeta[selectedEmployee].personality,
          prompt: input,
          context: businessContext,
        }),
      });

      const data = await res.json();
      setResponse(data);

      const updatedHistory = [data, ...history].slice(0, 10);
      saveHistory(updatedHistory);
    } catch {
      const errorData = {
        type: "text",
        reply: "Something went wrong talking to your AI employee.",
      };
      setResponse(errorData);

      const updatedHistory = [errorData, ...history].slice(0, 10);
      saveHistory(updatedHistory);
    }

    setLoading(false);
  }

  async function generateFullCampaign() {
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/generate-full-campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          context: businessContext,
        }),
      });

      const data = await res.json();
      setResponse(data);

      const updatedHistory = [data, ...history].slice(0, 10);
      saveHistory(updatedHistory);
    } catch {
      const errorData = {
        type: "text",
        reply: "Something went wrong generating the full campaign.",
      };
      setResponse(errorData);

      const updatedHistory = [errorData, ...history].slice(0, 10);
      saveHistory(updatedHistory);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8eaee] to-[#f3d9df] text-[#5c3942]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white/70 px-4 py-2 text-sm text-[#7a5961] shadow-sm transition hover:bg-white"
        >
          ← Back to dashboard
        </a>

        <div className="mb-8 rounded-[34px] border border-[#edd6dc] bg-[#fff7f9] p-8 shadow-[0_10px_30px_rgba(140,90,103,0.08)]">
          <p className="mb-4 inline-block rounded-full border border-[#edd6dc] bg-white px-4 py-1 text-sm text-[#9c7b85] shadow-sm">
            BeautyBot Command Center
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-[#8c5a67]">
            Ask Your AI Beauty Team
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#7a646c]">
            Choose an employee, describe what you need, and let BeautyBot handle
            the strategy, content, or client messaging.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
          <div className="rounded-[30px] border border-[#edd6dc] bg-[#fff7f9] p-6 shadow-[0_10px_24px_rgba(140,90,103,0.06)]">
            <h2 className="mb-4 text-2xl font-semibold text-[#8c5a67]">
              AI Employees
            </h2>

            <div className="space-y-3">
              {employees.map((employee) => {
                const active = selectedEmployee === employee.key;

                return (
                  <button
                    key={employee.key}
                    onClick={() => handleEmployeeChange(employee.key)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-[#d98fa1] bg-white shadow-sm"
                        : "border-[#edd6dc] bg-[#fff7f9] hover:bg-white"
                    }`}
                  >
                    <p className="font-semibold text-[#8c5a67]">{employee.key}</p>
                    <p className="text-sm text-[#9c7b85]">{employee.role}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6f5860]">
                      {employee.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-[#edd6dc] bg-[#fff7f9] p-6 shadow-[0_10px_24px_rgba(140,90,103,0.06)]">
              <h2 className="mb-2 text-2xl font-semibold text-[#8c5a67]">
                {selectedEmployee}
              </h2>
              <p className="mb-5 text-[#9c7b85]">{currentEmployee.role}</p>

              <div className="mb-4">
                <p className="mb-2 text-sm text-[#8a6a72]">
                  Business context (optional)
                </p>

                <input
                  value={businessContext}
                  onChange={(e) => setBusinessContext(e.target.value)}
                  placeholder="Example: Luxury Melbourne salon specialising in balayage, extensions, and premium feminine branding"
                  className="w-full rounded-xl border border-[#edd6dc] bg-white px-4 py-3 text-[#6f5860] outline-none focus:border-[#d98fa1] focus:ring-2 focus:ring-[#f4d9e0]"
                />
              </div>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={6}
                className="w-full rounded-2xl border border-[#edd6dc] bg-white px-4 py-4 text-[#6f5860] outline-none focus:border-[#d98fa1] focus:ring-2 focus:ring-[#f4d9e0]"
                placeholder={`Ask ${selectedEmployee} something...`}
              />

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={askEmployee}
                  disabled={loading || !input.trim()}
                  className="rounded-xl bg-[#d98fa1] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#c97f92] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading
                    ? `Asking ${selectedEmployee}...`
                    : `Ask ${selectedEmployee}`}
                </button>

                <button
                  onClick={generateFullCampaign}
                  disabled={loading || !input.trim()}
                  className="rounded-xl border border-[#d98fa1] bg-white px-5 py-3 text-sm font-medium text-[#8c5a67] shadow-sm transition hover:bg-[#fff7f9] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  ✨ Generate Full Campaign
                </button>

                <a
                  href="/"
                  className="rounded-xl border border-[#edd6dc] bg-white px-5 py-3 text-sm font-medium text-[#8c5a67] shadow-sm hover:bg-[#fff7f9]"
                >
                  Back to dashboard
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#edd6dc] bg-[#fff7f9] p-6 shadow-[0_10px_24px_rgba(140,90,103,0.06)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-[#8c5a67]">
                  Response
                </h2>

                {!loading && response && (
                  <div className="flex gap-3">
                    <button
                      onClick={copyResult}
                      className="rounded-xl bg-[#e8cdd3] px-4 py-2 text-sm text-[#5c3942] transition hover:bg-[#dfbfc7]"
                    >
                      📋 Copy result
                    </button>

                    <button
                      onClick={saveResult}
                      className="rounded-xl bg-[#f2dde2] px-4 py-2 text-sm text-[#5c3942] transition hover:bg-[#e8cdd3]"
                    >
                      ♡ Save result
                    </button>
                  </div>
                )}
              </div>

              {loading ? (
                <p className="text-[#8d727a]">
                  {selectedEmployee} is thinking...
                </p>
              ) : !response ? (
                <p className="text-[#8d727a]">
                  Your AI employee response will appear here.
                </p>
              ) : response?.type === "full_campaign" ? (
                <div className="space-y-8 text-[#6f5860]">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-[#8c5a67]">
                      Ava — Campaign Strategy
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Campaign title</p>
                        <p>{response.campaign.title}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Offer angle</p>
                        <p>{response.campaign.offerAngle}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Promo idea</p>
                        <p>{response.campaign.promoIdea}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Call to action</p>
                        <p>{response.campaign.cta}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-[#8c5a67]">
                      Skye — Hooks
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Best hook</p>
                        <p>{response.hooks.bestHook}</p>
                      </div>
                      <div><p>{response.hooks.hook1}</p></div>
                      <div><p>{response.hooks.hook2}</p></div>
                      <div><p>{response.hooks.hook3}</p></div>
                      <div><p>{response.hooks.hook4}</p></div>
                      <div><p>{response.hooks.hook5}</p></div>
                      <div>
                        <p className="font-semibold">Why it works</p>
                        <p>{response.hooks.whyItWorks}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-[#8c5a67]">
                      Mia — Caption
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Hook</p>
                        <p>{response.caption.hook}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Caption</p>
                        <p>{response.caption.caption}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Hashtags</p>
                        <p>{response.caption.hashtags}</p>
                      </div>
                      <div>
                        <p className="font-semibold">CTA</p>
                        <p>{response.caption.cta}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-[#8c5a67]">
                      Luna — Content Plan
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Week theme</p>
                        <p>{response.planner.weekTheme}</p>
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">Day 1:</span>{" "}
                          {response.planner.day1}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">Day 2:</span>{" "}
                          {response.planner.day2}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">Day 3:</span>{" "}
                          {response.planner.day3}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">Day 4:</span>{" "}
                          {response.planner.day4}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">Day 5:</span>{" "}
                          {response.planner.day5}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">Day 6:</span>{" "}
                          {response.planner.day6}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-semibold">Day 7:</span>{" "}
                          {response.planner.day7}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : response?.type === "campaign" ? (
                <div className="space-y-4 text-[#6f5860]">
                  <div>
                    <p className="font-semibold text-[#8c5a67]">
                      Campaign title
                    </p>
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
                    <p className="font-semibold text-[#8c5a67]">
                      Call to action
                    </p>
                    <p>{response.cta}</p>
                  </div>
                </div>
              ) : response?.type === "caption" ? (
                <div className="space-y-4 text-[#6f5860]">
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
                <div className="space-y-4 text-[#6f5860]">
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
                    <p className="font-semibold text-[#8c5a67]">
                      Why it works
                    </p>
                    <p>{response.whyItWorks}</p>
                  </div>
                </div>
              ) : response?.type === "planner" ? (
                <div className="space-y-4 text-[#6f5860]">
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
                <div className="space-y-4 text-[#6f5860]">
                  <div>
                    <p className="font-semibold text-[#8c5a67]">Reply</p>
                    <p>{response.reply}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#8c5a67]">Follow up</p>
                    <p>{response.followUp}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#8c5a67]">
                      Booking CTA
                    </p>
                    <p>{response.bookingCta}</p>
                  </div>
                </div>
              ) : (
                <p className="whitespace-pre-wrap leading-8 text-[#6f5860]">
                  {response.reply}
                </p>
              )}
            </div>

            {history.length > 0 && (
              <div className="rounded-[30px] border border-[#edd6dc] bg-[#fff7f9] p-6 shadow-[0_10px_24px_rgba(140,90,103,0.06)]">
                <h3 className="mb-4 text-2xl font-semibold text-[#8c5a67]">
                  Recent Results
                </h3>

                <div className="space-y-3">
                  {history.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-[#f0dce1] bg-white px-4 py-3 text-sm text-[#6b4b53]"
                    >
                      {getHistoryLabel(item)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}