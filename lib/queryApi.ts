import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
    const response = await openai.createCompletion({
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
        model: model,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => `ChatGPT was unable to respond to your question. Please try again later. (Error: ${err.message})`);

    return response 
}

export default query