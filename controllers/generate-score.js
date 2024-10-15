const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyAjHQaYdotaxvWlMvyMEeUPATLyz1G6vMM";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function generateScore(resume, jobDescription) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const prompt = `
        Compare the following resume and job description, and give me a match score between 0 and 100 based on how well the resume fits the job description.
        
        Resume: ${resume}
        
        Job Description: ${jobDescription}
        
        Please provide only the match score.
    `;

    const result = await chatSession.sendMessage(prompt);
    
    return result.response.text();
}

module.exports = { generateScore };
