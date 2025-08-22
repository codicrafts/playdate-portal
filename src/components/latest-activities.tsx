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
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";

// 模拟数据
const latestActivities = [
  {
    id: 1,
    title: "春日亲子野餐会",
    description: "在樱花盛开的公园里，和孩子一起享受美好的野餐时光",
    date: "2024-03-15",
    time: "10:00-15:00",
    location: "樱花公园",
    ageGroup: "3-12岁",
    participants: 24,
    maxParticipants: 30,
    price: "免费",
    category: "户外活动",
    status: "报名中",
  },
  {
    id: 2,
    title: "小小科学家实验室",
    description: "通过有趣的科学实验，激发孩子对科学的兴趣和探索欲",
    date: "2024-03-18",
    time: "14:00-16:00",
    location: "科技馆",
    ageGroup: "5-10岁",
    participants: 18,
    maxParticipants: 20,
    price: "￥68",
    category: "科普教育",
    status: "即将满员",
  },
  {
    id: 3,
    title: "亲子烘焙课堂",
    description: "和孩子一起制作美味的小点心，享受温馨的亲子时光",
    date: "2024-03-20",
    time: "15:00-17:00",
    location: "烘焙工作室",
    ageGroup: "4-12岁",
    participants: 12,
    maxParticipants: 16,
    price: "￥128",
    category: "手工制作",
    status: "报名中",
  },
  {
    id: 4,
    title: "森林探险寻宝",
    description: "在大自然中寻找宝藏，锻炼孩子的观察力和团队合作能力",
    date: "2024-03-22",
    time: "9:00-12:00",
    location: "森林公园",
    ageGroup: "6-14岁",
    participants: 36,
    maxParticipants: 40,
    price: "￥88",
    category: "户外探险",
    status: "热门活动",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "报名中":
      return "bg-green-100 text-green-800";
    case "即将满员":
      return "bg-orange-100 text-orange-800";
    case "热门活动":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function LatestActivities() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              最新亲子活动
            </h2>
            <p className="text-gray-600">精彩活动等你来参加，快为孩子报名吧</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/activities">
              查看更多
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestActivities.map((activity) => (
            <Card
              key={activity.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">
                      {activity.title}
                    </CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </div>
                  <Badge className={getStatusColor(activity.status)}>
                    {activity.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{activity.date}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{activity.time}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{activity.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>
                        {activity.participants}/{activity.maxParticipants}人
                      </span>
                    </div>
                    <span className="font-semibold text-lg text-primary">
                      {activity.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-2">
                      <Badge variant="outline">{activity.category}</Badge>
                      <Badge variant="outline">{activity.ageGroup}</Badge>
                    </div>
                    <Button size="sm">立即报名</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
