import { openai } from "../utils/openaiClient.js";
import { getStage2Prompt } from "../prompts/stage2Prompt.js";

export async function generateNarrativeFeedback(structured) {
  const prompt = getStage2Prompt(structured);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a feedback coach who writes developmental summaries.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  const content = response.choices[0].message.content;

  console.log(content);

  return content.trim();
}
