import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Eye, ArrowRight } from "lucide-react";

// 模拟数据
const hotTopics = [
  {
    id: 1,
    title: "3岁宝宝不爱吃饭怎么办？求有经验的家长分享",
    excerpt: "我家宝宝最近特别挑食，每次吃饭都要哄很久，有什么好的方法吗？",
    author: {
      name: "妈妈小陈",
      avatar: "👩‍💼",
    },
    category: "育儿经验",
    views: 1256,
    likes: 89,
    comments: 23,
    publishTime: "2小时前",
    isHot: true,
  },
  {
    id: 2,
    title: "推荐几个适合5岁孩子的户外运动项目",
    excerpt:
      "想培养孩子的运动习惯，大家有什么好的户外运动推荐吗？最好是不需要太复杂装备的。",
    author: {
      name: "运动爸爸",
      avatar: "👨‍💻",
    },
    category: "运动健康",
    views: 892,
    likes: 156,
    comments: 45,
    publishTime: "5小时前",
    isHot: true,
  },
  {
    id: 3,
    title: "周末带娃去哪里？求推荐北京亲子好去处",
    excerpt:
      "在北京的家长们，周末都带孩子去哪里玩呢？希望能推荐一些新鲜有趣的地方。",
    author: {
      name: "北京妈妈",
      avatar: "👩‍🦰",
    },
    category: "遛娃攻略",
    views: 2134,
    likes: 234,
    comments: 67,
    publishTime: "1天前",
    isHot: false,
  },
  {
    id: 4,
    title: "孩子总是害怕和陌生小朋友玩，如何培养社交能力？",
    excerpt:
      "我家孩子比较内向，见到其他小朋友就躲在我身后，如何帮助他建立自信心？",
    author: {
      name: "温柔妈妈",
      avatar: "👩‍🔬",
    },
    category: "性格培养",
    views: 567,
    likes: 78,
    comments: 34,
    publishTime: "1天前",
    isHot: false,
  },
  {
    id: 5,
    title: "分享一个超棒的亲子手工：用纸盒做小汽车",
    excerpt:
      "周末和孩子一起用废纸盒做了个小汽车，步骤简单效果很棒，分享给大家。",
    author: {
      name: "手工达人",
      avatar: "👨‍🎨",
    },
    category: "亲子手工",
    views: 1890,
    likes: 445,
    comments: 89,
    publishTime: "2天前",
    isHot: true,
  },
  {
    id: 6,
    title: "疫情期间在家如何陪孩子度过有意义的时光？",
    excerpt:
      "最近不太方便出门，在家陪孩子总感觉无聊，大家都是怎么安排居家亲子时间的？",
    author: {
      name: "居家爸爸",
      avatar: "👨‍🍳",
    },
    category: "居家育儿",
    views: 734,
    likes: 123,
    comments: 56,
    publishTime: "3天前",
    isHot: false,
  },
];

export function CommunityTopics() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              社区热门话题
            </h2>
            <p className="text-gray-600">家长们正在讨论的热门育儿话题</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/community">
              进入社区
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {hotTopics.map((topic) => (
            <Card
              key={topic.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{topic.category}</Badge>
                      {topic.isHot && (
                        <Badge className="bg-red-100 text-red-800">
                          🔥 热门
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {topic.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-4 line-clamp-2">
                  {topic.excerpt}
                </CardDescription>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg">{topic.author.avatar}</span>
                    <span>{topic.author.name}</span>
                    <span>·</span>
                    <span>{topic.publishTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t">
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
                  <Button variant="ghost" size="sm">
                    查看详情
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
