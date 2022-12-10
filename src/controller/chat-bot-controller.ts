import ChatBotService from '../service/chat-bot-service';

class ChatBotController {
  private chatBotService: ChatBotService = new ChatBotService();

  chat = async ctx => {
    const { question } = ctx.request.body;
    ctx.body = {
      code: 200,
      data: {
        answer: await this.chatBotService.chat(question),
      },
      message: ''
    }
  };
}

export default new ChatBotController();
