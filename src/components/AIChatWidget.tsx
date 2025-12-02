import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const AIChatWidget: React.FC = () => {
  const { t, language, direction } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language changes or first mount
  useEffect(() => {
    setMessages([{ role: 'model', text: t.ai.welcome }]);
  }, [t.ai.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await generateChatResponse(messages, input, language);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`fixed bottom-6 ${direction === 'rtl' ? 'left-6' : 'right-6'} z-50 flex flex-col items-start font-sans`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`mb-4 w-[350px] max-w-[calc(100vw-48px)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-[500px] ${direction === 'rtl' ? 'ml-0' : 'mr-0'}`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/20 rounded-full">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{t.ai.title}</h3>
                  <p className="text-emerald-100 text-xs">{t.ai.subtitle}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center shrink-0
                    ${msg.role === 'user' ? 'bg-slate-600 dark:bg-slate-700' : 'bg-emerald-600'}
                  `}>
                    {msg.role === 'user' ? <User size={14} className="text-white"/> : <Bot size={14} className="text-white"/>}
                  </div>
                  <div className={`
                    p-3 rounded-2xl text-sm leading-relaxed max-w-[80%]
                    ${msg.role === 'user' 
                      ? `bg-slate-600 dark:bg-slate-700 text-white ${direction === 'rtl' ? 'rounded-br-none' : 'rounded-bl-none'}`
                      : `bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 ${direction === 'rtl' ? 'rounded-bl-none' : 'rounded-br-none'}`}
                  `}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-white"/>
                  </div>
                  <div className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl ${direction === 'rtl' ? 'rounded-bl-none' : 'rounded-br-none'}`}>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={t.ai.placeholder}
                  disabled={loading}
                  className={`w-full bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white text-sm rounded-full py-3 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder-slate-500 ${direction === 'rtl' ? 'pl-10 pr-4' : 'pr-10 pl-4'}`}
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className={`absolute p-1.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 disabled:opacity-50 disabled:hover:bg-emerald-600 transition-colors ${direction === 'rtl' ? 'left-2' : 'right-2'}`}
                >
                  <Send size={14} className={direction === 'rtl' ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 text-white p-4 rounded-full shadow-lg shadow-emerald-600/40 hover:bg-emerald-500 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default AIChatWidget;