"use client";

import { useState } from "react";
import Image from "next/image";
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
  MapPin,
  Star,
  Clock,
  Heart,
  Search,
  Map,
  List,
  Phone,
  Navigation,
} from "lucide-react";

// 分类数据
const categories = [
  { id: "all", name: "全部", count: 124 },
  { id: "park", name: "公园", count: 34 },
  { id: "playground", name: "游乐场", count: 28 },
  { id: "indoor", name: "室内乐园", count: 22 },
  { id: "museum", name: "博物馆", count: 16 },
  { id: "science", name: "科技馆", count: 12 },
  { id: "restaurant", name: "亲子餐厅", count: 8 },
  { id: "outdoor", name: "户外基地", count: 4 },
];

// 地点数据
const places = [
  {
    id: 1,
    name: "中山公园儿童乐园",
    category: "park",
    categoryName: "公园",
    description:
      "设施齐全的大型儿童乐园，有滑梯、秋千、沙池等多种游乐设施，周围绿树成荫，空气清新。",
    address: "中山路123号中山公园内",
    phone: "021-12345678",
    openTime: "6:00-22:00",
    price: "免费",
    rating: 4.8,
    reviewCount: 126,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    tags: ["免费", "停车位", "大型设施", "婴儿友好"],
    facilities: ["停车场", "休息区", "洗手间", "饮水点"],
    ageGroup: "0-12岁",
    isFavorite: false,
    distance: "1.2km",
  },
  {
    id: 2,
    name: "欢乐谷亲子乐园",
    category: "indoor",
    categoryName: "室内乐园",
    description:
      "室内恒温亲子乐园，配备先进的游乐设施和专业的儿童护理人员，一年四季都能尽情玩耍。",
    address: "淮海路456号欢乐谷3楼",
    phone: "021-87654321",
    openTime: "9:00-21:00",
    price: "成人￥68，儿童￥98",
    rating: 4.6,
    reviewCount: 89,
    image:
      "https://images.unsplash.com/photo-1520238884173-e5da2eaee4e7?w=400&h=300&fit=crop",
    tags: ["室内", "恒温", "年卡优惠", "专业看护"],
    facilities: ["空调", "母婴室", "餐饮区", "储物柜"],
    ageGroup: "1-8岁",
    isFavorite: true,
    distance: "2.8km",
  },
  {
    id: 3,
    name: "海洋馆奇妙世界",
    category: "museum",
    categoryName: "科教馆",
    description:
      "大型海洋主题展馆，可近距离观察各种海洋生物，寓教于乐，是培养孩子科学兴趣的好地方。",
    address: "科技路789号海洋大厦",
    phone: "021-13579246",
    openTime: "9:00-17:00",
    price: "成人￥120，儿童￥80",
    rating: 4.9,
    reviewCount: 203,
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop",
    tags: ["教育", "海洋", "互动体验", "科普"],
    facilities: ["导览服务", "咖啡厅", "纪念品店", "无障碍通道"],
    ageGroup: "3-16岁",
    isFavorite: false,
    distance: "4.1km",
  },
  {
    id: 4,
    name: "森林公园探险区",
    category: "outdoor",
    categoryName: "户外基地",
    description:
      "原生态森林环境，设有树屋、攀岩墙、索道等户外探险项目，让孩子亲近大自然。",
    address: "郊区森林公园北区",
    phone: "021-24681357",
    openTime: "8:00-18:00",
    price: "门票￥50，项目另计",
    rating: 4.7,
    reviewCount: 156,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    tags: ["自然", "探险", "空气清新", "团队活动"],
    facilities: ["烧烤区", "野餐桌", "医务室", "教练指导"],
    ageGroup: "6-16岁",
    isFavorite: false,
    distance: "12.5km",
  },
  {
    id: 5,
    name: "迪士尼小镇游乐场",
    category: "playground",
    categoryName: "游乐场",
    description:
      "迪士尼主题的大型游乐场，有旋转木马、小火车、碰碰车等经典项目，童话世界等你来。",
    address: "迪士尼度假区内",
    phone: "021-98765432",
    openTime: "9:00-22:00",
    price: "门票￥280",
    rating: 4.9,
    reviewCount: 567,
    image:
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=400&h=300&fit=crop",
    tags: ["迪士尼", "主题乐园", "经典项目", "童话"],
    facilities: ["快速通道", "餐厅", "礼品店", "表演秀"],
    ageGroup: "2-12岁",
    isFavorite: true,
    distance: "25.3km",
  },
  {
    id: 6,
    name: "科技博物馆儿童区",
    category: "science",
    categoryName: "科技馆",
    description:
      "专为儿童设计的科技体验区，有机器人展示、VR体验、3D打印等高科技互动项目。",
    address: "科技大道100号科技博物馆2楼",
    phone: "021-11223344",
    openTime: "9:00-17:00（周一闭馆）",
    price: "成人￥60，儿童￥40",
    rating: 4.8,
    reviewCount: 92,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
    tags: ["科技", "互动", "VR体验", "机器人"],
    facilities: ["多媒体展厅", "体验区", "休息区", "科普讲座"],
    ageGroup: "5-15岁",
    isFavorite: false,
    distance: "3.7km",
  },
];

export default function PlacesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = places.filter((place) => {
    const matchesCategory =
      selectedCategory === "all" || place.category === selectedCategory;
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">遛娃地点</h1>
        <p className="text-xl text-gray-600">发现附近最适合带娃的精彩去处</p>
      </div>

      {/* 搜索和筛选 */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="搜索地点名称或描述..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              onClick={() => setViewMode("list")}
              size="sm"
            >
              <List className="h-4 w-4 mr-2" />
              列表
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              onClick={() => setViewMode("map")}
              size="sm"
            >
              <Map className="h-4 w-4 mr-2" />
              地图
            </Button>
          </div>
        </div>

        {/* 分类标签 */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
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

      {/* 结果统计 */}
      <div className="mb-6">
        <p className="text-gray-600">
          找到 <span className="font-semibold">{filteredPlaces.length}</span>{" "}
          个地点
          {selectedCategory !== "all" && (
            <span>
              {" "}
              · {categories.find((c) => c.id === selectedCategory)?.name}
            </span>
          )}
        </p>
      </div>

      {/* 地点列表 */}
      {viewMode === "list" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <Card
              key={place.id}
              className="group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-white text-gray-900">
                  {place.categoryName}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      place.isFavorite ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
                <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-sm">
                  {place.distance}
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{place.name}</CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{place.rating}</span>
                    <span className="ml-1">({place.reviewCount}条评价)</span>
                  </div>
                  <Badge variant="outline">{place.ageGroup}</Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="mb-3 line-clamp-2">
                  {place.description}
                </CardDescription>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="line-clamp-1">{place.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{place.openTime}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-primary">
                      {place.price}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {place.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1" asChild>
                    <Link href={`/places/${place.id}`}>查看详情</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* 地图模式 */}
      {viewMode === "map" && (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <Map className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            地图功能开发中
          </h3>
          <p className="text-gray-500">
            地图模式即将上线，敬请期待！您可以先使用列表模式浏览地点信息。
          </p>
        </div>
      )}

      {/* 无结果提示 */}
      {filteredPlaces.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            没有找到相关地点
          </h3>
          <p className="text-gray-500 mb-4">试试调整搜索条件或选择其他分类</p>
          <Button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            variant="outline"
          >
            清除筛选条件
          </Button>
        </div>
      )}
    </div>
  );
}
