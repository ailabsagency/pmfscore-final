import config from '../../config';
import { IScore } from './score.interface';
import { Score } from './score.model';

const generateScore = async (payload: IScore) => {
  const prompt = `
  You are a Product-Market Fit expert. Analyze the following startup idea and respond in JSON format with an overall PMF score (0-100), a summary, and 1-100 scores for each block.

  Input: 
  ${JSON.stringify(payload, null, 2)}

  Respond in this format: 
  {
    "pmf_score": number,
  "summary": "string",
  "block_scores": {
    "problem": number,
    "audience": number,
    "alternatives": number,
    "unique Value": number,
    "solution": number,
    "channels": number,
    "revenue": number,
    "timing": number
  }
  `;

  try {
    const completion = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${config.groq_api_key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.2-1b-preview',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        }),
      },
    );

    const raw = await completion.json();

    const rawContent = raw.choices[0]?.message?.content || '{}';

    const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
    if (!jsonMatch)
      throw new Error('No valid JSON object found in model response.');

    const output = JSON.parse(jsonMatch[0]);

    const result = await Score.create(output);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const getSingleGenerateScore = async (id: string) => {
  const result = await Score.findById(id);

  return result;
};

export const ScoreServices = {
  generateScore,
  getSingleGenerateScore,
};
