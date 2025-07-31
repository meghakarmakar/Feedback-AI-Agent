export function getStage1Prompt(summary) {
  return `
You are an AI coach evaluating how a candidate approached a problem-solving task. Based on the following 200-character summary of their approach, extract insights across four key cognitive dimensions with each being within 100 characters.

Summary:
"${summary}"

Respond strictly in this JSON format:
{
  "Strategic Cognition": "<insight on planning, structuring, and focus>",
  "Exploratory Curiosity": "<insight on open-mindedness, inquiry, and exploration>",
  "Iterative AI Co-Creation": "<insight on how well they used AI as a thinking partner>",
  "Reflective Growth": "<insight on self-awareness and growth mindset>"
}
  `.trim();
}
