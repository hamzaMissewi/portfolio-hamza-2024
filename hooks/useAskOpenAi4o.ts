import { useCallback } from "react";

// export const openAI = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

export function useAskChatGptHook() {
  const askChatGptCallback = useCallback(
    async (
      message: string,
    ): Promise<{
      reply?: string;
      error?: string;
    }> => {
      try {
        const result = await fetch("/api/openai", {
          method: "POST",
          body: JSON.stringify({ prompt: message }),
          headers: {
            "Content-Type": "application/json",
            // 'Authorization': 'Bearer ' + JSON.stringify(process.env.OPENAI_API_KEY)
          },
        });
        console.log("result status ", result.status);
        if (!result.ok || result.status !== 200) {
          console.log("result not ok");
          return {
            error: "Failed to get response",
            reply: "Sorry, no reply for that !",
          };
        } else {
          const response = await result.json();
          console.log("response json ", response);
          return { reply: response?.data.reply, error: response.data.error };
        }
      } catch (error: any) {
        console.error(error, `error while demand chat gpt ${error.message}`);
        return { error: error.message };
      }
    },
    [],
  );

  return { askChatGpt: askChatGptCallback };
}
