export async function POST(req: Request) {
  try {
    const { offer } = await req.json();

    const prompt = `
You are BeautyBot, an AI marketing assistant for beauty businesses.

Generate 10 short, scroll-stopping TikTok hooks for this beauty offer: ${offer}

Return ONLY valid JSON in this exact shape:
{
  "intro": "string",
  "hooks": ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"]
}

Rules:
- No markdown
- No extra text
- No code fences
- Hooks should be short, punchy, and beauty-marketing friendly
- Make them sound premium, current, and social-media ready
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
          temperature: 0.9,
        },
      }),
    });

    const data = await response.json();
    const raw = (data.response || "").trim();

    let parsed;

    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = {
        intro: "Luxury beauty hooks, ready to post.",
        hooks: [
          `POV: you finally booked ${offer}`,
          `This is your sign to try ${offer}`,
          `Why everyone is obsessed with ${offer} right now`,
          `${offer} but make it luxury`,
          `The beauty upgrade you didn’t know you needed`,
          `If you’ve been thinking about ${offer}, watch this`,
          `Stop scrolling if you’ve been wanting ${offer}`,
          `This ${offer} transformation is everything`,
          `Beauty girls are loving ${offer} right now`,
          `The soft luxury version of ${offer}`,
        ],
      };
    }

    return Response.json(parsed);
  } catch {
    return Response.json(
      {
        intro: "Something went wrong.",
        hooks: ["Please try again."],
      },
      { status: 200 }
    );
  }
}