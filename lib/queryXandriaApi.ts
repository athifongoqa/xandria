const query = async (question: string) => {
    const response = await fetch(`${process.env.XANDRIA_BE_URL}`, {
        method: 'POST',
        body: JSON.stringify({
            question: question,
            token: process.env.XANDRIA_TOKEN,
        })
    })
    .then((res) => console.log(res))
    .catch((err) => `We were unable to respond to your question. Please try again later. (Error: ${err.message})`);

    return response 
}

export default query