import 'dotenv/config';
import OpenAI from 'openai';
import readlineSync from 'readline-sync';
import fs from 'fs';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const MODEL = "gpt-3.5-turbo"; // change to gpt-4 if you have access

async function askOpenAI(question) {
  try {
    const completion = await client.chat.completions.create({
      model: MODEL,
      messages: [
        { role: "system", content: "You are a helpful assistant that answers concisely." },
        { role: "user", content: question }
      ],
      max_tokens: 500,
      temperature: 0.2,
    });
    return completion.choices[0].message.content.trim();
  } catch (err) {
    console.error("Error calling OpenAI:", err.message);
    return "⚠️ Sorry, I could not get an answer.";
  }
}

async function main() {
  console.log("🤖 AI Q&A Bot (Node.js) — type your question. Type 'exit' to quit.");

  const conversationLog = [];

  while (true) {
    const q = readlineSync.question("\nYou: ");
    if (!q.trim()) continue;
    if (["exit", "quit"].includes(q.toLowerCase())) {
      console.log("Goodbye!");
      break;
    }

    console.log("Thinking...");
    const ans = await askOpenAI(q);
    console.log("\nAI:", ans);

    conversationLog.push({ question: q, answer: ans });
  }

  // Save log
  if (conversationLog.length > 0) {
    const fname = `session_${Date.now()}.json`;
    fs.writeFileSync(fname, JSON.stringify(conversationLog, null, 2));
    console.log(`\n💾 Saved conversation to ${fname}`);
  }
}

main();
