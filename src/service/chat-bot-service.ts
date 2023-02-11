import chatGPTInstance from '../lib/chatGPT';

export class ChatBotService {
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

export default new ChatBotService();
