// app/routes/api.chat.ts

import type {ActionFunctionArgs} from '@vercel/remix';
import {createOpenAI} from '@ai-sdk/openai';
import {streamText} from 'ai';

export const config = {runtime: 'edge'};


const openrouter = createOpenAI({
  apiKey:
    'xxx',
  baseURL: 'https://openrouter.ai/api/v1',
});
export async function action({request}: ActionFunctionArgs) {
//   const {messages} = await request.json();
console.log('request', request)
  const result = await streamText({
    model: openrouter('qwen/qwen-2-7b-instruct'),
    // messages,
    prompt:
      'How to make a chatbot that can answer questions about the weather?',
  });
  console.log('result', result)

  return result.toDataStreamResponse();
  
}
