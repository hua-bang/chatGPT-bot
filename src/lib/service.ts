import axios from 'axios';
import { generateConversationData, resolveAnswerFromResponseData } from './utils';

const CHAT_CONVERSATION_URL = 'https://chat.openai.com/backend-api/conversation';
const CHAT_SESSION_URL = 'https://chat.openai.com/api/auth/session';

export async function requestChatGPTConversationApi(question: string, authorization: string) {
  try {
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
  } catch(err) {
    return ({
      answer: '机器人出错啦，稍后再试',
      error: err
    });
  }
}

export async function requestChatGPTAccessTokenApi(authorization: string) {
  try {
    const token = authorization.replace('Bearer ', '');
    const res = await axios.get(CHAT_SESSION_URL, {
      headers: {
        Cookie: `__Secure-next-auth.session-token=${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
      },
      withCredentials: true
    });
    const { data: { accessToken } } = res;
    return accessToken;
  } catch(err) {
    return undefined;
  }
}