require('dotenv').config();


async function categorizeMessage(message) {
    try {
      const response = await fetch(process.env.API_BASE_URL, {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `Can you categorize this message as either project idea or reminder and convert it into JSON 
        format like {"tag": x, "message": y} to be able to add to Notion? Only reply in JSON format: ${message}`}],
      }),
    });
  
  
    const data = await response.json();
    const result = data.choices[0].message.content
    return result
  
} catch (error) {
    return "Error generating goal."
}};

module.exports = {
    categorizeMessage
}