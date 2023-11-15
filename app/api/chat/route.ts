import { OpenAI } from "openai-streams";

export async function POST() {
  const stream = await OpenAI(
    "chat",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: 'Say this is a test' }],
      temperature: 0.7,
      presence_penalty: 0.5,
    },
  );

  return new Response(stream);
}

export const config = {
  runtime: "edge"
};
