import { motion } from "framer-motion";
import { MessageSquare, Play, Bot, Mic } from "lucide-react";
import { useState } from "react";

export const LiveDemoSection = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Hi! I'm Kogenix AI. How can I help you today?" },
    { type: "user", message: "Tell me about your AI interview system" },
    { type: "bot", message: "Our AI interview system conducts automated candidate screening with bias-free assessment and real-time analytics. Would you like to see a demo?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { type: "user", message: inputMessage }]);
    setInputMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        type: "bot", 
        message: "That's a great question! Our AI solutions are designed to be scalable and customizable for your specific needs. Would you like to schedule a personalized demo?" 
      }]);
    }, 1000);
  };

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience AI in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our live AI demo and see how Kogenix technology can transform your business processes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Live Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="glass-surface rounded-2xl p-6 h-96 flex flex-col">
              <div className="flex items-center mb-4 pb-4 border-b border-border">
                <Bot className="w-6 h-6 mr-3 text-foreground" />
                <span className="font-semibold">Kogenix AI Assistant</span>
                <div className="ml-auto flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-foreground text-background' 
                        : 'bg-muted text-foreground'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about Kogenix AI..."
                  className="flex-1 px-4 py-2 rounded-xl glass-surface border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Demo Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl font-bold mb-6">Interactive AI Demo</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Experience our AI technology firsthand. This live chatbot demonstrates our natural language 
              processing capabilities and intelligent response generation.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MessageSquare,
                  title: "Natural Conversations",
                  description: "Engage in human-like dialogue with advanced NLP"
                },
                {
                  icon: Play,
                  title: "Live Interview Demo",
                  description: "See our AI interview system in action"
                },
                {
                  icon: Mic,
                  title: "Voice Integration",
                  description: "Support for voice commands and responses"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero-primary mt-8"
            >
              Schedule Full Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};