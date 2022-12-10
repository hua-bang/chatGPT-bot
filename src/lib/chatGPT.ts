import { requestChatGPTAccessTokenApi, requestChatGPTConversationApi } from "./service";

type ChatGPTInitParams = {
  authorization: string;
}

class ChatGPT {

  authorization: string = '';
  
  init(params: ChatGPTInitParams) {
    this.authorization = params.authorization;
  }

  async getChatGPTAnswer(question: string): Promise<string> {
    let { answer, error } = await requestChatGPTConversationApi(question, this.authorization);

    if (error) {
      await this.refreshAuthorization();
    }
    answer = (await requestChatGPTConversationApi(question, this.authorization)).answer
    return answer;
  }

  async refreshAuthorization() {
    const newAuthorization = await requestChatGPTAccessTokenApi(this.authorization);
    this.authorization = newAuthorization;
  }
}

const chatGPTInstance = new ChatGPT();

export default chatGPTInstance;
