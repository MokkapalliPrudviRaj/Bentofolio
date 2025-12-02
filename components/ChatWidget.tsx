import React, { useState, useRef, useEffect } from 'react';
import { BentoCard } from './BentoCard';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { streamGeminiResponse } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';
import { GenerateContentResponse } from '@google/genai';

export const ChatWidget: React.FC<{ className?: string }> = ({ className }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Hi! I'm Alex's AI assistant. Ask me anything." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
    setIsTyping(true);

    try {
      // Format history for Gemini API
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const streamResult = await streamGeminiResponse(history, userMsg);
      
      let fullResponse = '';
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: '' }]);

      for await (const chunk of streamResult) {
          const c = chunk as GenerateContentResponse;
          const text = c.text;
          if (text) {
             fullResponse += text;
             setMessages(prev => {
                const newMsgs = [...prev];
                newMsgs[newMsgs.length - 1].text = fullResponse;
                return newMsgs;
             });
          }
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: ChatRole.MODEL, text: "Oops, connection error." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <BentoCard className={`${className} flex flex-col`} title="AI ASSISTANT" noPadding>
      <div className="flex flex-col h-full bg-white dark:bg-neutral-900">
        
        {/* Header/Status */}
        <div className="p-3 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-900">
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Gemini 2.5</span>
           </div>
           <Sparkles size={12} className="text-violet-500" />
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-3 space-y-3 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-2 ${msg.role === ChatRole.USER ? 'flex-row-reverse' : ''}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.role === ChatRole.USER ? 'bg-neutral-200 text-neutral-700' : 'bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-white'}`}>
                {msg.role === ChatRole.USER ? <User size={10} /> : <Bot size={10} />}
              </div>
              <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                msg.role === ChatRole.USER 
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200' 
                  : 'bg-violet-50 dark:bg-violet-900/20 text-violet-900 dark:text-violet-100'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center mt-1">
                    <Bot size={10} className="text-white"/>
                 </div>
                 <div className="bg-violet-50 dark:bg-violet-900/20 px-2 py-1.5 rounded-2xl flex items-center gap-1">
                     <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce"></span>
                     <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce delay-75"></span>
                     <span className="w-1 h-1 bg-violet-400 rounded-full animate-bounce delay-150"></span>
                 </div>
             </div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-full px-3 py-1.5 focus-within:ring-2 ring-violet-500/30 transition-all">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-grow bg-transparent outline-none text-xs text-neutral-800 dark:text-neutral-200 placeholder-neutral-400"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="p-1.5 bg-violet-500 hover:bg-violet-600 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 text-white rounded-full transition-colors"
            >
              <Send size={12} />
            </button>
          </div>
        </div>
      </div>
    </BentoCard>
  );
};