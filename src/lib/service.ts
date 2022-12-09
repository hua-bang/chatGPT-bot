import axios from 'axios';
import { generateConversationData, resolveAnswerFromResponseData } from './utils';

const CHAT_CONVERSATION_URL = 'https://chat.openai.com/backend-api/conversation';

export async function requestChatGPTApi(question: string, authorization: string) {
  const res = await axios.post(CHAT_CONVERSATION_URL, generateConversationData(question), {
    headers: {
      authorization,
      origin: 'https://chat.openai.com',
      referer: 'https://chat.openai.com/chat',
      'content-type': 'application/json',
      'x-openai-assistant-app-id': '',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
    },
  });
  return ({
    answer: resolveAnswerFromResponseData(res),
    response: res
  });
}