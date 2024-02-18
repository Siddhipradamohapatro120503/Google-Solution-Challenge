const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function generateContent(prompt, role) {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Create an object with generated content and specified role
    const contentWithRole = {
      content: {
        text: text.trim(),
        role: role
      }
    };

    return contentWithRole;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

async function main() {
  const prompt = "Aritcal 15"; // Example prompt
  const role = "Write Penal Code of UK, India, and USA in 20 words"; // Example role

  try {
    const content = await generateContent(prompt, role);
    console.log(content.content.text);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
