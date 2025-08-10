import { GoogleGenerativeAI } from "@google/generative-ai";
import { neon } from "@neondatabase/serverless";

const apiKey = "AIzaSyCQc8s5komFmRmDzxSY4GP9PRRCSYygxZQ";
if (!apiKey) throw new Error("GEMINI_API_KEY is not set");

const genAI = new GoogleGenerativeAI(apiKey);
const sql = neon(
  "postgresql://neondb_owner:npg_5cZvNuJl4pEb@ep-wispy-dust-a8akjg7o-pooler.eastus2.azure.neon.tech/obliviai-ai-chatbot-database?sslmode=require&channel_binding=require"
);

const obliviAIContext = `obliviAI[](https://obliviai.vercel.app/) is a landing page showcasing a suite of innovative SaaS products, including:
- Workafloat AI: An AI-powered tool for productivity and workflow automation.
- TalenzaIC: A platform for talent management and intelligent career insights.
- Nuvonote: A note-taking and organization tool with smart features.
- Trimrr: A content optimization and trimming service.

The site highlights unified showcase features, smart automation, and offers a free trial with extra credits. It is built using Next.js, React, TypeScript, Tailwind CSS, Prisma, and Neon DB, ensuring secure scalability and conversational AI capabilities. The platform aims to attract tech enthusiasts, developers, and businesses, with monetization through Google AdSense, Amazon Associates, and SaaS conversions.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite-preview-06-17",
      systemInstruction: `You are an AI assistant for obliviAI. Use the following context to answer questions: ${obliviAIContext}`,
    });

    const lastMessage = messages[messages.length - 1].content;

    // Build conversation context (optional)
    const conversationHistory = messages
      .slice(0, -1)
      .map(
        (msg: any) =>
          `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
      )
      .join("\n");

    const prompt = conversationHistory
      ? `Previous conversation:\n${conversationHistory}\n\nUser: ${lastMessage}`
      : `User: ${lastMessage}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Save to Neon DB
    try {
      await sql`
        INSERT INTO chat_history (
          user_message,
          assistant_message,
          created_at
        ) VALUES (
          ${lastMessage},
          ${responseText},
          NOW()
        )
      `;
    } catch (dbError) {
      console.error("Error saving to database:", dbError);
    }

    // ✅ Return JSON in the format useChat expects
    return Response.json({
      role: "assistant",
      content: responseText,
    });
  } catch (error) {
    console.error("Error generating response:", error);
    return Response.json(
      { role: "assistant", content: "Error generating response" },
      { status: 500 }
    );
  }
}
