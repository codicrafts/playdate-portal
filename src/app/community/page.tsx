"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  Heart,
  Eye,
  Search,
  Plus,
  Camera,
  Award,
} from "lucide-react";

// 话题分类
const topicCategories = [
  {
    id: "all",
    name: "全部话题",
    count: 1247,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "parenting",
    name: "育儿经验",
    count: 342,
    color: "bg-green-100 text-green-800",
  },
  {
    id: "places",
    name: "遛娃攻略",
    count: 289,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "health",
    name: "运动健康",
    count: 156,
    color: "bg-orange-100 text-orange-800",
  },
  {
    id: "education",
    name: "早教启蒙",
    count: 134,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: "handcraft",
    name: "亲子手工",
    count: 98,
    color: "bg-yellow-100 text-yellow-800",
  },
  { id: "food", name: "营养饮食", count: 87, color: "bg-red-100 text-red-800" },
  {
    id: "psychology",
    name: "性格培养",
    count: 76,
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    id: "other",
    name: "其他话题",
    count: 65,
    color: "bg-gray-100 text-gray-800",
  },
];

// 热门话题
const hotTopics = [
  {
    id: 1,
    title: "3岁宝宝不爱吃饭怎么办？求有经验的家长分享",
    excerpt:
      "我家宝宝最近特别挑食，每次吃饭都要哄很久，有什么好的方法吗？试过很多办法都不行...",
    author: {
      name: "妈妈小陈",
      avatar: "👩‍💼",
      level: "活跃用户",
      posts: 23,
    },
    category: {
      id: "parenting",
      name: "育儿经验",
      color: "bg-green-100 text-green-800",
    },
    views: 1256,
    likes: 89,
    comments: 23,
    publishTime: "2小时前",
    isHot: true,
    isPinned: false,
    hasImages: false,
    tags: ["挑食", "3岁", "吃饭问题"],
  },
  {
    id: 2,
    title: "推荐几个适合5岁孩子的户外运动项目",
    excerpt:
      "想培养孩子的运动习惯，大家有什么好的户外运动推荐吗？最好是不需要太复杂装备的。",
    author: {
      name: "运动爸爸",
      avatar: "👨‍💻",
      level: "资深用户",
      posts: 56,
    },
    category: {
      id: "health",
      name: "运动健康",
      color: "bg-orange-100 text-orange-800",
    },
    views: 892,
    likes: 156,
    comments: 45,
    publishTime: "5小时前",
    isHot: true,
    isPinned: true,
    hasImages: false,
    tags: ["户外运动", "5岁", "运动习惯"],
  },
  {
    id: 3,
    title: "周末带娃去哪里？求推荐北京亲子好去处",
    excerpt:
      "在北京的家长们，周末都带孩子去哪里玩呢？希望能推荐一些新鲜有趣的地方，最好是室内的。",
    author: {
      name: "北京妈妈",
      avatar: "👩‍🦰",
      level: "新手家长",
      posts: 8,
    },
    category: {
      id: "places",
      name: "遛娃攻略",
      color: "bg-purple-100 text-purple-800",
    },
    views: 2134,
    likes: 234,
    comments: 67,
    publishTime: "1天前",
    isHot: false,
    isPinned: false,
    hasImages: true,
    tags: ["北京", "周末", "室内活动"],
  },
  {
    id: 4,
    title: "孩子总是害怕和陌生小朋友玩，如何培养社交能力？",
    excerpt:
      "我家孩子比较内向，见到其他小朋友就躲在我身后，如何帮助他建立自信心？有没有好的方法？",
    author: {
      name: "温柔妈妈",
      avatar: "👩‍🔬",
      level: "活跃用户",
      posts: 34,
    },
    category: {
      id: "psychology",
      name: "性格培养",
      color: "bg-indigo-100 text-indigo-800",
    },
    views: 567,
    likes: 78,
    comments: 34,
    publishTime: "1天前",
    isHot: false,
    isPinned: false,
    hasImages: false,
    tags: ["内向", "社交", "自信心"],
  },
  {
    id: 5,
    title: "分享一个超棒的亲子手工：用纸盒做小汽车",
    excerpt:
      "周末和孩子一起用废纸盒做了个小汽车，步骤简单效果很棒，分享给大家制作过程。",
    author: {
      name: "手工达人",
      avatar: "👨‍🎨",
      level: "手工专家",
      posts: 127,
    },
    category: {
      id: "handcraft",
      name: "亲子手工",
      color: "bg-yellow-100 text-yellow-800",
    },
    views: 1890,
    likes: 445,
    comments: 89,
    publishTime: "2天前",
    isHot: true,
    isPinned: false,
    hasImages: true,
    tags: ["手工", "纸盒", "小汽车", "废物利用"],
  },
  {
    id: 6,
    title: "疫情期间在家如何陪孩子度过有意义的时光？",
    excerpt:
      "最近不太方便出门，在家陪孩子总感觉无聊，大家都是怎么安排居家亲子时间的？",
    author: {
      name: "居家爸爸",
      avatar: "👨‍🍳",
      level: "活跃用户",
      posts: 41,
    },
    category: {
      id: "parenting",
      name: "育儿经验",
      color: "bg-green-100 text-green-800",
    },
    views: 734,
    likes: 123,
    comments: 56,
    publishTime: "3天前",
    isHot: false,
    isPinned: false,
    hasImages: false,
    tags: ["居家", "亲子时光", "室内活动"],
  },
];

