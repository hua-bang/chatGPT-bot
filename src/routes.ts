import ChatBotController from './controller/chat-bot-controller';

export default [
  {
    path: '/bot/chat',
    method: 'post',
    action: ChatBotController.chat
  }
];
