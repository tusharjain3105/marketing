"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  X,
  Send,
  Paperclip,
  Download,
  Bot,
  User,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  attachments?: {
    name: string;
    url: string;
    type: string;
    size: number;
  }[];
}

interface ChatbotWidgetProps {
  position?: "bottom-right" | "bottom-left";
  theme?: "light" | "dark" | "auto";
  userType?: "guest" | "client";
  organizationId?: string;
}

export function ChatbotWidget({
  position = "bottom-right",
  userType = "guest",
}: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() && attachments.length === 0) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      attachments: attachments.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type,
        size: file.size,
      })),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setAttachments([]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: getBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 2000,
    );
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("pricing") ||
      message.includes("cost") ||
      message.includes("price")
    ) {
      return "Our pricing starts at $99/month for the Basic plan. Would you like me to show you our full pricing details or connect you with our sales team?";
    }

    if (message.includes("feature") || message.includes("what can")) {
      return "Our platform offers email marketing, automation workflows, analytics, lead generation, and much more! What specific feature would you like to know about?";
    }

    if (
      message.includes("support") ||
      message.includes("help") ||
      message.includes("problem")
    ) {
      return "I'm here to help! Can you describe the specific issue you're experiencing? I can also connect you with our support team if needed.";
    }

    if (message.includes("demo") || message.includes("trial")) {
      return "Great! We offer a 14-day free trial with full access to all features. Would you like me to set that up for you or schedule a personalized demo?";
    }

    return "Thank you for your message! I understand you're asking about our platform. Could you be more specific about what you'd like to know? I'm here to help with pricing, features, support, or anything else!";
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = [
        "image/",
        "application/pdf",
        "text/",
        "application/msword",
        "application/vnd.openxmlformats",
      ];
      return (
        file.size <= maxSize &&
        allowedTypes.some((type) => file.type.startsWith(type))
      );
    });

    setAttachments((prev) => [...prev, ...validFiles]);
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  if (!isOpen) {
    return (
      <div className={cn("fixed z-50", positionClasses[position])}>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 shadow-lg rounded-full w-14 h-14 glow"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("fixed z-50", positionClasses[position])}>
      <div
        className={cn(
          "bg-background/95 backdrop-blur-md shadow-2xl border border-border/50 rounded-lg w-80 h-96 flex flex-col",
          isMinimized && "h-12",
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-primary/10 p-4 border-b border-border/50 rounded-t-lg">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground text-sm">
              AI Assistant
            </span>
            {userType === "client" && (
              <span className="bg-primary/20 px-2 py-1 rounded-full text-primary text-xs">
                Client
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 space-y-3 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-2",
                    message.sender === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  {message.sender === "bot" && (
                    <div className="flex flex-shrink-0 justify-center items-center bg-primary/20 rounded-full w-6 h-6">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[70%] p-2 rounded-lg text-sm",
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <p>{message.content}</p>
                    {message.attachments && message.attachments.length > 0 && (
                      <div className="space-y-1 mt-2">
                        {message.attachments.map((attachment, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-background/50 p-1 rounded text-xs"
                          >
                            <Paperclip className="w-3 h-3" />
                            <span className="flex-1 truncate">
                              {attachment.name}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 w-4 h-4"
                            >
                              <Download className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="opacity-70 mt-1 text-xs">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                  {message.sender === "user" && (
                    <div className="flex flex-shrink-0 justify-center items-center bg-primary/20 rounded-full w-6 h-6">
                      <User className="w-3 h-3 text-primary" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start gap-2">
                  <div className="flex flex-shrink-0 justify-center items-center bg-primary/20 rounded-full w-6 h-6">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-muted p-2 rounded-lg">
                    <div className="flex gap-1">
                      <div className="bg-muted-foreground rounded-full w-1 h-1 animate-bounce" />
                      <div
                        className="bg-muted-foreground rounded-full w-1 h-1 animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="bg-muted-foreground rounded-full w-1 h-1 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Attachments Preview */}
            {attachments.length > 0 && (
              <div className="px-4 py-2 border-t border-border/50">
                <div className="space-y-1">
                  {attachments.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-muted p-1 rounded text-xs"
                    >
                      <Paperclip className="w-3 h-3" />
                      <span className="flex-1 truncate">{file.name}</span>
                      <span className="text-muted-foreground">
                        {formatFileSize(file.size)}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAttachment(index)}
                        className="p-0 w-4 h-4"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  multiple
                  className="hidden"
                  accept="image/*,.pdf,.doc,.docx,.txt"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-shrink-0"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-muted px-3 py-2 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() && attachments.length === 0}
                  size="sm"
                  className="flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
