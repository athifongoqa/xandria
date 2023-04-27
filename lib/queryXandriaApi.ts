const queryXandriaApi = async (question: string) => {
    const response = await fetch(`${process.env.XANDRIA_BE_URL}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: 'POST',
        body: JSON.stringify({
            "question": `${question}`,
            "token": process.env.XANDRIA_TOKEN,
        })
    })
    .then((res) => {
        return res.json()
    })
    .catch((err) => `We were unable to respond to the question. Please try again later. (Error: ${err.message})`);

    return response.results[0].answer
}

export default queryXandriaApi