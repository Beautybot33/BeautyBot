import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { service } = await req.json();

    const prompt = `
You are BeautyBot, an elite AI marketing assistant for beauty businesses.

Write a polished Instagram caption for this service: "${service}"

Rules:
- Make it sound luxe, modern, feminine, confident, and beauty-focused
- Keep the caption concise and social-media ready
- Do NOT sound robotic
- Use beauty industry language where relevant
- Hashtags should be relevant to the service, salon marketing, and beauty niche
- The CTA should be short and booking-focused

Return in exactly this format:

Caption:
[caption]

Hashtags:
[10 relevant hashtags]

Call to Action:
[short CTA]
`;

if (!process.env.OLLAMA_URL) {
  return NextResponse.json(
    { result: "OLLAMA_URL is not set." },
    { status: 500 }
  );
}
    const response = await fetch(`${process.env.OLLAMA_URL}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3",
        prompt,
        stream: false
      })
    });

    const data = await response.json();

    return NextResponse.json({
      result: data.response
    });

  } catch (error) {
    return NextResponse.json(
      { result: "Failed to generate caption." },
      { status: 500 }
    );
  }
}