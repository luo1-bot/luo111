import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '关于 - 我的前端学习展示', // 修改页面标题
  description: '展示个人前端学习历程、技术栈和项目成果', // 修改页面描述
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              关于我的学习展示平台 {/* 修改主标题 */}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              记录前端学习点滴，展示技术成长之路 {/* 修改副标题 */}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 项目简介 */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">项目简介</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                这是我个人的前端学习展示平台，用于记录和分享学习过程中的练习项目和技术心得。 {/* 修改简介内容 */}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                平台集成了编码时长统计功能，帮助我追踪学习投入；同时提供AI问答服务，解决学习中遇到的技术难题。 {/* 修改简介内容 */}
              </p>
              <p className="text-gray-700 leading-relaxed">
                这个项目本身也是一个完整的 Next.js 全栈应用实践，展示了现代前端开发的最佳实践和技术栈应用。
              </p>
            </div>
          </section>

          {/* 技术架构 */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">技术架构</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">前端技术栈</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Next.js 15 (App Router)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">React 18 + TypeScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Tailwind CSS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">ESLint + Prettier</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">API 集成</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">WakaTime API (编码统计)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">QAnything API (AI问答)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Server-Sent Events (流式响应)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Next.js API Routes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 功能特色 */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">功能特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">练习管理</h3>
                <p className="text-gray-600 text-sm">
                  系统化组织和展示各类前端练习，支持分类筛选和搜索功能
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">数据统计</h3>
                <p className="text-gray-600 text-sm">
                  实时展示编码时长、学习进度等关键指标，量化学习成果
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">智能问答</h3>
                <p className="text-gray-600 text-sm">
                  基于大语言模型的AI助手，提供专业的技术答疑和学习指导
                </p>
              </div>
            </div>
          </section>

          {/* 设计理念 */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">设计理念</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">学习过程可视化</h3>
                  <p className="text-gray-700">
                    通过系统化的练习展示和数据统计，让学习过程变得可见、可量化，帮助学习者更好地了解自己的进步。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">技术栈整合</h3>
                  <p className="text-gray-700">
                    将现代前端开发的各种技术栈有机结合，既是学习成果的展示，也是技术能力的实践验证。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">智能化辅助</h3>
                  <p className="text-gray-700">
                    集成AI问答服务，为学习过程提供智能化的支持，让技术学习变得更加高效和便捷。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 联系信息 */}
          <section className="bg-gradient-to-r from-pink-300 via-blue-400 to-purple-500 text-white py-16 mt-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">有问题或建议？</h2>
              <p className="text-blue-100 mb-6">
                欢迎浏览我的学习成果，一起交流前端技术！ {/* 修改行动号召文本 */}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/exercises"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  浏览练习作品
                </Link>
                <Link
                  href="/chat"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  体验AI问答
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
