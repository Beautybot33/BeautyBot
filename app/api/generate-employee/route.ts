import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { employee, role, personality, prompt, context } = await req.json();

    const isAva = employee === "Ava";
    const isMia = employee === "Mia";
    const isSkye = employee === "Skye";
    const isLuna = employee === "Luna";
    const isSienna = employee === "Sienna";

    const businessContext = context?.trim()
      ? `Business context:
${context}

`
      : "";

    const fullPrompt = isAva
      ? `
You are ${employee}, the ${role} inside BeautyBot.

Your personality:
${personality}

${businessContext}You help beauty businesses create premium marketing campaigns.

Return your answer in this exact structure:

Campaign title:
Offer angle:
Promo idea:
Call to action:

User request:
${prompt}
`
      : isMia
      ? `
You are ${employee}, the ${role} inside BeautyBot.

Your personality:
${personality}

${businessContext}You write polished beauty captions for social media.

Return your answer in this exact structure:

Hook:
Caption:
Hashtags:
CTA:

User request:
${prompt}
`
      : isSkye
      ? `
You are ${employee}, the ${role} inside BeautyBot.

Your personality:
${personality}

${businessContext}You create short, viral, scroll-stopping beauty hooks.

Return your answer in this exact structure:

Best hook:
Hook 1:
Hook 2:
Hook 3:
Hook 4:
Hook 5:
Why it works:

User request:
${prompt}
`
      : isLuna
      ? `
You are ${employee}, the ${role} inside BeautyBot.

Your personality:
${personality}

${businessContext}You create weekly beauty content plans.

Return your answer in this exact structure:

Week theme:
Day 1:
Day 2:
Day 3:
Day 4:
Day 5:
Day 6:
Day 7:

User request:
${prompt}
`
      : isSienna
      ? `
You are ${employee}, the ${role} inside BeautyBot.

Your personality:
${personality}

${businessContext}You write polished client DM replies for beauty businesses.

Return your answer in this exact structure:

Reply:
Follow up:
Booking CTA:

User request:
${prompt}
`
      : `
You are ${employee}, the ${role} inside BeautyBot.

Your personality:
${personality}

${businessContext}Respond professionally, clearly, and helpfully.

User request:
${prompt}
`;

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: fullPrompt,
    });

    const raw = (response.output_text || "").trim();

    console.log("EXTRACTED RAW:", raw);

    if (isAva) {
      return NextResponse.json({
        type: "campaign",
        title: raw.includes("Campaign title:")
          ? raw.split("Offer angle:")[0].replace("Campaign title:", "").trim()
          : "Luxury Keratin Revival Campaign",
        offerAngle: raw.includes("Offer angle:")
          ? raw.split("Promo idea:")[0].split("Offer angle:")[1].trim()
          : "Position the treatment as a premium smooth-and-gloss transformation.",
        promoIdea: raw.includes("Promo idea:")
          ? raw.split("Call to action:")[0].split("Promo idea:")[1].trim()
          : "Run a limited-time upgrade offer with a premium bonus.",
        cta: raw.includes("Call to action:")
          ? raw.split("Call to action:")[1].trim()
          : "Book your appointment this week.",
      });
    }

    if (isMia) {
      return NextResponse.json({
        type: "caption",
        hook: raw.includes("Hook:")
          ? raw.split("Caption:")[0].replace("Hook:", "").trim()
          : "The hair upgrade your future self will thank you for.",
        caption: raw.includes("Caption:")
          ? raw.split("Hashtags:")[0].split("Caption:")[1].trim()
          : "Luxury beauty results designed to feel polished, effortless, and premium.",
        hashtags: raw.includes("Hashtags:")
          ? raw.split("CTA:")[0].split("Hashtags:")[1].trim()
          : "#beautybusiness #hairgoals #salonmarketing #luxuryhair",
        cta: raw.includes("CTA:")
          ? raw.split("CTA:")[1].trim()
          : "DM us to book your appointment.",
      });
    }

    if (isSkye) {
      return NextResponse.json({
        type: "hooks",
        bestHook: raw.includes("Best hook:")
          ? raw.split("Hook 1:")[0].replace("Best hook:", "").trim()
          : "Stop scrolling if your lashes still disappear without mascara.",
        hook1: raw.includes("Hook 1:")
          ? raw.split("Hook 2:")[0].split("Hook 1:")[1].trim()
          : "The lash upgrade that makes you look awake instantly.",
        hook2: raw.includes("Hook 2:")
          ? raw.split("Hook 3:")[0].split("Hook 2:")[1].trim()
          : "If your lashes drop after curling, this is for you.",
        hook3: raw.includes("Hook 3:")
          ? raw.split("Hook 4:")[0].split("Hook 3:")[1].trim()
          : "POV: your natural lashes finally look this good.",
        hook4: raw.includes("Hook 4:")
          ? raw.split("Hook 5:")[0].split("Hook 4:")[1].trim()
          : "This lash lift saves more time than you think.",
        hook5: raw.includes("Hook 5:")
          ? raw.split("Why it works:")[0].split("Hook 5:")[1].trim()
          : "Beauty girls are quietly obsessed with this treatment.",
        whyItWorks: raw.includes("Why it works:")
          ? raw.split("Why it works:")[1].trim()
          : "These hooks are short, visual, and built to stop the scroll fast.",
      });
    }

    if (isLuna) {
      return NextResponse.json({
        type: "planner",
        weekTheme: raw.includes("Week theme:")
          ? raw.split("Day 1:")[0].replace("Week theme:", "").trim()
          : "Beauty visibility week",
        day1: raw.includes("Day 1:")
          ? raw.split("Day 2:")[0].split("Day 1:")[1].trim()
          : "Transformation reel",
        day2: raw.includes("Day 2:")
          ? raw.split("Day 3:")[0].split("Day 2:")[1].trim()
          : "Client testimonial post",
        day3: raw.includes("Day 3:")
          ? raw.split("Day 4:")[0].split("Day 3:")[1].trim()
          : "Educational tip post",
        day4: raw.includes("Day 4:")
          ? raw.split("Day 5:")[0].split("Day 4:")[1].trim()
          : "Behind the scenes reel",
        day5: raw.includes("Day 5:")
          ? raw.split("Day 6:")[0].split("Day 5:")[1].trim()
          : "FAQ post",
        day6: raw.includes("Day 6:")
          ? raw.split("Day 7:")[0].split("Day 6:")[1].trim()
          : "Personal brand/vibe post",
        day7: raw.includes("Day 7:")
          ? raw.split("Day 7:")[1].trim()
          : "Soft promo post with CTA",
      });
    }

    if (isSienna) {
      return NextResponse.json({
        type: "dm",
        reply: raw.includes("Reply:")
          ? raw.split("Follow up:")[0].replace("Reply:", "").trim()
          : "Hey lovely, thanks so much for your message.",
        followUp: raw.includes("Follow up:")
          ? raw.split("Booking CTA:")[0].split("Follow up:")[1].trim()
          : "Let me know if you'd like me to recommend the best option for your hair goals.",
        bookingCta: raw.includes("Booking CTA:")
          ? raw.split("Booking CTA:")[1].trim()
          : "I can help you lock in a booking if you'd like.",
      });
    }

    return NextResponse.json({
      type: "text",
      reply: raw || "No response returned.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      type: "text",
      reply: "Something went wrong talking to your AI employee.",
    });
  }
}