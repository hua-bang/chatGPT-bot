import * as fs from 'fs';
import chatGPTInstance from '../lib/chatGPT';

function getValueFromSecretByKey(key: string) {
  const content = fs.readFileSync("./secret.json", {
    encoding: 'utf-8'
  });
  const record = JSON.parse(content) || {};
  return record[key];
}

export default class ChatBotService {
  private chatGPT = chatGPTInstance;

  constructor() {
    this.initChatGPT();
  }

  initChatGPT() {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    this.chatGPT.init({
      apiKey: OPENAI_API_KEY,
    });
  }

  chat(question: string) {
    return this.chatGPT.getChatGPTAnswer(question);
  }
}
