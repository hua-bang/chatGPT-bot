import chatBotService from "./chat-bot-service";

enum WeChatMessageEnum {
  TEXT = 'text'
}

export class WeChatOfficialService {
  
  async responseMessage(req) {
    const requestData = req.body;
    const { MsgType: msgType, FromUserName: userId, ToUserName: officialId, Content: content = '' } = requestData || {};

    let response = {
      ToUserName: userId,
      FromUserName: officialId,
      CreateTime: new Date().getTime() * 1000,
      MsgType: WeChatMessageEnum.TEXT,
      Content: '抱歉，目前仅支持文字类型信息回复喔。'
    };

    switch(msgType){
      case WeChatMessageEnum.TEXT:
        response = await this.responseTextMessage(req);
        break;
    }

    return response;
  }

  
  async responseTextMessage(req) {
    const requestData = req.body;
    const { FromUserName: userId, ToUserName: officialId, Content: content = '' } = requestData;
    const answerContent = await chatBotService.chat(content);
  
    return {
      ToUserName: userId,
      FromUserName: officialId,
      CreateTime: new Date().getTime() * 1000,
      MsgType: WeChatMessageEnum.TEXT,
      Content: answerContent
    };    
  }

}

export default new WeChatOfficialService();