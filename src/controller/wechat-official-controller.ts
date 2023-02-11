import weChatOfficialService, { WeChatOfficialService } from './../service/wechat-official-service';
export class WeChatOfficialController {
  
  weChatOfficialService: WeChatOfficialService = weChatOfficialService

  responseMessage = async (ctx) => {
    const response = await this.weChatOfficialService.responseMessage(ctx.request);
    ctx.body = response;
  }
}

export default new WeChatOfficialController();