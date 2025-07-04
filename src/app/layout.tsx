import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import WakaTimeFooter from "@/components/WakaTimeFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "《Web前端技术》期末作业", // 已更新为目标标题
  description: "展示个人学习过程中的课程练习，集成WakaTime编码时长统计和QAnything AI问答服务",
  keywords: "课程练习, 前端开发, HTML, CSS, JavaScript, React, Next.js, WakaTime, AI问答",
  authors: [{ name: "Course Showcase" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <WakaTimeFooter />
          <script
            src="https://ai.youdao.com/saas/qanything/js/agent-iframe-min.js"
            id="qanything-iframe"
            data-agent-src="https://ai.youdao.com/saas/qanything/#/bots/459751D90576472D/share"
            data-default-open={false}
            data-drag={false}
            data-open-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
            data-close-icon="https://download.ydstatic.com/ead/icon-qanything-iframe-btn.png"
            defer
          />
         
        </div>
      </body>
    </html>
  );
}
