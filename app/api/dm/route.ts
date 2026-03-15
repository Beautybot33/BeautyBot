import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
You are BeautyBot, an AI receptionist for beauty businesses.

Write a polished, friendly, feminine client reply to this beauty enquiry:

${message}

Return ONLY valid JSON in this exact shape:
{
  "reply": "string"
}

Rules:
- No markdown
- No code fences
- No extra text
- Make it sound warm, professional, and booking-ready
- Keep it natural for Instagram or salon DMs
`;

    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2:1b",
        prompt,
        stream: false,
        options: {
          num_predict: 220,
          temperature: 0.8
        }
      }),
    });

    const data = await response.json();
    const raw = (data.response || "").trim();

    try {
      const parsed = JSON.parse(raw);
      return NextResponse.json(parsed);
    } catch {
      return NextResponse.json({
        reply: "Hi lovely! ✨ Thank you for your message. I’d be happy to help with that. Send through a little more info or let me know what day suits you best and we can find the perfect option for you."
      });
    }
  } catch {
    return NextResponse.json(
      {
        reply: "Something went wrong generating your DM reply."
      },
      { status: 200 }
    );
  }
}
