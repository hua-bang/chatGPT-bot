import * as fs from 'fs';
import chatGPTInstance from '../lib/chatGPT';
import * as path from 'path';

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
    const authorization = getValueFromSecretByKey('authorization');
    this.chatGPT.init({
      authorization
    });
  }

  chat(question: string) {
    return this.chatGPT.getChatGPTAnswer(question);
  }
}
