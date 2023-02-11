import ChatBotController from './controller/chat-bot-controller';
import WeChatOfficialController from './controller/wechat-official-controller';

export default [
  {
    path: '/bot/chat',
    method: 'post',
    action: ChatBotController.chat
  },
  {
    path: '/mpOfficial/response',
    method: 'post',
    action: WeChatOfficialController.responseMessage
  }
];