// 达人推荐
const experts = [
  {
    id: 1,
    name: "育儿专家李老师",
    avatar: "👩‍⚕️",
    title: "儿童心理学博士",
    description: "10年儿童心理研究经验，专注于0-6岁儿童发展",
    followers: 1250,
    posts: 89,
    likes: 3420,
    expertise: ["儿童心理", "早期教育", "行为指导"],
    isVerified: true,
    recentPost: "如何培养孩子的独立性？3个关键方法",
  },
  {
    id: 2,
    name: "户外运动教练",
    avatar: "🏃‍♂️",
    title: "青少年体能训练师",
    description: "专业户外运动指导，帮助孩子爱上运动",
    followers: 890,
    posts: 156,
    likes: 2750,
    expertise: ["户外运动", "体能训练", "安全防护"],
    isVerified: true,
    recentPost: "春季户外运动安全指南",
  },
  {
    id: 3,
    name: "营养师妈妈",
    avatar: "👩‍🍳",
    title: "儿童营养师",
    description: "关注儿童营养健康，分享科学饮食搭配",
    followers: 756,
    posts: 203,
    likes: 4180,
    expertise: ["营养搭配", "健康饮食", "食谱分享"],
    isVerified: true,
    recentPost: "春季长个黄金期，这些营养不能少",
  },
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = hotTopics.filter((topic) => {
    const matchesCategory =
      selectedCategory === "all" || topic.category.id === selectedCategory;
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">家长社区</h1>
            <p className="text-xl text-gray-600">
              与万千家长分享育儿心得，交流带娃经验
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            发布话题
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 左侧主要内容 */}
        <div className="lg:col-span-3">
          {/* 搜索栏 */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="搜索话题、关键词..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* 话题分类 */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {topicCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  size="sm"
                  className="h-8"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* 话题列表 */}
          <div className="space-y-4">
            {filteredTopics.map((topic) => (
              <Card
                key={topic.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={topic.category.color}>
                          {topic.category.name}
                        </Badge>
                        {topic.isHot && (
                          <Badge className="bg-red-100 text-red-800">
                            🔥 热门
                          </Badge>
                        )}
                        {topic.isPinned && (
                          <Badge className="bg-blue-100 text-blue-800">
                            📌 置顶
                          </Badge>
                        )}
                        {topic.hasImages && (
                          <Badge variant="outline" className="text-xs">
                            <Camera className="h-3 w-3 mr-1" />
                            有图
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight mb-2">
                        <Link
                          href={`/community/topic/${topic.id}`}
                          className="hover:text-primary"
                        >
                          {topic.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {topic.excerpt}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* 标签 */}
                  {topic.tags && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {topic.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-lg">{topic.author.avatar}</span>
                      <div className="text-sm">
                        <span className="font-medium">{topic.author.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {topic.author.level}
                        </Badge>
                      </div>
                      <span className="text-gray-400 mx-2">·</span>
                      <span className="text-sm text-gray-500">
                        {topic.publishTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{topic.views}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{topic.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{topic.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/community/topic/${topic.id}`}>
                        查看详情
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 加载更多 */}
          <div className="text-center mt-8">
            <Button variant="outline">加载更多话题</Button>
          </div>
        </div>

        {/* 右侧边栏 */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* 社区统计 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">社区数据</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">1,247</div>
                    <div className="text-sm text-gray-600">话题总数</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">8,956</div>
                    <div className="text-sm text-gray-600">用户互动</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">342</div>
                    <div className="text-sm text-gray-600">今日新增</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2,156</div>
                    <div className="text-sm text-gray-600">在线用户</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 达人推荐 */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">达人推荐</CardTitle>
                  <Link href="/community/experts">
                    <Button variant="ghost" size="sm">
                      查看更多
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {experts.map((expert) => (
                    <div key={expert.id} className="flex items-start space-x-3">
                      <span className="text-2xl">{expert.avatar}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <h4 className="font-medium text-sm">{expert.name}</h4>
                          {expert.isVerified && (
                            <Badge variant="outline" className="ml-2 text-xs">
                              <Award className="h-3 w-3 mr-1" />
                              认证
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          {expert.title}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 space-x-2">
                          <span>{expert.followers}关注</span>
                          <span>·</span>
                          <span>{expert.posts}帖子</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                          最新：{expert.recentPost}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs px-2"
                      >
                        关注
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 社区排行榜 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">本周热门</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hotTopics.slice(0, 5).map((topic, index) => (
                    <Link key={topic.id} href={`/community/topic/${topic.id}`}>
                      <div className="flex items-start space-x-2 hover:bg-gray-50 p-2 rounded">
                        <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm line-clamp-2 leading-tight">
                            {topic.title}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Heart className="h-3 w-3 mr-1" />
                            <span>{topic.likes}</span>
                            <MessageCircle className="h-3 w-3 ml-2 mr-1" />
                            <span>{topic.comments}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 发布指南 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">发布指南</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>分享真实的育儿经验</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>使用清晰的标题和描述</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>添加相关图片增加可读性</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>友善回复其他家长评论</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
