"use client";

import { Button } from "@/components/ui/button";
import { Clock, Eye, MessageCircle, User } from "lucide-react";
import { useState } from "react";

export function AdminChatConversations() {
  const [selectedConversation, setSelectedConversation] = useState<
    number | null
  >(null);

  const conversations = [
    {
      id: 1,
      user: "john@example.com",
      organization: "TechCorp Inc.",
      status: "active",
      lastMessage: "Can you help me with pricing?",
      timestamp: "2 minutes ago",
      messageCount: 5,
    },
    {
      id: 2,
      user: "sarah@startup.com",
      organization: "StartupXYZ",
      status: "resolved",
      lastMessage: "Thank you for the help!",
      timestamp: "1 hour ago",
      messageCount: 12,
    },
    {
      id: 3,
      user: "guest_user_123",
      organization: "Guest",
      status: "pending",
      lastMessage: "I need support with my account",
      timestamp: "3 hours ago",
      messageCount: 3,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "resolved":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-lg">
        Recent Conversations
      </h3>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedConversation === conversation.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            onClick={() => setSelectedConversation(conversation.id)}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <div className="flex justify-center items-center bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8">
                  <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {conversation.user}
                    </p>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(conversation.status)}`}
                    >
                      {conversation.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">
                    {conversation.organization}
                  </p>
                  <p className="mt-1 text-gray-700 dark:text-gray-300 text-sm">
                    {conversation.lastMessage}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
                      <MessageCircle className="w-3 h-3" />
                      {conversation.messageCount} messages
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
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

      <div className="mt-4 pt-4 border-gray-200 dark:border-gray-700 border-t">
        <Button variant="ghost" size="sm" className="w-full">
          <Eye className="mr-2 w-4 h-4" />
          View All Conversations
        </Button>
      </div>
    </div>
  );
}
