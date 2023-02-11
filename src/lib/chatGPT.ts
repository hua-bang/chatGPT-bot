interface InitChatGPTParams {
  apiKey: string;
  errorResponseText?: string;
}

const DefaultErrorResponseText = '机器人出错啦，稍后再试哈。';

class ChatGPTBot {

  private apiInstance: any;

  initParams: InitChatGPTParams | null = null;
  
  async init(params: InitChatGPTParams) {
    const { apiKey } = params;

    if (!(globalThis as any).fetch) {
      const fetch = (await import('node-fetch')).default;
      (globalThis as any).fetch = fetch;  
    }

    const ChatGPTAPI = (await import('chatgpt')).ChatGPTAPI;   
    this.apiInstance = new ChatGPTAPI({
      apiKey
    });
    this.initParams = params;
  }

  async getChatGPTAnswer(question: string) {
    try {
      const res = await this.apiInstance?.sendMessage(question);
      return res?.text;
    } catch(err) {
      const { errorResponseText = DefaultErrorResponseText } = this.initParams || {};
      return errorResponseText;
    }
  }
}

const chatGPTInstance = new ChatGPTBot();

export default chatGPTInstance;
