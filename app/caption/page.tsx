"use client";

import { useState } from "react";

export default function CaptionPage() {
  const [service, setService] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!service.trim()) return;

    setLoading(true);
    setCaption("");

    try {
      const res = await fetch("/api/caption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ service }),
      });

      const data = await res.json();
      setCaption(data.result || "No caption generated.");
    } catch (error) {
      setCaption("Something went wrong generating your caption.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fdf7fa",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          border: "1px solid #f3dce5",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            lineHeight: 1,
            fontWeight: 700,
            color: "#4b2333",
            marginBottom: "14px",
          }}
        >
          Caption Generator
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#6d4b58",
            marginBottom: "30px",
          }}
        >
          Generate luxe AI captions for your beauty business.
        </p>

        <label
          style={{
            display: "block",
            marginBottom: "10px",
            fontWeight: 600,
            color: "#4b2333",
          }}
        >
          Enter your service
        </label>

        <input
          type="text"
          placeholder="e.g. blonde balayage transformation"
          value={service}
          onChange={(e) => setService(e.target.value)}
          style={{
            width: "100%",
            padding: "16px 18px",
            borderRadius: "16px",
            border: "1px solid #e8cad6",
            fontSize: "16px",
            outline: "none",
            marginBottom: "18px",
          }}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            background: "#d98ca4",
            color: "white",
            border: "none",
            borderRadius: "16px",
            padding: "14px 24px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: "28px",
          }}
        >
          {loading ? "Generating..." : "Generate Caption"}
        </button>

        <div
          style={{
            border: "1px solid #edd4dd",
            borderRadius: "20px",
            padding: "24px",
            background: "#fffafc",
            minHeight: "220px",
            whiteSpace: "pre-wrap",
            color: "#4b2333",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "14px",
            }}
          >
            AI Output
          </h2>

          {caption ? (
            <p style={{ lineHeight: 1.8 }}>{caption}</p>
          ) : (
            <p style={{ color: "#8c6a76" }}>
              Your caption will appear here...
            </p>
          )}
        </div>
      </div>
    </main>
  );
}