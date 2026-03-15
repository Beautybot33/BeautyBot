"use client";

import { useEffect, useState } from "react";

type SavedItem = {
  savedAt: string;
  content: string;
};

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("beautybot_saved_results");
    if (saved) {
      setSavedItems(JSON.parse(saved));
    }
  }, []);

  function clearAll() {
    localStorage.removeItem("beautybot_saved_results");
    setSavedItems([]);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8eaee] to-[#f3d9df] px-6 py-10 text-[#5c3942]">
      <div className="mx-auto max-w-5xl rounded-[30px] border border-[#edd6dc] bg-white p-8 shadow-sm">
        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white px-4 py-2 text-sm text-[#7a5961]"
        >
          ← Back to Dashboard
        </a>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-[#8c5a67]">
              Saved Results
            </h1>
            <p className="mt-2 text-[#7a646c]">
              Your saved campaigns, captions, hooks, and replies.
            </p>
          </div>

          <button
            onClick={clearAll}
            className="rounded-xl border border-[#edd6dc] px-4 py-2 text-sm transition hover:bg-[#fff7f9]"
          >
            Clear all
          </button>
        </div>

        <div className="space-y-4">
          {savedItems.length === 0 ? (
            <div className="rounded-2xl border border-[#edd6dc] bg-[#fff7f9] p-5">
              No saved results yet.
            </div>
          ) : (
            savedItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#edd6dc] bg-[#fff7f9] p-5"
              >
                <p className="mb-2 text-sm text-[#9c7b85]">{item.savedAt}</p>
                <pre className="whitespace-pre-wrap text-sm text-[#5c3942]">
                  {item.content}
                </pre>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}