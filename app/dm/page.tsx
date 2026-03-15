"use client";

import { useState } from "react";

type DmResult = {
  reply: string;
};

export default function DmPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DmResult | null>(null);

  async function generateReply() {
    if (!message.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/dm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setResult({
        reply: "Something went wrong connecting to the AI.",
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
              DM Reply Writer
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#7d5c65]">
              Generate polished replies for client enquiries, bookings, and pricing messages.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-[#7a5961]">
              Paste the client message
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="eg: Hi, how much are your hair extensions?"
              rows={6}
              className="w-full rounded-2xl border border-[#dcc0c7] bg-white px-4 py-4 text-[#5c3942] outline-none placeholder:text-[#a07d86] focus:border-[#c99ca8] focus:ring-2 focus:ring-[#efd3d9]"
            />

            <button
              onClick={generateReply}
              disabled={loading || !message.trim()}
              className="rounded-2xl bg-[#cfa0ab] px-6 py-3 font-medium text-white shadow-sm transition hover:bg-[#bb8d98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "BeautyBot is thinking..." : "Generate Reply"}
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
                      Writing a polished client reply...
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
              <div className="rounded-[24px] border border-[#ead2d8] bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-[#5c3942]">
                  Suggested Reply
                </h3>
                <p className="whitespace-pre-wrap leading-7 text-[#6b4b53]">
                  {result.reply}
                </p>
              </div>
            ) : (
              <div className="rounded-[24px] border border-[#ead2d8] bg-[#fcf6f8] p-6 text-[#9a7b83]">
                Your AI client reply will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}