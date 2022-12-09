import chatGPTInstance  from '../src/lib/chatGPT';
import * as fs from 'fs';

function getValueFromSecretByKey(key: string) {
  const content = fs.readFileSync("../secret.json", {
    encoding: 'utf-8'
  });
  const record = JSON.parse(content) || {};
  return record[key];
}

const authorization = getValueFromSecretByKey('authorization');

chatGPTInstance.init({
  authorization,
});

chatGPTInstance.getChatGPTAnswer('测试一下哈。').then(answer => {
  console.log(answer);
});