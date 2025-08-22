"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 -mt-16 pt-16 w-screen">
      <div className="w-full px-4 relative">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            让带娃变得
            <span className="text-pink-500"> 轻松有趣</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            专注于本地服务的遛娃社区，为家长们提供全面的遛娃信息、
            组织丰富的亲子活动，促进家长之间的社交互动
          </p>

          {/* 搜索栏 */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="搜索遛娃地点、亲子活动、社区话题..."
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                搜索
              </Button>
            </div>
          </div>

          {/* 快速入口 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-pink-100 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">发现遛娃地点</h3>
              <p className="text-gray-600 text-center">
                找到附近最适合带娃的公园、游乐场和亲子空间
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-purple-100 rounded-full mb-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">参与亲子活动</h3>
              <p className="text-gray-600 text-center">
                加入各种有趣的亲子活动，让孩子收获快乐成长
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">加入家长社区</h3>
              <p className="text-gray-600 text-center">
                与其他家长分享经验，建立温暖的育儿交流圈
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
