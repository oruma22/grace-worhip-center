import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { sendMessageStream } from '../services/geminiService';

const GraceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: 'Hi! I am the Grace AI Assistant. How can I pray for you or help you today?' }
  ]);
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isGenerating) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsGenerating(true);

    // Placeholder for streaming response
    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '', isLoading: true }]);

    try {
      const stream = sendMessageStream(userMsg.text);
      let fullResponse = '';

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => 
          prev.map(msg => 
            msg.id === modelMsgId 
              ? { ...msg, text: fullResponse, isLoading: false } 
              : msg
          )
        );
      }
    } catch (e) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: 'Something went wrong. Please try again.' }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 bg-grace-gold text-grace-dark p-4 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md bg-grace-dark border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[600px]"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-grace-blue to-grace-dark border-b border-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="text-grace-gold h-5 w-5" />
                <h3 className="font-bold text-white">Grace Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0B1120] h-[400px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-grace-gold text-grace-dark rounded-br-none'
                        : 'bg-gray-800 text-gray-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                    {msg.isLoading && (
                         <span className="inline-block ml-2"><Loader2 className="animate-spin h-3 w-3" /></span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-grace-dark border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question or request prayer..."
                  className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-grace-gold/50 text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isGenerating || !input.trim()}
                  className="bg-grace-gold p-2 rounded-full text-grace-dark hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-gray-500 mt-2">
                AI-generated responses. Please consult pastoral staff for serious counseling.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GraceAssistant;