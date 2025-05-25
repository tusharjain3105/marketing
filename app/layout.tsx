import config from "@/lib/config";
import Providers from "@/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClientLayout } from "@/layout.client";
import { Suspense, unstable_ViewTransition as ViewTransition } from "react";
import "./globals.css";
import { UTSSR } from "@/components/uploadthing/SSRPlugin";
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
