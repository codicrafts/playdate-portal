"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Calendar,
  Users,
  Star,
  Search,
  Clock,
  Heart,
  Mountain,
  Waves,
  Building,
  TreePine,
  Compass,
} from "lucide-react";

// 目的地分类
const destinationTypes = [
  { id: "all", name: "全部目的地", icon: Compass, count: 89 },
  { id: "city", name: "城市景点", icon: Building, count: 32 },
  { id: "nature", name: "自然风光", icon: Mountain, count: 28 },
  { id: "beach", name: "海滨度假", icon: Waves, count: 15 },
  { id: "mountain", name: "山区避暑", icon: TreePine, count: 14 },
];

// 出行方式
const travelModes = [
  { id: "all", name: "全部方式" },
  { id: "flight", name: "飞机出行" },
  { id: "train", name: "高铁动车" },
  { id: "car", name: "自驾游" },
  { id: "tour", name: "跟团游" },
];

// 热门目的地
const destinations = [
  {
    id: 1,
    name: "三亚亲子度假",
    location: "海南三亚",
    description: "阳光沙滩椰林，亚龙湾和天涯海角的浪漫，让孩子在海边尽情撒欢",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    type: "beach",
    typeName: "海滨度假",
    duration: "3-5天",
    bestSeason: "10月-次年4月",
    ageGroup: "全年龄",
    rating: 4.8,
    reviewCount: 234,
    price: "2980起",
    tags: ["海滩", "度假酒店", "热带风情", "亲子友好"],
    highlights: ["亚龙湾海滩", "天涯海角", "南山寺", "蜈支洲岛"],
    travelMode: "flight",
    difficulty: "轻松",
    isHot: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: "北京文化之旅",
    location: "北京",
    description: "故宫长城天安门，感受千年古都的文化底蕴，让孩子了解历史文化",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    type: "city",
    typeName: "城市景点",
    duration: "4-6天",
    bestSeason: "春秋两季",
    ageGroup: "6岁以上",
    rating: 4.9,
    reviewCount: 456,
    price: "2680起",
    tags: ["历史文化", "古迹", "教育意义", "地标景点"],
    highlights: ["故宫博物院", "天安门广场", "八达岭长城", "颐和园"],
    travelMode: "train",
    difficulty: "中等",
    isHot: true,
    isFeatured: true,
  },
  {
    id: 3,
    name: "张家界自然探险",
    location: "湖南张家界",
    description: "奇峰异石云海仙境，天门山玻璃栈道的刺激，大自然的鬼斧神工",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    type: "nature",
    typeName: "自然风光",
    duration: "3-4天",
    bestSeason: "4-10月",
    ageGroup: "8岁以上",
    rating: 4.7,
    reviewCount: 189,
    price: "2380起",
    tags: ["山景", "玻璃栈道", "缆车", "探险"],
    highlights: ["天门山", "黄龙洞", "金鞭溪", "袁家界"],
    travelMode: "train",
    difficulty: "中等",
    isHot: false,
    isFeatured: true,
  },
  {
    id: 4,
    name: "青岛海滨亲子游",
    location: "山东青岛",
    description: "红瓦绿树碧海蓝天，栈桥八大关的浪漫，品味地道海鲜美食",
    image:
      "https://images.unsplash.com/photo-1529422643029-d4585747aee2?w=400&h=300&fit=crop",
    type: "beach",
    typeName: "海滨度假",
    duration: "3-4天",
    bestSeason: "5-10月",
    ageGroup: "全年龄",
    rating: 4.6,
    reviewCount: 167,
    price: "1980起",
    tags: ["海滨", "德式建筑", "海鲜", "啤酒博物馆"],
    highlights: ["栈桥", "八大关", "崂山", "青岛啤酒博物馆"],
    travelMode: "train",
    difficulty: "轻松",
    isHot: false,
    isFeatured: false,
  },
  {
    id: 5,
    name: "杭州西湖文化游",
    location: "浙江杭州",
    description: "上有天堂下有苏杭，西湖美景三月天，感受江南水乡的诗意",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    type: "city",
    typeName: "城市景点",
    duration: "2-3天",
    bestSeason: "全年",
    ageGroup: "全年龄",
    rating: 4.8,
    reviewCount: 298,
    price: "1680起",
    tags: ["西湖", "古镇", "茶文化", "江南"],
    highlights: ["西湖", "灵隐寺", "宋城", "乌镇"],
    travelMode: "train",
    difficulty: "轻松",
    isHot: true,
    isFeatured: false,
  },
  {
    id: 6,
    name: "成都美食文化之旅",
    location: "四川成都",
    description: "天府之国的悠闲生活，大熊猫的萌态，正宗川菜的麻辣鲜香",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    type: "city",
    typeName: "城市景点",
    duration: "3-4天",
    bestSeason: "全年",
    ageGroup: "全年龄",
    rating: 4.7,
    reviewCount: 223,
    price: "2180起",
    tags: ["美食", "大熊猫", "古镇", "悠闲"],
    highlights: ["大熊猫基地", "锦里古街", "宽窄巷子", "都江堰"],
    travelMode: "flight",
    difficulty: "轻松",
    isHot: true,
    isFeatured: false,
  },
];

