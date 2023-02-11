# ChatGPT-BOT

ChatGPT-BOT 是通过模拟请求调用 `chatGPT` 接口的小 `demo`。


## 思路

总体的一个思路，即 抓包 + `HTTP` 请求。

## 目前功能

- 通过 OPENAI_API_KEY 进行 初始化 `chatGPT`
- `chatGPT` 聊天

## 如何使用

### 安装依赖

项目根目录，执行 `npm install`
```bash
npm install
```
### 修改 env 下的 OPENAI_API_KEY

修改 `env`, 带上你的 `OPENAI_API_KEY`。

1. 前往 <https://platform.openai.com/account/api-keys> 并登陆。
 ![image](./docs/homepage.png)

1. 复制 得到的值  ![image](./docs/get_token.png)，并且以如下方式配置到您的项目中：

```txt
OPENAI_API_KEY=xxxxx
```

### 运行程序
项目根目录，执行 `npm run start`
```
npm run start
```

你可以通过下方的 curl 测试下
```bash
curl --location --request POST 'http://localhost:3000/bot/chat' \
--header 'Content-Type: application/json' \
--data-raw '{
   "question": "测试一下"   
}'
```

## 参考
- [Github-chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)



