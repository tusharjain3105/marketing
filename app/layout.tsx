import { ChatbotWidget } from "@/components/chatbot/chatbot-widget";
import { UTSSR } from "@/components/uploadthing/SSRPlugin";
import { ClientLayout } from "@/layout.client";
import config from "@/lib/config";
import Providers from "@/providers";
import type { Metadata } from "next";
import { Suspense, unstable_ViewTransition as ViewTransition } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: config.brand.name,
  description: config.brand.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"antialiased"}>
        <Suspense>
          <UTSSR />
        </Suspense>
        <ViewTransition>
          <Providers>
            <ClientLayout>
              {children}
              <ChatbotWidget />
            </ClientLayout>
          </Providers>
        </ViewTransition>
      </body>
    </html>
  );
}
