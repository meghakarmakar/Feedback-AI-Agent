export function getStage2Prompt(structured) {
  const { 
    "Strategic Cognition": strategic, 
    "Exploratory Curiosity": curiosity, 
    "Iterative AI Co-Creation": coCreation, 
    "Reflective Growth": growth 
  } = structured;

  return `
Take the following 4-dimension evaluation and synthesize it into a single 500-character coaching feedback. 
Use a warm, non-judgmental, growth-affirming tone. Briefly highlight key strengths, 
gently surface at least one growth edge (especially in Strategic Cognition or AI use), 
and suggest a constructive cognitive trajectory.

Evaluation:
- Strategic Cognition: ${strategic}
- Exploratory Curiosity: ${curiosity}
- Iterative AI Co-Creation: ${coCreation}
- Reflective Growth: ${growth}

Respond with just the 500-character paragraph.
  `.trim();
}