// 精选行程案例
const featuredItineraries = [
  {
    id: 1,
    title: "三亚5天4夜亲子度假行程",
    destination: "海南三亚",
    duration: "5天4夜",
    ageGroup: "全年龄",
    highlights: ["亚龙湾", "天涯海角", "南山寺", "椰梦长廊"],
    price: "3580",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 2,
    title: "北京文化探索4日游",
    destination: "北京",
    duration: "4天3夜",
    ageGroup: "6岁以上",
    highlights: ["故宫", "长城", "天安门", "颐和园"],
    price: "2880",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 3,
    title: "杭州西湖3日休闲游",
    destination: "浙江杭州",
    duration: "3天2夜",
    ageGroup: "全年龄",
    highlights: ["西湖", "灵隐寺", "宋城", "河坊街"],
    price: "1980",
    rating: 4.7,
    reviews: 98,
  },
];

export default function TravelPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("destinations");

  const filteredDestinations = destinations.filter((destination) => {
    const matchesType =
      selectedType === "all" || destination.type === selectedType;
    const matchesMode =
      selectedMode === "all" || destination.travelMode === selectedMode;
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesMode && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">旅游带娃</h1>
        <p className="text-xl text-gray-600">
          发现适合亲子游的精彩目的地，定制专属家庭行程
        </p>
      </div>

      {/* 标签页切换 */}
      <div className="mb-8">
        <div className="border-b">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: "destinations", name: "目的地推荐", icon: MapPin },
              { id: "itineraries", name: "行程规划", icon: Calendar },
              { id: "custom", name: "定制服务", icon: Compass },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 目的地推荐标签页 */}
      {activeTab === "destinations" && (
        <div>
          {/* 搜索和筛选 */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="搜索目的地..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* 目的地类型 */}
            <div>
              <h3 className="font-medium mb-3">目的地类型</h3>
              <div className="flex flex-wrap gap-2">
                {destinationTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <Button
                      key={type.id}
                      variant={selectedType === type.id ? "default" : "outline"}
                      onClick={() => setSelectedType(type.id)}
                      size="sm"
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {type.name}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {type.count}
                      </Badge>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* 出行方式 */}
            <div>
              <h3 className="font-medium mb-3">出行方式</h3>
              <div className="flex flex-wrap gap-2">
                {travelModes.map((mode) => (
                  <Button
                    key={mode.id}
                    variant={selectedMode === mode.id ? "default" : "outline"}
                    onClick={() => setSelectedMode(mode.id)}
                    size="sm"
                  >
                    {mode.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* 目的地列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="group hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-white text-gray-900">
                    {destination.typeName}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {destination.isHot && (
                    <Badge className="absolute bottom-3 left-3 bg-red-500 text-white">
                      🔥 热门
                    </Badge>
                  )}
                  {destination.isFeatured && (
                    <Badge className="absolute bottom-3 right-3 bg-purple-500 text-white">
                      ⭐ 精选
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{destination.name}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{destination.rating}</span>
                      <span className="ml-1">({destination.reviewCount})</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="mb-3 line-clamp-2">
                    {destination.description}
                  </CardDescription>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span>推荐时长</span>
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>最佳季节</span>
                      <span>{destination.bestSeason}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>适合年龄</span>
                      <span>{destination.ageGroup}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>难度等级</span>
                      <Badge variant="outline" className="text-xs">
                        {destination.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="text-primary">
                      <span className="text-lg font-bold">
                        ￥{destination.price}
                      </span>
                      <span className="text-sm">/人起</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/travel/${destination.id}`}>查看详情</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* 行程规划标签页 */}
      {activeTab === "itineraries" && (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">精选行程案例</h2>
            <p className="text-gray-600">
              专业规划师为您精心设计的亲子游行程，可直接使用或参考定制
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItineraries.map((itinerary) => (
              <Card
                key={itinerary.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{itinerary.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{itinerary.destination}</span>
                    </div>
                    <Badge variant="outline">{itinerary.ageGroup}</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{itinerary.duration}</span>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">行程亮点</h4>
                      <div className="flex flex-wrap gap-1">
                        {itinerary.highlights.map((highlight) => (
                          <Badge
                            key={highlight}
                            variant="secondary"
                            className="text-xs"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span>{itinerary.rating}</span>
                        <span className="ml-1">({itinerary.reviews}评价)</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">
                          ￥{itinerary.price}
                        </div>
                        <div className="text-xs text-gray-500">起/人</div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        查看详情
                      </Button>
                      <Button size="sm" className="flex-1">
                        立即预订
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">查看更多行程案例</Button>
          </div>
        </div>
      )}

      {/* 定制服务标签页 */}
      {activeTab === "custom" && (
        <div>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">专属定制服务</h2>
              <p className="text-gray-600">
                告诉我们您的需求，专业规划师为您量身定制完美亲子游行程
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>提交定制需求</CardTitle>
                <CardDescription>
                  请填写您的出行需求，我们的专业规划师将在24小时内为您提供定制方案
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        出行目的地
                      </label>
                      <Input placeholder="请输入想去的城市或地区" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        出行时间
                      </label>
                      <Input type="date" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        出行天数
                      </label>
                      <Input placeholder="如：3-5天" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        同行人数
                      </label>
                      <Input placeholder="大人几位，孩子几位" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        孩子年龄
                      </label>
                      <Input placeholder="如：5岁、8岁" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        预算范围
                      </label>
                      <Input placeholder="如：5000-8000元/人" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        出行偏好
                      </label>
                      <Input placeholder="如：文化历史、自然风光、海滨度假等" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        联系方式
                      </label>
                      <Input placeholder="请留下您的手机号码" />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2">
                    其他需求说明
                  </label>
                  <textarea
                    className="w-full p-3 border rounded-md"
                    rows={4}
                    placeholder="请详细描述您的特殊需求，如：住宿偏好、饮食要求、交通方式、必去景点等..."
                  />
                </div>

                <div className="mt-6 flex justify-center">
                  <Button size="lg" className="px-12">
                    提交定制需求
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 服务说明 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">专业规划师</h3>
                  <p className="text-sm text-gray-600">
                    资深亲子游规划师，深度了解各地亲子景点和设施
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">24小时响应</h3>
                  <p className="text-sm text-gray-600">
                    快速响应您的需求，在24小时内提供初步定制方案
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">贴心服务</h3>
                  <p className="text-sm text-gray-600">
                    全程贴心服务，确保您的亲子游体验完美无忧
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
