import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize GenAI. 
// NOTE: In a production environment, you should proxy this through your own backend 
// to protect your API KEY. For this frontend demo, we use the env var directly.
const apiKey = process.env.API_KEY || ''; 

let chatSession: Chat | null = null;

export const initializeChat = () => {
  if (!apiKey) return null;
  
  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are "Grace Assistant", a helpful, empathetic, and spiritually grounded AI assistant for Grace Worship Center. 
        Your goal is to help visitors find information about the church, offer biblical encouragement, and draft short prayers based on their requests.
        
        Tone: Warm, welcoming, non-judgmental, and hopeful.
        
        Key Info about Grace Worship Center (GWC):
        - Location: 123 Faith Avenue, Spirit City.
        - Services: Sundays at 9am & 11am.
        - Values: Worship, Community, Outreach.
        
        If asked to pray, write a short, comforting prayer.
        If asked about theology, keep it orthodox and encouraging, citing scripture where appropriate.
        Keep responses concise (under 150 words) unless asked for more detail.`,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    return null;
  }
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    chatSession = initializeChat();
  }

  if (!chatSession) {
    yield "I'm currently offline. Please check the API key configuration.";
    return;
  }

  try {
    const responseStream = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of responseStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message:", error);
    yield "I apologize, but I'm having trouble connecting right now. Please try again later.";
  }
};