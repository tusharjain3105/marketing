"use client";

import { Button } from "@/components/ui/button";
import { Clock, Eye, MessageCircle, User } from "lucide-react";

export function ChatbotConversations() {
  const conversations = [
    {
      id: 1,
      user: "visitor_123",
      lastMessage: "What are your pricing plans?",
      timestamp: "5 min ago",
      status: "active",
    },
    {
      id: 2,
      user: "john@example.com",
      lastMessage: "Thanks for the help!",
      timestamp: "1 hour ago",
      status: "resolved",
    },
    {
      id: 3,
      user: "visitor_456",
      lastMessage: "I need help with setup",
      timestamp: "2 hours ago",
      status: "pending",
    },
    {
      id: 4,
      user: "sarah@company.com",
      lastMessage: "Can I schedule a demo?",
      timestamp: "3 hours ago",
      status: "resolved",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-600 dark:text-green-400";
      case "pending":
        return "text-yellow-600 dark:text-yellow-400";
      case "resolved":
        return "text-gray-600 dark:text-gray-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="p-6 border border-border/50 rounded-lg glass-strong">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-foreground text-lg">
          Recent Conversations
        </h3>
        <MessageCircle className="w-5 h-5 text-primary" />
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="bg-background/50 p-3 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <div className="flex justify-center items-center bg-primary/20 rounded-full w-8 h-8">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">
                    {conversation.user}
                  </p>
                  <p className="mt-1 text-foreground-secondary text-sm">
                    {conversation.lastMessage}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span
                      className={`text-xs font-medium ${getStatusColor(conversation.status)}`}
                    >
                      {conversation.status}
                    </span>
                    <span className="flex items-center gap-1 text-foreground-secondary text-xs">
                      <Clock className="w-3 h-3" />
                      {conversation.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <Button variant="ghost" size="sm" className="w-full">
          <Eye className="mr-2 w-4 h-4" />
          View All Conversations
        </Button>
      </div>
    </div>
  );
}
