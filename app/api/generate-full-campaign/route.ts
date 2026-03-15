import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function askAI(prompt: string) {
  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: prompt,
  });

  return (response.output_text || "").trim();
}

export async function POST(req: Request) {
  try {
    const { prompt, context } = await req.json();

    const businessContext = context?.trim()
      ? `Business context:
${context}

`
      : "";

    const avaPrompt = `
You are Ava, the Campaign Strategist inside BeautyBot.

${businessContext}Create a premium beauty campaign.

Return in this exact structure:

Campaign title:
Offer angle:
Promo idea:
Call to action:

User request:
${prompt}
`;

    const avaRaw = await askAI(avaPrompt);

    const campaign = {
      title: avaRaw.includes("Campaign title:")
        ? avaRaw.split("Offer angle:")[0].replace("Campaign title:", "").trim()
        : "Luxury Beauty Campaign",
      offerAngle: avaRaw.includes("Offer angle:")
        ? avaRaw.split("Promo idea:")[0].split("Offer angle:")[1].trim()
        : "Position the service as a premium confidence upgrade.",
      promoIdea: avaRaw.includes("Promo idea:")
        ? avaRaw.split("Call to action:")[0].split("Promo idea:")[1].trim()
        : "Run a limited-time premium offer with a value-add bonus.",
      cta: avaRaw.includes("Call to action:")
        ? avaRaw.split("Call to action:")[1].trim()
        : "DM now to book your appointment.",
    };

    const skyePrompt = `
You are Skye, the Hook Specialist inside BeautyBot.

${businessContext}Based on this campaign:

Campaign title: ${campaign.title}
Offer angle: ${campaign.offerAngle}
Promo idea: ${campaign.promoIdea}
Call to action: ${campaign.cta}

Return in this exact structure:

Best hook:
Hook 1:
Hook 2:
Hook 3:
Hook 4:
Hook 5:
Why it works:
`;

    const skyeRaw = await askAI(skyePrompt);

    const hooks = {
      bestHook: skyeRaw.includes("Best hook:")
        ? skyeRaw.split("Hook 1:")[0].replace("Best hook:", "").trim()
        : "Stop scrolling if your beauty routine still feels basic.",
      hook1: skyeRaw.includes("Hook 1:")
        ? skyeRaw.split("Hook 2:")[0].split("Hook 1:")[1].trim()
        : "The upgrade your future self will thank you for.",
      hook2: skyeRaw.includes("Hook 2:")
        ? skyeRaw.split("Hook 3:")[0].split("Hook 2:")[1].trim()
        : "This beauty service changes more than you think.",
      hook3: skyeRaw.includes("Hook 3:")
        ? skyeRaw.split("Hook 4:")[0].split("Hook 3:")[1].trim()
        : "POV: you finally book the treatment you’ve wanted for months.",
      hook4: skyeRaw.includes("Hook 4:")
        ? skyeRaw.split("Hook 5:")[0].split("Hook 4:")[1].trim()
        : "Beauty girls are quietly obsessed with this result.",
      hook5: skyeRaw.includes("Hook 5:")
        ? skyeRaw.split("Why it works:")[0].split("Hook 5:")[1].trim()
        : "This is your sign to upgrade your look.",
      whyItWorks: skyeRaw.includes("Why it works:")
        ? skyeRaw.split("Why it works:")[1].trim()
        : "These hooks are designed to stop the scroll quickly.",
    };

    const miaPrompt = `
You are Mia, the Caption Writer inside BeautyBot.

${businessContext}Based on this campaign:

Campaign title: ${campaign.title}
Offer angle: ${campaign.offerAngle}
Promo idea: ${campaign.promoIdea}
Call to action: ${campaign.cta}

Return in this exact structure:

Hook:
Caption:
Hashtags:
CTA:
`;

    const miaRaw = await askAI(miaPrompt);

    const caption = {
      hook: miaRaw.includes("Hook:")
        ? miaRaw.split("Caption:")[0].replace("Hook:", "").trim()
        : "The beauty upgrade your future self will thank you for.",
      caption: miaRaw.includes("Caption:")
        ? miaRaw.split("Hashtags:")[0].split("Caption:")[1].trim()
        : "Luxury beauty results designed to feel polished and premium.",
      hashtags: miaRaw.includes("Hashtags:")
        ? miaRaw.split("CTA:")[0].split("Hashtags:")[1].trim()
        : "#beautybusiness #luxurybeauty #salonmarketing",
      cta: miaRaw.includes("CTA:")
        ? miaRaw.split("CTA:")[1].trim()
        : "DM us to secure your appointment.",
    };

    const lunaPrompt = `
You are Luna, the Content Planner inside BeautyBot.

${businessContext}Based on this campaign:

Campaign title: ${campaign.title}
Offer angle: ${campaign.offerAngle}
Promo idea: ${campaign.promoIdea}
Call to action: ${campaign.cta}

Return in this exact structure:

Week theme:
Day 1:
Day 2:
Day 3:
Day 4:
Day 5:
Day 6:
Day 7:
`;

    const lunaRaw = await askAI(lunaPrompt);

    const planner = {
      weekTheme: lunaRaw.includes("Week theme:")
        ? lunaRaw.split("Day 1:")[0].replace("Week theme:", "").trim()
        : "Luxury visibility week",
      day1: lunaRaw.includes("Day 1:")
        ? lunaRaw.split("Day 2:")[0].split("Day 1:")[1].trim()
        : "Transformation reel",
      day2: lunaRaw.includes("Day 2:")
        ? lunaRaw.split("Day 3:")[0].split("Day 2:")[1].trim()
        : "Client testimonial post",
      day3: lunaRaw.includes("Day 3:")
        ? lunaRaw.split("Day 4:")[0].split("Day 3:")[1].trim()
        : "Educational tip post",
      day4: lunaRaw.includes("Day 4:")
        ? lunaRaw.split("Day 5:")[0].split("Day 4:")[1].trim()
        : "Behind the scenes reel",
      day5: lunaRaw.includes("Day 5:")
        ? lunaRaw.split("Day 6:")[0].split("Day 5:")[1].trim()
        : "FAQ post",
      day6: lunaRaw.includes("Day 6:")
        ? lunaRaw.split("Day 7:")[0].split("Day 6:")[1].trim()
        : "Brand vibe post",
      day7: lunaRaw.includes("Day 7:")
        ? lunaRaw.split("Day 7:")[1].trim()
        : "Soft promotion post with CTA",
    };

    return NextResponse.json({
      type: "full_campaign",
      campaign,
      hooks,
      caption,
      planner,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      type: "text",
      reply: "Something went wrong generating the full campaign.",
    });
  }
}