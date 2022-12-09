import { requestChatGPTApi } from "./service";

interface ChatGPTInitParams {
  authorization: string;
}

class ChatGPT {

  authorization: string = '';
  
  init(params: ChatGPTInitParams) {
    const { authorization } = params;
    this.authorization = authorization;
  }

  async getChatGPTAnswer(question: string): Promise<string> {
    const { answer } = await requestChatGPTApi(question, this.authorization);
    return answer;
  }
}

const chatGPTInstance = new ChatGPT();

export default chatGPTInstance;
