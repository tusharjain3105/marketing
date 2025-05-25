import { ChatbotAnalytics } from "@/components/dashboard/chatbot-analytics";
import { ChatbotConfiguration } from "@/components/dashboard/chatbot-configuration";
import { ChatbotConversations } from "@/components/dashboard/chatbot-conversations";
import { ChatbotKnowledgeBase } from "@/components/dashboard/chatbot-knowledge-base";
import { Button } from "@/components/ui/button";
import { Settings, BarChart3, Brain } from "lucide-react";

export default function DashboardChatbotPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-foreground text-3xl">AI Chatbot</h1>
          <p className="mt-2 text-foreground-secondary">
            Configure your AI assistant and analyze customer interactions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <BarChart3 className="mr-2 w-4 h-4" />
            Analytics
          </Button>
          <Button variant="outline" size="sm">
            <Brain className="mr-2 w-4 h-4" />
            Knowledge Base
          </Button>
          <Button size="sm" className="glow">
            <Settings className="mr-2 w-4 h-4" />
            Configure Bot
          </Button>
        </div>
      </div>

      {/* Analytics */}
      <ChatbotAnalytics />

      {/* Configuration and Conversations */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <ChatbotConfiguration />
        <ChatbotConversations />
      </div>

      {/* Knowledge Base */}
      <ChatbotKnowledgeBase />
    </div>
  );
}
