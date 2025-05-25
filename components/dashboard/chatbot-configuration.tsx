"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Save, RefreshCw } from "lucide-react";

export function ChatbotConfiguration() {
  const [botName, setBotName] = useState("AI Assistant");
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello! How can I help you today?",
  );
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="p-6 border border-border/50 rounded-lg glass-strong">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-foreground text-lg">
          Bot Configuration
        </h3>
        <Bot className="w-5 h-5 text-primary" />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-foreground-secondary text-sm">
            Bot Name
          </label>
          <input
            type="text"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            className="bg-background/50 px-3 py-2 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground"
          />
        </div>

        <div>
          <label className="block mb-2 text-foreground-secondary text-sm">
            Welcome Message
          </label>
          <textarea
            value={welcomeMessage}
            onChange={(e) => setWelcomeMessage(e.target.value)}
            rows={3}
            className="bg-background/50 px-3 py-2 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-foreground resize-none"
          />
        </div>

        <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
          <div>
            <p className="font-medium text-foreground text-sm">
              Enable Chatbot
            </p>
            <p className="text-foreground-secondary text-xs">
              Allow visitors to interact with your bot
            </p>
          </div>
          <div
            className={`w-12 h-6 rounded-full ${isEnabled ? "bg-primary" : "bg-border"} relative cursor-pointer`}
            onClick={() => setIsEnabled(!isEnabled)}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${isEnabled ? "translate-x-6" : "translate-x-0.5"}`}
            />
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button size="sm" className="flex-1 glow">
            <Save className="mr-2 w-4 h-4" />
            Save Changes
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
