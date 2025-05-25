import { AdminChatStats } from "@/components/admin/admin-chat-stats";
import { AdminChatConversations } from "@/components/admin/admin-chat-conversations";
import { AdminChatSettings } from "@/components/admin/admin-chat-settings";
import { Button } from "@/components/ui/button";
import { Download, Filter, Settings } from "lucide-react";

export default function AdminChatPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-gray-900 dark:text-gray-100 text-3xl">
            Chat Management
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor and manage all chatbot conversations across the platform
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 w-4 h-4" />
            Export Chats
          </Button>
          <Button size="sm">
            <Settings className="mr-2 w-4 h-4" />
            Bot Settings
          </Button>
        </div>
      </div>

      {/* Chat Stats */}
      <AdminChatStats />

      {/* Chat Conversations and Settings */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AdminChatConversations />
        </div>
        <div>
          <AdminChatSettings />
        </div>
      </div>
    </div>
  );
}
