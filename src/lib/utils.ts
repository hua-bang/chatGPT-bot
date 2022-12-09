export function generateConversationData(question: string) {
  return {
    action: "next",
    messages: [
      {
        role: "user",
        content: {
          content_type: "text",
          parts: [
            question
          ]
        }
      }
    ],
    parent_message_id: "",
    model: "text-davinci-002-render"
  };
}

// TODO: update res type
export function resolveAnswerFromResponseData(res: any) {
  const { data } = res;
  const receiveRecords = (data as string).split('data: ');
  const answerRecord = JSON.parse(receiveRecords[receiveRecords.length - 2].trim());
  const answerText = answerRecord.message.content.parts[0];
  return answerText;
}