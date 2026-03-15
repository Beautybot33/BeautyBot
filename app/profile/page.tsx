"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    businessName: "",
    location: "",
    services: "",
    tone: "",
    audience: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("beautybot_profile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  function saveProfile() {
    localStorage.setItem("beautybot_profile", JSON.stringify(profile));
    alert("Profile saved");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8eaee] to-[#f3d9df] px-6 py-10 text-[#5c3942]">
      <div className="mx-auto max-w-4xl rounded-[30px] border border-[#edd6dc] bg-white p-8 shadow-sm">
        <a
          href="/"
          className="mb-6 inline-block rounded-full border border-[#d9b6bf] bg-white px-4 py-2 text-sm text-[#7a5961]"
        >
          ← Back to Dashboard
        </a>

        <h1 className="mb-2 text-4xl font-semibold text-[#8c5a67]">
          Client Profile
        </h1>

        <p className="mb-8 text-[#7a646c]">
          Save your business details so BeautyBot remembers your brand.
        </p>

        <div className="grid gap-4">
          <input
            placeholder="Business name"
            value={profile.businessName}
            onChange={(e) =>
              setProfile({ ...profile, businessName: e.target.value })
            }
            className="rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />

          <input
            placeholder="Location"
            value={profile.location}
            onChange={(e) =>
              setProfile({ ...profile, location: e.target.value })
            }
            className="rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />

          <input
            placeholder="Services"
            value={profile.services}
            onChange={(e) =>
              setProfile({ ...profile, services: e.target.value })
            }
            className="rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />

          <input
            placeholder="Tone"
            value={profile.tone}
            onChange={(e) =>
              setProfile({ ...profile, tone: e.target.value })
            }
            className="rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />

          <input
            placeholder="Target audience"
            value={profile.audience}
            onChange={(e) =>
              setProfile({ ...profile, audience: e.target.value })
            }
            className="rounded-xl border border-[#edd6dc] px-4 py-3 outline-none"
          />
        </div>

        <button
          onClick={saveProfile}
          className="mt-6 rounded-xl bg-[#d98fa1] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#c97f92]"
        >
          Save Profile
        </button>
      </div>
    </main>
  );
}