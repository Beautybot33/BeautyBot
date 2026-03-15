"use client";

import { useState } from "react";

type HooksResult = {
  intro: string;
  hooks: string[];
};

export default function HooksPage() {
  const [offer, setOffer] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<HooksResult | null>(null);

  async function generateHooks() {
    if (!offer.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/hooks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offer }),
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setResult({
        intro: "Something went wrong connecting to the AI.",
        hooks: [],
      });
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8eaee] to-[#f3d9df] text-[#5c3942]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white/70 px-4 py-2 text-sm text-[#7a5961] shadow-sm transition hover:bg-white"
        >
          ← Back to Dashboard
        </a>

        <div className="rounded-[32px] border border-[#e6c4cc] bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <div className="mb-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8b9c4] text-lg font-bold text-white shadow-sm">
                B
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight">BeautyBot</p>
                <p className="text-sm text-[#8a6a72]">
                  Luxury AI marketing assistant
                </p>
              </div>
            </div>

            <p className="mb-3 inline-block rounded-full border border-[#d9b6bf] bg-white/70 px-4 py-1 text-sm shadow-sm">
              BeautyBot AI
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              TikTok Hook Generator
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#7d5c65]">
              Generate sleek, scroll-stopping hooks for your beauty content.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-[#7a5961]">
              Enter your offer or content topic
            </label>

            <input
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              placeholder="eg: hair extensions, keratin treatment, lash lift"
              className="w-full rounded-2xl border border-[#dcc0c7] bg-white px-4 py-4 text-[#5c3942] outline-none placeholder:text-[#a07d86] focus:border-[#c99ca8] focus:ring-2 focus:ring-[#efd3d9]"
            />

            <button
              onClick={generateHooks}
              disabled={loading || !offer.trim()}
              className="rounded-2xl bg-[#cfa0ab] px-6 py-3 font-medium text-white shadow-sm transition hover:bg-[#bb8d98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "BeautyBot is thinking..." : "Generate Hooks"}
            </button>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold">AI Output</h2>

            {loading ? (
              <div className="rounded-[24px] border border-[#ead2d8] bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#efd3d9] text-lg">
                    ✨
                  </div>
                  <div>
                    <p className="font-semibold text-[#5c3942]">
                      BeautyBot is thinking
                    </p>
                    <p className="text-sm text-[#8a6a72]">
                      Writing scroll-stopping hooks for you...
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <span className="h-3 w-3 animate-bounce rounded-full bg-[#d8a8b3] [animation-delay:-0.3s]" />
                  <span className="h-3 w-3 animate-bounce rounded-full bg-[#d8a8b3] [animation-delay:-0.15s]" />
                  <span className="h-3 w-3 animate-bounce rounded-full bg-[#d8a8b3]" />
                </div>
              </div>
            ) : result ? (
              <div className="grid gap-4">
                <div className="rounded-[24px] border border-[#ead2d8] bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-[#5c3942]">
                    Intro
                  </h3>
                  <p className="leading-7 text-[#6b4b53]">{result.intro}</p>
                </div>

                <div className="rounded-[24px] border border-[#ead2d8] bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold text-[#5c3942]">
                    TikTok Hooks
                  </h3>

                  <ol className="list-decimal space-y-2 pl-5 leading-7 text-[#6b4b53]">
                    {result.hooks.map(
                      (hook, index) =>
                        hook?.trim() && <li key={index}>{hook}</li>
                    )}
                  </ol>
                </div>
              </div>
            ) : (
              <div className="rounded-[24px] border border-[#ead2d8] bg-[#fcf6f8] p-6 text-[#9a7b83]">
                Your AI hooks will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}