export async function POST(req: Request) {
  const { offer } = await req.json();

  const prompt = `
You are BeautyBot, an AI marketing assistant for beauty businesses.

Create a short marketing campaign for this offer: ${offer}

Return:
1. Offer angle
2. 3 TikTok hooks
3. 3 content ideas
4. 1 Instagram caption
5. 1 call to action

Keep it clear, punchy, and useful for a salon or beauty brand.
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
    }),
  });

  const data = await response.json();

  return Response.json({ result: data.response || "No AI response returned." });
}