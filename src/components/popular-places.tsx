import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, ArrowRight } from "lucide-react";

// 模拟数据
const popularPlaces = [
  {
    id: 1,
    name: "中山公园儿童乐园",
    category: "公园",
    description: "设施齐全的儿童乐园，有大型滑梯、沙池和攀爬架",
    rating: 4.8,
    reviewCount: 126,
    openTime: "6:00-22:00",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    tags: ["免费", "停车位", "大型设施"],
  },
  {
    id: 2,
    name: "欢乐谷亲子乐园",
    category: "室内乐园",
    description: "室内恒温亲子乐园，适合各个年龄段的孩子",
    rating: 4.6,
    reviewCount: 89,
    openTime: "9:00-21:00",
    image:
      "https://images.unsplash.com/photo-1520238884173-e5da2eaee4e7?w=400&h=300&fit=crop",
    tags: ["室内", "恒温", "年卡优惠"],
  },
  {
    id: 3,
    name: "海洋馆奇妙世界",
    category: "科教馆",
    description: "近距离观察海洋生物，寓教于乐的好去处",
    rating: 4.9,
    reviewCount: 203,
    openTime: "9:00-17:00",
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop",
    tags: ["教育", "海洋", "互动体验"],
  },
  {
    id: 4,
    name: "森林公园探险区",
    category: "户外",
    description: "自然环境优美，有树屋、攀岩等户外探险项目",
    rating: 4.7,
    reviewCount: 156,
    openTime: "8:00-18:00",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    tags: ["自然", "探险", "空气清新"],
  },
];

export function PopularPlaces() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              热门遛娃地点
            </h2>
            <p className="text-gray-600">发现最受家长们喜爱的遛娃好去处</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/places">
              查看更多
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPlaces.map((place) => (
            <Card
              key={place.id}
              className="group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-white text-gray-900">
                  {place.category}
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{place.name}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{place.rating}</span>
                    <span className="ml-1">({place.reviewCount})</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{place.openTime}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="mb-3">
                  {place.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1">
                  {place.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
