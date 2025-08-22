"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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
import {
  MapPin,
  Star,
  Clock,
  Heart,
  Phone,
  Navigation,
  Share2,
  Calendar,
  Users,
  Camera,
  ArrowLeft,
  CheckCircle,
  Wifi,
  Car,
  Baby,
  Coffee,
} from "lucide-react";

// 模拟详细数据
const placeDetails = {
  1: {
    id: 1,
    name: "中山公园儿童乐园",
    category: "公园",
    description:
      "中山公园儿童乐园是上海最受欢迎的户外亲子场所之一，占地面积约5000平方米。乐园内设有大型组合滑梯、攀爬架、秋千、跷跷板、沙池等多种游乐设施，所有设备均符合国际安全标准。周围绿树成荫，空气清新，是孩子们放飞天性、亲近自然的理想场所。",
    address: "中山路123号中山公园内",
    phone: "021-12345678",
    openTime: "6:00-22:00",
    price: "免费",
    rating: 4.8,
    reviewCount: 126,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520238884173-e5da2eaee4e7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    ],
    tags: ["免费", "停车位", "大型设施", "婴儿友好"],
    facilities: [
      { name: "免费停车场", icon: Car, available: true },
      { name: "公共洗手间", icon: CheckCircle, available: true },
      { name: "饮水点", icon: CheckCircle, available: true },
      { name: "母婴室", icon: Baby, available: true },
      { name: "WiFi", icon: Wifi, available: false },
      { name: "咖啡厅", icon: Coffee, available: false },
    ],
    ageGroup: "0-12岁",
    isFavorite: false,
    distance: "1.2km",
    features: [
      "大型组合滑梯（适合3-8岁）",
      "攀爬架（适合5-12岁）",
      "幼儿滑梯（适合1-3岁）",
      "沙池游戏区",
      "休息座椅区",
      "绿化景观区",
    ],
    safetyInfo: [
      "所有游乐设施定期安全检查",
      "设有专门的安全提示标识",
      "建议家长全程陪同",
      "禁止携带宠物入内",
      "请遵守游乐设施年龄限制",
    ],
    reviews: [
      {
        id: 1,
        user: "爱笑妈妈",
        avatar: "👩‍💼",
        rating: 5,
        date: "2024-03-10",
        content:
          "孩子特别喜欢这里！设施很新很安全，而且完全免费，性价比超高。周围环境也很好，绿树成荫，空气清新。停车也方便，推荐！",
        images: 2,
        helpful: 23,
      },
      {
        id: 2,
        user: "户外爸爸",
        avatar: "👨‍💻",
        rating: 4,
        date: "2024-03-08",
        content:
          "很不错的地方，孩子玩得很开心。设施比较齐全，适合不同年龄段的孩子。唯一的缺点是周末人比较多，需要排队。",
        images: 0,
        helpful: 18,
      },
      {
        id: 3,
        user: "温柔妈妈",
        avatar: "👩‍🔬",
        rating: 5,
        date: "2024-03-05",
        content:
          "经常带孩子来这里，环境很好，设施维护得也不错。有很多其他小朋友，孩子可以交到新朋友。附近就有地铁站，交通便利。",
        images: 1,
        helpful: 31,
      },
    ],
  },
};

export default function PlaceDetailPage() {
  const params = useParams();
  const placeId = parseInt(params.id as string);
  const place = placeDetails[placeId as keyof typeof placeDetails];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(place?.isFavorite || false);

  if (!place) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">地点不存在</h2>
          <p className="text-gray-500 mb-4">
            抱歉，您访问的地点信息不存在或已被删除。
          </p>
          <Button asChild>
            <Link href="/places">返回地点列表</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* 返回按钮 */}
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/places">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回地点列表
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左侧主要内容 */}
        <div className="lg:col-span-2">
          {/* 图片展示 */}
          <div className="mb-6">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
              <Image
                src={place.images[selectedImageIndex]}
                alt={place.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isFavorite ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button variant="secondary" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {place.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                    selectedImageIndex === index ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${place.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 基本信息 */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {place.name}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <Badge variant="outline">{place.category}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{place.rating}</span>
                    <span className="ml-1">({place.reviewCount}条评价)</span>
                  </div>
                  <Badge variant="outline">{place.ageGroup}</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {place.price}
                </div>
                <div className="text-sm text-gray-500">{place.distance}</div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{place.description}</p>
          </div>

          {/* 标签 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">特色标签</h3>
            <div className="flex flex-wrap gap-2">
              {place.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* 游乐设施 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">游乐设施</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {place.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 安全须知 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">安全须知</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <ul className="space-y-2">
                {place.safetyInfo.map((info, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-600 mr-2">⚠️</span>
                    <span className="text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 用户评价 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              用户评价 ({place.reviewCount})
            </h3>
            <div className="space-y-4">
              {place.reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{review.avatar}</span>
                        <div>
                          <div className="font-medium">{review.user}</div>
                          <div className="flex items-center text-sm text-gray-500">
                            <div className="flex items-center mr-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span>{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 mb-3">{review.content}</p>
                    {review.images > 0 && (
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Camera className="h-4 w-4 mr-1" />
                        <span>{review.images}张图片</span>
                      </div>
                    )}
                    <div className="text-sm text-gray-500">
                      {review.helpful}人觉得有用
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧信息栏 */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* 联系信息 */}
            <Card>
              <CardHeader>
                <CardTitle>联系信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{place.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{place.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{place.openTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* 设施服务 */}
            <Card>
              <CardHeader>
                <CardTitle>设施服务</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {place.facilities.map((facility, index) => {
                    const Icon = facility.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center p-2 rounded-lg ${
                          facility.available
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-50 text-gray-400"
                        }`}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        <span className="text-sm">{facility.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* 操作按钮 */}
            <div className="space-y-3">
              <Button size="lg" className="w-full">
                <Navigation className="h-4 w-4 mr-2" />
                导航到这里
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                拨打电话
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                查看活动
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
