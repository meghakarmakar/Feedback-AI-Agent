import { openai } from '../utils/openaiClient.js';
import { getStage1Prompt } from '../prompts/stage1Prompt.js';

export async function generateStructuredFeedback(summary) {
  const prompt = getStage1Prompt(summary);

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant for generating structured feedback.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  const content = response.choices[0].message.content;

  try {
    const structured = JSON.parse(content);
    console.log(structured);
    
    return structured;
  } catch (err) {
    console.error('❌ Failed to parse Stage 1 response as JSON:', content);
    throw new Error('Stage 1 output is not valid JSON.');
  }
}
