import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    const prompt = `
You are BeautyBot, an AI content strategist for beauty businesses.

Create a 7-day beauty content calendar for this topic: ${topic}

Return ONLY valid JSON in this exact shape:
{
  "intro": "string",
  "days": [
    {
      "day": "Monday",
      "idea": "string",
      "hook": "string",
      "caption": "string"
    },
    {
      "day": "Tuesday",
      "idea": "string",
      "hook": "string",
      "caption": "string"
    },
    {
      "day": "Wednesday",
      "idea": "string",
      "hook": "string",
      "caption": "string"
    },
    {
      "day": "Thursday",
      "idea": "string",
      "hook": "string",
      "caption": "string"
    },
    {
      "day": "Friday",
      "idea": "string",
      "hook": "string",
      "caption": "string"
    },
    {
      "day": "Saturday",
      "idea": "string",
      "hook": "string",
      "caption": "string"
    },
    {
      "day": "Sunday",
      "idea": "string",
      "hook": "string",
      "caption": "string"
    }
  ]
}

Rules:
- No markdown
- No code fences
- No extra text
- Make it premium, feminine, modern, and useful for a beauty business
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
          num_predict: 500,
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
        intro: "Luxury weekly content plan, ready to post.",
        days: [
          {
            day: "Monday",
            idea: `${topic} transformation post`,
            hook: `POV: you finally booked ${topic}`,
            caption: `Start the week with a premium beauty transformation your audience will love.`
          },
          {
            day: "Tuesday",
            idea: `${topic} educational tip`,
            hook: `What nobody tells you about ${topic}`,
            caption: `Give your audience a useful tip that builds trust and authority.`
          },
          {
            day: "Wednesday",
            idea: `Client reaction for ${topic}`,
            hook: `Her reaction says everything`,
            caption: `Show the emotional side of beauty results with a client moment.`
          },
          {
            day: "Thursday",
            idea: `${topic} before and after`,
            hook: `Wait until you see the final result`,
            caption: `Before-and-after content always performs well for beauty services.`
          },
          {
            day: "Friday",
            idea: `${topic} FAQ post`,
            hook: `Do you really need ${topic}?`,
            caption: `Answer a common client question in a clear, simple, premium way.`
          },
          {
            day: "Saturday",
            idea: `Behind the scenes of ${topic}`,
            hook: `Come behind the scenes with me`,
            caption: `Show the process and make your service feel luxe and trustworthy.`
          },
          {
            day: "Sunday",
            idea: `${topic} testimonial or social proof`,
            hook: `Why clients keep coming back for this`,
            caption: `End the week with proof, confidence, and client love.`
          }
        ]
      });
    }
  } catch {
    return NextResponse.json(
      {
        intro: "Something went wrong generating your content calendar.",
        days: []
      },
      { status: 200 }
    );
  }
}
