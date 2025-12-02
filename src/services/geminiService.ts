import { GoogleGenerativeAI } from "@google/generative-ai";
import { PORTFOLIO_CONTEXT, ChatMessage } from "../types";

// قراءة مفتاح API من ملف .env
const apiKey = import.meta.env.VITE_API_KEY;

// إنشاء العميل الصحيح
const genAI = new GoogleGenerativeAI(apiKey);

export const generateChatResponse = async (
  history: ChatMessage[],
  newMessage: string,
  language: "ar" | "en" = "ar"
): Promise<string> => {
  try {
    const modelName = "gemini-2.0-flash";

    // النظام العام
    const systemInstruction = `
      You are an intelligent personal assistant for "Saad Fuhaid's" portfolio website.
      Your role is to answer visitor questions (recruiters or potential clients) based ONLY on the provided context.
      
      Context Information:
      ${PORTFOLIO_CONTEXT}

      Rules:
      1. Answer concisely and professionally.
      2. Be polite and encourage contact.
      3. If asked about something not in the info, state you don't know and suggest emailing him.
      4. IMPORTANT: Respond in ${language === "ar" ? "ARABIC" : "ENGLISH"}.
    `;

    // بناء المحادثة
    const historyText = history
      .map((m) => `${m.role === "user" ? "Visitor" : "You"}: ${m.text}`)
      .join("\n");

    const prompt = `
      ${systemInstruction}

      Chat History:
      ${historyText}

      Visitor: ${newMessage}
      You:
    `;

    // إنشاء نموذج Gemini
    const model = genAI.getGenerativeModel({ model: modelName });

    // إرسال الطلب
    const result = await model.generateContent(prompt);

    // استخراج النص
    const text = result.response.text();

    return text || (language === "ar"
      ? "عذراً، حدث خطأ في المعالجة."
      : "Sorry, a processing error occurred.");
  } catch (error) {
    console.error("Gemini API Error:", error);

    return language === "ar"
      ? "عذراً، أواجه مشكلة في الاتصال حالياً. يرجى المحاولة لاحقاً."
      : "Sorry, I'm facing connection issues. Please try again later.";
  }
};
