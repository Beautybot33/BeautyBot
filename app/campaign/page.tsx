"use client";
import { useState } from "react";

export default function CampaignPage() {
  const [offer, setOffer] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generatePlan() {
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offer }),
      });

      const data = await res.json();
      setResult(data.result || "No result returned.");
    } catch {
      setResult("Something went wrong connecting to the AI.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f7e7eb] text-[#5f3b43]">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white/70 px-4 py-2 text-sm text-[#7a5961] hover:bg-white"
        >
          ← Back to Dashboard
        </a>

        <div className="rounded-[32px] border border-[#e1c3ca] bg-white/70 p-8 shadow-sm">
          <div className="mb-8">
            <p className="mb-3 inline-block rounded-full border border-[#e1c3ca] bg-[#f9eef1] px-4 py-1 text-sm">
              BeautyBot AI
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Campaign Generator
            </h1>

            <p className="mt-3 max-w-2xl text-lg text-[#7a5961]">
              Generate a luxe AI marketing campaign for your beauty offer.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-[#7a5961]">
              Enter your offer
            </label>

            <input
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              placeholder="eg: keratin treatment, hair extensions, spray tan package"
              className="w-full rounded-2xl border border-[#dcc0c7] bg-white px-4 py-4 text-[#5f3b43] outline-none placeholder:text-[#a07d86] focus:border-[#c99ca8] focus:ring-2 focus:ring-[#efd3d9]"
            />

            <button
              onClick={generatePlan}
              className="rounded-2xl bg-[#cfa0ab] px-6 py-3 font-medium text-white transition hover:bg-[#bb8d98] disabled:opacity-60"
              disabled={loading || !offer.trim()}
            >
              {loading ? "Generating..." : "Generate Campaign"}
            </button>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#ead2d8] bg-[#fcf6f8] p-6">
            <h2 className="mb-3 text-xl font-semibold">AI Output</h2>

            {result ? (
              <pre className="whitespace-pre-wrap font-sans text-[#6b4b53]">
                {result}
              </pre>
            ) : (
              <p className="text-[#9a7b83]">
                Your AI campaign will appear here.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}