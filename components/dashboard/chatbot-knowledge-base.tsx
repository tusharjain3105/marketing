"use client";

import { Button } from "@/components/ui/button";
import { Brain, Edit, FileText, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export function ChatbotKnowledgeBase() {
  const [knowledgeItems] = useState([
    {
      id: 1,
      title: "Pricing Information",
      content: "Our pricing starts at $99/month...",
      category: "Sales",
    },
    {
      id: 2,
      title: "Feature Overview",
      content: "Our platform includes email marketing...",
      category: "Product",
    },
    {
      id: 3,
      title: "Support Process",
      content: "For technical support, please...",
      category: "Support",
    },
    {
      id: 4,
      title: "Trial Setup",
      content: "To start your free trial...",
      category: "Onboarding",
    },
  ]);

  // const categories = ["Sales", "Product", "Support", "Onboarding"];

  return (
    <div className="p-6 border border-border/50 rounded-lg glass-strong">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground text-lg">
            Knowledge Base
          </h3>
        </div>
        <Button size="sm" className="glow">
          <Plus className="mr-2 w-4 h-4" />
          Add Knowledge
        </Button>
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        {knowledgeItems.map((item) => (
          <div key={item.id} className="bg-background/50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <h4 className="font-medium text-foreground text-sm">
                  {item.title}
                </h4>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm" className="p-0 w-6 h-6">
                  <Edit className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" className="p-0 w-6 h-6">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <span className="inline-block bg-primary/20 mb-2 px-2 py-1 rounded-full text-primary text-xs">
              {item.category}
            </span>
            <p className="text-foreground-secondary text-sm line-clamp-2">
              {item.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex justify-between items-center">
          <span className="text-foreground-secondary text-sm">
            {knowledgeItems.length} knowledge items
          </span>
          <Button variant="ghost" size="sm">
            Manage Categories
          </Button>
        </div>
      </div>
    </div>
  );
}
